import { interval } from 'rxjs';
import { toArray, take } from 'rxjs/operators';

const source = interval(1000);
const example = source.pipe(
  take(10),
  toArray()
);

const subscribe = example.subscribe(val => console.log(val));

