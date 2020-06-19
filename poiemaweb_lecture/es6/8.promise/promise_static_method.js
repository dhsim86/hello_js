console.log('resolvePromise');
const resolvedPromise = Promise.resolve([1, 2, 3]);
resolvedPromise.then(console.log);

console.log('resolvePromise2');
const resolvedPromise2 = new Promise(resolve => resolve([1, 2, 3]));
resolvedPromise2.then(console.log);

console.log('rejectedPromise');
const rejectedPromise = Promise.reject(new Error('Error!'));
rejectedPromise.catch(console.log);

console.log('Promise.all: resolve');
Promise.all([
    new Promise(resolve => setTimeout(() => resolve(1), 3000)),
    new Promise(resolve => setTimeout(() => resolve(2), 2000)),
    new Promise(resolve => setTimeout(() => resolve(3), 1000))
]).then(console.log)
.catch(console.log);

console.log('Promise.all: reject');
Promise.all([
    new Promise((resolve, reject) => setTimeout(() => reject(new Error('Error 1!')), 3000)),
    new Promise((resolve, reject) => setTimeout(() => reject(new Error('Error 2!')), 2000)),
    new Promise((resolve, reject) => setTimeout(() => reject(new Error('Error 3!')), 1000)),
]).then(console.log)
.catch(console.log);

console.log('Promise.all: no');
Promise.all([1, 2, 3])
.then(items => new Promise(resolve => resolve([0, ...items])))
.then(items => items.map(item => item * item))
.then(console.log)
.catch(console.log)