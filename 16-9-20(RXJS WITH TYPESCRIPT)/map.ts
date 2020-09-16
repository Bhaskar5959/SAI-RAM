import { fromEvent, interval } from 'rxjs';
import { concatMap, take } from 'rxjs/operators';

const clicks = fromEvent(document, 'click');
const result = clicks.pipe(
  concatMap(ev => interval(1000).pipe(take(4)))
);
result.subscribe(x => console.log(x));

