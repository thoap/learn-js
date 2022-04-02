const person = {
    firstName: 'Steve',
    lastName: 'Smith',
    age: 36,
    email: 'steve@aol.com',
    hobbies: ['music', 'sports'],
    address: {
        city: 'Miami',
        state: 'FL'
    },
    getBirthYear: function () {
        return 2022 - this.age;
    }
}

let val;

val = person;

val = person.firstName;
val = person.hobbies[1];
val = person.getBirthYear();

console.log(val);

const people = [
    {name: 'John', age: 30},
    {name: 'Mike', age: 23},
    {name: 'Nancy', age: 23}
]

for (let i = 0; i < people.length; i++) {
    console.log(people[i].name);
}
