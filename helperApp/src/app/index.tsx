import { useEffect, useMemo, useState } from "react";
import {
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from "react-native";

import { completion, course, Lesson } from "./course";

const STORAGE_KEY = "cs-course-progress";
const FINAL_TEST_KEY = "cs-final-test-completed";

type QuizQuestion = NonNullable<Lesson["quiz"]>[number];

type ShuffledQuestion = {
  question: string;
  answers: string[];
  correct: number;
};

function getAllLessons(): Lesson[] {
  return course.flatMap((section) => section.lessons);
}

// The final exam questions live on whichever section defines them
// (currently "think like a computer scientist"), not necessarily on
// the first section - look it up instead of assuming an index.
function getFinalTestSection() {
  return course.find(
    (section) => section.finalTest && section.finalTest.length > 0,
  );
}

function toRomanNumeral(num: number): string {
  const romanMap = [
    { value: 10, numeral: "x" },
    { value: 9, numeral: "ix" },
    { value: 5, numeral: "v" },
    { value: 4, numeral: "iv" },
    { value: 1, numeral: "i" },
  ];

  let result = "";
  let remaining = num;

  for (const { value, numeral } of romanMap) {
    while (remaining >= value) {
      result += numeral;
      remaining -= value;
    }
  }

  return result;
}

function shuffleArray<T>(items: T[]): T[] {
  const result = [...items];

  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }

  return result;
}

function shuffleQuestions(questions: QuizQuestion[] = []): ShuffledQuestion[] {
  const shuffledQuestions = shuffleArray(questions);

  return shuffledQuestions.map((question) => {
    const answerOrder = shuffleArray(question.answers.map((_, index) => index));

    return {
      question: question.question,
      answers: answerOrder.map((index) => question.answers[index]),
      correct: answerOrder.indexOf(question.correct),
    };
  });
}

