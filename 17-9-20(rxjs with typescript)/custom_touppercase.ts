import { Observable, observable, of } from 'rxjs';
const log = (val) => document.write(val);

const toUpperCase = () => (source: Observable<any>) =>
    new Observable(observer => {
        return source.subscribe({
            next(x) {
                observer.next(x.toUpperCase());
            },
            error(err) { observer.error(err); },
            complete() { observer.complete(); }
        });
    });


of('hello').pipe(toUpperCase()).subscribe(log)