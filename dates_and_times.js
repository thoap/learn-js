let val;

const today = new Date();
let birthday = new Date('1981-09-10 11:25:00');
birthday = new Date('September 10 1981');

val = today.getMonth();
val = today.getDate();
val = today.getDay();
val = today.getFullYear();

console.log(val);
