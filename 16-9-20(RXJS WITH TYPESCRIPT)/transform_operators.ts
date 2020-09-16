import { fromEvent, interval } from 'rxjs';
import { buffer , bufferCount,bufferTime,bufferToggle,bufferWhen } from 'rxjs/operators';

const clicks = fromEvent(document, 'click');
const intervalEvents = interval(1000);
const buffered = intervalEvents.pipe(buffer(clicks));
buffered.subscribe(x => console.log(x));

const buff = clicks.pipe(bufferCount(2, 1));
buff.subscribe(y => console.log(y));

const buf = clicks.pipe(bufferTime(2000, 5000));
buf.subscribe(z => console.log(z));

const bufred = clicks.pipe(bufferWhen(() =>
  interval(1000 + Math.random() * 4000)
));
bufred.subscribe(a => console.log(a));

const openings = interval(1000);
const buffd = clicks.pipe(bufferToggle(openings, i =>
  i % 2 ? interval(500) : EMPTY
));
buffd.subscribe(s => console.log(s));