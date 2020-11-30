'use strict';
const clock = document.querySelector('.clock');

const showTime = () => {
    const time = new Date();
    clock.innerHTML=time.toTimeString().slice(0,8);
    /* clock.innerHTML=`${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}` */
};

setInterval(showTime, 1000);