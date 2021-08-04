const date = Date.now();
const current = new Date
let current_month = current.getUTCMonth();

exports.getMoment = (input_time) => {
    const calulate_time = date - input_time;

    const _second = Math.floor(calulate_time / 1000);
    const _hours = Math.floor(_second / 3600);
    const _min = Math.floor(_second / 60);
    const _day = Math.floor(_hours / 24);
    const _month = Math.floor(_hours * .001369);
    const _year = Math.floor(_month / 12);


    /** get name of month
    * @access month's total daya
    */
    const getMonth = (current_month) => {
        console.log('Current Month', current_month)
        // check month is is odd or even
        if (current_month % 2) {
            console.log('31')
            return 31
        } else {
            console.log('30')
            return 30
        }
    }

    /**
     * @debuging
     * 
        console.log('min', _min)
        console.log('second', _second)
        console.log('Hours', _hours)
        console.log('day', _day)
        console.log('Month', _month)
        console.log('\n\n\n')
    */


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
    if (_hours < 24) {
        return `${_hours} hours ago`
    }
    if (_day >= 1 && _day <= getMonth(current_month)) {
        return `${_day} Days ago`
    }
    if (_month >= 1 && _month <= 12) {
        return `${_month} Months ago`
    } else {
        return `${_year} Year ago`
    }
}



/**
    @author Arun pratap singh (github.com/arunsingh28)
*/