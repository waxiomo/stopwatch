let hr = 0, min = 0, sec = 0, count = 0;
let timer = false;

document.getElementById("start").addEventListener("click", function() {
    timer = true;
    stopwatch();
});

document.getElementById("stop").addEventListener("click", function() {
    timer = false;
});

document.getElementById("reset").addEventListener("click", function() {
    timer = false;
    hr = 0;
    min = 0;
    sec = 0;
    count = 0;
    updateDisplay();
});

function stopwatch() {
    if (timer) {
        count++;
        if (count == 100) {
            sec++;
            count = 0;
        }
        if (sec == 60) {
            min++;
            sec = 0;
        }
        if (min == 60) {
            hr++;
            min = 0;
        }
        updateDisplay();
        setTimeout(stopwatch, 10);
    }
}

function updateDisplay() {
    document.querySelector(".hr").textContent = hr < 10 ? "0" + hr : hr;
    document.querySelector(".min").textContent = min < 10 ? "0" + min : min;
    document.querySelector(".sec").textContent = sec < 10 ? "0" + sec : sec;
    document.querySelector(".count").textContent = count < 10 ? "0" + count : count;
}
