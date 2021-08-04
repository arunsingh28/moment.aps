const date = Date.now();
console.log(date)
exports.getMoment = () => {

    const input_time = date - 1628098960787;

    const _second = Math.floor(input_time / 1000);
    const _hours = Math.floor(_second / 3600);
    const _min = Math.floor(_second / 60)




    /** for seconds
     * @logic 
     * only for 60 seconds after 60 sec convert to min format
    */

    if (_second <= 60) {
        console.log(`${_second} second ago`)
    }
    if (_second >= 60) {
        console.log(`${_min} minute ago`)
    }
    if (_min >= 60) {
        console.log(`${_hours} hours ago`)
    }
}
