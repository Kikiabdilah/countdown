const countdown=() => {
    const endDate = new Date("December 31, 2024 00:00:00").getTime()
    const now = new Date().getTime()
    
    const difference = endDate - now
    
    const seconds = 1000
    const minutes = seconds * 60
    const hours = minutes * 60
    const days = hours * 24

    const timeDays = Math.floor(difference /days)
    const timeHours = Math.floor(difference % days / hours )
    const timeMinutes = Math.floor(difference % hours / minutes)
    const timeSeconds = Math.floor(difference % minutes / seconds)
    
    const messageElement = document.getElementById("message");

    if (difference < 0){
    document.getElementById("days").innerHTML = "0";
    document.getElementById("hours").innerHTML = "0";
    document.getElementById("minutes").innerHTML = "0";
    document.getElementById("seconds").innerHTML = "0";

    document.getElementById("message").innerHTML = "Countdown selesai!";
    messageElement.classList.add("show");
    return;
    }

    document.getElementById("days").innerHTML = timeDays
    document.getElementById("hours").innerHTML = timeHours
    document.getElementById("minutes").innerHTML = timeMinutes
    document.getElementById("seconds").innerHTML = timeSeconds

    setInterval(countdown, 1000);
};

countdown();