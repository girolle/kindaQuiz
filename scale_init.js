var windowHeight = 0.99 * document.documentElement.clientHeight;
var windowWidth = 0.99 * document.documentElement.clientWidth;

var quizWidth;
if (windowWidth > 1000) {quizWidth =  "950px";}
else {quizWidth = (0.95 * windowWidth) + "px";}

var h1Size;
if (parseInt(quizWidth) / 15 > 30 ) {h1Size = 30 + "px";}
else {h1Size = (parseInt(quizWidth) / 20) + "px";}



$("#q0")[0].style.width = quizWidth;
$("#q1")[0].style.width = quizWidth;
$("#q2")[0].style.width = quizWidth;
$("#q3")[0].style.width = quizWidth;
$("#q4")[0].style.width = quizWidth;
$("#q5")[0].style.width = quizWidth;
$("#q6")[0].style.width = quizWidth;
$("#q7")[0].style.width = quizWidth;



