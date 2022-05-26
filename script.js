// 상수 선언
const label1 = document.getElementById('output-1');
const label2 = document.getElementById('output-2');
const input1 = document.getElementById('input-1');
const outputt = document.getElementById('outputt');
const label_1 = document.getElementById('label-1');
const first = document.getElementById('first');
const second = document.getElementById('second');
const third = document.getElementById('third');
const forth = document.getElementById('forth');
const fifth = document.getElementById('fifth');
const sixth = document.getElementById('sixth');
const seventh = document.getElementById('seventh');
const eight = document.getElementById('eight');
const ninth = document.getElementById('ninth');
const tenth = document.getElementById('tenth');
const eleventh = document.getElementById('eleventh');
const twelfth = document.getElementById('twelfth');
const thirteenth = document.getElementById('thirteenth');
const fourteenth = document.getElementById('fourteenth');
const fifteenth = document.getElementById('fifteenth');
const sixteenth = document.getElementById('sixteenth');
const seventeenth = document.getElementById('seventeenth');
const eightteenth = document.getElementById('eightteenth');
const nineteenth = document.getElementById('nineteenth');
const twentieth = document.getElementById('twentieth');
const twentyfirst = document.getElementById('twentyfirst');
const twentysecond = document.getElementById('twentysecond');
// 변수 선언
start_2 = ': ';
score = 0;
lo = 0;
A = '(a + b)²';
B = '(a - b)²';
C = 'a² + b²';
D = 'a² + b²';
b = [
    A,
    B,
    C,
    D,
]
AA = 'a² + 2ab + b²';
BB = 'a² - 2ab + b²';
CC = '(a + b)² - 2ab';
DD = '(a - b)² + 2ab';
label1_output = [
    AA,
    BB,
    CC,
    DD,
]
correct = '맞히셨습니다.';
incorrect = '맞히지 못하셨습니다. 다시 시도하세요';
correctorincorrect = false;
label2.innerHTML = label1_output[0] + start_2;
outputt.innerHTML = '제출';
function change() {
    lo += 1;
    label2.innerHTML = label1_output[lo] + start_2;
    score += 1;
}
console.log(b);
let number = b.length;
function duplicate_check() {
    const random1 = b[Math.floor(Math.random() * b.length)];
    console.log(number);
    if (random1 == b[0]) {
        b.shift();
        console.log(b);
    }
    else if (random1 == b[1]) {
        a1 = b.slice(0, 1);
        a2 = b.splice(2, number-1);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random1 == b[2]) {
        a1 = b.slice(0, 2);
        a2 = b.splice(3, number-2);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random1 == b[3]) {
        a1 = b.slice(0, 3);
        a2 = b.splice(4, number-3);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else {
        b.pop();
        console.log(b);
    }
    number -= 1;
    const random2 = b[Math.floor(Math.random() * b.length)];
    console.log(number);
    if (random2 == b[0]) {
        b.shift();
        console.log(b);
    }
    else if (random2 == b[1]) {
        a1 = b.slice(0, 1);
        a2 = b.splice(2, number-1);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random2 == b[2]) {
        a1 = b.slice(0, 2);
        a2 = b.splice(3, number-2);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else {
        b.pop();
        console.log(b);
    }
    number -= 1;
    const random3 = b[Math.floor(Math.random() * b.length)];
    console.log(number);
    if (random3 == b[0]) {
        b.shift();
        console.log(b);
    }
    else if (random2 == b[1]) {
        a1 = b.slice(0, 1);
        a2 = b.splice(2, number-1);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else {
        b.pop();
        console.log(b);
    }
    number -= 1;
    const random4 = b[Math.floor(Math.random() * b.length)];
    console.log(number);
    if (random4 == b[0]) {
        b.shift();
        console.log(b);
    }
    else {
        b.pop();
        console.log(b);
    }
    const random5 = b[Math.floor(Math.random() * b.length)];
    if (random5 == b[0]) {
        b.shift();
        console.log(b);
    }
    number -= 1;
    first.innerHTML = random1;
    second.innerHTML = random2;
    third.innerHTML = random3;
    forth.innerHTML = random4;
    fifth.innerHTML = random5;
}
duplicate_check();