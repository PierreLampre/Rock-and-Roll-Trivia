const gameContent = {
    questions: ["What make and model of electric guitar did Tony Iommi famously use?", "Where was Boston's Self Titled Album recorded?", "What guitar legend recorded the solo on Michael Jackon's 'Beat It'?", "What drug was Carlos Santana under the influence of during his famous set at Woodstock?", "Where did Jimmy Hendrix go to be discovered, landing him his first real record deal?"],

    answers: [["Fender Telecaster", "Jackson Flying V", "Gibson SG", "Taylor 144ce"],["Sound City Studios", "Abbey Road Studios", "A&M Studios", "The guitar player's basement"], ["Eddie Van Halen", "Jeff Beck", "Jimmy Hendrix", "Jimmy Page"], ["Peyote", "LSD", "Magic Mushrooms", "Mescaline"], ["Los Angeles", "New York City", "London", "Detroit"]],

    correctAnswers: ["Gibson SG", "The guitar player's basement", "Eddie Van Halen", "LSD", "London"]
}

console.log(gameContent.answers[0][0]);

let timeRemaining = 30;
let questionsWrong = 0;
let questionsRight = 0;
let theNumber = 0;

function decrement() {

    timeRemaining--;

    $("#time-remaining").text("Time Remaining: " + timeRemaining);

    if (timeRemaining === 0) {
        questionsWrong++;
        theNumber++;
        theGameItself();
    }
  }

function theGameItself() {
    const questionDiv = document.getElementById("question-container");
    const choice1 = document.getElementById("choice1");
    const choice2 = document.getElementById("choice2");
    const choice3 = document.getElementById("choice3");
    const choice4 = document.getElementById("choice4");

    questionDiv.textContent = gameContent.questions[theNumber];
    choice1.textContent = gameContent.answers[theNumber][0];
    choice2.textContent = gameContent.answers[theNumber][1];
    choice3.textContent = gameContent.answers[theNumber][2];
    choice4.textContent = gameContent.answers[theNumber][3];
}

$("#start-button").on("click", function(){
    $("#start-button").css("display", "none");
    $("#question-container,#choices-container,#time-remaining").css("display", "grid");
    setInterval(decrement, 1000);
    theGameItself();
    
})

