import { Observable, of } from 'rxjs';
const log = (val) => document.write(val);

// Long Version
const pow = (n: number) => (source: Observable<any>) =>
  new Observable(observer => {
    return source.subscribe({
      next(x) {
        observer.next(
          Math.pow(x, n)
        );
      },
      error(err) { observer.error(err); },
      complete() { observer.complete(); }
    });
  });

// Concise version
import { map } from 'rxjs/operators';

const pow2 = (n: number) => map(x =>
    Math.pow(x as number, n)
);




of(2).pipe(pow(10)).subscribe(log)