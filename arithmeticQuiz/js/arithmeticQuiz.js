var Operator = {
  addition: function(first, second) {
    return first+second;
  },

  subtraction: function(first, second) {
    return first-second;
  },

  multiplication: function(first, second) {
    return first*second;
  },

  division: function(first, second) { 
    return first/second;
  }
}

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
    this.compareResult();
  },

  generateQuestions: function() {
    var obj = this;
    var operator,
        operatorSymbol,
        i;

    for ( i = 0; i < obj.maxQuestions; i++) {
      var number1 = Math.floor((Math.random() * 20) + 1);
      var number2 = Math.floor((Math.random() * 20) + 1);
      var numForOperator = Math.floor((Math.random() * 4) + 1);

      switch(numForOperator) {
        case 1: operator = Operator.addition;
                operatorSymbol = "+";
                break;

        case 2: operator = Operator.subtraction;
                operatorSymbol = "-";
                break;

        case 3: operator = Operator.multiplication;
                operatorSymbol = "*";
                break;

        case 4: operator = Operator.division;
                operatorSymbol = "/";
                break;
      }

      obj.questionData.push(
        { "id": i, 
          "number1": number1, 
          "number2": number2,
          "operator": operator,
          "operatorSymbol": operatorSymbol,
          "correctAnswer": "", 
          "markedAnswer": "", 
          "answerStatus": "" }
      );

      obj.questionData[i].correctAnswer = obj.questionData[i].operator(obj.questionData[i].number1, obj.questionData[i].number2);
      obj.questionData[i].correctAnswer = Math.round(obj.questionData[i].correctAnswer * 100)/100;
      obj.questionString[i] = ("Question-" + (i+1) + ": <br/>" + obj.questionData[i].number1 + " " + obj.questionData[i].operatorSymbol + " " + obj.questionData[i].number2 + " = ");
    }
  },

  compareResult: function() {
    var obj = this,
        score = document.getElementById("score");
        score.innerHTML = ("Score: " + obj.correctAnswerCount);
        i = 0;

    obj.questionDiv.innerHTML = obj.questionString[i];

    obj.submitBtn.onclick = function() {
      obj.displayResult();
    }

    obj.nextBtn.onclick = function() {
      if (obj.answer.value.trim() == "") {
        obj.questionData[i].markedAnswer = "Unattempted!"
      }

      else {
        if ( Math.round(obj.answer.value * 100) / 100 ==  obj.questionData[i].correctAnswer) {
          ++obj.correctAnswerCount;
          obj.questionData[i].answerStatus = 1;
          obj.questionData[i].markedAnswer = parseInt(obj.answer.value);
          score.innerHTML = ("Score: " + obj.correctAnswerCount);
        }
        else {
          obj.questionData[i].answerStatus = 0;
          obj.questionData[i].markedAnswer = parseInt(obj.answer.value);;
        }
      }

      if ( i >= (obj.maxQuestions-1) ) {
        obj.displayResult();
      }

      obj.questionDiv.innerHTML = obj.questionString[i+1];
      obj.answer.value = "";
      ++i;
    }
  },

  displayResult: function() {
    var obj          = this,
        i,
        resultString = [],
        div          = document.createElement("div"),
        containerDiv = document.createElement("div"),
        heading      = document.createElement("h1"),
        headingText  = document.createTextNode("RESULT");
    
    heading.style.cssText = "text-align:center;font-size:60px;"
    heading.appendChild(headingText);
    containerDiv.appendChild(heading);

    for ( i = 0; i < obj.questionString.length; i++) {
      if (obj.questionData[i].answerStatus == 1) {
        resultString.push(obj.questionString[i] + obj.questionData[i].correctAnswer + " Correct!");
      }
      else {
        resultString.push(obj.questionString[i] + obj.questionData[i].markedAnswer + "<br/> Correct answer is " + obj.questionData[i].correctAnswer);
      }
    }

    for ( i = 0; i < resultString.length; i++) {
      var paraElement = document.createElement("p");
      paraElement.style.cssText = "margin:30px 0px;text-align:center;font-size:24px;"
      paraElement.innerHTML = resultString[i];
      div.appendChild(paraElement);
    }

    containerDiv.appendChild(div);
    document.write(containerDiv.innerHTML);
  }
}

var arithmeticQuiz = new Quiz();