var seconds = interval(1000);
seconds.pipe(timeInterval())
    .subscribe(function (value) { return console.log(value); }, function (err) { return console.log(err); });
seconds.pipe(timeout(900))
    .subscribe(function (value) { return console.log(value); }, function (err) { return console.log(err); });
