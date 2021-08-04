const date = Date.now();
console.log(date)


exports.getMoment = (input_time) => {


    const calulate_time = date - input_time;

    const _second = Math.floor(calulate_time / 1000);
    const _hours = Math.floor(_second / 3600);
    const _min = Math.floor(_second / 60)


    /**
     * @logic 
     * only for 60 seconds after 60 sec convert to min format and soo on
    */

    if (_second <= 60) {
        return `${_second} second ago`;
    }
    if (_second >= 60) {
        return `${_min} minute ago`;
    }
    if (_min >= 60) {
        return `${_hours} hours ago`;
    }
}
