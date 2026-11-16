let minCounting = document.querySelector(".minutes")
let secCounting = document.querySelector(".seconds")
let milliSecCounting = document.querySelector(".milliseconds")


let milliseconds = 0;
let seconds = 0;
let minutes = 0;
let timer = null;

// function startCount() {
    
// }
// setInterval(() => {
   
//     for (milliSecCounting;  milliSecCounting <= 0;milliSecCounting++) {
//     console.log(milliSecCounting);
    
// }

// }, 8000)  

// Display update function
function updateDisplay() {
    minCounting.textContent = String(minutes).padStart(2, "0");
    secCounting.textContent = String(seconds).padStart(2, "0");
    milliSecCounting.textContent = String(milliseconds).padStart(2, "0");
}

// Play button
function startCount() {

    // Prevent multiple intervals
    if (timer !== null) {
        return;
    }

    timer = setInterval(() => {

        milliseconds++;

        // 100 milliseconds units complete
        if (milliseconds === 100) {
            milliseconds = 0;
            seconds++;
        }

        // 60 seconds complete
        if (seconds === 60) {
            seconds = 0;
            minutes++;
        }

        updateDisplay();

    }, 10);
}

// Pause button
function pauseCount() {

    clearInterval(timer);
    timer = null;

}

// Reset button
function resetCount() {

    clearInterval(timer);
    timer = null;

    milliseconds = 0;
    seconds = 0;
    minutes = 0;

    updateDisplay();
}


