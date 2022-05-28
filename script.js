// 상수 선언
const label1 = document.getElementById('output-1');
const label2 = document.getElementById('output-2');
const input1 = document.getElementById('input-1');
const outputt = document.getElementById('outputt');
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
E = 'a² + 1/a²';
F = 'a² + 1/a²';
G = '(a + b)(a - b)';
H = '(x + a)(x + b)';
I = '(x - a)(x - b)';
J = '(ax - b)(cx - bd)';
K = 'a³ + b³';
L= 'x³ + 1';
M = 'a³ - b³';
b = [
    A,
    B,
    C,
    D,
    E,
    F,
    G,
    H,
    I,
    J,
    K,
    L,
    M,
]
AA = 'a² + 2ab + b²';
BB = 'a² - 2ab + b²';
CC = '(a + b)² - 2ab';
DD = '(a - b)² + 2ab';
EE = '(a + 1/a)² - 2';
FF = '(a - 1/a)² + 2';
GG = 'a² + b²';
HH = 'x² + (a + b)x + ab';
II = 'x² - (a + b)x + ab';
JJ = 'acx² + (ad + bc)x + bd';
KK = '(a + b)(a² - ab + b²)';
LL = '(x + 1)(x² - x + 1)';
MM = '(a - b)(a² + ab + b²)';
label1_output = [
    AA,
    BB,
    CC,
    DD,
    EE,
    FF,
    GG,
    HH,
    II,
    JJ,
    KK,
    LL,
    MM,
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
    number -= 1;
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
    else if (random1 == b[4]) {
        a1 = b.slice(0, 4);
        a2 = b.splice(5, number-4);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random1 == b[5]) {
        a1 = b.slice(0, 5);
        a2 = b.splice(6, number-5);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random1 == b[6]) {
        a1 = b.slice(0, 6);
        a2 = b.splice(7, number-6);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random1 == b[7]) {
        a1 = b.slice(0, 7);
        a2 = b.splice(8, number-7);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random1 == b[8]) {
        a1 = b.slice(0, 8);
        a2 = b.splice(9, number-8);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random1 == b[9]) {
        a1 = b.slice(0, 9);
        a2 = b.splice(10, number-9);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random1 == b[10]) {
        a1 = b.slice(0, 10);
        a2 = b.splice(11, number-10);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random1 == b[11]) {
        a1 = b.slice(0, 11);
        a2 = b.splice(12, number-11);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else {
        b.pop();
        console.log(b);
    }
    const random2 = b[Math.floor(Math.random() * b.length)];
    number -= 1;
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
    else if (random2 == b[3]) {
        a1 = b.slice(0, 3);
        a2 = b.splice(4, number-3);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random2 == b[4]) {
        a1 = b.slice(0, 4);
        a2 = b.splice(5, number-4);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random2 == b[5]) {
        a1 = b.slice(0, 5);
        a2 = b.splice(6, number-5);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random2 == b[6]) {
        a1 = b.slice(0, 6);
        a2 = b.splice(7, number-6);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random2 == b[7]) {
        a1 = b.slice(0, 7);
        a2 = b.splice(8, number-7);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random2 == b[8]) {
        a1 = b.slice(0, 8);
        a2 = b.splice(9, number-8);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random2 == b[9]) {
        a1 = b.slice(0, 9);
        a2 = b.splice(10, number-9);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random2 == b[10]) {
        a1 = b.slice(0, 10);
        a2 = b.splice(11, number-10);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else {
        b.pop();
        console.log(b);
    }
    const random3 = b[Math.floor(Math.random() * b.length)];
    number -= 1;
    console.log(number);
    if (random3 == b[0]) {
        b.shift();
        console.log(b);
    }
    else if (random3 == b[1]) {
        a1 = b.slice(0, 1);
        a2 = b.splice(2, number-1);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random3 == b[2]) {
        a1 = b.slice(0, 2);
        a2 = b.splice(3, number-2);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random3 == b[3]) {
        a1 = b.slice(0, 3);
        a2 = b.splice(4, number-3);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random3 == b[4]) {
        a1 = b.slice(0, 4);
        a2 = b.splice(5, number-4);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random3 == b[5]) {
        a1 = b.slice(0, 5);
        a2 = b.splice(6, number-5);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random3 == b[6]) {
        a1 = b.slice(0, 6);
        a2 = b.splice(7, number-6);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random3 == b[7]) {
        a1 = b.slice(0, 7);
        a2 = b.splice(8, number-7);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random3 == b[8]) {
        a1 = b.slice(0, 8);
        a2 = b.splice(9, number-8);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random3 == b[9]) {
        a1 = b.slice(0, 9);
        a2 = b.splice(10, number-9);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else {
        b.pop();
        console.log(b);
    }
    const random4 = b[Math.floor(Math.random() * b.length)];
    number -= 1;
    console.log(number);
    if (random4 == b[0]) {
        b.shift();
        console.log(b);
    }
    else if (random4 == b[1]) {
        a1 = b.slice(0, 1);
        a2 = b.splice(2, number-1);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random4 == b[2]) {
        a1 = b.slice(0, 2);
        a2 = b.splice(3, number-2);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random4 == b[3]) {
        a1 = b.slice(0, 3);
        a2 = b.splice(4, number-3);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random4 == b[4]) {
        a1 = b.slice(0, 4);
        a2 = b.splice(5, number-4);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random4 == b[5]) {
        a1 = b.slice(0, 5);
        a2 = b.splice(6, number-5);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random4 == b[6]) {
        a1 = b.slice(0, 6);
        a2 = b.splice(7, number-6);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random4 == b[7]) {
        a1 = b.slice(0, 7);
        a2 = b.splice(8, number-7);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random4 == b[8]) {
        a1 = b.slice(0, 8);
        a2 = b.splice(9, number-8);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else {
        b.pop();
        console.log(b);
    }
    const random5 = b[Math.floor(Math.random() * b.length)];
    number -= 1;
    console.log(number);
    if (random5 == b[0]) {
        b.shift();
        console.log(b);
    }
    else if (random5 == b[1]) {
        a1 = b.slice(0, 1);
        a2 = b.splice(2, number-1);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random5 == b[2]) {
        a1 = b.slice(0, 2);
        a2 = b.splice(3, number-2);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random5 == b[3]) {
        a1 = b.slice(0, 3);
        a2 = b.splice(4, number-3);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random5 == b[4]) {
        a1 = b.slice(0, 4);
        a2 = b.splice(5, number-4);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random5 == b[5]) {
        a1 = b.slice(0, 5);
        a2 = b.splice(6, number-5);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random5 == b[6]) {
        a1 = b.slice(0, 6);
        a2 = b.splice(7, number-6);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random5 == b[7]) {
        a1 = b.slice(0, 7);
        a2 = b.splice(8, number-7);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else {
        b.pop();
        console.log(b);
    }
    const random6 = b[Math.floor(Math.random() * b.length)];
    number -= 1;
    console.log(number);
    if (random6 == b[0]) {
        b.shift();
        console.log(b);
    }
    else if (random6 == b[1]) {
        a1 = b.slice(0, 1);
        a2 = b.splice(2, number-1);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random6 == b[2]) {
        a1 = b.slice(0, 2);
        a2 = b.splice(3, number-2);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random6 == b[3]) {
        a1 = b.slice(0, 3);
        a2 = b.splice(4, number-3);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random6 == b[4]) {
        a1 = b.slice(0, 4);
        a2 = b.splice(5, number-4);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random6 == b[5]) {
        a1 = b.slice(0, 5);
        a2 = b.splice(6, number-5);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random6 == b[6]) {
        a1 = b.slice(0, 6);
        a2 = b.splice(7, number-6);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else {
        b.pop();
        console.log(b);
    }
    const random7 = b[Math.floor(Math.random() * b.length)];
    number -= 1;
    console.log(number);
    if (random7 == b[0]) {
        b.shift();
        console.log(b);
    }
    else if (random7 == b[1]) {
        a1 = b.slice(0, 1);
        a2 = b.splice(2, number-1);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random7 == b[2]) {
        a1 = b.slice(0, 2);
        a2 = b.splice(3, number-2);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random7 == b[3]) {
        a1 = b.slice(0, 3);
        a2 = b.splice(4, number-3);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random7 == b[4]) {
        a1 = b.slice(0, 4);
        a2 = b.splice(5, number-4);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random7 == b[5]) {
        a1 = b.slice(0, 5);
        a2 = b.splice(6, number-5);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else {
        b.pop();
        console.log(b);
    }
    const random8 = b[Math.floor(Math.random() * b.length)];
    number -= 1;
    console.log(number);
    if (random8 == b[0]) {
        b.shift();
        console.log(b);
    }
    else if (random8 == b[1]) {
        a1 = b.slice(0, 2);
        a2 = b.splice(3, number-2);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random8 == b[2]) {
        a1 = b.slice(0, 3);
        a2 = b.splice(4, number-3);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random8 == b[3]) {
        a1 = b.slice(0, 4);
        a2 = b.splice(5, number-4);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random8 == b[4]) {
        a1 = b.slice(0, 5);
        a2 = b.splice(6, number-5);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else {
        b.pop();
        console.log(b);
    }
    const random9 = b[Math.floor(Math.random() * b.length)];
    number -= 1;
    console.log(number);
    if (random9 == b[0]) {
        b.shift();
        console.log(b);
    }
    else if (random9 == b[1]) {
        a1 = b.slice(0, 1);
        a2 = b.splice(2, number-1);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random9 == b[2]) {
        a1 = b.slice(0, 2);
        a2 = b.splice(3, number-2);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random9 == b[3]) {
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
    const random10 = b[Math.floor(Math.random() * b.length)];
    number -= 1;
    console.log(number);
    if (random10 == b[0]) {
        b.shift();
        console.log(b);
    }
    else if (random10 == b[1]) {
        a1 = b.slice(0, 1);
        a2 = b.splice(2, number-1);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random10 == b[2]) {
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
    const random11 = b[Math.floor(Math.random() * b.length)];
    number -= 1;
    console.log(number);
    if (random11 == b[0]) {
        b.shift();
        console.log(b);
    }
    else if (random11 == b[1]) {
        a1 = b.slice(0, 1);
        a2 = b.splice(2, number-1);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random11 == b[1]) {
        b.pop();
        console.log(b);
    }
    const random12 = b[Math.floor(Math.random() * b.length)];
    number -= 1;
    console.log(number);
    if (random12 == b[0]) {
        b.shift();
        console.log(b);
    }
    else {
        b.pop();
        console.log(b);
    }
    const random13 = b[Math.floor(Math.random() * b.length)];
    number -= 1;
    console.log(number);
    if (random13 == b[0]) {
        b.shift();
        console.log(b);
    }
    first.innerHTML = random1;
    second.innerHTML = random2;
    third.innerHTML = random3;
    forth.innerHTML = random4;
    fifth.innerHTML = random5;
    sixth.innerHTML = random6;
    seventh.innerHTML = random7;
    eight.innerHTML = random8;
    ninth.innerHTML = random9;
    tenth.innerHTML = random10;
    eleventh.innerHTML = random11;
    twelfth.innerHTML = random12;
    thirteenth.innerHTML = random13;
}
duplicate_check();