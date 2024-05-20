const numberRequest = +prompt('Please write number');
let valuePrime = 2;
let resultPrime = true;

while (!numberRequest || isNaN(parseInt(numberRequest))) {
    numberRequest = +prompt('Enter a prime number!');
}

do {
    if (numberRequest % valuePrime === 0 && valuePrime !== numberRequest || numberRequest === 1) {
        resultPrime = false;
    }
    valuePrime++;
} while (valuePrime < numberRequest);

if (resultPrime) {
    console.log(`Число ${numberRequest} є простим числом.`);
} else {
    console.log(`Число ${numberRequest} не є простим числом.`);
}