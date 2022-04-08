const color = 'red';

switch (color) {
    case 'red':
        console.log('RED!');
        break;
    case 'blue':
        console.log('BLUE');
        break;
    default:
        // statements_def
        console.log('Color is neither red nor blue!')
        break;
}


let day;
switch (new Date().getDay()) {
    case 0:
        day = 'Sunday';
        break;
    case 1:
        day = 'Monday';
        break;
    case 2:
        day = 'Tuesday';
        break;
    case 3:
        day = 'Wednesday';
        break;
    case 4:
        day = 'Thursday';
        break;
    case 5:
        day = 'Friday';
        break;
    case 6:
        day = 'Saturday';
        break;
    default:
        // statements_def
        break;
}

console.log(`Today is ${day}.`);
