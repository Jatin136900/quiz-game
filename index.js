let data = [
  {
    question: "What is the capital of India?",
    options: ["Delhi", "Mumbai", "Kolkata", "Chennai"],
    answer: "Delhi"
  },
  {
    question: "Which is the largest ocean?",
    options: ["Atlantic", "Pacific", "Indian", "Arctic"],
    answer: "Pacific"
  },
  {
    question: "What is the capital of Nepal?",
    answer: "Kathmandu",
    options: ["Kathmandu", "Pokhara", "Lalitpur", "Bharatpur"]
  },
  {
    question: "What is the capital of Pakistan?",
    answer: "Islamabad",
    options: ["Karachi", "Rawalpindi", "Islamabad", "Multan"]
  },
  {
    question: "What is 2 + 2 + 2?",
    answer: "6",
    options: ["222", "0", "6", "8"]
  }
];


let userName = localStorage.getItem("loggedInUser");
if (userName) {
  document.getElementById("welcomeUser").textContent = "Welcome, " + userName + "!";
}

let questionElem = document.getElementById("question");
let optionsElems = document.querySelectorAll(".option");
let answerElem = document.getElementById("answer");
let nextBtn = document.getElementById("first");
let quitBtn = document.getElementById("second");

let currentIndex = 0;
let score = 0;

function showQuestion() {
  let currentQuestion = data[currentIndex];
  questionElem.textContent = currentQuestion.question;

  optionsElems.forEach((btn, i) => {
    btn.textContent = currentQuestion.options[i];
    btn.disabled = false;
    btn.style.color = "black";

    let parent = btn.parentElement;
    parent.style.backgroundColor = "#AEC8A4";
    parent.style.margin = "5px";
    parent.style.padding = "0px 20px 20px 20px";
    parent.style.fontSize = "16px";
    parent.style.borderRadius = "12px";
  });

  answerElem.textContent = "";
}

optionsElems.forEach(option => {
  option.addEventListener("click", () => {
    let selected = option.textContent;
    let correct = data[currentIndex].answer;

    if (selected === correct) {
      score++;
      answerElem.textContent = "Correct!";
    } else {
      answerElem.textContent = "Wrong! Correct: " + correct;
    }

    optionsElems.forEach(btn => btn.disabled = true);
  });
});

nextBtn.addEventListener("click", () => {
  currentIndex++;
  if (currentIndex < data.length) {
    showQuestion();
  } else {
    questionElem.textContent = "Quiz Finished!";
    document.querySelector(".options").style.display = "none";
    nextBtn.style.display = "none";
    answerElem.textContent = "Your score: " + score + "/" + data.length;
  }
});

quitBtn.addEventListener("click", () => {
  if (confirm("Do you really want to quit?")) {
    window.location.href = "index.html";
  }
});

document.getElementById("btn").addEventListener("click", () => {
  alert("Logout successful");
  localStorage.removeItem("loggedInUser"); 
  window.location.href = "index.html";
});

showQuestion();
