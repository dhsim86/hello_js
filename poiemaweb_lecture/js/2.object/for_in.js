var person = {
    'first-name': 'Ung-mo',
    'last-name': 'Lee',
    gender: 'male'
};

for (var prop in person) {
    console.log(prop + ': ' + person[prop])
}

var array = ['one', 'two'];
array.name = 'my array';

for (var index in array) {
    console.log(index + ': ' + array[index]);
}

for (var [index, value] of array.entries()) {
    console.log(index + ': ' + value);
}