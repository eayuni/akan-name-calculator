const weatherToday = "sunny";

if (weatherToday == "sunny") {
    console.log('You will be fine with a Tshirt');
} else if (weatherToday == "rainy") {
    console.log('Bring a rainjacket');
} else if (weatherToday == "windy") {
    console.log('Bring a wind breaker');
}
else {
    console.log('Bring a jacket')
}

let myNumber = 10;

while (myNumber < 20) {
    console.log('My current number is ', myNumber);
    if (myNumber == 15) {
        console.log('We are at number 15');
        break;
    }
    myNumber += 1;
}

const greatManUtdPlayers = ["Wayne Rooney", "Cristiano Ronaldo", "Paul Scholes", "Denis Irwin"];

const myEmailCreatorFunction = (element) => {
    const userNames = element.split(' ');
    const firstName = userNames[0];
    const lastName = userNames[1];
    const firstLetter = firstName[0];
    const newEmail = firstLetter + lastName + '@moringaschool.com';
    return newEmail;
};

for (let index = 0; index < greatManUtdPlayers.length; index++) {
    // Access an item in the list
    const element = greatManUtdPlayers[index];
    // Assign them emails using an independent piece of work
    const myEmail = myEmailCreatorFunction(element);
    console.log('The user email is ', myEmail);
}

// Functions
function newFunction(firstNumber, secondNumber) {
    return firstNumber * secondNumber;
}

const additionFunction = (number1, number2) => {
    return number1 + number2;
}

const number1 = 100;
const number2 = 20;

const result = newFunction(number1, number2)
console.log('Result ', result)

const additionResult = additionFunction(30, 40);
console.log('Addition Result ', additionResult)

// THIS IS A LINE IN SECONDARY