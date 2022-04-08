// const id = 100;

// if (id == 100) {
//     console.log('CORRECT!');
//     console.log('Be aware, input is a string, but test is on an integer.');
// } else {
//     console.log('INCORRECT!')
// }

// if (id != 100) {
//     console.log('CORRECT!');
// } else {
//     console.log('INCORRECT!');
// }

// // test value and type at the same Time
// if (id === 100) {
//     console.log('CORRECT!');
// } else {
//     console.log('INCORRECT! Given id is different from int 100.');
// }

// Test if undefined
if (typeof id !== 'undefined') {
    console.log(`ID is ${id}`);
} else {
    console.log('There is no variable `id`');
}


const age = 20;
const name = 'Steve';

if (age > 0 && age < 12) {
    console.log(`${name} is a child.`);
} else if (age >= 13 && age <= 19) {
    console.log(`${name} is a teenager`);
} else {
    console.log(`${name} is an adult.`);
}

if (age <= 12 || age >= 65) {
    console.log(`${name} cannot run in the race!`);
} else {
    console.log(`${name} is eligible to run in the race.`);
}
