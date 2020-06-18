const template = `template literal use both 'single quoate' and "double quoate".`
console.log(template)

const htmlTemplate = `
        <ul class="nav-item">
            <li><a href="#Home">Home</a></li>
        </ul>
    `
console.log(htmlTemplate);

// interpolation

const first = "Dongho"
const last = "Sim"

console.log('My name is ' + first + ' ' + last + '.');
console.log(`My name is ${first} ${last}.`);

console.log(`1 + 1 = ${1 + 1}`);