const gameContent = {
    questions: ["What make and model of electric guitar did Tony Iommi famously use?", "Where was Boston's Self Titled Album recorded?", "What guitar legend recorded the solo on Michael Jackon's 'Beat It'?", "What drug was Carlos Santana under the influence of during his famous set at Woodstock?", "Where did Jimmy Hendrix go to be discovered, landing him his first real record deal?"],

    answers: [["Fender Telecaster", "Jackson Flying V", "Gibson SG", "Taylor 144ce"], ["Sound City Studios", "Abbey Road Studios", "A&M Studios", "The guitar player's basement"], ["Eddie Van Halen", "Jeff Beck", "Jimmy Hendrix", "Jimmy Page"], ["Peyote", "LSD", "Magic Mushrooms", "Mescaline"], ["Los Angeles", "New York City", "London", "Detroit"]],

    correctAnswers: ["Gibson SG", "The guitar player's basement", "Eddie Van Halen", "LSD", "London"],

    images: ["assets/img/sg.png", "assets/img/basement.png", "assets/img/evh.png", "assets/img/lsd.png", "assets/img/london.png"]
}

console.log(gameContent.answers[0][0]);

let timeRemaining = 30;
let questionsWrong = 0;
let questionsRight = 0;
let theNumber = 0;
let setIt;
const questionDiv = document.getElementById("question-container");
const timeRemDiv = document.getElementById("time-remaining");
const choice1 = document.getElementById("choice1");
const choice2 = document.getElementById("choice2");
const choice3 = document.getElementById("choice3");
const choice4 = document.getElementById("choice4");

function decrement() {

    timeRemaining--;

    $("#time-remaining").text("Time Remaining: " + timeRemaining);

    if (timeRemaining === 0) {
        stopGameCounter();
        $(".choice-class").css("display", "none");
        questionDiv.textContent = "The answer is " + gameContent.correctAnswers[theNumber];
        timeRemDiv.textContent = "Oops! Fail!";
        $("#img").html("<img src='assets/img/doh.png' width='200px'>");
        $("#img").css("display", "grid");
        theNumber++;
        questionsWrong++;
        timeRemaining = 30;
        setTimeout(theGameItself, 5000);
    }
    
}

function startGameCounter() {
    clearInterval(setIt);
    setIt = setInterval(decrement, 1000);
}

function stopGameCounter() {
    clearInterval(setIt);
}



function theGameItself() {

    questionDiv.textContent = gameContent.questions[theNumber];
    choice1.textContent = gameContent.answers[theNumber][0];
    choice2.textContent = gameContent.answers[theNumber][1];
    choice3.textContent = gameContent.answers[theNumber][2];
    choice4.textContent = gameContent.answers[theNumber][3];

    $("#trivia-heading").css("justify-self", "center");
    stopGameCounter();
    startGameCounter();
    $("#img").css("display", "none");
    $(".choice-class").css("display", "grid");
}



$("#choice1").on("click", function () {
    questionDiv.textContent = "The answer is " + gameContent.correctAnswers[theNumber];
    stopGameCounter();
    $(".choice-class").css("display", "none");
    if (choice1.textContent == gameContent.correctAnswers[theNumber]) {
        timeRemDiv.textContent = "Correct! Rock On!";
        $("#img").html("<img src=" + gameContent.images[theNumber] + " id='thatImg'>");
        $("#img").css("display", "grid");
        theNumber++;
        questionsRight++;
        timeRemaining = 30;
        setTimeout(theGameItself, 5000);
    } else {
        timeRemDiv.textContent = "Oops! Fail!";
        $("#img").html("<img src='assets/img/doh.png' id='thatImg'>");
        $("#img").css("display", "grid");
        theNumber++;
        questionsWrong++;
        timeRemaining = 30;
        setTimeout(theGameItself, 5000);
    }
});

$("#choice2").on("click", function () {
    questionDiv.textContent = "The answer is " + gameContent.correctAnswers[theNumber];
    stopGameCounter();
    $(".choice-class").css("display", "none");
    if (choice2.textContent == gameContent.correctAnswers[theNumber]) {
        timeRemDiv.textContent = "Correct! Rock On!";
        $("#img").html("<img src=" + gameContent.images[theNumber] + " id='thatImg'>");
        $("#img").css("display", "grid");
        theNumber++;
        questionsRight++;
        timeRemaining = 30;
        setTimeout(theGameItself, 5000);
    } else {
        timeRemDiv.textContent = "Oops! Fail!";
        $("#img").html("<img src='assets/img/doh.png' id='thatImg'>");
        $("#img").css("display", "grid");
        theNumber++;
        questionsWrong++;
        timeRemaining = 30;
        setTimeout(theGameItself, 5000);
    }
});

$("#choice3").on("click", function () {
    questionDiv.textContent = "The answer is " + gameContent.correctAnswers[theNumber];
    stopGameCounter();
    $(".choice-class").css("display", "none");
    if (choice3.textContent == gameContent.correctAnswers[theNumber]) {
        timeRemDiv.textContent = "Correct! Rock On!";
        $("#img").html("<img src=" + gameContent.images[theNumber] + " id='thatImg'>");
        $("#img").css("display", "grid");
        theNumber++;
        questionsRight++;
        timeRemaining = 30;
        setTimeout(theGameItself, 5000);
    } else {
        timeRemDiv.textContent = "Oops! Fail!";
        $("#img").html("<img src='assets/img/doh.png' id='thatImg'>");
        $("#img").css("display", "grid");
        theNumber++;
        questionsWrong++;
        timeRemaining = 30;
        setTimeout(theGameItself, 5000);
    }
});

$("#choice4").on("click", function () {
    questionDiv.textContent = "The answer is " + gameContent.correctAnswers[theNumber];
    stopGameCounter();
    $(".choice-class").css("display", "none");
    if (choice4.textContent == gameContent.correctAnswers[theNumber]) {
        timeRemDiv.textContent = "Correct! Rock On!";
        $("#img").html("<img src=" + gameContent.images[theNumber] + " id='thatObstinateImg'>");
        $("#img").css("display", "grid");
        theNumber++;
        questionsRight++;
        timeRemaining = 30;
        setTimeout(theGameItself, 5000);
    } else {
        timeRemDiv.textContent = "Oops! Fail!";
        $("#img").html("<img src='assets/img/doh.png' id='thatImg'>");
        $("#img").css("display", "grid");
        theNumber++;
        questionsWrong++;
        timeRemaining = 30;
        setTimeout(theGameItself, 5000);
    }
});



$("#start-button").on("click", function () {
    $("#start-button,#instructions").css("display", "none");
    $("#question-container,#choices-container,#time-remaining").css("display", "grid");
    theGameItself();
})

