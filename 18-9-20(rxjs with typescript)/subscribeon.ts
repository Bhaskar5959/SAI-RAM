import { of, merge, asyncScheduler } from 'rxjs';
import { subscribeOn } from 'rxjs/operators';

const a = of(1, 2, 3, 4).pipe(subscribeOn(asyncScheduler));
const b = of(5, 6, 7, 8, 9);
merge(a, b).subscribe(console.log);