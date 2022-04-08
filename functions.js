// Function declarations

function greet(lastName, firstName) {

    return `Hello ${firstName} ${lastName}.`;
};

console.log(greet('Doe', 'John'));
console.log(greet());
// will return 'Hello undefined undefined.'
