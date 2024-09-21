var milsecCounter = 0;
var secCounter = 0;
var minCounter = 0;

var min = document.getElementById("min");
var sec = document.getElementById("sec");
var milsec = document.getElementById("milsec");
var counter = 0;
var interval;

function timer() {
    milsecCounter++;
    milsec.innerHTML = milsecCounter;
    console.log(msecCounter);
    if (milsecCounter === 100) {
        secCounter++;
        sec.innerHTML = secCounter;
        milsecCounter = 0;
        if (secCounter === 5) {
            secCounter = 0;
            minCounter++;
            min.innerHTML = minCounter;
        }
    }
}

function startTimer(e) {
    // e.disabled = true
    interval = setInterval(timer, 1000);
}

function stopTimer() {
    clearInterval(interval);
}

function resetTimer() {
    clearInterval(interval);

    min.innerHTML = "00";
    sec.innerHTML = "00";
    milsec.innerHTML = "00";
    secCounter = 0;
    minCounter = 0;
    milsecCounter = 0;
}