export default function App() {
  const { width } = useWindowDimensions();

  const allLessons = useMemo(() => getAllLessons(), []);
  const finalTestSection = useMemo(() => getFinalTestSection(), []);

  const [currentLesson, setCurrentLesson] = useState(0);
  const [completed, setCompleted] = useState<number[]>([]);
  const [quizCorrect, setQuizCorrect] = useState(false);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);

  const [mobileMenu, setMobileMenu] = useState(false);

  const [viewingFinalTest, setViewingFinalTest] = useState(false);
  const [finalTestSubmitted, setFinalTestSubmitted] = useState(false);
  const [finalTestAnswers, setFinalTestAnswers] = useState<
    Record<number, number>
  >({});
  const [finalTestPassed, setFinalTestPassed] = useState(false);
  const [finalTestCompleted, setFinalTestCompleted] = useState(false);

  const [viewingCompletion, setViewingCompletion] = useState(false);

  const [shuffledQuiz, setShuffledQuiz] = useState<ShuffledQuestion[]>(() =>
    allLessons[0] ? shuffleQuestions(allLessons[0].quiz) : [],
  );

  const [shuffledFinalTest, setShuffledFinalTest] = useState<
    ShuffledQuestion[]
  >([]);

  useEffect(() => {
    loadProgress();
  }, []);

  function loadProgress() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);

      if (saved) {
        setCompleted(JSON.parse(saved));
      }

      const finalTestSaved = localStorage.getItem(FINAL_TEST_KEY);

      if (finalTestSaved) {
        setFinalTestCompleted(JSON.parse(finalTestSaved));
      }
    } catch {
      // Ignore invalid saved data
    }
  }

  function saveProgress(progress: number[]) {
    setCompleted(progress);

    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  }

  function isUnlocked(index: number) {
    if (index > -1) return true;

    return completed.includes(index - 1);
  }

  const finalTestUnlocked =
    allLessons.length > 0 && completed.includes(allLessons.length - 1);

  function selectLesson(index: number) {
    if (!isUnlocked(index)) return;

    setCurrentLesson(index);
    setAnswers({});
    setQuizSubmitted(false);
    setViewingFinalTest(false);
    setViewingCompletion(false);
    setQuizCorrect(false);
    setShuffledQuiz(shuffleQuestions(allLessons[index].quiz));

    if (width < 900) {
      setMobileMenu(false);
    }
  }

  function enterFinalTest() {
    if (!finalTestUnlocked) return;

    setViewingFinalTest(true);
    setViewingCompletion(false);
    setFinalTestAnswers({});
    setFinalTestSubmitted(false);
    setFinalTestPassed(false);

    if (finalTestSection?.finalTest) {
      setShuffledFinalTest(shuffleQuestions(finalTestSection.finalTest));
    }

    if (width < 900) {
      setMobileMenu(false);
    }
  }

  function enterCompletion() {
    if (!finalTestCompleted) return;

    setViewingFinalTest(false);
    setViewingCompletion(true);

    if (width < 900) {
      setMobileMenu(false);
    }
  }

  function chooseAnswer(questionIndex: number, answerIndex: number) {
    if (quizSubmitted) return;

    setAnswers((previous) => ({
      ...previous,
      [questionIndex]: answerIndex,
    }));
  }

  function completeCurrentLesson() {
    const newProgress = [...completed];

    if (!newProgress.includes(currentLesson)) {
      newProgress.push(currentLesson);
    }

    saveProgress(newProgress);
  }

  function submitQuiz() {
    if (shuffledQuiz.length === 0) return;

    const correct = shuffledQuiz.every(
      (question, index) => answers[index] === question.correct,
    );

    setQuizSubmitted(true);
    setQuizCorrect(correct);
    if (correct) {
      completeCurrentLesson();
    }
  }

  function retryQuiz() {
    setAnswers({});
    setQuizSubmitted(false);
    setQuizCorrect(false);
    setShuffledQuiz(shuffleQuestions(allLessons[currentLesson].quiz));
  }

  function chooseFinalTestAnswer(questionIndex: number, answerIndex: number) {
    if (finalTestSubmitted) return;

    setFinalTestAnswers((previous) => ({
      ...previous,
      [questionIndex]: answerIndex,
    }));
  }

  function submitFinalTest() {
    if (shuffledFinalTest.length === 0) return;

    const correct = shuffledFinalTest.every(
      (question, index) => finalTestAnswers[index] === question.correct,
    );

    setFinalTestSubmitted(true);
    setFinalTestPassed(correct);

    if (correct) {
      setFinalTestCompleted(true);

      localStorage.setItem(FINAL_TEST_KEY, JSON.stringify(true));
    }
  }

  function retryFinalTest() {
    setFinalTestAnswers({});
    setFinalTestSubmitted(false);
    setFinalTestPassed(false);

    if (finalTestSection?.finalTest) {
      setShuffledFinalTest(shuffleQuestions(finalTestSection.finalTest));
    }
  }
  const quizPassed = quizSubmitted
    ? quizCorrect
    : completed.includes(currentLesson);
  const lesson = allLessons[currentLesson];

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.layout}>
        {/* SIDEBAR */}

        {(width >= 900 || mobileMenu) && (
          <View style={styles.sidebar}>
            <ScrollView showsVerticalScrollIndicator={false}>
              {course.map((section) => (
                <View key={section.title} style={styles.section}>
                  <Text style={styles.sectionTitle}>{section.title}</Text>

                  {section.lessons.map((lessonItem) => {
                    const index = allLessons.indexOf(lessonItem);

                    const unlocked = isUnlocked(index);

                    const completedLesson = completed.includes(index);

                    const active =
                      !viewingFinalTest &&
                      !viewingCompletion &&
                      index === currentLesson;

                    return (
                      <Pressable
                        key={lessonItem.title}
                        onPress={() => selectLesson(index)}
                        disabled={!unlocked}
                        style={[
                          styles.lessonButton,
                          active && styles.lessonButtonActive,
                          !unlocked && styles.lessonButtonLocked,
                        ]}
                      >
                        <View
                          style={[
                            styles.lessonNumber,
                            completedLesson && styles.lessonNumberComplete,
                            active && styles.lessonNumberActive,
                          ]}
                        >
                          <Text
                            style={[
                              styles.lessonNumberText,
                              completedLesson &&
                                styles.lessonNumberTextComplete,
                              active && styles.lessonNumberTextActive,
                            ]}
                          >
                            {completedLesson ? ":D" : toRomanNumeral(index + 1)}
                          </Text>
                        </View>

                        <Text
                          numberOfLines={1}
                          style={[
                            styles.lessonButtonText,
                            active && styles.lessonButtonTextActive,
                            !unlocked && styles.lessonButtonTextLocked,
                          ]}
                        >
                          {lessonItem.title}
                        </Text>
                      </Pressable>
                    );
                  })}
                </View>
              ))}

              {/* FINAL ASSESSMENT */}

              <View style={styles.section}>
                <Text style={styles.sectionTitle}>final assessment</Text>

                <Pressable
                  onPress={enterFinalTest}
                  disabled={!finalTestUnlocked}
                  style={[
                    styles.lessonButton,
                    viewingFinalTest && styles.lessonButtonActive,
                    !finalTestUnlocked && styles.lessonButtonLocked,
                  ]}
                >
                  <View
                    style={[
                      styles.lessonNumber,
                      finalTestCompleted && styles.lessonNumberComplete,
                      viewingFinalTest && styles.lessonNumberActive,
                    ]}
                  >
                    <Text
                      style={[
                        styles.lessonNumberText,
                        finalTestCompleted && styles.lessonNumberTextComplete,
                        viewingFinalTest && styles.lessonNumberTextActive,
                      ]}
                    >
                      {finalTestCompleted
                        ? ":D"
                        : toRomanNumeral(allLessons.length + 1)}
                    </Text>
                  </View>

                  <Text
                    numberOfLines={1}
                    style={[
                      styles.lessonButtonText,
                      viewingFinalTest && styles.lessonButtonTextActive,
                      !finalTestUnlocked && styles.lessonButtonTextLocked,
                    ]}
                  >
                    final exam
                  </Text>
                </Pressable>
              </View>

              {/* COMPLETION */}

              {finalTestCompleted && (
                <View style={styles.section}>
                  <Text style={styles.sectionTitle}>completion</Text>

                  <Pressable
                    onPress={enterCompletion}
                    style={[
                      styles.lessonButton,
                      viewingCompletion && styles.lessonButtonActive,
                    ]}
                  >
                    <View
                      style={[
                        styles.lessonNumber,
                        styles.lessonNumberComplete,
                        viewingCompletion && styles.lessonNumberActive,
                      ]}
                    >
                      <Text
                        style={[
                          styles.lessonNumberText,
                          styles.lessonNumberTextComplete,
                          viewingCompletion && styles.lessonNumberTextActive,
                        ]}
                      >
                        :D
                      </Text>
                    </View>

                    <Text
                      numberOfLines={1}
                      style={[
                        styles.lessonButtonText,
                        viewingCompletion && styles.lessonButtonTextActive,
                      ]}
                    >
                      you did it!
                    </Text>
                  </Pressable>
                </View>
              )}
            </ScrollView>
          </View>
        )}

        {/* MAIN CONTENT */}

        <ScrollView
          style={styles.main}
          contentContainerStyle={styles.mainContent}
        >
          {/* NORMAL LESSON */}

          {!viewingFinalTest && !viewingCompletion && (
            <>
              <View style={styles.lessonHeader}>
                <Text style={styles.lessonLabel}>
                  lesson {toRomanNumeral(currentLesson + 1)}
                </Text>

                <Text style={styles.lessonTitle}>{lesson.title}</Text>

                <Text style={styles.lessonDescription}>
                  {lesson.description}
                </Text>
              </View>

              {/* VIDEO */}

              <View style={styles.videoContainer}>
                {lesson.video ? (
                  <iframe
                    src={`https://www.youtube.com/embed/${lesson.video}`}
                    style={{
                      width: "100%",
                      height: "100%",
                      border: "none",
                    }}
                    allowFullScreen
                  />
                ) : (
                  <View style={styles.videoPlaceholder}>
                    <Text style={styles.videoPlaceholderTitle}>
                      video goes here
                    </Text>

                    <Text style={styles.videoPlaceholderText}>
                      add a youtube video id in course.ts
                    </Text>
                  </View>
                )}
              </View>

              {/* QUIZ OR CONTINUE */}

              {shuffledQuiz.length > 0 ? (
                <View style={styles.card}>
                  <Text style={styles.cardTitle}>quick check</Text>

                  <Text style={styles.quizSubtitle}>
                    answer all three questions correctly to unlock the next
                    lesson.
                  </Text>

                  {shuffledQuiz.map((question, questionIndex) => (
                    <View key={questionIndex} style={styles.question}>
                      <Text style={styles.questionText}>
                        {questionIndex + 1}. {question.question}
                      </Text>

                      {question.answers.map((answer, answerIndex) => {
                        const selected = answers[questionIndex] === answerIndex;

                        const correct = question.correct === answerIndex;

                        let answerStyle = styles.answer;

                        if (quizSubmitted) {
                          if (quizPassed && correct) {
                            answerStyle = styles.answerCorrect;
                          } else if (!quizPassed && selected) {
                            answerStyle = styles.answerWrong;
                          }
                        }

                        if (selected && !quizSubmitted) {
                          answerStyle = styles.answerSelected;
                        }

                        return (
                          <Pressable
                            key={answer}
                            onPress={() =>
                              chooseAnswer(questionIndex, answerIndex)
                            }
                            style={answerStyle}
                          >
                            <Text style={styles.answerText}>{answer}</Text>
                          </Pressable>
                        );
                      })}
                    </View>
                  ))}

                  {!quizSubmitted && (
                    <Pressable
                      onPress={submitQuiz}
                      disabled={
                        Object.keys(answers).length !== shuffledQuiz.length
                      }
                      style={[
                        styles.submitButton,
                        Object.keys(answers).length !== shuffledQuiz.length &&
                          styles.submitButtonDisabled,
                      ]}
                    >
                      <Text style={styles.submitButtonText}>check answers</Text>
                    </Pressable>
                  )}

                  {quizSubmitted && quizPassed && (
                    <View style={[styles.result, styles.resultSuccess]}>
                      <Text style={styles.successText}>
                        {currentLesson === allLessons.length - 1
                          ? "you completed the course!"
                          : "correct! the next lesson is unlocked."}
                      </Text>
                    </View>
                  )}

                  {quizSubmitted && !quizPassed && (
                    <View style={[styles.result, styles.resultFailure]}>
                      <Text style={styles.failureText}>
                        not quite. review the lesson and try again.
                      </Text>

                      <Pressable onPress={retryQuiz} style={styles.retryButton}>
                        <Text style={styles.retryButtonText}>try again</Text>
                      </Pressable>
                    </View>
                  )}
                </View>
              ) : (
                <View style={styles.card}>
                  <Text style={styles.cardTitle}>ready?</Text>

                  <Text style={styles.quizSubtitle}>
                    there's no quiz for this section. continue when you're
                    ready.
                  </Text>

                  <Pressable
                    onPress={completeCurrentLesson}
                    disabled={quizPassed}
                    style={[
                      styles.submitButton,
                      quizPassed && styles.submitButtonDisabled,
                    ]}
                  >
                    <Text style={styles.submitButtonText}>
                      {quizPassed ? "completed" : "continue"}
                    </Text>
                  </Pressable>
                </View>
              )}

              {/* NAVIGATION */}

              <View style={styles.navigation}>
                {currentLesson > 0 && (
                  <Pressable
                    onPress={() => selectLesson(currentLesson - 1)}
                    style={styles.secondaryButton}
                  >
                    <Text style={styles.secondaryButtonText}>previous</Text>
                  </Pressable>
                )}

                {currentLesson < allLessons.length - 1 &&
                  completed.includes(currentLesson) && (
                    <Pressable
                      onPress={() => selectLesson(currentLesson + 1)}
                      style={styles.primaryButton}
                    >
                      <Text style={styles.primaryButtonText}>next lesson</Text>
                    </Pressable>
                  )}

                {currentLesson === allLessons.length - 1 &&
                  completed.includes(currentLesson) && (
                    <Pressable
                      onPress={enterFinalTest}
                      style={styles.primaryButton}
                    >
                      <Text style={styles.primaryButtonText}>final exam</Text>
                    </Pressable>
                  )}
              </View>
            </>
          )}

          {/* FINAL TEST */}

          {viewingFinalTest && (
            <>
              <View style={styles.lessonHeader}>
                <Text style={styles.lessonLabel}>final test</Text>

                <Text style={styles.lessonTitle}>comprehensive exam</Text>

                <Text style={styles.lessonDescription}>
                  test your knowledge across all topics covered in this course.
                  answer every question correctly to pass.
                </Text>
              </View>

              <View style={styles.card}>
                <Text style={styles.cardTitle}>final assessment</Text>

                <Text style={styles.quizSubtitle}>
                  answer all questions correctly to pass the final exam.
                </Text>

                {shuffledFinalTest.map((question, questionIndex) => (
                  <View key={questionIndex} style={styles.question}>
                    <Text style={styles.questionText}>
                      {questionIndex + 1}. {question.question}
                    </Text>

                    {question.answers.map((answer, answerIndex) => {
                      const selected =
                        finalTestAnswers[questionIndex] === answerIndex;

                      const correct = question.correct === answerIndex;

                      let answerStyle = styles.answer;

                      if (finalTestSubmitted) {
                        if (finalTestPassed && correct) {
                          answerStyle = styles.answerCorrect;
                        } else if (!finalTestPassed && selected) {
                          answerStyle = styles.answerWrong;
                        }
                      }

                      if (selected && !finalTestSubmitted) {
                        answerStyle = styles.answerSelected;
                      }

                      return (
                        <Pressable
                          key={answer}
                          onPress={() =>
                            chooseFinalTestAnswer(questionIndex, answerIndex)
                          }
                          style={answerStyle}
                        >
                          <Text style={styles.answerText}>{answer}</Text>
                        </Pressable>
                      );
                    })}
                  </View>
                ))}

                {!finalTestSubmitted && (
                  <Pressable
                    onPress={submitFinalTest}
                    disabled={
                      shuffledFinalTest.length === 0 ||
                      Object.keys(finalTestAnswers).length !==
                        shuffledFinalTest.length
                    }
                    style={[
                      styles.submitButton,
                      (shuffledFinalTest.length === 0 ||
                        Object.keys(finalTestAnswers).length !==
                          shuffledFinalTest.length) &&
                        styles.submitButtonDisabled,
                    ]}
                  >
                    <Text style={styles.submitButtonText}>submit exam</Text>
                  </Pressable>
                )}

                {finalTestSubmitted && finalTestPassed && (
                  <View style={[styles.result, styles.resultSuccess]}>
                    <Text style={styles.successText}>
                      congratulations! you passed the final exam.
                    </Text>

                    <Pressable
                      onPress={enterCompletion}
                      style={styles.retryButton}
                    >
                      <Text style={styles.retryButtonText}>continue</Text>
                    </Pressable>
                  </View>
                )}

                {finalTestSubmitted && !finalTestPassed && (
                  <View style={[styles.result, styles.resultFailure]}>
                    <Text style={styles.failureText}>
                      not quite. review the material and try again.
                    </Text>

                    <Pressable
                      onPress={retryFinalTest}
                      style={styles.retryButton}
                    >
                      <Text style={styles.retryButtonText}>try again</Text>
                    </Pressable>
                  </View>
                )}
              </View>

              <View style={styles.navigation}>
                <Pressable
                  onPress={() => setViewingFinalTest(false)}
                  style={styles.secondaryButton}
                >
                  <Text style={styles.secondaryButtonText}>
                    back to lessons
                  </Text>
                </Pressable>
              </View>
            </>
          )}

          {/* COMPLETION */}

          {viewingCompletion && (
            <>
              <View style={styles.lessonHeader}>
                <Text style={styles.lessonLabel}>course complete</Text>

                <Text style={styles.lessonTitle}>{completion.title}</Text>

                <Text style={styles.lessonDescription}>
                  {completion.description}
                </Text>
              </View>

              <View style={styles.videoContainer}>
                {completion.video ? (
                  <iframe
                    src={`https://www.youtube.com/embed/${completion.video}`}
                    style={{
                      width: "100%",
                      height: "100%",
                      border: "none",
                    }}
                    allowFullScreen
                  />
                ) : (
                  <View style={styles.videoPlaceholder}>
                    <Text style={styles.videoPlaceholderTitle}>
                      congratulations video
                    </Text>

                    <Text style={styles.videoPlaceholderText}>
                      add a youtube video id in course.ts
                    </Text>
                  </View>
                )}
              </View>

              <View style={styles.card}>
                <Text style={styles.cardTitle}>what's next?</Text>

                <Text style={styles.bodyText}>{completion.content}</Text>
              </View>
            </>
          )}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#0f0f12",
  },

  layout: {
    flex: 1,
    flexDirection: "row",
  },

  sidebar: {
    width: 290,
    backgroundColor: "#1a1a1f",
    borderRightWidth: 1,
    borderRightColor: "#2a2a33",
    padding: 20,
  },

  section: {
    marginBottom: 25,
  },

  sectionTitle: {
    fontSize: 11,
    fontWeight: "800",
    textTransform: "uppercase",
    color: "#9ca3af",
    marginBottom: 8,
    paddingHorizontal: 8,
  },

  lessonButton: {
    minHeight: 42,
    borderRadius: 8,
    paddingHorizontal: 8,
    flexDirection: "row",
    alignItems: "center",
    gap: 9,
  },

  lessonButtonActive: {
    backgroundColor: "#1e3a5f",
  },

  lessonButtonLocked: {
    opacity: 0.4,
  },

  lessonNumber: {
    width: 25,
    height: 25,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#3f3f47",
    alignItems: "center",
    justifyContent: "center",
  },

  lessonNumberActive: {
    borderColor: "#60a5fa",
  },

  lessonNumberComplete: {
    backgroundColor: "#4ade80",
    borderColor: "#4ade80",
  },

  lessonNumberText: {
    fontSize: 11,
    color: "#9ca3af",
  },

  lessonNumberTextActive: {
    color: "#60a5fa",
    fontWeight: "700",
  },

  lessonNumberTextComplete: {
    color: "#0f0f12",
    fontWeight: "700",
  },

  lessonButtonText: {
    flex: 1,
    fontSize: 13,
    color: "#d1d5db",
  },

  lessonButtonTextActive: {
    color: "#60a5fa",
    fontWeight: "600",
  },

  lessonButtonTextLocked: {
    color: "#6b7280",
  },

  main: {
    flex: 1,
  },

  mainContent: {
    width: "100%",
    maxWidth: 950,
    alignSelf: "center",
    padding: 40,
  },

  lessonHeader: {
    marginBottom: 28,
  },

  lessonLabel: {
    fontSize: 12,
    fontWeight: "800",
    color: "#60a5fa",
    marginBottom: 7,
  },

  lessonTitle: {
    fontSize: 38,
    fontWeight: "800",
    color: "#ffffff",
    letterSpacing: -1,
  },

  lessonDescription: {
    fontSize: 16,
    color: "#9ca3af",
    marginTop: 10,
    lineHeight: 25,
  },

  videoContainer: {
    width: "100%",
    aspectRatio: 16 / 9,
    backgroundColor: "#000000",
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "#2a2a33",
    overflow: "hidden",
    marginBottom: 25,
  },

  videoPlaceholder: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  videoPlaceholderTitle: {
    color: "#d1d5db",
    fontSize: 18,
    fontWeight: "700",
  },

  videoPlaceholderText: {
    color: "#6b7280",
    fontSize: 13,
    marginTop: 5,
  },

  card: {
    backgroundColor: "#1a1a1f",
    borderWidth: 1,
    borderColor: "#2a2a33",
    borderRadius: 14,
    padding: 27,
    marginBottom: 22,
  },

  cardTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#ffffff",
    marginBottom: 10,
  },

  bodyText: {
    fontSize: 15,
    lineHeight: 25,
    color: "#d1d5db",
  },

  quizSubtitle: {
    color: "#9ca3af",
    fontSize: 14,
    marginBottom: 25,
  },

  question: {
    marginBottom: 28,
  },

  questionText: {
    fontSize: 15,
    fontWeight: "600",
    color: "#ffffff",
    marginBottom: 10,
  },

  answer: {
    borderWidth: 1,
    borderColor: "#2a2a33",
    borderRadius: 8,
    padding: 13,
    marginBottom: 7,
    backgroundColor: "#111827",
  },

  answerSelected: {
    borderWidth: 1,
    borderColor: "#60a5fa",
    borderRadius: 8,
    padding: 13,
    marginBottom: 7,
    backgroundColor: "#1e3a5f",
  },

  answerCorrect: {
    borderWidth: 1,
    borderColor: "#4ade80",
    borderRadius: 8,
    padding: 13,
    marginBottom: 7,
    backgroundColor: "#1e3f2a",
  },

  answerWrong: {
    borderWidth: 1,
    borderColor: "#f87171",
    borderRadius: 8,
    padding: 13,
    marginBottom: 7,
    backgroundColor: "#3f1f1f",
  },

  answerText: {
    fontSize: 14,
    color: "#d1d5db",
  },

  submitButton: {
    backgroundColor: "#60a5fa",
    borderRadius: 8,
    paddingVertical: 13,
    paddingHorizontal: 20,
    alignItems: "center",
  },

  submitButtonDisabled: {
    backgroundColor: "#4b5563",
  },

  submitButtonText: {
    color: "#ffffff",
    fontWeight: "700",
    fontSize: 14,
  },

  result: {
    marginTop: 15,
    padding: 14,
    borderRadius: 8,
  },

  resultSuccess: {
    backgroundColor: "#1e3f2a",
  },

  resultFailure: {
    backgroundColor: "#3f1f1f",
  },

  successText: {
    color: "#86efac",
    fontWeight: "600",
  },

  failureText: {
    color: "#fca5a5",
    fontWeight: "600",
  },

  retryButton: {
    marginTop: 12,
    backgroundColor: "#60a5fa",
    borderRadius: 8,
    paddingVertical: 11,
    paddingHorizontal: 18,
    alignItems: "center",
    alignSelf: "flex-start",
  },

  retryButtonText: {
    color: "#ffffff",
    fontWeight: "700",
    fontSize: 13,
  },

  navigation: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 50,
  },

  primaryButton: {
    backgroundColor: "#60a5fa",
    paddingVertical: 12,
    paddingHorizontal: 18,
    borderRadius: 8,
  },

  primaryButtonText: {
    color: "#000000",
    fontWeight: "700",
  },

  secondaryButton: {
    backgroundColor: "#111827",
    borderWidth: 1,
    borderColor: "#2a2a33",
    paddingVertical: 12,
    paddingHorizontal: 18,
    borderRadius: 8,
  },

  secondaryButtonText: {
    color: "#d1d5db",
    fontWeight: "600",
  },
});
