// practice problem one
const multiply = (num1, num2, num3) => num1 * num2 * num3;
const results = multiply(20, 20, 20);
console.log(results);

const multiline = `I am a web Developer.
I love to code.
I love to eat biriany.`;

console.log(multiline);

const numbers = (num1, num2 = 20) => num1 + num2;
const result1 = numbers(10);
console.log(result1);

// practice problem two
const friend = ['tanjed', 'rokon', 'anarul', 'sifat', 'rayhan', 'john'];
const friends = (friendNames) => {
    const myArray = [];
    for (i = 0; i < friendNames.length; i++) {
        const element = friendNames[i];
        if (element.length % 2 === 0) {
            myArray.push(element)
        }
    }
    return myArray
}

const result = friends(friend);
console.log(result);

// practice problem three
const num = [12, 14, 16, 18]
const square = (numbers) => {
    let newArray = [];
    let sum = 0;
    for (const number of numbers) {
        const rk = Math.pow(number, 2);
        newArray.push(rk);
        for(const newnumber of newArray) {
            sum = sum + newnumber;
        }
    }
    const average = sum / newArray.length
    return average;
}

const ck = square(num);
console.log(ck);

// practice problem four
const num1 = [15, 20, 25, 30];
const num2 = [20, 25, 27, 35];

const number = (num1, num2) => {
    const newNumber = [...num1, ...num2];
    const maxNumber = Math.max(...newNumber);
    return maxNumber;
}

const result6 = number(num1, num2);
console.log(result6);