const arr = [1, 2, 3];
const [one, two, three] = arr;

console.log(one, two, three);

const today = new Date();
const formattedDate = today.toISOString().substring(0, 10); // "YYYY-mm-dd"
const [year, month, day] = formattedDate.split('-');
console.log([year, month, day]);