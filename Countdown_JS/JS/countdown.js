'use strict'

//crear la funcion para obtener le tiempo faltante y recibe un parametro
//de fecha limite
const getRemainTime = deadLine => {
    let now = new Date(),
        //tiempo que hace falta para llegar a esa fecha limite   
        remainTime = (new Date(deadLine) - now + 1000) / 1000,
        remainSeconds = ('0' + Math.floor(remainTime % 60)).slice(-2),
        remainMinutes = ('0' + Math.floor(remainTime / 60 % 60)).slice(-2),
        remainHours = ('0' + Math.floor(remainTime / 3600 % 24)).slice(-2),
        remainDays = Math.floor(remainTime / (3600 * 24));

    return {
        remainTime,
        remainSeconds,
        remainMinutes,
        remainHours,
        remainDays
    }
};
//Aquí se coloca la fecha limite o a la que quieres llegar! 
console.log(getRemainTime('Dec 26 2019 08:49:55 GMT-0500'));

//Crear una funcion que cada segundo vaya dando el dato

const countdown = (deadLine, elem, finalMessage) => {
    const el = document.getElementById(elem);

    const timerUpdate = setInterval(() => {
        let time = getRemainTime(deadLine);
        el.innerHTML = `${time.remainDays} days- ${time.remainHours} hours- ${time.remainMinutes}minutes- ${time.remainSeconds}seconds`;


        if (time.remainTime <= 1) {
            clearInterval(timerUpdate)
            el.innerHTML = finalMessage;
        }
    }, 1000)
}

countdown('Dec 26 2019 08:49:55 GMT-0500', 'clock', '¡Feliz Cumpleaños a mi!');