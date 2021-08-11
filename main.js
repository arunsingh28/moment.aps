const main = require('./index.js')

/** accept only raw date format
 * @format
 * const time = new Date()
 * pass time varible to getMoment argument
 * const moment = main.getMoment(time)
 * 
 * 
 * @print
 * console.log(moment)
 * */

console.log(Date.now())

// const moment = main.getMoment(1628098960787)
const moment = main.getMoment(1628161891965)

console.log(moment)