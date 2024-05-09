const numberFromUser = +prompt('Please write number');

const result = numberFromUser.toString().replaceAll('', ' ');
console.log(result);