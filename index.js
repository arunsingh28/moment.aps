const date = Date.now();

console.log(date)

const input_time = date - 1628098090815;

const second = Math.floor(input_time / 1000)

console.log(`Min ${Math.floor(second / 60)}`)

console.log(`Hours ${Math.floor(second / 3600)}`)

// const minute = date.getMinutes()
// const hours = date.getHours()
// const year = date.getFullYear()



// console.log(minute,hours,year)
