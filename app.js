const [hours, minutes, seconds] = document.querySelectorAll('.numbers')
setInterval(() => {
    const date = new Date();
    const [date_hour, date_minute, date_second] = [date.getHours(), date.getMinutes(), date.getSeconds()]
    minutes.textContent = zeroBefore(date_minute)
    hours.textContent = zeroBefore(date_hour)
    seconds.textContent = zeroBefore(date_second)
}, 1000)
const zeroBefore = time => time < 10 ? '0' + time : time;