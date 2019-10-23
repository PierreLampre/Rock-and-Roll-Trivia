const questions = {
    one: {
        text: "What make and model of electric guitar did Tony Iommi famously use?",
        answers: ["Fender Telecaster", "Jackson Flying V", "Gibson SG", "Taylor 144ce"],
        correctAnswer: "Gibson SG",
    },
   two: {
        text: "Where was Boston's Self Titled Album recorded?",
        answers: ["Sound City Studios", "Abbey Road Studios", "A&M Studios","The guitar player's basement"],
        correctAnswer: "The guitar player's basement"
   },
   three: {
        text: "What guitar legend recorded the solo on Michael Jackon's 'Beat It'?",
        answers: ["Jeff Beck", "Eddie Van Halen", "Jimmy Hendrix", "Jimmy Page"],
        correctAnswer: "Eddie Van Halen"
       },
   four: {
       text: "What drug was Carlos Santana under the influence of during his famous set at Woodstock?",
       answers: ["LSD", "Peyote", "Magic Mushrooms", "Mescaline"],
           correctAnswer: "LSD"
   }, 
   five: {
       text: "Where did Jimmy Hendrix go to be discovered, landing him his first real record deal?",
       answers: ["Los Angeles", "New York City", "London", "Detroit"],
       correctAnswer: "London"
   }
}

let timeRemaining = 30;
let questionsWrong = 0;
let questionsRight = 0;

function decrement() {

    timeRemaining--;

    $("#time-remaining").text("Time Remaining: " + timeRemaining);

    if (timeRemaining === 0) {
        questionsWrong++;
    }
  }

$("#start-button").on("click", function(){
    $("#start-button").css("display", "none");
    $("#question-container,#choices-container,#time-remaining").css("display", "grid");
    setInterval(decrement, 1000);
})

