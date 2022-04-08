// Function declarations

function greet(lastName = 'Doe', firstName = 'John') {

    return `Hello ${firstName} ${lastName}.`;
};

console.log(greet('Steve', 'Smith'));
// will return 'Hello Smith Steve.'

console.log(greet());
// will return 'Hello John Doe.', b/c of defaults.

// Function Expressions

const square = function(x = 3) {
    return x * x;
};

console.log(square(8));
// 64

console.log(square());
// 9

// IMMEDIATELY INVOKABLE FUCTION EXPRESSIONS - IFFEs
// = anonymous function

(function(){
    console.log('IFFE ran...');
})();
