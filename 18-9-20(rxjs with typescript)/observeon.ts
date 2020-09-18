import { interval } from 'rxjs';
import { observeOn } from 'rxjs/operators';

const intervals = interval(10);               
intervals.pipe(
  observeOn(animationFrameScheduler),         
)                                              
.subscribe(val => {
  someDiv.style.height = val + 'px';
});