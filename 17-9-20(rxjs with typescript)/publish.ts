import { of, zip, interval, merge } from "rxjs";
import { map, publish, tap } from "rxjs/operators";

const source$ = zip(interval(2000), of(1, 2, 3, 4, 5, 6, 7, 8, 9)).pipe(
  map(values => values[1])
);

source$
  .pipe(
    publish(multicasted$ =>
      merge(
        multicasted$.pipe(tap(x => console.log('Stream 1:', x))),
        multicasted$.pipe(tap(x => console.log('Stream 2:', x))),
        multicasted$.pipe(tap(x => console.log('Stream 3:', x))),
      )
    )
  )
  .subscribe();

