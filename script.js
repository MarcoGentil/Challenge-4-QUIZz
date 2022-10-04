var questionIndex = 0;
var score = 0;
var currentTime = document.querySelector("#currentTime");
console.log(document.getElementById("currentTime"))
var timer = document.querySelector("#startQuiz");
var questions = document.querySelector("questions");
var wrapper = document.querySelector("#wrapper");
var secondsLeft = 80; 
var holdInterval = 0;
var penalty = 10;
var ulCreate = document.createElement("ul");


var questions = 
    [
        {
            title: "Commonly used data types DO NOT include:",
            choices: ["Strings", "Booleans", "Alerts", "Numbers"],
            answer: "Alerts"
        },
        {
            title: "The condition in an if/else statement is enclosed within _____.",
            choices: ["Quotes", "Curly Brackets", "Parenthesis", "Square Brackets"],
            answer: "Parenthesis"
        },
        {   title: "Arrays in Javascript can be used to store _____.",
            choices: ["Numbers and Strings", "Other Arrays", "Booleans", "All of the Above"],
            answer: "All of the Above"
        },
        {
            title: "String values must be enclosed within  _____ when being assigned to variables.",
            choices: ["Commas", "Curly Brackets", "Quotes", "Parenthesis"],
            answer: "Quotes"
        },
        {
            title: "A very useful tool being used during development and debugging for printing content to the debugger is:",
            choices: ["JavaScript", "Terminal/Bash", "For Loops", "Console.log"],
            answer: "Console.log",
        },
    ];

    timer.addEventListener("click", function() {
        if (holdInterval === 0) {
            holdInterval = setInterval(function() {
                secondsLeft--;
                currentTime.textContent = "Time: " + secondsLeft;

                if (secondsLeft <= 0) {
                clearInterval(holdInterval);
                allDone();
                currentTime.textContent = "Time's Up!";
                }
            }, 1000);
        }
        displayQuestion(questionIndex)
    });

    function displayQuestion(questionIndex) {
        questionsDiv.innerHTML = "";
        ulCreate.innerHTML = "";
        for (var i = 0; i < questions.length; i++) {
            var userQuestion = questions[questionIndex].title;
            var userChoices = questions[questionIndex].choices;
            questionsDiv.textContent = userQuestion;
        }

        userChoices.forEach(function (newItem) {
            var listItem = document.createElement("li");
            listItem.textContent= newItem;
            questionsDiv.appendChild(ulCreate);
            ulCreate.appendChild(listItem);
            listItem.addEventListener("click", (compare));           
        })
    };

    function compare(event) {
        var element = event.target;
        if (element.matches("li")) {
    
            var createDiv = document.createElement("div");
            createDiv.setAttribute("id", "createDiv");
            if (element.textContent == questions[questionIndex].answer) {
                score++;
                createDiv.textContent = "Correct! The answer is:  " + questions[questionIndex].answer;
            } else {
                secondsLeft = secondsLeft - penalty;
                createDiv.textContent = "Incorrect! The correct answer is:  " + questions[questionIndex].answer;
            }
    
        }
        
        questionIndex++;
    
        if (questionIndex >= questions.length) {
            allDone(); 
            createDiv.textContent = "End of quiz!" + " " + "You got  " + score + "/" + questions.length + " Correct!";
        } else {
            displayQuestion(questionIndex);
        }
        questionsDiv.appendChild(createDiv);
    }

    function allDone() {
        questionsDiv.innerHTML = "";
        currentTime.innerHTML = "";
        var createH1 = document.createElement("h1");
        createH1.setAttribute("id", "createH1");
        createH1.textContent = "All Done!"

        questionsDiv.appendChild(createH1);

        var createP = document.createElement("p");
        createP.setAttribute("id", "createP");

        questionsDiv.appendChild(createP);

        if (secondsLeft >= 0) {
            var timeRemaining = secondsLeft;
            var createP2 = document.createElement("p");
            clearInterval(holdInterval);
            createP.textContent = "Your final score is: " + timeRemaining;

            questionsDiv.appendChild(createP2);
        }
         //scoreboard comming soon =(
}