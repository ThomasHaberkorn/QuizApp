let questions = [
    {
        question: "Welcher Berg ist der höchste Berg der Welt?",
        answer_1: "K2",
        answer_2: "Mount Everest",
        answer_3: "Mount Vesuv",
        answer_4: "Nordwand",
        right_answer: 2,
    },
    {
        question: "Wie heißen die besten Freunde von „Harry Potter“? ",
        answer_1: "Tick,Trick und Track",
        answer_2: "Susi und Strolchi",
        answer_3: "Markus und Susanne",
        answer_4: "Hermine Granger und Ron Weasley",
        right_answer: 4,
    },
    {
        question: "Wofür stehen die olympischen Ringe?",
        answer_1: "Einigkeit und den Sportlern",
        answer_2: "Für die 5 Kontinente",
        answer_3: "Der Weg ist das Ziel",
        answer_4: "Alle Menschen sind gleich",
        right_answer: 2,
    },
    {
        question: "Wie viele Bundesländer hat Deutschland?",
        answer_1: "12",
        answer_2: "14",
        answer_3: "16",
        answer_4: "17",
        right_answer: 3,
    },
    {
        question: "Was ist der längste Fluss der Welt?",
        answer_1: "Der Amazonas",
        answer_2: "Der Rhein",
        answer_3: "Der Niger",
        answer_4: "Der Nil",
        right_answer: 4,
    },
    {
        question: "In welchem dieser Filme spielt Leonardo DiCaprio NICHT mit?",
        answer_1: "12 Years a Slave",
        answer_2: "The Wolf of Wallstreet",
        answer_3: "Aviator",
        answer_4: "The Revenant",
        right_answer: 1,
    },
    {
        question: "Wie viele Tasten hat ein Klavier",
        answer_1: "74 Tasten",
        answer_2: "86 Tasten",
        answer_3: "82 Tasten",
        answer_4: "88 Tasten",
        right_answer: 4,
    },
];

let currentQuestion = 0;

function init() {
    initNumberField();
    showQuestion();
}

function initNumberField() {
    document.getElementById("NumberFieldAll").innerHTML = questions.length;
}

function showQuestion() {
    let question = questions[currentQuestion];
    document.getElementById("questionTitle").innerHTML = question["question"];
    document.getElementById("answer_1").innerHTML = question["answer_1"];
    document.getElementById("answer_2").innerHTML = question["answer_2"];
    document.getElementById("answer_3").innerHTML = question["answer_3"];
    document.getElementById("answer_4").innerHTML = question["answer_4"];
}

function checkAnswer(selection) {
    let question = questions[currentQuestion];
    let qNum = +selection.slice(-1);
    if (qNum == question["right_answer"]) {
        document
            .getElementById(selection)
            .parentNode.classList.add("bg-success");
        ("green");
    } else {
        document
            .getElementById(selection)
            .parentNode.classList.add("bg-danger");
    }
}
