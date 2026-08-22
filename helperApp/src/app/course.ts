export type QuizQuestion = {
    question: string;
    answers: string[];
    correct: number;
};

export type Lesson = {
    title: string;
    description: string;
    video?: string;
    quiz?: QuizQuestion[];
};

export type CourseSection = {
    title: string;
    lessons: Lesson[];
    finalTest?: QuizQuestion[];
};

export type Completion = {
    title: string;
    description: string;
    video?: string;
    content: string;
};

export const completion: Completion = {
    title: "you did it!",
    description:
        "congratulations on completing the course!",
    video: "",
    content:
        "you've learned the foundations of computer science, programming, problem solving, debugging, testing, data, networks, security, and more. from here, keep building things. try creating your own projects, learning a programming language, solving programming problems, or exploring an area of computer science that interests you. the best way to keep learning is to keep making things.",
};

export const course: CourseSection[] = [
    {
        title: "welcome",
        lessons: [
            {
                title: "welcome to the course",
                description:
                    "learn what this course is about and how to get the most out of it.",
                video: "",
            },

            {
                title: "what is computer science?",
                description:
                    "understand what computer science actually is and what computer scientists do.",
                video: "",
                quiz: [
                    {
                        question: "computer science is best described as...",
                        answers: [
                            "the study of computation, information, and problem solving with computers",
                            "just learning to type",
                            "only building websites",
                            "memorizing one programming language",
                        ],
                        correct: 0,
                    },
                    {
                        question: "which of these is a topic computer scientists think about?",
                        answers: [
                            "algorithms and data",
                            "cooking recipes",
                            "car engines",
                            "weather forecasting"
                        ],
                        correct: 0,
                    },
                    {
                        question: "computer science is...",
                        answers: [
                            "much more than just programming",
                            "exactly the same as programming",
                            "unrelated to problem solving",
                            "only about hardware",
                        ],
                        correct: 0,
                    },
                ],
            },
        ],
    },

    {
        title: "think like a computer scientist",
        lessons: [
            {
                title: "algorithms",
                description:
                    "learn how computer scientists turn problems into clear, repeatable steps.",
                video: "",
                quiz: [
                    {
                        question: "what is an algorithm?",
                        answers: [
                            "a computer",
                            "a sequence of steps for solving a problem",
                            "a programming language",
                            "a type of variable",
                        ],
                        correct: 1,
                    },
                    {
                        question: "a good algorithm should be...",
                        answers: [
                            "clear and repeatable",
                            "random",
                            "impossible to explain",
                            "only usable once",
                        ],
                        correct: 0,
                    },
                    {
                        question: "algorithms are useful because they...",
                        answers: [
                            "replace computers",
                            "provide a systematic way to solve problems",
                            "only work in javascript",
                            "prevent all bugs",
                        ],
                        correct: 1,
                    },
                ],
            },

            {
                title: "break problems apart",
                description:
                    "learn how programmers break large problems into smaller, manageable pieces.",
                video: "",
                quiz: [
                    {
                        question:
                            "why do programmers break large problems apart?",
                        answers: [
                            "to make problems harder",
                            "to make problems easier to understand and solve",
                            "because computers cannot run large programs",
                            "to avoid testing",
                        ],
                        correct: 1,
                    },
                    {
                        question:
                            "breaking a large problem into smaller pieces is useful because...",
                        answers: [
                            "each piece can be solved independently",
                            "it removes the need for code",
                            "it guarantees there will be no bugs",
                            "it makes the computer faster",
                        ],
                        correct: 0,
                    },
                    {
                        question:
                            "breaking problems apart can make debugging...",
                        answers: [
                            "harder",
                            "impossible",
                            "easier",
                            "unnecessary",
                        ],
                        correct: 2,
                    },
                ],
            },

            {
                title: "manage complexity",
                description:
                    "understand how programmers keep complicated systems understandable.",
                video: "",
                quiz: [
                    {
                        question:
                            "what generally happens as programs become larger?",
                        answers: [
                            "they become more complex",
                            "they become automatically simpler",
                            "they stop needing organization",
                            "they stop having bugs",
                        ],
                        correct: 0,
                    },
                    {
                        question:
                            "programmers manage complexity by...",
                        answers: [
                            "organizing systems into understandable parts",
                            "putting everything into one function",
                            "avoiding variables",
                            "deleting code",
                        ],
                        correct: 0,
                    },
                    {
                        question:
                            "abstraction can help programmers by...",
                        answers: [
                            "hiding unnecessary details",
                            "removing all code",
                            "preventing bugs completely",
                            "making computers unnecessary",
                        ],
                        correct: 0,
                    },
                ],
            },
        ],

        finalTest: [
            {
                question:
                    "what is the fundamental difference between a good algorithm and a poor one?",
                answers: [
                    "good algorithms use fewer variables",
                    "good algorithms are clear, precise, and work with many different inputs",
                    "good algorithms only work in one programming language",
                    "good algorithms never produce any output",
                ],
                correct: 1,
            },
            {
                question:
                    "when breaking a large problem into smaller pieces, what is one key benefit?",
                answers: [
                    "each piece can be tested independently",
                    "the overall program becomes slower",
                    "you need to write more code",
                    "you don't need to understand the problem",
                ],
                correct: 0,
            },
            {
                question:
                    "what does abstraction mean in programming?",
                answers: [
                    "removing all functions from code",
                    "making code run faster",
                    "hiding unnecessary complexity and details",
                    "using only one data type",
                ],
                correct: 2,
            },
            {
                question:
                    "which of these is NOT a way to manage complexity in large programs?",
                answers: [
                    "organizing code into sections",
                    "using meaningful variable names",
                    "removing all comments",
                    "separating different responsibilities",
                ],
                correct: 2,
            },
            {
                question:
                    "what should you do first when solving a programming problem?",
                answers: [
                    "understand the problem completely",
                    "write as much code as possible",
                    "skip testing",
                    "delete variables",
                ],
                correct: 0,
            },
            {
                question:
                    "what is a variable used for in programming?",
                answers: [
                    "to store and manipulate data",
                    "to replace loops",
                    "to eliminate functions",
                    "to create hardware",
                ],
                correct: 0,
            },
            {
                question:
                    "what is an example of program output?",
                answers: [
                    "a message displayed to the user",
                    "a user typing their name",
                    "a sensor collecting data",
                    "code being written",
                ],
                correct: 0,
            },
            {
                question:
                    "when would you use a condition (if statement) in code?",
                answers: [
                    "to make decisions based on whether something is true or false",
                    "to repeat code multiple times",
                    "to delete variables",
                    "to create new functions",
                ],
                correct: 0,
            },
            {
                question:
                    "what does a loop allow you to do?",
                answers: [
                    "repeat instructions without rewriting the same code",
                    "store multiple variables",
                    "make decisions between two options",
                    "delete entire programs",
                ],
                correct: 0,
            },
            {
                question:
                    "what is the primary purpose of a function?",
                answers: [
                    "to organize reusable pieces of behavior",
                    "to create loops",
                    "to replace conditions",
                    "to store variables",
                ],
                correct: 0,
            },
            {
                question:
                    "why is an array useful for storing data?",
                answers: [
                    "it can hold a collection of related values",
                    "it eliminates the need for variables",
                    "it makes code run faster",
                    "it prevents all bugs",
                ],
                correct: 0,
            },
            {
                question: "what is debugging?",
                answers: [
                    "finding, understanding, and fixing problems in software",
                    "writing comments in code",
                    "deleting entire programs",
                    "installing new software",
                ],
                correct: 0,
            },
            {
                question:
                    "which is a good practice when testing software?",
                answers: [
                    "creating test cases with different inputs",
                    "only testing once",
                    "avoiding edge cases",
                    "skipping the testing phase",
                ],
                correct: 0,
            },
            {
                question:
                    "how should you approach an unfamiliar programming problem?",
                answers: [
                    "understand it first, break it apart, plan, implement, test, and improve",
                    "immediately start writing code",
                    "memorize similar problems",
                    "skip planning and testing",
                ],
                correct: 0,
            },
            {
                question:
                    "what does efficiency in programming refer to?",
                answers: [
                    "how effectively a program uses time and resources",
                    "how long the variable names are",
                    "how many comments are in the code",
                    "how colorful the program is",
                ],
                correct: 0,
            },
            {
                question:
                    "how do computers ultimately represent all information?",
                answers: [
                    "using combinations of bits",
                    "using only numbers",
                    "using only text",
                    "using only images",
                ],
                correct: 0,
            },
            {
                question:
                    "what is the primary purpose of computer networks?",
                answers: [
                    "to allow computers to communicate and exchange information",
                    "to make computers faster",
                    "to store information permanently",
                    "to eliminate the internet",
                ],
                correct: 0,
            },
            {
                question:
                    "which is an important computer security practice?",
                answers: [
                    "keeping software updated and using strong authentication",
                    "sharing passwords with trusted friends",
                    "using the same password everywhere",
                    "ignoring suspicious requests",
                ],
                correct: 0,
            },
            {
                question: "what do you learn in this course?",
                answers: [
                    "how to think like a computer scientist and understand programming fundamentals",
                    "how to build hardware",
                    "only one programming language",
                    "how to use specific software applications",
                ],
                correct: 0,
            },
            {
                question:
                    "based on the entire course, what is the most important skill for a programmer?",
                answers: [
                    "being able to approach problems systematically and think clearly",
                    "memorizing all programming syntax",
                    "working alone without help",
                    "writing code as fast as possible",
                ],
                correct: 0,
            },
        ],
    },

    {
        title: "learn programming tools",
        lessons: [
            {
                title: "variables",
                description:
                    "learn how programs store and manipulate information.",
                video: "",
                quiz: [
                    {
                        question: "what does a variable store?",
                        answers: [
                            "information",
                            "a keyboard",
                            "a monitor",
                            "electricity",
                        ],
                        correct: 0,
                    },
                    {
                        question:
                            "can a variable's value change?",
                        answers: [
                            "yes",
                            "no",
                            "only in python",
                            "only once",
                        ],
                        correct: 0,
                    },
                    {
                        question:
                            "what will score contain after this code?",
                        answers: [
                            "0",
                            "5",
                            "10",
                            "100",
                        ],
                        correct: 2,
                    },
                ],
            },

            {
                title: "input / output",
                description:
                    "learn how programs receive information and communicate results.",
                video: "",
                quiz: [
                    {
                        question: "input is information that...",
                        answers: [
                            "a program receives",
                            "a program deletes",
                            "a program never uses",
                            "only humans can see",
                        ],
                        correct: 0,
                    },
                    {
                        question: "output is information that...",
                        answers: [
                            "a program produces",
                            "a program receives",
                            "a computer stores permanently",
                            "cannot be displayed",
                        ],
                        correct: 0,
                    },
                    {
                        question:
                            "which is an example of output?",
                        answers: [
                            "a program displaying a message",
                            "a user typing their name",
                            "a user clicking a button",
                            "a sensor collecting data",
                        ],
                        correct: 0,
                    },
                ],
            },

            {
                title: "conditions",
                description:
                    "learn how programs make decisions.",
                video: "",
                quiz: [
                    {
                        question:
                            "what do conditions allow programs to do?",
                        answers: [
                            "make decisions",
                            "delete variables",
                            "turn off the computer",
                            "create hardware",
                        ],
                        correct: 0,
                    },
                    {
                        question:
                            "an if statement runs when its condition is...",
                        answers: [
                            "true",
                            "false",
                            "random",
                            "empty",
                        ],
                        correct: 0,
                    },
                    {
                        question: "what does >= mean?",
                        answers: [
                            "greater than or equal to",
                            "less than",
                            "equal only",
                            "not equal",
                        ],
                        correct: 0,
                    },
                ],
            },

            {
                title: "loops",
                description:
                    "learn how programmers repeat instructions efficiently.",
                video: "",
                quiz: [
                    {
                        question:
                            "what is a loop used for?",
                        answers: [
                            "repeating instructions",
                            "deleting code",
                            "creating a computer",
                            "storing a single value",
                        ],
                        correct: 0,
                    },
                    {
                        question:
                            "how many times does the example loop run?",
                        answers: [
                            "1",
                            "4",
                            "5",
                            "6",
                        ],
                        correct: 2,
                    },
                    {
                        question: "loops can help reduce...",
                        answers: [
                            "repeated code",
                            "computer memory",
                            "all bugs",
                            "the need for algorithms",
                        ],
                        correct: 0,
                    },
                ],
            },

            {
                title: "functions",
                description:
                    "learn how programmers package reusable pieces of behavior.",
                video: "",
                quiz: [
                    {
                        question:
                            "why are functions useful?",
                        answers: [
                            "they allow code to be reused and organized",
                            "they eliminate all variables",
                            "they replace computers",
                            "they prevent every bug",
                        ],
                        correct: 0,
                    },
                    {
                        question:
                            "what are a and b in the example?",
                        answers: [
                            "parameters",
                            "loops",
                            "conditions",
                            "comments",
                        ],
                        correct: 0,
                    },
                    {
                        question: "what does return do?",
                        answers: [
                            "provides a value from the function",
                            "deletes the function",
                            "starts a loop",
                            "creates a variable automatically",
                        ],
                        correct: 0,
                    },
                ],
            },

            {
                title: "data",
                description:
                    "learn how programs organize collections of information.",
                video: "",
                quiz: [
                    {
                        question:
                            "what is an array useful for?",
                        answers: [
                            "storing a collection of values",
                            "only storing one number",
                            "running the computer",
                            "creating a keyboard",
                        ],
                        correct: 0,
                    },
                    {
                        question: "what is students[0]?",
                        answers: [
                            "the first element",
                            "the last element",
                            "the array size",
                            "a function",
                        ],
                        correct: 0,
                    },
                    {
                        question:
                            "why are data structures useful?",
                        answers: [
                            "they organize information",
                            "they remove the need for algorithms",
                            "they make every program faster",
                            "they prevent errors",
                        ],
                        correct: 0,
                    },
                ],
            },
        ],
    },

    {
        title: "learn how programmers work",
        lessons: [
            {
                title: "debugging",
                description:
                    "learn how programmers find and fix problems in their programs.",
                video: "",
                quiz: [
                    {
                        question: "what is debugging?",
                        answers: [
                            "finding and fixing problems",
                            "writing comments",
                            "installing software",
                            "deleting a program",
                        ],
                        correct: 0,
                    },
                    {
                        question: "a bug is...",
                        answers: [
                            "a problem in a program",
                            "a programming language",
                            "a computer",
                            "a type of variable",
                        ],
                        correct: 0,
                    },
                    {
                        question:
                            "good debugging usually involves...",
                        answers: [
                            "understanding why the problem occurs",
                            "randomly changing code",
                            "deleting the whole program",
                            "ignoring the problem",
                        ],
                        correct: 0,
                    },
                ],
            },

            {
                title: "testing",
                description:
                    "learn how programmers check whether their programs behave correctly.",
                video: "",
                quiz: [
                    {
                        question:
                            "why do programmers test software?",
                        answers: [
                            "to find problems and verify behavior",
                            "to make code longer",
                            "to avoid using variables",
                            "to replace debugging",
                        ],
                        correct: 0,
                    },
                    {
                        question:
                            "a test case provides...",
                        answers: [
                            "an input and expected behavior",
                            "a new programming language",
                            "a computer",
                            "a random file",
                        ],
                        correct: 0,
                    },
                    {
                        question:
                            "testing can help reveal...",
                        answers: [
                            "bugs",
                            "keyboards",
                            "monitors",
                            "electricity",
                        ],
                        correct: 0,
                    },
                ],
            },

            {
                title: "problem solving",
                description:
                    "learn how programmers approach unfamiliar problems.",
                video: "",
                quiz: [
                    {
                        question:
                            "what should you do before solving a programming problem?",
                        answers: [
                            "understand the problem",
                            "immediately write random code",
                            "delete the project",
                            "skip testing",
                        ],
                        correct: 0,
                    },
                    {
                        question:
                            "why is planning useful?",
                        answers: [
                            "it gives you a strategy before implementation",
                            "it eliminates programming",
                            "it guarantees perfect code",
                            "it makes code unnecessary",
                        ],
                        correct: 0,
                    },
                    {
                        question:
                            "problem solving is useful when...",
                        answers: [
                            "you encounter something unfamiliar",
                            "you only know one programming language",
                            "you never make mistakes",
                            "a computer is turned off",
                        ],
                        correct: 0,
                    },
                ],
            },

            {
                title: "efficiency",
                description:
                    "learn why programmers care about how efficiently programs solve problems.",
                video: "",
                quiz: [
                    {
                        question:
                            "what does efficiency describe?",
                        answers: [
                            "how effectively a program uses resources",
                            "how colorful the program is",
                            "how many comments it has",
                            "how long the variable names are",
                        ],
                        correct: 0,
                    },
                    {
                        question:
                            "why might two algorithms need different amounts of time?",
                        answers: [
                            "they may perform different numbers of operations",
                            "computers choose randomly",
                            "variables always run at different speeds",
                            "algorithms cannot be compared",
                        ],
                        correct: 0,
                    },
                    {
                        question:
                            "programmers may care about...",
                        answers: [
                            "time and memory usage",
                            "only screen brightness",
                            "only variable names",
                            "only comments",
                        ],
                        correct: 0,
                    },
                ],
            },
        ],
    },

    {
        title: "understand the broader field",
        lessons: [
            {
                title: "data representation",
                description:
                    "understand how computers represent information.",
                video: "",
                quiz: [
                    {
                        question: "what is a bit?",
                        answers: [
                            "a binary digit",
                            "a programming language",
                            "a computer screen",
                            "a function",
                        ],
                        correct: 0,
                    },
                    {
                        question:
                            "what can computers represent using bits?",
                        answers: [
                            "many different types of information",
                            "only numbers",
                            "only text",
                            "only images",
                        ],
                        correct: 0,
                    },
                    {
                        question:
                            "how many bits are in a byte?",
                        answers: [
                            "4",
                            "8",
                            "16",
                            "32",
                        ],
                        correct: 1,
                    },
                ],
            },

            {
                title: "networks",
                description:
                    "learn how computers communicate with each other.",
                video: "",
                quiz: [
                    {
                        question:
                            "what does a network allow computers to do?",
                        answers: [
                            "communicate and exchange information",
                            "become human",
                            "avoid electricity",
                            "delete software",
                        ],
                        correct: 0,
                    },
                    {
                        question: "the internet is...",
                        answers: [
                            "a network of interconnected networks",
                            "one computer",
                            "a programming language",
                            "a single server",
                        ],
                        correct: 0,
                    },
                    {
                        question:
                            "what can networks transmit?",
                        answers: [
                            "data",
                            "only electricity",
                            "only keyboards",
                            "nothing",
                        ],
                        correct: 0,
                    },
                ],
            },

            {
                title: "security",
                description:
                    "understand the basic principles behind keeping computer systems secure.",
                video: "",
                quiz: [
                    {
                        question:
                            "what is computer security concerned with?",
                        answers: [
                            "protecting systems and information",
                            "making computers heavier",
                            "writing only games",
                            "increasing screen brightness",
                        ],
                        correct: 0,
                    },
                    {
                        question:
                            "which is a useful security practice?",
                        answers: [
                            "keeping software updated",
                            "sharing passwords",
                            "ignoring suspicious requests",
                            "using the same password everywhere",
                        ],
                        correct: 0,
                    },
                    {
                        question:
                            "why is authentication important?",
                        answers: [
                            "it helps verify who is allowed to access something",
                            "it makes code run faster",
                            "it removes the need for passwords",
                            "it creates internet connections",
                        ],
                        correct: 0,
                    },
                ],
            },
        ],
    },
];