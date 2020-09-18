import { interval } from 'rxjs';
import { publishLast, tap, take } from 'rxjs/operators';

const connectable =
  interval(1000)
    .pipe(
      tap(x => console.log("side effect", x)),
      take(3),
      publishLast());

connectable.subscribe(
  x => console.log(  "Sub. A", x),
  err => console.log("Sub. A Error", err),
  () => console.log( "Sub. A Complete"));

connectable.subscribe(
  x => console.log(  "Sub. B", x),
  err => console.log("Sub. B Error", err),
  () => console.log( "Sub. B Complete"));

connectable.connect();
