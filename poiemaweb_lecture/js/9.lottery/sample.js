var rng = window.crypto || window.msCrypto
var array = new Uint32Array(6);

window.crypto.getRandomValues(array)
console.log(array.map(num => (num % 45) + 1).sort().join(','));