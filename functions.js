// Function declarations

function greet(lastName = 'Doe', firstName = 'John') {

    return `Hello ${firstName} ${lastName}.`;
};

console.log(greet('Steve', 'Smith'));
// will return 'Hello Smith Steve.'

console.log(greet());
// will return 'Hello John Doe.', b/c of defaults.
