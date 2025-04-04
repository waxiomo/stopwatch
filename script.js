//time setup
var hr = 0;
var min = 0;
var sec = 0;
var count = 0;
var timer = false;

//start button
function start(){
    timer = true;
    stopwatch();
};

//stop button
function stop(){
    timer = false;
};

//reset button
function reset(){
    timer = false;
    hr = 0;
    min = 0;
    sec = 0;
    count = 0;
    document.getElementById("count").innerHTML = "00";
    document.getElementById("sec").innerHTML = "00";
    document.getElementById("min").innerHTML = "00";
    document.getElementById("hr").innerHTML ="00";
};
//stopwatch function
//this function is called every 10ms to update the stopwatch display
function stopwatch(){

//if timer is true, then start the stopwatch
//if timer is false, then stop the stopwatch
    if(timer == true){

        count = count + 1;
        if(count == 100){
            sec = sec + 1;
            count = 0;
        }
        if(sec == 60){
            min = min +1;
            sec = 0;
        }
        if(min == 60){
            hr = hr +1;
            min = 0;
            sec = 0;
        }
//duoble digit display
//variables are created to hold the values of hr, min, sec and count
//these variables are used to display the values in the html document
        var hrString = hr;
        var minString = min;
        var secString = sec;
        var countString = count;
//this is done by adding a 0 in front of the number if it is less than 10
        if(hr < 10){
            hrString = "0" + hrString;
        }
        if(min < 10){
            minString = "0" + minString;
        }
        if(sec < 10){
            secString = "0" + secString;
        }
        if(count < 10){
            countString = "0" + countString;
        }


//display the values in the html document
//the values are displayed in the html document using the innerHTML property
        document.getElementById("count").innerHTML = countString;
        document.getElementById("sec").innerHTML = secString;
        document.getElementById("min").innerHTML = minString;
        document.getElementById("hr").innerHTML = hrString;

        setTimeout("stopwatch()", 10);

    }
}




//**anotyher way to do it**

// let hr = 0, min = 0, sec = 0, count = 0;
// let timer = false;

// document.getElementById("start").addEventListener("click", function() {
//     timer = true;
//     stopwatch();
// });

// document.getElementById("stop").addEventListener("click", function() {
//     timer = false;
// });

// document.getElementById("reset").addEventListener("click", function() {
//     timer = false;
//     hr = 0;
//     min = 0;
//     sec = 0;
//     count = 0;
//     updateDisplay();
// });

// function stopwatch() {
//     if (timer) {
//         count++;
//         if (count == 100) {
//             sec++;
//             count = 0;
//         }
//         if (sec == 60) {
//             min++;
//             sec = 0;
//         }
//         if (min == 60) {
//             hr++;
//             min = 0;
//         }
//         updateDisplay();
//         setTimeout(stopwatch, 10);
//     }
// }

// function updateDisplay() {
//     document.querySelector(".hr").textContent = hr < 10 ? "0" + hr : hr;
//     document.querySelector(".min").textContent = min < 10 ? "0" + min : min;
//     document.querySelector(".sec").textContent = sec < 10 ? "0" + sec : sec;
//     document.querySelector(".count").textContent = count < 10 ? "0" + count : count;
// }
