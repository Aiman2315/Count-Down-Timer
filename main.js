#!/usr/bin/env node
function countdownTimer(targetDate) {
    const interval = setInterval(() => {
        const currentDate = new Date();
        const timeDifference = targetDate.getTime() - currentDate.getTime();
        if (timeDifference < 0) {
            clearInterval(interval);
            console.log("Countdown finished!");
            return;
        }
        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
        console.log(`Time left: ${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`);
    }, 1000);
}
const targetDate = new Date("2024-05-31T00:00:00");
countdownTimer(targetDate);
export {};
