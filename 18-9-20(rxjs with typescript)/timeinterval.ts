const seconds = interval(1000);

seconds.pipe(timeInterval())
.subscribe(
    value => console.log(value),
    err => console.log(err),
);

seconds.pipe(timeout(900))
.subscribe(
    value => console.log(value),
    err => console.log(err),
);


// {value: 0, interval: 1000}
// {value: 1, interval: 1000}
// {value: 2, interval: 1000}