# timepass.aps

calculate time in diffrent format for creating somethig in which you want time like 
- created 20 second ago
- created 4 hours ago
- created 1 month ago
- created 2 year ago

## install package

type this command in terminal to install timepass.aps module

`npm install timepass.aps`

## how to use


while creating there schema include current_time value to db in which store current time `Date.now()`
after that just fetch that value from db and pass into `getMoment()` function and this function will return 
you that value like *created 20 second ago*

```
const apsmoment = require('timepass.aps');

const time = CREATE_DATE_FROM_DB;

const moment = apsmoment.getMoment(time);

console.log(moment);
```

## Finctions

- getMoment()
- getCounter()


## Author

[**Arun singh**](http://github.com/arunsingh28)


