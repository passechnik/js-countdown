// get the target date 
const endDate = new Date('August 5, 2023 00:00:00').getTime();

// update the countdown timer display
function updateCountdown() {
    const now = new Date().getTime();
    const timeLeft = endDate - now;

    if (timeLeft <= 0) {
        document.getElementById('countdowm').innerHTML = "Countdown expired!"
    } else {
        const days = Math.floor(timeLeft / (1000 * 60 * 60 *24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 *60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        document.getElementById('countdown').innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`
    }
}

setInterval(updateCountdown, 1000);

updateCountdown();