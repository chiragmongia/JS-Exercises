var Quiz = function() {
  this.init();
}

Quiz.prototype = {
  init: function() {
    this.result;
    this.questionData = [];
    this.correctAnswerCount  = 0;
    this.maxQuestions        = 20;
    this.questionString      = [];
    this.answer              = document.getElementsByName("answer")[0];
    this.questionDiv         = document.getElementById("question");
    this.nextBtn             = document.getElementById("nextBtn");
    this.submitBtn           = document.getElementById("submitBtn");
    this.generateQuestions();
    this.BindEventForSubmitButton();
    this.evaluateResultOnNextButtonClick();
  },

  generateQuestions: function() {
    var obj = this;
    var operator,
        operatorSymbol,
        i;

    for ( i = 0; i < this.maxQuestions; i++) {
      var number1 = Math.floor((Math.random() * 20) + 1);
      var number2 = Math.floor((Math.random() * 20) + 1);
      var numForOperator = Math.floor((Math.random() * 4) + 1);

      switch(numForOperator) {
        case 1: operator = function(first, second) {
                             return first + second;
                           };
                operatorSymbol = "+";
                break;

        case 2: operator = function(first, second) {
                             return first - second;
                           };
                operatorSymbol = "-";
                break;

        case 3: operator = function(first, second) {
                             return first * second;
                           };
                operatorSymbol = "*";
                break;

        case 4: operator = function(first, second) {
                             return first / second;
                           };;
                operatorSymbol = "/";
                break;
      }

      this.questionData.push(
        { "id": (i+1), 
          "number1": number1, 
          "number2": number2,
          "operator": operator,
          "operatorSymbol": operatorSymbol,
          "correctAnswer": "", 
          "markedAnswer": "", 
          "answerStatus": "" }
      );

      this.questionData[i].correctAnswer = this.questionData[i].operator(this.questionData[i].number1, this.questionData[i].number2);
      this.questionData[i].correctAnswer = Math.round(this.questionData[i].correctAnswer * 100)/100;
      this.questionString[i] = ("Question-" + (i+1) + ": <br/>" + this.questionData[i].number1 + " " + this.questionData[i].operatorSymbol + " " + this.questionData[i].number2 + " = ");
    }
  },

  BindEventForSubmitButton: function() {
    var obj = this;
    this.submitBtn.addEventListener("click", function() {
      obj.displayResult();
    }, false);
  },

  evaluateResultOnNextButtonClick: function() {
    var obj = this,
        score = document.getElementById("score");
        score.innerHTML = ("Score: " + this.correctAnswerCount);
        i = 0;

    this.questionDiv.innerHTML = this.questionString[i];

    obj.nextBtn.addEventListener("click", function() {
      if (!obj.answer.value.trim()) {
        obj.questionData[i].markedAnswer = "Unattempted!"
      }

      else {
        if ( Math.round(obj.answer.value * 100) / 100 ==  obj.questionData[i].correctAnswer) {
          ++obj.correctAnswerCount;
          obj.questionData[i].answerStatus = 1;
          obj.questionData[i].markedAnswer = Math.round(obj.answer.value * 100) / 100;
          score.innerHTML = ("Score: " + obj.correctAnswerCount);
        }
        else {
          obj.questionData[i].answerStatus = 0;
          obj.questionData[i].markedAnswer = Math.round(obj.answer.value * 100) / 100;
        }
      }

      if ( i >= (obj.maxQuestions-1) ) {
        obj.displayResult();
      }

      obj.questionDiv.innerHTML = obj.questionString[i+1];
      obj.answer.value = "";
      obj.answer.focus();
      ++i;
    }, false);
  },

  displayResult: function() {
    var obj          = this,
        i,
        resultString = [],
        div          = document.createElement("div"),
        containerDiv = document.createElement("div"),
        heading      = document.createElement("h1"),
        headingText  = document.createTextNode("RESULT");
    
    heading.setAttribute( "class", "resultHeading");
    heading.appendChild(headingText);
    containerDiv.appendChild(heading);

    for ( i = 0; i < this.questionString.length; i++) {
      if (this.questionData[i].answerStatus == 1) {
        resultString.push(this.questionString[i] + this.questionData[i].correctAnswer + " Correct!");
      }
      else {
        resultString.push(this.questionString[i] + this.questionData[i].markedAnswer + "<br/> Correct answer is " + this.questionData[i].correctAnswer);
      }
    }

    for ( i = 0; i < resultString.length; i++) {
      var paraElement = document.createElement("p");
      paraElement.setAttribute( "class", "resultParagraph");
      paraElement.innerHTML = resultString[i];
      div.appendChild(paraElement);
    }

    containerDiv.appendChild(div);
    document.write(containerDiv.innerHTML);
  }
}

window.onload = function() {
  var startBtn      = document.getElementById("startQuiz");
  var quizContainer = document.getElementById("quizContainer");

  startBtn.addEventListener("click", function() {
    var arithmeticQuiz = new Quiz();
    this.style.display = "none";
    quizContainer.style.display = "block";
  }, false);
}