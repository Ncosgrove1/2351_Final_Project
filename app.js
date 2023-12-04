const data = [
    {
      id: 1,
      question: "Which of these animals is NOT actually a mammal?",
      answers: [
        { answer: "Peacock", isCorrect: true },
        { answer: "Capybara", isCorrect: false },
        { answer: "Monkey", isCorrect: false },
        { answer: "Giraffe", isCorrect: false },
      ],
    },
    {
      id: 2,
      question: "What is a group of cats called:",
      answers: [
        { answer: "A flutter", isCorrect: false },
        { answer: "A catalog", isCorrect: false },
        { answer: "A clowder", isCorrect: true },
        { answer: "A perch", isCorrect: false },
      ],
    },
    {
      id: 1,
      question: " What is a baby hedgehog called?",
      answers: [
        { answer: "Hedgling", isCorrect: false },
        { answer: "Hoglet", isCorrect: true },
        { answer: "Hedgey", isCorrect: false },
        { answer: "Hoggy", isCorrect: false}
      ],
    },
  ];
  
  const gameScreen = document.querySelector(".game");
  const resultScreen = document.querySelector(".result");
  const question = document.querySelector(".question");
  const answersContainer = document.querySelector(".answers");
  const submit = document.querySelector(".submit");
  const play = document.querySelector(".play");
  
  let qIndex = 0;
  let correctCount = 0;
  let wrongCount = 0;
  let total = 0;
  let selectedAnswer;
  
  const playAgain = () => {
    qIndex = 0;
    correctCount = 0;
    wrongCount = 0;
    total = 0;
    showQuestion(qIndex);
  };
  
  play.addEventListener("click",()=>{
    resultScreen.style.display = "none";
    gameScreen.style.display = "block";
    playAgain()
  })
  
  const showResult = () => {
    resultScreen.style.display = "block";
    gameScreen.style.display = "none";
  
    resultScreen.querySelector(
      ".correct"
    ).textContent = `Correct Answers: ${correctCount}`;
  
    resultScreen.querySelector(
      ".wrong"
    ).textContent = `Wrong Answers: ${wrongCount}`;
  
    resultScreen.querySelector(".score").textContent = `Score: ${
      (correctCount - wrongCount) * 10
    }`;
  };
  
  const showQuestion = (qNumber) => {
    if (qIndex === data.length) return showResult();
    selectedAnswer = null;
    question.textContent = data[qNumber].question;
    answersContainer.innerHTML = data[qNumber].answers
      .map(
        (item, index) =>
          `
    <div class="answer">
        <input type="radio" id=${index} name="answer" value=${item.isCorrect} />
        <label for="1">${item.answer}</label>
    </div>
    `
      )
      .join("");
  
    selectAnswer();
  };
  
  const selectAnswer = () => {
    answersContainer.querySelectorAll("input").forEach((el) => {
      el.addEventListener("click", (e) => {
        selectedAnswer = e.target.value;
      });
    });
  };
  
  const submitAnswer = () => {
    submit.addEventListener("click", () => {
      if (selectedAnswer !== null) {
        selectedAnswer === "true" ? correctCount++ : wrongCount++;
        qIndex++;
        showQuestion(qIndex);
      } else alert("Please select an answer!");
    });
  };
  
  showQuestion(qIndex);
  submitAnswer();


  // for the cheaters // 
  
  function loadDoc(url, xFunction) {
    const xhttp=new XMLHttpRequest();
    xhttp.onload = function() {xFunction(this);}
    xhttp.open("GET", url);
    xhttp.send();
  }
  
  function myFunction(xhttp) {
    document.getElementById("cheats").innerHTML =  xhttp.responseText;
  }