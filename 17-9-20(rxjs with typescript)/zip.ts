import { zip, of } from 'rxjs';
import { map } from 'rxjs/operators';

let age$ = of<number>(27, 25, 29);
let name$ = of<string>('Foo', 'Bar', 'Beer');
let isDev$ = of<boolean>(true, true, false);

zip(age$, name$, isDev$).pipe(
  map(([age, name, isDev]) => ({ age, name, isDev })),
)
.subscribe(x => console.log(x));
