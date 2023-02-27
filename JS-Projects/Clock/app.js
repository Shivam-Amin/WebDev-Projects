

function setDate() {
    const now = new Date();

    // Second
    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds/60) * 360) + 90;
    document.querySelector('.second-stick').style.transform = `rotate(${secondsDegrees}deg)`;
    
    // Min.
    const mins = now.getMinutes();
    const minsDegrees = ((mins/60) * 360) + 90;
    document.querySelector('.min-stick').style.transform = `rotate(${minsDegrees}deg)`;

    // Hours.
    const hours = now.getHours();
    const hoursDegrees = ((hours/12) * 360) + 90;
    document.querySelector('.hour-stick').style.transform = `rotate(${hoursDegrees}deg)`;
}

console.log(Date());

setInterval(setDate, 1000)
