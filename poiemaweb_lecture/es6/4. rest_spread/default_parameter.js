function sum(x, y) {
    return x + y;
}
console.log(sum(1));    // NaN

function sum2(x, y) {
    console.log(arguments); // [Arguments] { '0': 1 }
    x = x || 0;
    y = y || 0;

    return x + y;
}
console.log(sum2.length)    // 2
console.log(sum2(1));       // 1

function sum3(x, y = 0) {
    console.log(arguments); // [Arguments] { '0': 1 }
    return x + y;
}
console.log(sum3.length);   // 1
console.log(sum3(1));   // 1