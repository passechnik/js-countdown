// get the target date 
const endDate = new Date('August 5, 2023 00:00:00').getTime();

// update the countdown timer display
function updateCountdown() {
    const now = new Date().getTime();
    const timeLeft = endDate - now;

    if (timeLeft <= 0) {
        document.getElementById('countdowm').innerHTML = "Countdown expired!"
    } else {
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        document.getElementById('countdown').innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`
    }
}

setInterval(updateCountdown, 1000);

updateCountdown();

// function to calculate the time difference between two dates
function getTimeRemaining(endTime) {
    const total = Date.parse(endTime) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
    const days = Math.floor(total / (1000 * 60 * 60 * 24));
    return {
        total,
        days,
        hours,
        minutes,
        seconds
    };
}

// function to update the countdown display
function updateTripCountdown(endTime) {
    const countdownElement = document.getElementById("trip-countdown");

    function update() {
        const timeRemaining = getTimeRemaining(endTime);
        if (timeRemaining.total <= 0) {
            clearInterval(interval);
            countdownElement.textContent = "Trip Time!";
        } else {
            countdownElement.textContent = `Trip in ${timeRemaining.days} days, ${timeRemaining.hours} hours, ${timeRemaining.minutes} minutes, ${timeRemaining.seconds} seconds`;
        }
    }

    update(); // call once to display initial countdown

    // update countdown every second
    const interval = setInterval(update, 1000);
}

// event listener for the "Start Countdown" button
document.getElementById("start-countdown").addEventListener("click", function () {
    const tripDateInput = document.getElementById("trip-date");
    const tripDate = tripDateInput.value;
    if (tripDate) {
        updateTripCountdown(tripDate);
    } else {
        alert("Please select a valid trip date.");
    }
});

// make a change date button

let interval

function stopCountdown() {
    clearInreval(interval);
}

function startCountdown(endTime) {
    interval = setInterval(updateCountdown, 1000,  endTime)
}