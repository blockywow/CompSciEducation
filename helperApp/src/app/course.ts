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
        "you've learned the foundations of computer science, programming, problem solving, debugging, testing, data, version control, networks, security, and artificial intelligence. from here, keep building things. try creating your own projects, learning a programming language, solving programming problems, or exploring an area of computer science that interests you. the best way to keep learning is to keep making things.",
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
                        question:
                            "which one of these best captures what computer science is really about?",
                        answers: [
                            "solving problems by breaking them into steps a computer can follow",
                            "writing code in as many languages as possible",
                            "memorizing facts about computer hardware",
                            "learning to use specific apps",
                        ],
                        correct: 0,
                    },
                    {
                        question:
                            "a computer scientist figuring out how to organize a library's books so they're easy to find is mainly working on...",
                        answers: [
                            "an algorithm and data organization problem",
                            "a hardware repair",
                            "a network security issue",
                            "a video game design",
                        ],
                        correct: 0,
                    },
                    {
                        question: "which statement is most accurate?",
                        answers: [
                            "computer science includes math, logic, and problem solving, not just coding",
                            "all computer scientists write code every single day",
                            "computer science is only for people who want to build websites",
                            "computer science stopped changing once computers were invented",
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
                        question:
                            "which best describes what happens inside an algorithm that finds the largest number in a list?",
                        answers: [
                            "it checks each number and remembers the biggest one it has seen so far",
                            "it deletes every number except one",
                            "it picks a number at random",
                            "it sorts the list alphabetically",
                        ],
                        correct: 0,
                    },
                    {
                        question:
                            "two different algorithms can solve the exact same problem. what might make one 'better' than the other?",
                        answers: [
                            "it might be faster or use less memory",
                            "it uses more lines of code",
                            "it has a more interesting name",
                            "it was written more recently",
                        ],
                        correct: 0,
                    },
                    {
                        question:
                            "why do we say a good algorithm needs to be 'unambiguous'?",
                        answers: [
                            "each step must have exactly one clear meaning, with no guessing",
                            "it must use only numbers",
                            "it must be written in english",
                            "it must never repeat a step",
                        ],
                        correct: 0,
                    },
                ],
            },

            {
                title: "breaking larger problems apart",
                description:
                    "learn how programmers break large problems into smaller, manageable pieces.",
                video: "",
                quiz: [
                    {
                        question:
                            "you're asked to build an app. why start by splitting it into pieces like 'login', 'save data', and 'show results'?",
                        answers: [
                            "each smaller piece is easier to design, build, and test on its own",
                            "smaller pieces make the computer run faster",
                            "apps only work if they're split into pieces",
                            "it's required by every programming language",
                        ],
                        correct: 0,
                    },
                    {
                        question:
                            "this approach of splitting a big problem into smaller ones is often called...",
                        answers: [
                            "decomposition",
                            "debugging",
                            "compilation",
                            "iteration",
                        ],
                        correct: 0,
                    },
                    {
                        question:
                            "which is the best sign that part of a problem still needs to be broken down further?",
                        answers: [
                            "you can't describe how to solve it in a few clear steps",
                            "it only takes one line of code",
                            "it doesn't involve any variables",
                            "someone has solved it before",
                        ],
                        correct: 0,
                    },
                ],
            },

            {
                title: "managing complexity",
                description:
                    "understand how programmers keep big, complicated projects understandable.",
                video: "",
                quiz: [
                    {
                        question:
                            "as a project grows bigger, why do programmers organize it into separate parts instead of one giant tangle?",
                        answers: [
                            "organized parts are easier to understand, change, and fix",
                            "computers can only run small projects",
                            "big projects don't need any organization",
                            "organizing removes the need to ever test anything",
                        ],
                        correct: 0,
                    },
                    {
                        question: "abstraction means...",
                        answers: [
                            "hiding unnecessary details so you can focus on what matters",
                            "removing every instruction from a project",
                            "making a project run without any logic at all",
                            "deleting parts of a project you don't like",
                        ],
                        correct: 0,
                    },
                    {
                        question:
                            "when you press a video game's jump button, you don't need to know how the game calculates gravity behind the scenes. this is an example of...",
                        answers: [
                            "abstraction",
                            "debugging",
                            "an algorithm",
                            "input",
                        ],
                        correct: 0,
                    },
                ],
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
                        question: "a variable is best thought of as...",
                        answers: [
                            "a labeled container that holds a value which can change",
                            "a fixed number that never changes",
                            "a type of loop",
                            "a command that prints text",
                        ],
                        correct: 0,
                    },
                    {
                        question:
                            "if score = 5, and then the program runs score = score + 5, what does score hold now?",
                        answers: ["10", "5", "0", "55"],
                        correct: 0,
                    },
                    {
                        question:
                            "why do programmers give variables meaningful names like totalPrice instead of x?",
                        answers: [
                            "it makes the code easier for humans to read and understand",
                            "the computer runs the code faster",
                            "it's required for the code to work at all",
                            "it uses less computer memory",
                        ],
                        correct: 0,
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
                        question:
                            "when a weather app asks you to type in your zip code, that's an example of...",
                        answers: ["input", "output", "a loop", "a bug"],
                        correct: 0,
                    },
                    {
                        question: "which of these is output, not input?",
                        answers: [
                            "a program printing 'game over' on the screen",
                            "a player pressing the spacebar",
                            "a user typing their name",
                            "a sensor collecting temperature data",
                        ],
                        correct: 0,
                    },
                    {
                        question:
                            "why do most useful programs need both input and output?",
                        answers: [
                            "input lets a program react to the world, output lets it share results",
                            "computers physically cannot run without both",
                            "input and output are actually the same thing",
                            "output is only ever used for error messages",
                        ],
                        correct: 0,
                    },
                ],
            },

            {
                title: "conditionals",
                description:
                    "learn how programs make decisions.",
                video: "",
                quiz: [
                    {
                        question:
                            "an if/else statement is used when a program needs to...",
                        answers: [
                            "make a decision between two or more possible actions",
                            "repeat the same action many times",
                            "store information permanently",
                            "connect to the internet",
                        ],
                        correct: 0,
                    },
                    {
                        question:
                            "a program's rule is: if age is 13 or older, show 'teen'. otherwise, show 'kid'. if someone is exactly 13, what does it show?",
                        answers: ["teen", "kid", "nothing", "an error"],
                        correct: 0,
                    },
                    {
                        question:
                            "why might a program use a condition instead of always doing the exact same thing every time?",
                        answers: [
                            "conditions let the program react differently depending on the situation",
                            "conditions make a program run without any variables",
                            "conditions remove the need for any decision making",
                            "conditions only work with numbers, never text",
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
                        question: "a loop is most useful when you need to...",
                        answers: [
                            "repeat an action multiple times without rewriting the code",
                            "make a single decision",
                            "store one piece of data",
                            "connect two computers",
                        ],
                        correct: 0,
                    },
                    {
                        question:
                            "a loop is set up to repeat an action exactly 6 times. how many times does that action happen in total?",
                        answers: ["6", "5", "7", "infinite"],
                        correct: 0,
                    },
                    {
                        question:
                            "what's the risk of writing a loop whose condition never becomes false?",
                        answers: [
                            "it becomes an infinite loop that never stops on its own",
                            "it will run exactly once",
                            "it will automatically fix itself",
                            "it deletes the variable it's using",
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
                            "why wrap a block of code in a function instead of copying and pasting it everywhere it's needed?",
                        answers: [
                            "so it can be reused and updated in one single place",
                            "functions make code run on any computer automatically",
                            "functions remove the need for variables entirely",
                            "copying code isn't allowed in programming",
                        ],
                        correct: 0,
                    },
                    {
                        question:
                            "imagine a function built to add two numbers together. the two numbers you hand it to work with are called...",
                        answers: [
                            "parameters",
                            "loops",
                            "variables that never change",
                            "outputs",
                        ],
                        correct: 0,
                    },
                    {
                        question:
                            "when a function finishes calculating something, how does it hand that result back to whoever asked for it?",
                        answers: [
                            "it sends the result back as an output value",
                            "it ends the entire program immediately",
                            "it starts a brand new loop",
                            "it displays a value directly on the screen",
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
                title: "debugging / testing",
                description:
                    "learn how programmers find, fix, and verify problems in their programs.",
                video: "",
                quiz: [
                    {
                        question:
                            "your program crashes every time a user enters a negative number. what's the first debugging step?",
                        answers: [
                            "try to reproduce the problem and figure out exactly where it happens",
                            "delete the whole program and start over",
                            "ignore it since negative numbers are rare",
                            "add more features instead",
                        ],
                        correct: 0,
                    },
                    {
                        question: "what is a 'test case'?",
                        answers: [
                            "a specific input paired with the expected correct output",
                            "a type of bug",
                            "a loop that never ends",
                            "a variable that stores test scores",
                        ],
                        correct: 0,
                    },
                    {
                        question:
                            "why is it important to test 'edge cases' like empty input or very large numbers?",
                        answers: [
                            "bugs often hide in unusual situations a program doesn't expect",
                            "edge cases are the only inputs that ever matter",
                            "normal inputs never cause bugs",
                            "testing edge cases is optional for good code",
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
                            "two algorithms solve the same problem, but one finishes in 1 second and the other in 1 hour on the same input. what does this measure?",
                        answers: [
                            "efficiency",
                            "readability",
                            "creativity",
                            "security",
                        ],
                        correct: 0,
                    },
                    {
                        question:
                            "as the size of the input grows (say, a list of 10 vs. a list of 10,000), why do programmers care how an algorithm's runtime grows?",
                        answers: [
                            "a slow algorithm can become unusably slow on large inputs",
                            "runtime never actually changes with input size",
                            "bigger inputs always run faster",
                            "efficiency only matters for tiny programs",
                        ],
                        correct: 0,
                    },
                    {
                        question:
                            "which is an example of a program using resources efficiently?",
                        answers: [
                            "it finds the answer using the least necessary time and memory",
                            "it uses as many variables as possible",
                            "it has the most lines of code",
                            "it runs the same task twice to double-check",
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
                title: "version control",
                description:
                    "learn how programmers track changes to their code and collaborate without overwriting each other's work.",
                video: "",
                quiz: [
                    {
                        question:
                            "you're working on a project with 3 friends and everyone needs to edit the same code without overwriting each other's work. what tool is designed for this?",
                        answers: [
                            "version control (like git)",
                            "a loop",
                            "a variable",
                            "a function",
                        ],
                        correct: 0,
                    },
                    {
                        question:
                            "what does 'committing' changes in a version control system do?",
                        answers: [
                            "saves a snapshot of your code at that point in time, with a description",
                            "permanently deletes old code",
                            "runs the program automatically",
                            "connects your computer to the internet",
                        ],
                        correct: 0,
                    },
                    {
                        question:
                            "why is version control especially useful if a new change breaks your program?",
                        answers: [
                            "you can go back to a previous working version",
                            "it prevents you from ever writing bugs",
                            "it automatically fixes your code for you",
                            "it deletes your bad changes forever",
                        ],
                        correct: 0,
                    },
                ],
            },

            {
                title: "networks / the internet",
                description:
                    "learn how computers communicate with each other.",
                video: "",
                quiz: [
                    {
                        question:
                            "when you load a webpage, your computer is mainly...",
                        answers: [
                            "sending a request to another computer and receiving data back",
                            "storing the entire internet locally",
                            "running a loop forever",
                            "creating a new variable",
                        ],
                        correct: 0,
                    },
                    {
                        question: "the internet is best described as...",
                        answers: [
                            "a huge network of interconnected networks",
                            "one single giant computer",
                            "one company's private server",
                            "a programming language",
                        ],
                        correct: 0,
                    },
                    {
                        question:
                            "why is data usually broken into smaller 'packets' before being sent across a network?",
                        answers: [
                            "packets can travel independently and be reassembled, making transmission more reliable",
                            "packets make data disappear if it's ever lost",
                            "a computer can only ever send one packet",
                            "it's required to connect to wifi",
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
                            "which password is generally the most secure?",
                        answers: [
                            "a long, random mix of letters, numbers, and symbols",
                            "your pet's name",
                            "'password123'",
                            "the same password you use everywhere",
                        ],
                        correct: 0,
                    },
                    {
                        question: "what is 'phishing'?",
                        answers: [
                            "tricking someone into giving up sensitive information, often through fake messages",
                            "a type of virus that only deletes photos",
                            "a way to speed up your internet connection",
                            "a method for encrypting data",
                        ],
                        correct: 0,
                    },
                    {
                        question:
                            "why do companies release regular software updates?",
                        answers: [
                            "updates often patch security weaknesses that attackers could exploit",
                            "updates always add fun new features",
                            "updates make old software illegal to use",
                            "updates are only ever needed once a year",
                        ],
                        correct: 0,
                    },
                ],
            },

            {
                title: "artificial intelligence",
                description:
                    "get an introduction to how modern ai systems learn and where their limits are.",
                video: "",
                quiz: [
                    {
                        question:
                            "at a basic level, how do many modern ai systems 'learn'?",
                        answers: [
                            "by finding patterns in large amounts of data",
                            "by being explicitly programmed with every possible answer",
                            "by guessing randomly forever",
                            "by directly copying a human brain",
                        ],
                        correct: 0,
                    },
                    {
                        question:
                            "why might an ai system trained mostly on biased or incomplete data produce biased results?",
                        answers: [
                            "the system learns patterns from the data it's given, including its flaws",
                            "ai systems are immune to the data they're trained on",
                            "bias only ever affects hardware, not software",
                            "ai systems randomly ignore their training data",
                        ],
                        correct: 0,
                    },
                    {
                        question:
                            "which of these is a real limitation of today's ai systems?",
                        answers: [
                            "they can produce confident-sounding answers that are actually wrong",
                            "they always understand context perfectly",
                            "they never require any data to function",
                            "they can never be used to help write code",
                        ],
                        correct: 0,
                    },
                ],
            },
        ],

        finalTest: [
            {
                question: "what is the main goal of an algorithm?",
                answers: [
                    "to provide a clear, step-by-step way to solve a problem",
                    "to make code as long as possible",
                    "to replace the need for computers",
                    "to store data permanently",
                ],
                correct: 0,
            },
            {
                question:
                    "why do programmers break large problems into smaller ones?",
                answers: [
                    "smaller pieces are easier to design, test, and fix",
                    "it makes programs run on fewer computers",
                    "it removes the need to test anything",
                    "it's required by every programming language",
                ],
                correct: 0,
            },
            {
                question: "a variable is best described as...",
                answers: [
                    "a named container that holds a value which can change",
                    "a permanent, unchangeable number",
                    "a type of loop",
                    "a network connection",
                ],
                correct: 0,
            },
            {
                question: "which of these is input, not output?",
                answers: [
                    "a user typing a search query",
                    "a program displaying search results",
                    "an error message on screen",
                    "a printed receipt",
                ],
                correct: 0,
            },
            {
                question: "an if/else statement lets a program...",
                answers: [
                    "choose between different actions based on a condition",
                    "repeat an action forever",
                    "store a value permanently",
                    "connect to another computer",
                ],
                correct: 0,
            },
            {
                question:
                    "what's the main risk of a loop whose condition never becomes false?",
                answers: [
                    "it runs forever and can freeze the program",
                    "it stops after exactly one run",
                    "it automatically becomes a function",
                    "it deletes all variables",
                ],
                correct: 0,
            },
            {
                question:
                    "what is the biggest benefit of writing a function instead of repeating code?",
                answers: [
                    "the logic can be reused and updated in a single place",
                    "functions make programs run on any device",
                    "functions eliminate the need for variables",
                    "functions are required to use loops",
                ],
                correct: 0,
            },
            {
                question: "what does debugging mean?",
                answers: [
                    "finding and fixing the cause of a problem in a program",
                    "deleting a program entirely",
                    "writing documentation",
                    "installing new software",
                ],
                correct: 0,
            },
            {
                question:
                    "why do good programmers test with unusual or extreme inputs (edge cases)?",
                answers: [
                    "bugs often show up in situations the code didn't anticipate",
                    "edge cases are the only inputs users ever provide",
                    "testing edge cases is unnecessary if the code compiles",
                    "extreme inputs always crash every program",
                ],
                correct: 0,
            },
            {
                question:
                    "what does it mean for an algorithm to be efficient?",
                answers: [
                    "it solves the problem using a reasonable amount of time and memory",
                    "it uses the maximum number of variables possible",
                    "it is the shortest possible program in every case",
                    "it never needs to be tested",
                ],
                correct: 0,
            },
            {
                question: "what is version control mainly used for?",
                answers: [
                    "tracking changes to code over time and letting people collaborate safely",
                    "encrypting sensitive data",
                    "speeding up a program's runtime",
                    "connecting a computer to wifi",
                ],
                correct: 0,
            },
            {
                question:
                    "what does 'committing' a change do in a version control system?",
                answers: [
                    "saves a snapshot of the code with a description of what changed",
                    "permanently deletes the previous version",
                    "publishes the code to the entire internet",
                    "automatically finds bugs in the code",
                ],
                correct: 0,
            },
            {
                question: "the internet is best described as...",
                answers: [
                    "a massive network of interconnected computer networks",
                    "a single company's private computer",
                    "a programming language",
                    "a type of hardware inside your laptop",
                ],
                correct: 0,
            },
            {
                question:
                    "why is data broken into packets before being sent over a network?",
                answers: [
                    "it makes transmission more reliable and efficient",
                    "it's the only way computers can store data",
                    "it prevents any data from ever being lost",
                    "it slows down the network on purpose",
                ],
                correct: 0,
            },
            {
                question: "which of these is the strongest password practice?",
                answers: [
                    "using a long, unique, random password for each account",
                    "reusing one simple password everywhere",
                    "using your birthday as a password",
                    "sharing your password with close friends",
                ],
                correct: 0,
            },
            {
                question: "what is phishing?",
                answers: [
                    "an attempt to trick someone into revealing sensitive information",
                    "a technique for speeding up software",
                    "a method of encrypting files",
                    "a type of programming loop",
                ],
                correct: 0,
            },
            {
                question:
                    "how do most modern ai systems learn to make predictions?",
                answers: [
                    "by identifying patterns in large sets of training data",
                    "by being manually programmed with every possible answer",
                    "by guessing randomly until they succeed",
                    "by copying code from the internet",
                ],
                correct: 0,
            },
            {
                question:
                    "why can ai systems sometimes give confidently wrong answers?",
                answers: [
                    "they generate responses based on patterns, which don't guarantee accuracy",
                    "ai systems always double-check their answers with a human first",
                    "ai systems only ever answer questions they're certain about",
                    "ai systems never make mistakes once trained",
                ],
                correct: 0,
            },
            {
                question:
                    "what's the relationship between computer science and programming?",
                answers: [
                    "programming is one tool used to apply computer science concepts",
                    "they are exactly the same thing",
                    "computer science is only about hardware",
                    "programming existed before computer science did",
                ],
                correct: 0,
            },
            {
                question:
                    "which best summarizes the overall approach to solving a new programming problem?",
                answers: [
                    "understand it, break it down, plan a solution, implement it, then test and refine",
                    "start writing code immediately without a plan",
                    "copy a solution to a different problem",
                    "skip testing to save time",
                ],
                correct: 0,
            },
        ],
    },
];