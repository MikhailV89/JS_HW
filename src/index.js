const userNumber = prompt('Enter number');
const newNumber = userNumber.split('').map(Number);

let allEqual = newNumber[0] === newNumber[1] && newNumber[1] === newNumber[2];
let anyEqual = newNumber[0] ===newNumber[1] || newNumber[1] === newNumber[2] || newNumber[0] ===newNumber[2];

console.log("Чи всі цифри однакові:", allEqual ? "Так" : "Ні");
console.log("Чи є серед цифр цифри однакові:", anyEqual ? "Так" : "Ні");

if (allEqual) {
    console.log("Всі цифри однакові:", newNumber[0]);
} else if (anyEqual) {
    console.log("Серед цифр є однакові:", newNumber[0] === newNumber[1] ? newNumber[0] : (newNumber[0] === newNumber[2] ? newNumber[0] : newNumber[1]));
} else {
    console.log("Цифри не повторюються.");
}