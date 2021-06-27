var rng = window.crypto || window.msCrypto
var array = new Uint8Array(6);
var result;
var count = 0;

while (count < 5) {
    window.crypto.getRandomValues(array)
    result = Array.from(new Set(array.map(num => (num % 45) + 1).sort()));

    if (result.length < 6) {
        continue;
    } else {
        console.log(result.join(','));
        count++;
    }
}