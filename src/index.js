let value = +prompt('Write number from 1 to 100');
let result = '';


for (let i = 1; i <= 100; i++) {
    if (i * i <= value) {
        result += i + ', ';
    }
}

console.log(result);

