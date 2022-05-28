// 상수 선언
const label1 = document.getElementById('output-1');
const label2 = document.getElementById('output-2');
const input1 = document.getElementById('input-1');
const output = document.getElementById('output');
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
const start_2 = ': ';
let score = 0;
let lo = 0;
const A = '(a + b)²';
const B = '(a - b)²';
const C = 'a² + b²';
const D = 'a² + b²';
const E = 'a² + 1/a²';
const F = 'a² + 1/a²';
const G = '(a + b)(a - b)';
const H = '(x + a)(x + b)';
const I = '(x - a)(x - b)';
const J = '(ax - b)(cx - d)';
const K = 'a³ + b³';
const L = 'x³ + 1';
const M = 'a³ - b³';
const N = 'x³ - 1';
const O = '(x + a)(x + b)(x + c)';
const P = '(x - a)(x - b)(x - c)';
const Q = '(a + b + c)²';
let b = [
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
    N,
    O,
    P,
    Q,
]
const AA = 'a² + 2ab + b²';
const BB = 'a² - 2ab + b²';
const CC = '(a + b)² - 2ab';
const DD = '(a - b)² + 2ab';
const EE = '(a + 1/a)² - 2';
const FF = '(a - 1/a)² + 2';
const GG = 'a² - b²';
const HH = 'x² + (a + b)x + ab';
const II = 'x² - (a + b)x + ab';
const JJ = 'acx² + (ad + bc)x + bd';
const KK = '(a + b)(a² - ab + b²)';
const LL = '(x + 1)(x² - x + 1)';
const MM = '(a - b)(a² + ab + b²)';
const NN = '(x - 1)}(x² + x + 1)';
const OO = 'x³ + (a + b + c)x² + (ab + bc + ca)x + abc';
const PP = 'x³ - (a + b + c)x² + (ab + bc + ca)x - abc';
const QQ = 'a² + b² + c² + 2(ab + bc + ca)';
let label1_output = [
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
    NN,
    OO,
    PP,
    QQ,
]
correct = '맞히셨습니다.';
incorrect = '맞히지 못하셨습니다. 다시 시도하세요';
correctorincorrect = false;
label2.innerHTML = label1_output[0] + start_2;
outputt.innerHTML = '제출';
function change() {
    if (correctorincorrect == true) {
        lo += 1;
        label2.innerHTML = label1_output[lo] + start_2;
        score += 1;
        console.log(lo);
    }
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
    else if (random1 == b[12]) {
        a1 = b.slice(0, 12);
        a2 = b.splice(13, number-12);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else  if (random1 == b[13]) {
        a1 = b.slice(0, 13);
        a2 = b.splice(14, number-13);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random1 == b[14]) {
        a1 = b.slice(0, 14);
        a2 = b.splice(15, number-14);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random1 == b[15]) {
        a1 = b.slice(0, 15);
        a2 = b.splice(16, number-15);
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
    else if (random2 == b[11]) {
        a1 = b.slice(0, 11);
        a2 = b.splice(12, number-11);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random2 == b[12]) {
        a1 = b.slice(0, 12);
        a2 = b.splice(13, number-12);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random2 == b[13]) {
        a1 = b.slice(0, 13);
        a2 = b.splice(14, number-13);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random2 == b[14]) {
        a1 = b.slice(0, 14);
        a2 = b.splice(15, number-14);
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
    else if (random3 == b[10]) {
        a1 = b.slice(0, 10);
        a2 = b.splice(11, number-10);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random3 == b[11]) {
        a1 = b.slice(0, 11);
        a2 = b.splice(12, number-11);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random3 == b[12]) {
        a1 = b.slice(0, 12);
        a2 = b.splice(13, number-12);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random3 == b[13]) {
        a1 = b.slice(0, 13);
        a2 = b.splice(14, number-13);
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
    else if (random4 == b[9]) {
        a1 = b.slice(0, 9);
        a2 = b.splice(10, number-9);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random4 == b[10]) {
        a1 = b.slice(0, 10);
        a2 = b.splice(11, number-10);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random4 == b[11]) {
        a1 = b.slice(0, 11);
        a2 = b.splice(12, number-11);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random4 == b[12]) {
        a1 = b.slice(0, 12);
        a2 = b.splice(13,);
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
    else if (random5 == b[8]) {
        a1 = b.slice(0, 8);
        a2 = b.splice(9, number-8);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random5 == b[9]) {
        a1 = b.slice(0, 9);
        a2 = b.splice(10, number-9);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random5 == b[10]) {
        a1 = b.slice(0, 10);
        a2 = b.splice(11, number-10);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random5 == b[11]) {
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
    else if (random6 == b[7]) {
        a1 = b.slice(0, 7);
        a2 = b.splice(8, number-7);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random6 == b[8]) {
        a1 = b.slice(0, 8);
        a2 = b.splice(9, number-8);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random6 == b[9]) {
        a1 = b.slice(0, 9);
        a2 = b.splice(10, number-9);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random6 == b[10]) {
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
    else if (random7 == b[6]) {
        a1 = b.slice(0, 6);
        a2 = b.splice(7, number-6);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random7 == b[7]) {
        a1 = b.slice(0, 7);
        a2 = b.splice(8, number-7);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random7 == b[8]) {
        a1 = b.slice(0, 8);
        a2 = b.splice(9, number-8);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random7 == b[9]) {
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
    const random8 = b[Math.floor(Math.random() * b.length)];
    number -= 1;
    console.log(number);
    if (random8 == b[0]) {
        b.shift();
        console.log(b);
    }
    else if (random8 == b[1]) {
        a1 = b.slice(0, 1);
        a2 = b.splice(2, number-1);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random8 == b[2]) {
        a1 = b.slice(0, 2);
        a2 = b.splice(3, number-2);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random8 == b[3]) {
        a1 = b.slice(0, 3);
        a2 = b.splice(4, number-3);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random8 == b[4]) {
        a1 = b.slice(0, 4);
        a2 = b.splice(5, number-4);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random8 == b[5]) {
        a1 = b.slice(0, 5);
        a2 = b.splice(6, number-5);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random8 == b[6]) {
        a1 = b.slice(0, 6);
        a2 = b.splice(7, number-6);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random8 == b[7]) {
        a1 = b.slice(0, 7);
        a2 = b.splice(8, number-7);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random8 == b[8]) {
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
    else if (random9 == b[4]) {
        a1 = b.slice(0, 4);
        a2 = b.splice(5, number-4);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random9 == b[5]) {
        a1 = b.slice(0, 5);
        a2 = b.splice(6, number-5);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random9 == b[6]) {
        a1 = b.slice(0, 6);
        a2 = b.splice(7, number-6);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random9 == b[7]) {
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
    else if (random10 == b[3]) {
        a1 = b.slice(0, 3);
        a2 = b.splice(4, number-3);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random10 == b[4]) {
        a1 = b.slice(0, 4);
        a2 = b.splice(5, number-4);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random10 == b[5]) {
        a1 = b.slice(0, 5);
        a2 = b.splice(6, number-5);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random10 == b[6]) {
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
    }
    else if (random11 == b[2]) {
        a1 = b.slice(0, 2);
        a2 = b.splice(3, number-2);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random11 == b[3]) {
        a1 = b.slice(0, 3);
        a2 = b.splice(4, number-3);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random11 == b[4]) {
        a1 = b.slice(0, 4);
        a2 = b.splice(5, number-4);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random11 == b[5]) {
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
    const random12 = b[Math.floor(Math.random() * b.length)];
    number -= 1;
    console.log(number);
    if (random12 == b[0]) {
        b.shift();
        console.log(b);
    }
    else if (random12 == b[1]) {
        a1 = b.slice(0, 1);
        a2 = b.splice(2, number-1);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random12 == b[2]) {
        a1 = b.slice(0, 2);
        a2 = b.splice(3, number-2);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random12 == b[3]) {
        a1 = b.slice(0, 3);
        a2 = b.splice(4, number-3);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random12 == b[4]) {
        a1 = b.slice(0, 4);
        a2 = b.splice(5, number-4);
        a3 = a1.concat(a2);
        b = a3;
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
    else if (random13 == b[1]) {
        a1 = b.slice(0, 1);
        a2 = b.splice(2, number-1);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random13 == b[2]) {
        a1 = b.slice(0, 2);
        a2 = b.splice(3, number-2);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random13 == b[3]) {
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
    const random14 = b[Math.floor(Math.random() * b.length)];
    if (random14 == b[0]) {
        b.shift();
        console.log(b);
    }
    else if (random14 == b[1]) {
        a1 = b.slice(0, 1);
        a2 = b.splice(2, number-1);
        a3 = a1.concat(a2);
        b = a3;
        console.log(b);
    }
    else if (random14 == b[2]) {
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
    const random15 = b[Math.floor(Math.random() * b.length)];
    if (random15 == b[0]) {
        b.shift();
        console.log(b);
    }
    else if (random15 == b[1]) {
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
    const random16 = b[Math.floor(Math.random() * b.length)];
    if (random16 == b[0]) {
        b.shift();
        console.log(b);
    }
    else {
        b.pop();
        console.log(b);
    }
    const random17 = b[Math.floor(Math.random() * b.length)];
    if (random17 == b[0]) {
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
    fourteenth.innerHTML = random14;
    fifteenth.innerHTML = random15;
    sixteenth.innerHTML = random16;
    seventeenth.innerHTML = random17;
}
duplicate_check();
function iftrue() {
    correctorincorrect = true;
    output.innerHTML = correct;
    change();
}
function iffalse() {
    correctorincorrect = false;
    output.innerHTML = incorrect;
}
outputt.addEventListener('click', function() {
    input = input1.value;
    if (score == 0) {
        if (input == A) {
            iftrue();
        }
        else {
            iffalse();
        }
    }
    else if (score == 1) {
        if (input == B) {
            iftrue();
        }
        else {
            iffalse();
        }
    }
    else if (score == 2) {
        if (input == C) {
            iftrue();
        }
        else {
            iffalse();
        }
    }
    else if (score == 3) {
        if (input == D) {
            iftrue();
        }
        else {
            iffalse();
        }
    }
    else if (score == 4) {
        if (input == E) {
            iftrue();
        }
        else {
            iffalse();
        }
    }
    else if (score == 5) {
        if (input == F) {
            iftrue();
        }
        else {
            iffalse();
        }
    }
    else if (score == 6) {
        if (input == G) {
            iftrue();
        }
        else {
            iffalse();
        }
    }
    else if (score == 7) {
        if (input == H) {
            iftrue();
        }
        else {
            iffalse();
        }
    }
    else if (score == 8) {
        if (input == I) {
            iftrue();
        }
        else {
            iffalse();
        }
    }
    else if (score == 9) {
        if (input == J) {
            iftrue();
        }
        else {
            iffalse();
        }
    }
    else if (score == 10) {
        if (input == K) {
            iftrue();
        }
        else {
            iffalse();
        }
    }
    else if (score == 11) {
        if (input == L) {
            iftrue();
        }
        else {
            iffalse();
        }
    }
    else if (score == 12) {
        if (input == M) {
            iftrue();
        }
        else {
            iffalse();
        }
    }
    else if (score == 13) {
        if (input == N) {
            iftrue();
        }
        else {
            iffalse();
        }
    }
    else if (score == 14) {
        if (input == O) {
            iftrue();
        }
        else {
            iffalse();
        }
    }
    else if (score == 15) {
        if (input == P) {
            iftrue();
        }
        else {
            iffalse();
        }
    }
    else if (score == 16) {
        if (input == Q) {
            iftrue();
        }
        else {
            iffalse();
        }
    }
});