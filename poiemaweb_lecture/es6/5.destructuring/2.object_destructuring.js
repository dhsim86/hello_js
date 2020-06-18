const obj = { firstName: 'dongho', lastName: 'Sim'};
const { lastName, firstName } = obj;
console.log(lastName, firstName);

const { prop1, prop2, prop3 = 'c' } = { prop1: 'a', prop2: 'b'};
console.log(prop1, prop2, prop3);

// nested
const person = {
    name: 'Lee',
    address: {
        zipCode: '03068',
        city: 'Seoul'
    }
};

const { address: { city }} = person;
console.log(city);