// For Loop

for(let i = 0; i < 10; i++) {

    if (i === 2) {
        console.log('2 is my favorite Number');
        continue;
    }

    if (i === 5) {
        console.log('Hit Number 5. Breaking...');
        break;
    }

    console.log('Number ' + i);

}
