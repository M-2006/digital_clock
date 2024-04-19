function formatTime(time) {
    let hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    const meridiem = hours >= 12 ? "PM" : "AM";

    hours = hours % 12 || 12;

    return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)} ${meridiem}`;
}

function padZero(number) {
    return (number < 10 ? "0" : "") + number;
}

function updateClock() {
    const time = new Date();
    const formattedTime = formatTime(time);
    document.querySelector('.clock span').textContent = formattedTime;
}

setInterval(updateClock, 1000);
