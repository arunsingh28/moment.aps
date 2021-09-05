const date = Date.now();

exports.getMoment = (input_time) => {
    const calulate_time = date - input_time;

    const _second = Math.floor(calulate_time / 1000);
    const _hours = Math.floor(_second / 3600);
    const _min = Math.floor(_second / 60);
    const _day = Math.floor(_hours / 24);
    const _month = Math.floor(_hours * .001369);

    // get current month
    const current_month = new Date
    console.log(current_month.getUTCMonth())

    console.log('min', _min)
    console.log('second', _second)
    console.log('Hours', _hours)
    console.log('day', _day)
    console.log('Month', _month)

    console.log('\n\n\n')
    /**
     * @logic 
     * only for 60 seconds after 60 sec convert to min format and soo on
    */
    if (_second <= 60) {
        return `${_second} Seconds ago`
    }
    if (_min <= 60) {
        return `${_min} mintues ago`
    }
    if (_hours <= 24) {
        return `${_hours} hours ago`
    }
    if (_day >= 1 && _day <= 31) {
        return `${_day} Days ago`
    }
    if (_month >= 1) {
        return `${_month} Months ago`
    }
}
