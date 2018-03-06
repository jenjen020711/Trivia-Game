//Questions List:
var triviaQuestions = [{
    question: "Question 1: What color is Rudolph's nose?",
    answerList: ["purple", "green", "red", "yellow"],
    answer: 2
},{
    question: "Question 2: What color is the sun?",
    answerList: ["yellow", "brown", "purple", "blue"],
    answer: 0
},{
    question: "Question 3: What color is not one of the colors of the rainbow?",
    answerList: ["orange", "green", "black", "blue"],
    answer: 2
},{
    question: "Question 4: What color is the sky?",
    answerList: ["purple", "blue", "green", "orange"],
    answer: 1
},{
    question: "Question 5: What is the color of grass?",
    answerList: ["red", "blue", "green", "yellow"],
    answer: 2
}];
















//Timer:
document.getElementById('timer').innerHTML =
  03 + ":" + 00;
startTimer();

function startTimer() {
  var presentTime = document.getElementById('timer').innerHTML;
  var timeArray = presentTime.split(/[:]+/);
  var m = timeArray[0];
  var s = checkSecond((timeArray[1] - 1));
  if(s==59){m=m-1}
  //if(m<0){alert('timer completed')}
  
  document.getElementById('timer').innerHTML =
    m + ":" + s;
  setTimeout(startTimer, 1000);
}

function checkSecond(sec) {
  if (sec < 10 && sec >= 0) {sec = "0" + sec}; // add zero in front of numbers < 10
  if (sec < 0) {sec = "59"};
  return sec;
}