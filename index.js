
const remainDays = document.getElementById("days");
const reaminHours = document.getElementById("hours");
const remainMin = document.getElementById("min");
const remainSec = document.getElementById("sec");

const d = new Date();
const y = d.getFullYear() +1;
const newYear = `1 jan ${y}`

function countDown(){
    const currentDate = new Date()
    console.log(currentDate);
    const newDate = new Date(newYear);
    console.log(newDate);

    const diffTime = (newDate - currentDate)/1000;
    console.log(diffTime);

    const days = Math.floor(diffTime/3600/24);
    const hours = Math.floor(diffTime/3600)%24;
    const mins = Math.floor(diffTime/60)%60;
    const seconds = Math.floor(diffTime)%60

    remainDays.innerHTML = days;
    reaminHours.innerHTML = timeFormat(hours);
    remainMin.innerHTML = timeFormat(mins);
    remainSec.innerHTML = timeFormat(seconds);

}

setInterval(() => {
    countDown();
},1000); 

function timeFormat(time){
    return time < 10 ? `0${time}` : time;
}
