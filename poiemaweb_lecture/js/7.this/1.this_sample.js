function square(number) {
    console.log(this);

    return number * number;
}

square(2);  // 1. Object [global]

var obj = {
    prop: 'test',
    square: square
};

obj.square(2);  // 2. { prop: 'test', square: [Function: square] }

var instance = new square(2); // 3. square {}

var bar = { name: 'bar'};

square.call(bar); // 4. {name : 'bar'}
square.apply(bar);
square.bind(bar)();