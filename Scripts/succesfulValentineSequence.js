function moveToValentine()
{
    window.location.href = "valentine_timer.html";
}

function valentineCountdown()
{

    // Set the date we're counting down to
    var countDownDate = new Date("14 Feb, 2023").getTime();

    // Update the count down every 1 second
    var x = setInterval(function() {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="demo"
    document.getElementById("countdown").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";

    // If the count down is finished, write some text
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "Trip Started!";
    }
    }, 1000);
}

function valentineAnswerYes(){
// Get the divs you want to appear and dissappear from the DOM
let answerNo = document.querySelector('#answer-no');
let answerYes = document.querySelector('#answer-yes');
let buttonNo = document.querySelector('#noButton');
let buttonYes = document.querySelector('#yesButton');
    // Set the display style for the two divs when the button is clicked
    buttonNo.style.display = 'none';
    buttonYes.style.display = 'none';
    answerNo.style.display = 'none';
    answerYes.style.display = 'block';

}

function valentineAnswerNo(){
    // Get the divs you want to appear and dissappear from the DOM
    let answerNo = document.querySelector('#answer-no');
    let answerYes = document.querySelector('#answer-yes');
    let buttonNo = document.querySelector('#noButton');
    let buttonYes = document.querySelector('#yesButton');
      // Set the display style for the two divs when the button is clicked
      buttonNo.style.display = 'none';
      buttonYes.style.display = 'none';
      answerYes.style.display = 'none';
      answerNo.style.display = 'block';
}