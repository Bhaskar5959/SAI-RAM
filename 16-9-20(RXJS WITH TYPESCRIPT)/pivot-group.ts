import { of } from 'rxjs';
import { groupBy, map, mergeMap, reduce } from 'rxjs/operators';

of(
  { id: 1, name: 'JavaScript' },
  { id: 2, name: 'Parcel' },
  { id: 2, name: 'webpack' },
  { id: 1, name: 'TypeScript' },
  { id: 3, name: 'TSLint' }
)
  .pipe(
    groupBy(p => p.id, p => p.name),
    mergeMap(group$ =>
      group$.pipe(reduce((acc, cur) => [...acc, cur], [`${group$.key}`]))
    ),
    map(arr => ({ id: parseInt(arr[0], 10), values: arr.slice(1) }))
 )
 .subscribe(p => console.log(p));

