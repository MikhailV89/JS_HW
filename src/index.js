const currentDate = new Date();
const currentYear = currentDate.getFullYear();
const userBirthYear = +prompt('What is your birth year ?');
const userCity = prompt('What is your city?', 'London/Washington/Kyiv');
const userSport = prompt('What is your favorite sport', 'football/boxing/basketball');

let age = null;
let city = '';
let sport = '';

if (!userBirthYear) {
    age = 'It is a pity that you did not want to enter your year of birth.';
} else {
    age = currentYear - userBirthYear;
}

if (!userCity) {
    city = 'It is a pity that you did not want to enter your city.';
} else if (userCity === 'London') {
    city = 'You live in the capital of Great Britain';
} else if (userCity === 'Kyiv') {
    city = 'You live in the capital of Ukraine';
} else if (userCity === 'Washington') {
    city = 'You live in the capital of USA';
} else {
    city = `You live in a town ${userCity}`;
}

if(!userSport) {
    sport = 'It is a pity that you did not want to enter your city.'
} else if (userSport === 'football') {
    sport = 'Cool!!! Do you want to be like Cristiano Ronaldo?';
} else if (userSport === 'basketball') {
    sport = 'Cool!!! Do you want to be like Michael Jordan?'
} else if (userSport === 'boxing') {
    sport = 'Cool!!! Do you want to be like Mike Tyson?';
} else {
    sport = `${userSport} Also a good sport`;
}

alert(`
    ${age}
    ${city}
    ${sport}
`)