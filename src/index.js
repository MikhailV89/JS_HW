const exchangeRate = 26;

for (let dollars = 10; dollars <= 100; dollars += 10) {
    const uaCurrency = dollars * exchangeRate;
    console.log(`${dollars} dollars = ${uaCurrency} hryvnias`)
}