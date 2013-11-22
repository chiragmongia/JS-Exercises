var Quiz = function() {
  this.init();
}

Quiz.prototype = {
  init: function() {
    // initialization
    this.questionData = {};
    this.correctAnswerCount     = 0;
    this.maxQuestions           = 20;
    this.questionString         = [];
    this.answer                 = document.getElementsByName("answer")[0];
    this.scoreTextElement       = document.getElementById("score");
    this.questionDiv            = document.getElementById("question");
    this.nextBtn                = document.getElementById("nextBtn");
    this.submitBtn              = document.getElementById("submitBtn");
    this.firstOperandElement    = document.getElementById("operand1");
    this.secondOperandElement   = document.getElementById("operand2");
    this.operatorSymbolElement  = document.getElementById("operator");    
    this.questionNumber         = document.getElementById("questionNumber");

    // invoke methods
    this.generateQuestions();
    this.BindEventForSubmitButton();
    this.evaluateResultOnNextButtonClick();
  },

  generateRandomNumAndOperator: function() {
    this.operator;
    this.operatorSymbol;
    this.number1        = Math.floor((Math.random() * 20) + 1);
    this.number2        = Math.floor((Math.random() * 20) + 1);
    this.numForOperator = Math.floor((Math.random() * 4) + 1);

    switch(this.numForOperator) {
      case 1: this.operator = function(first, second) {
                           return first + second;
                         };
              this.operatorSymbol = "+";
              break;

      case 2: this.operator = function(first, second) {
                           return first - second;
                         };
              this.operatorSymbol = "-";
              break;

      case 3: this.operator = function(first, second) {
                           return first * second;
                         };
              this.operatorSymbol = "*";
              break;

      case 4: this.operator = function(first, second) {
                           return first / second;
                         };;
              this.operatorSymbol = "/";
              break;
    }
  },

  generateQuestions: function() {
    for ( i = 1; i <= this.maxQuestions; i++) {
      this.generateRandomNumAndOperator();
      this.questionData[i] = 
        {
          "number1":        this.number1, 
          "number2":        this.number2,
          "operator":       this.operator,
          "operatorSymbol": this.operatorSymbol,
          "correctAnswer":  "", 
          "markedAnswer":   "", 
        };

      this.questionData[i].correctAnswer = this.questionData[i].operator(this.questionData[i].number1, this.questionData[i].number2);
      this.questionData[i].correctAnswer = Math.round(this.questionData[i].correctAnswer * 100)/100;
      this.questionString[i] = ("Question-" + (i) + ": <br/>" + this.questionData[i].number1 + " " + this.questionData[i].operatorSymbol + " " + this.questionData[i].number2 + " = ");
    }
  },

  displayQuestion: function(questionId) {
    this.scoreTextElement.innerHTML      = ("Score: " + this.correctAnswerCount);
    this.firstOperandElement.innerHTML   = this.questionData[questionId].number1;
    this.secondOperandElement.innerHTML  = this.questionData[questionId].number2;
    this.operatorSymbolElement.innerHTML = this.questionData[questionId].operatorSymbol;
    this.questionNumber.innerHTML        = questionId;
  }, 

  BindEventForSubmitButton: function() {
    var obj = this;
    this.submitBtn.addEventListener("click", function() {
      obj.displayResult();
    }, false);
  },

  evaluateResultOnNextButtonClick: function() {
    var obj = this,
        questionId = 1;

    obj.nextBtn.addEventListener("click", function() {
      if (!obj.answer.value.trim()) {
        obj.questionData[questionId].markedAnswer = "Unattempted!";
      }
      else {
        obj.questionData[questionId].markedAnswer = Math.round(obj.answer.value * 100) / 100;
        if ( obj.questionData[questionId].markedAnswer ==  obj.questionData[questionId].correctAnswer)
          ++obj.correctAnswerCount;
      }

      questionId = obj.showNextQuestion(questionId);
    }, false);
  },

  showNextQuestion: function(questionId) {
    if ( questionId == (this.maxQuestions) ) {
      this.displayResult();
    }
    else {
      this.displayQuestion(questionId+1);
      this.answer.value = "";
      this.answer.focus();
      return ++questionId;
    }
  },

  displayResult: function() {
    var i,
        resultString   = [],
        div            = document.createElement("div"),
        containerDiv   = document.createElement("div"),
        finalScore     = document.createElement("p"),
        finalScoreText = document.createTextNode("SCORE");
        heading        = document.createElement("h1"),
        headingText    = document.createTextNode("RESULT");
    
    heading.setAttribute( "class", "resultHeading");
    heading.appendChild(headingText);
    containerDiv.appendChild(heading);

    finalScore.setAttribute("class", "finalScore");
    finalScore.innerHTML = ("<b>Score:</b> " + this.correctAnswerCount);
    containerDiv.appendChild(finalScore);

    for ( i = 1; i <= this.questionString.length - 1; i++) {
      if (this.questionData[i].correctAnswer == this.questionData[i].markedAnswer)
        resultString.push(this.questionString[i] + this.questionData[i].correctAnswer + " Correct!"); 
      else
        resultString.push(this.questionString[i] + this.questionData[i].markedAnswer + "<br/> Correct answer is " + this.questionData[i].correctAnswer);
    }

    for ( i = 0; i < resultString.length; i++) {
      var paraElement = document.createElement("p");
      paraElement.setAttribute( "class", "resultParagraph");
      paraElement.innerHTML = resultString[i];
      div.appendChild(paraElement);
    }

    containerDiv.appendChild(div);
    document.body.innerHTML = containerDiv.innerHTML;
  }
}

window.onload = function() {
  var startBtn      = document.getElementById("startQuiz");
  var quizContainer = document.getElementById("quizContainer");

  startBtn.addEventListener("click", function() {
    var arithmeticQuiz = new Quiz();
    arithmeticQuiz.displayQuestion(1);
    this.style.display = "none";
    quizContainer.style.display = "block";
  }, false);
}