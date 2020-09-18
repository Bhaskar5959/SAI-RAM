import { interval } from 'rxjs';
import { timeout } from 'rxjs/operators';

const seconds = interval(1000);

seconds.pipe(
  timeout(new Date("December 17, 2020 03:24:00")),
)
.subscribe(
    value => console.log(value), 
                                 
    err => console.log(err)     

);