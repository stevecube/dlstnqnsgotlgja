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
const twentythird = document.getElementById('twentythird');
const twentyforth = document.getElementById('twentyforth');
const twentyfifth = document.getElementById('twentyfifth');
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
const J = '(ax + b)(cx + d)';
const K = '(ax - b)(cx - d)';
const L = 'a³ + b³';
const M = 'x³ + 1';
const N = 'a³ - b³';
const O = 'x³ - 1';
const P = '(x + a)(x + b)(x + c)';
const Q = '(x - a)(x - b)(x - c)';
const R = '(a + b + c)²';
const S = '(a + b)³';
const T = 'a³ + b³';
const U = 'x³ + 1/x³';
const V = '(a - b)³';
const W = 'a³ - b³';
const X = 'a³ + b³ + c³ - 3abc';
const Y = 'a²+ b³ + c³ - ab - bc - ca';
const Z = '(a² + ab + b²)(a² - ab + b²)';
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
    R,
    S,
    U,
    V,
    W,
    X,
    Y,
    Z,
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
const KK = 'acx² - (ad + bc)x + bd';
const LL = '(a + b)(a² - ab + b²)';
const MM = '(x + 1)(x² - x + 1)';
const NN = '(a - b)(a² + ab + b²)';
const OO = '(x - 1)(x² + x + 1)';
const PP = 'x³ + (a + b + c)x² + (ab + bc + ca)x + abc';
const QQ = 'x³ - (a + b + c)x² + (ab + bc + ca)x - abc';
const RR  = 'a² + b² + c² + 2(ab + bc + ca)';
const SS = 'a³ + 3a²b + 3ab² + b³';
const TT = '(a + b)³ - 3ab(a + b)';
const UU = '(x + 1/x)³ - 3(x + 1/x)';
const VV = 'a³ - 3a²b + 3ab² + b³';
const WW = '(a - b)³ + 3ab(a + b)';
const XX = '1/2(a + b + c){(a - b)²(b - c)²(c - a)²}';
const YY = '1/2{(a - b)²(b - c)²(c - a)²}';
const ZZ = 'a⁴ + a²b² + b⁴';
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
    RR,
    SS,
    UU,
    VV,
    WW,
    XX,
    YY,
    ZZ,
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
function start() {
    b.shift();
    console.log(b);
}
function b1() {
    a1 = b.slice(0, 1);
    a2 = b.splice(2, number-1);
    a3 = a1.concat(a2);
    b = a3;
    console.log(b);
}
function b2() {
    a1 = b.slice(0, 2);
    a2 = b.splice(3, number-2);
    a3 = a1.concat(a2);
    b = a3;
    console.log(b);
}
function b3() {
    a1 = b.slice(0, 3);
    a2 = b.splice(4, number-3);
    a3 = a1.concat(a2);
    b = a3;
    console.log(b);
}
function b4() {
    a1 = b.slice(0, 4);
    a2 = b.splice(5, number-4);
    a3 = a1.concat(a2);
    b = a3;
    console.log(b);
}
function b5() {
    a1 = b.slice(0, 5);
    a2 = b.splice(6, number-5);
    a3 = a1.concat(a2);
    b = a3;
    console.log(b);
}
function b6() {
    a1 = b.slice(0, 6);
    a2 = b.splice(7, number-6);
    a3 = a1.concat(a2);
    b = a3;
    console.log(b);
}
function b7() {
    a1 = b.slice(0, 7);
    a2 = b.splice(8, number-7);
    a3 = a1.concat(a2);
    b = a3;
    console.log(b);
}
function b8() {
    a1 = b.slice(0, 8);
    a2 = b.splice(9, number-8);
    a3 = a1.concat(a2);
    b = a3;
    console.log(b);
}
function b9() {
    a1 = b.slice(0, 9);
    a2 = b.splice(10, number-9);
    a3 = a1.concat(a2);
    b = a3;
    console.log(b);
}
function b10() {
    a1 = b.slice(0, 10);
    a2 = b.splice(11, number-9);
    a3 = a1.concat(a2);
    b = a3;
    console.log(b);
}
function b11() {
    a1 = b.slice(0, 11);
    a2 = b.splice(12, number-11);
    a3 = a1.concat(a2);
    b = a3;
    console.log(b);
}

function b12() {
    a1 = b.slice(0, 13);
    a2 = b.splice(14, number-13);
    a3 = a1.concat(a2);
    b = a3;
    console.log(b);
}
function b13() {
    a1 = b.slice(0, 13);
    a2 = b.splice(14, number-13);
    a3 = a1.concat(a2);
    b = a3;
    console.log(b);
}
function b14() {
    a1 = b.slice(0, 14);
    a2 = b.splice(15, number-14);
    a3 = a1.concat(a2);
    b = a3;
    console.log(b);
}
function b15() {
    a1 = b.slice(0, 15);
    a2 = b.splice(16, number-15);
    a3 = a1.concat(a2);
    b = a3;
    console.log(b);
}
function b16() {
    a1 = b.slice(0, 16);
    a2 = b.splice(17, number-16);
    a3 = a1.concat(a2);
    b = a3;
    console.log(b);
}
function b17() {
    a1 = b.slice(0, 17);
    a2 = b.splice(18, number-17);
    a3 = a1.concat(a2);
    b = a3;
    console.log(b);
}
function b18() {
    a1 = b.slice(0, 18);
    a2 = b.splice(19, number-18);
    a3 = a1.concat(a2);
    b = a3;
    console.log(b);
}
function b19() {
    a1 = b.slice(0, 19);
    a2 = b.splice(20, number-19);
    a3 = a1.concat(a2);
    b = a3;
    console.log(b);
}
function b20() {
    a1 = b.slice(0, 20);
    a2 = b.splice(21, number-20);
    a3 = a1.concat(a2);
    b = a3;
    console.log(b);
}
function b21() {
    a1 = b.slice(0, 21);
    a2 = b.splice(22, number-21);
    a3 = a1.concat(a2);
    b = a3;
    console.log(b);
}
function b22() {
    a1 = b.slice(0, 22);
    a2 = b.splice(23, number-22);
    a3 = a1.concat(a2);
    b = a3;
    console.log(b);
}
function b23() {
    a1 = b.slice(0, 23);
    a2 = b.splice(24, number-23);
    a3 = a1.concat(a2);
    b = a3;
    console.log(b);
}
function end() {
    b.pop();
    console.log(b);
}
console.log(b);
let number = b.length;
function duplicate_check() {
    const random1 = b[Math.floor(Math.random() * b.length)];
    number -= 1;
    console.log(number);
    if (random1 == b[0]) {
        start();
    }
    else if (random1 == b[1]) {
        b1();
    }
    else if (random1 == b[2]) {
        b2();
    }
    else if (random1 == b[3]) {
        b3();
    }
    else if (random1 == b[4]) {
        b4();
    }
    else if (random1 == b[5]) {
        b5();
    }
    else if (random1 == b[6]) {
        b6();
    }
    else if (random1 == b[7]) {
        b7();
    }
    else if (random1 == b[8]) {
        b8();
    }
    else if (random1 == b[9]) {
        b9();
    }
    else if (random1 == b[10]) {
        b10();
    }
    else if (random1 == b[11]) {
        b11();
    }
    else if (random1 == b[12]) {
        b12();
    }
    else  if (random1 == b[13]) {
        b13();
    }
    else if (random1 == b[14]) {
        b14();
    }
    else if (random1 == b[15]) {
        b15();
    }
    else if (random1 == b[16]) {
        b16();
    }
    else if (random1 == b[17]) {
        b17();
    }
    else if (random1 == b[18]) {
        b18();
    }
    else if (random1 == b[19]) {
        b19();
    }
    else if (random1 == b[20]) {
        b20();
    }
    else if (random1 == b[21]) {
        b21();
    }
    else if (random1 == b[22]) {
        b22();
    }
    else if (random1 == b[23]) {
        b23();
    }
    else {
        end();
    }
    const random2 = b[Math.floor(Math.random() * b.length)];
    number -= 1;
    console.log(number);
    if (random2 == b[0]) {
        start();
    }
    else if (random2 == b[1]) {
        b1();
    }
    else if (random2 == b[2]) {
        b2();
    }
    else if (random2 == b[3]) {
        b3();
    }
    else if (random2 == b[4]) {
        b4();
    }
    else if (random2 == b[5]) {
        b5();
    }
    else if (random2 == b[6]) {
        b6();
    }
    else if (random2 == b[7]) {
        b7();
    }
    else if (random2 == b[8]) {
        b8();
    }
    else if (random2 == b[9]) {
        b9();
    }
    else if (random2 == b[10]) {
        b10();
    }
    else if (random2 == b[11]) {
        b11();
    }
    else if (random2 == b[12]) {
        b12();
    }
    else if (random2 == b[13]) {
        b14();
    }
    else if (random2 == b[14]) {
        b14();
    }
    else if (random2 == b[15]) {
        b15();
    }
    else if (random2 == b[16]) {
        b16();
    }
    else if (random2 == b[17]) {
        b17();
    }
    else if (random2 == b[18]) {
        b18();
    }
    else if (random2 == b[19]) {
        b19();
    }
    else if (random2 == b[20]) {
        b20();
    }
    else if (random2 == b[21]) {
        b21();
    }
    else if (random2 == b[22]) {
        b22();
    }
    else {
        end();
    }
    const random3 = b[Math.floor(Math.random() * b.length)];
    number -= 1;
    console.log(number);
    if (random3 == b[0]) {
        start();
    }
    else if (random3 == b[1]) {
        b1();
    }
    else if (random3 == b[2]) {
        b2();
    }
    else if (random3 == b[3]) {
        b3();
    }
    else if (random3 == b[4]) {
        b4();
    }
    else if (random3 == b[5]) {
        b5();
    }
    else if (random3 == b[6]) {
        b6();
    }
    else if (random3 == b[7]) {
        b7();
    }
    else if (random3 == b[8]) {
        b8();
    }
    else if (random3 == b[9]) {
        b9();
    }
    else if (random3 == b[10]) {
        b10();
    }
    else if (random3 == b[11]) {
        b11();
    }
    else if (random3 == b[12]) {
        b12();
    }
    else if (random3 == b[13]) {
        b14();
    }
    else if (random3 == b[14]) {
        b14();
    }
    else if (random3 == b[15]) {
        b15();
    }
    else if (random3 == b[16]) {
        b16();
    }
    else if (random3 == b[17]) {
        b17();
    }
    else if (random3 == b[18]) {
        b18();
    }
    else if (random3 == b[19]) {
        b19();
    }
    else if (random3 == b[20]) {
        b20();
    }
    else if (random3 == b[21]) {
        b21();
    }
    else {
        end();
    }
    const random4 = b[Math.floor(Math.random() * b.length)];
    number -= 1;
    console.log(number);
    if (random4 == b[0]) {
        start();
    }
    else if (random4 == b[1]) {
        b1();
    }
    else if (random4 == b[2]) {
        b2();
    }
    else if (random4 == b[3]) {
        b3();
    }
    else if (random4 == b[4]) {
        b4();
    }
    else if (random4 == b[5]) {
        b5();
    }
    else if (random4 == b[6]) {
        b6();
    }
    else if (random4 == b[7]) {
        b7();
    }
    else if (random4 == b[8]) {
        b8();
    }
    else if (random4 == b[9]) {
        b9();
    }
    else if (random4 == b[10]) {
        b10();
    }
    else if (random4 == b[11]) {
        b11();
    }
    else if (random4 == b[12]) {
        b12();
    }
    else if (random4 == b[13]) {
        b14();
    }
    else if (random4 == b[14]) {
        b14();
    }
    else if (random4 == b[15]) {
        b15();
    }
    else if (random4 == b[16]) {
        b16();
    }
    else if (random4 == b[17]) {
        b17();
    }
    else if (random4 == b[18]) {
        b18();
    }
    else if (random4 == b[19]) {
        b19();
    }
    else if (random4 == b[20]) {
        b20();
    }
    else {
        end();
    }
    const random5 = b[Math.floor(Math.random() * b.length)];
    number -= 1;
    console.log(number);
    if (random5 == b[0]) {
        start();
    }
    else if (random5 == b[1]) {
        b1();
    }
    else if (random5 == b[2]) {
        b2();
    }
    else if (random5 == b[3]) {
        b3();
    }
    else if (random5 == b[4]) {
        b4();
    }
    else if (random5 == b[5]) {
        b5();
    }
    else if (random5 == b[6]) {
        b6();
    }
    else if (random5 == b[7]) {
        b7();
    }
    else if (random5 == b[8]) {
        b8();
    }
    else if (random5 == b[9]) {
        b9();
    }
    else if (random5 == b[10]) {
        b10();
    }
    else if (random5 == b[11]) {
        b11();
    }
    else if (random5 == b[12]) {
        b12();
    }
    else if (random5 == b[13]) {
        b13();
    }
    else if (random5 == b[14]) {
        b14();
    }
    else if (random5 == b[15]) {
        b15();
    }
    else if (random5 == b[16]) {
        b16();
    }
    else if (random5 == b[17]) {
        b17();
    }
    else if (random5 == b[18]) {
        b18();
    }
    else if (random5 == b[19]) {
        b19();
    }
    else {
        end();
    }
    const random6 = b[Math.floor(Math.random() * b.length)];
    number -= 1;
    console.log(number);
    if (random6 == b[0]) {
        start();
    }
    else if (random6 == b[1]) {
        b1();
    }
    else if (random6 == b[2]) {
        b2();
    }
    else if (random6 == b[3]) {
        b3();
    }
    else if (random6 == b[4]) {
        b4();
    }
    else if (random6 == b[5]) {
        b5();
    }
    else if (random6 == b[6]) {
        b6();
    }
    else if (random6 == b[7]) {
        b7();
    }
    else if (random6 == b[8]) {
        b8();
    }
    else if (random6 == b[9]) {
        b9();
    }
    else if (random6 == b[10]) {
        b10();
    }
    else if (random6 == b[11]) {
        b11();
    }
    else if (random6 == b[12]) {
        b12();
    }
    else if (random6 == b[13]) {
        b14();
    }
    else if (random6 == b[14]) {
        b14();
    }
    else if (random6 == b[15]) {
        b15();
    }
    else if (random6 == b[16]) {
        b16();
    }
    else if (random6 == b[17]) {
        b17();
    }
    else if (random6 == b[18]) {
        b18();
    }
    else {
        end();
    }
    const random7 = b[Math.floor(Math.random() * b.length)];
    number -= 1;
    console.log(number);
    if (random7 == b[0]) {
        start();
    }
    else if (random7 == b[1]) {
        b1();
    }
    else if (random7 == b[2]) {
        b2();
    }
    else if (random7 == b[3]) {
        b3();
    }
    else if (random7 == b[4]) {
        b4();
    }
    else if (random7 == b[5]) {
        b5();
    }
    else if (random7 == b[6]) {
        b6();
    }
    else if (random7 == b[7]) {
        b7();
    }
    else if (random7 == b[8]) {
        b8();
    }
    else if (random7 == b[9]) {
        b9();
    }
    else if (random7 == b[10]) {
        b10();
    }
    else if (random7 == b[11]) {
        b11();
    }
    else if (random7 == b[12]) {
        b12();
    }
    else if (random7 == b[13]) {
        b14();
    }
    else if (random7 == b[14]) {
        b14();
    }
    else if (random7 == b[15]) {
        b15();
    }
    else if (random7 == b[16]) {
        b16();
    }
    else if (random7 == b[17]) {
        b17();
    }
    else {
        end();
    }
    const random8 = b[Math.floor(Math.random() * b.length)];
    number -= 1;
    console.log(number);
    if (random8 == b[0]) {
        start();
    }
    else if (random8 == b[1]) {
        b1();
    }
    else if (random8 == b[2]) {
        b2();
    }
    else if (random8 == b[3]) {
        b3();
    }
    else if (random8 == b[4]) {
        b4();
    }
    else if (random8 == b[5]) {
        b5();
    }
    else if (random8 == b[6]) {
        b6();
    }
    else if (random8 == b[7]) {
        b7();
    }
    else if (random8 == b[8]) {
        b8();
    }
    else if (random8 == b[9]) {
        b9();
    }
    else if (random8 == b[10]) {
        b10();
    }
    else if (random8 == b[11]) {
        b11();
    }
    else if (random8 == b[12]) {
        b12();
    }
    else if (random8 == b[13]) {
        b14();
    }
    else if (random8 == b[14]) {
        b15();
    }
    else if (random8 == b[15]) {
        b16();
    }
    else {
        end();
    }
    const random9 = b[Math.floor(Math.random() * b.length)];
    number -= 1;
    console.log(number);
    if (random9 == b[0]) {
        start();
    }
    else if (random9 == b[1]) {
        b1();
    }
    else if (random9 == b[2]) {
        b2();
    }
    else if (random9 == b[3]) {
        b3();
    }
    else if (random9 == b[4]) {
        b4();
    }
    else if (random9 == b[5]) {
        b5();
    }
    else if (random9 == b[6]) {
        b6();
    }
    else if (random9 == b[7]) {
        b7();
    }
    else if (random9 == b[8]) {
        b8();
    }
    else if (random9 == b[9]) {
        b9();
    }
    else if (random9 == b[10]) {
        b10();
    }
    else if (random9 == b[11]) {
        b11();
    }
    else if (random9 == b[12]) {
        b12();
    }
    else if (random9 == b[13]) {
        b13();
    }
    else if (random9 == b[14]) {
        b14();
    }
    else if (random9 == b[15]) {
        b15();
    }
    else {
        end();
    }
    const random10 = b[Math.floor(Math.random() * b.length)];
    number -= 1;
    console.log(number);
    if (random10 == b[0]) {
        start();
    }
    else if (random10 == b[1]) {
        b1();
    }
    else if (random10 == b[2]) {
        b2();
    }
    else if (random10 == b[3]) {
        b3();
    }
    else if (random10 == b[4]) {
        b4();
    }
    else if (random10 == b[5]) {
        b5();
    }
    else if (random10 == b[6]) {
        b6();
    }
    else if (random10 == b[7]) {
        b7();
    }
    else if (random10 == b[8]) {
        b8();
    }
    else if (random10 == b[9]) {
        b9();
    }
    else if (random10 == b[10]) {
        b10();
    }
    else if (random10 == b[11]) {
        b11();
    }
    else if (random10 == b[12]) {
        b12();
    }
    else if (random10 == b[13]) {
        b13();
    }
    else if (random10 == b[14]) {
        b14();
    }
    else {
        end();
    }
    const random11 = b[Math.floor(Math.random() * b.length)];
    number -= 1;
    console.log(number);
    if (random11 == b[0]) {
        start();
    }
    else if (random11 == b[1]) {
        b1();
    }
    else if (random11 == b[2]) {
        b2();
    }
    else if (random11 == b[3]) {
        b3();
    }
    else if (random11 == b[4]) {
        b4();
    }
    else if (random11 == b[5]) {
        b5();
    }
    else if (random11 == b[6]) {
        b6();
    }
    else if (random11 == b[7]) {
        b7();
    }
    else if (random11 == b[8]) {
        b8();
    }
    else if (random11 == b[9]) {
        b9();
    }
    else if (random11 == b[10]) {
        b10();
    }
    else if (random11 == b[11]) {
        b11();
    }
    else if (random11 == b[12]) {
        b12();
    }
    else if (random11 == b[13]) {
        b13();
    }
    else {
        end();
    }
    const random12 = b[Math.floor(Math.random() * b.length)];
    number -= 1;
    console.log(number);
    if (random12 == b[0]) {
        start();
    }
    else if (random12 == b[1]) {
        b1();
    }
    else if (random12 == b[2]) {
        b2();
    }
    else if (random12 == b[3]) {
        b3();
    }
    else if (random12 == b[4]) {
        b4();
    }
    else if (random12 == b[5]) {
        b5();
    }
    else if (random12 == b[6]) {
        b6();
    }
    else if (random12 == b[7]) {
        b7();
    }
    else if (random12 == b[8]) {
        b8();
    }
    else if (random12 == b[9]) {
        b9();
    }
    else if (random12 == b[10]) {
        b10();
    }
    else if (random12 == b[11]) {
        b11();
    }
    else if (random12 == b[12]) {
        b12();
    }
    else {
        end();
    }
    const random13 = b[Math.floor(Math.random() * b.length)];
    number -= 1;
    console.log(number);
    if (random13 == b[0]) {
        start();
    }
    else if (random13 == b[1]) {
        b1();
    }
    else if (random13 == b[2]) {
        b2();
    }
    else if (random13 == b[3]) {
        b3();
    }
    else if (random13 == b[4]) {
        b4();
    }
    else if (random13 == b[5]) {
        b5();
    }
    else if (random13 == b[6]) {
        b6();
    }
    else if (random13 == b[7]) {
        b7();
    }
    else if (random13 == b[8]) {
        b8();
    }
    else if (random13 == b[9]) {
        b9();
    }
    else if (random13 == b[10]) {
        b10();
    }
    else if (random13 == b[11]) {
        b11();
    }
    else {
        end();
    }
    const random14 = b[Math.floor(Math.random() * b.length)];
    if (random14 == b[0]) {
        start();
    }
    else if (random14 == b[1]) {
        b1();
    }
    else if (random14 == b[2]) {
        b2();
    }
    else if (random14 == b[3]) {
        b3();
    }
    else if (random14 == b[4]) {
        b4();
    }
    else if (random14 == b[5]) {
        b5();
    }
    else if (random14 == b[6]) {
        b6();
    }
    else if (random14 == b[7]) {
        b7();
    }
    else if (random14 == b[8]) {
        b8();
    }
    else if (random14 == b[9]) {
        b9();
    }
    else if (random14 == b[10]) {
        b10();
    }
    else {
        end();
    }
    const random15 = b[Math.floor(Math.random() * b.length)];
    if (random15 == b[0]) {
        start();
    }
    else if (random15 == b[1]) {
        b1();
    }
    else if (random15 == b[2]) {
        b2();
    }
    else if (random15 == b[3]) {
        b3();
    }
    else if (random15 == b[4]) {
        b4();
    }
    else if (random15 == b[5]) {
        b5();
    }
    else if (random15 == b[6]) {
        b6();
    }
    else if (random15 == b[7]) {
        b7();
    }
    else if (random15 == b[8]) {
        b8();
    }
    else if (random15 == b[9]) {
        b9();
    }
    else {
        end();
    }
    const random16 = b[Math.floor(Math.random() * b.length)];
    if (random16 == b[0]) {
        start();
    }
    else if (random16 == b[1]) {
        b1();
    }
    else if (random16 == b[2]) {
        b2();
    }
    else if (random16 == b[3]) {
        b3();
    }
    else if (random16 == b[4]) {
        b4();
    }
    else if (random16 == b[5]) {
        b5();
    }
    else if (random16 == b[6]) {
        b6();
    }
    else if (random16 == b[7]){
        b7();
    }
    else if (random16 == b[8]) {
        b8();
    }
    else {
        end();
    }
    const random17 = b[Math.floor(Math.random() * b.length)];
    if (random17 == b[0]) {
        start();
    }
    else if (random17 == b[1]) {
        b1();
    }
    else if (random17 == b[2]) {
        b2();
    }
    else if (random17 == b[3]) {
        b3();
    }
    else if (random17 == b[4]) {
        b4();
    }
    else if (random17 == b[5]) {
        b5();
    }
    else if (random17 == b[6]) {
        b6();
    }
    else if (random17 == b[7]) {
        b7();
    }
    else {
        end();
    }
    const random18 = b[Math.floor(Math.random() * b.length)];
    if (random18 == b[0]) {
        start();
    }
    else if (random18 == b[1]) {
        b1();
    }
    else if (random18 == b[2]) {
        b2();
    }
    else if (random18 == b[3]) {
        b3();
    }
    else if (random18 == b[4]) {
        b4();
    }
    else if (random18 == b[5]) {
        b5();
    }
    else if (random18 == b[6]) {
        b6();
    }
    else {
        end();
    }
    const random19 = b[Math.floor(Math.random() * b.length)];
    if (random19 == b[0]) {
        start();
    }
    else if (random19 == b[1]) {
        b1();
    }
    else if (random19 == b[2]) {
        b2();
    }
    else if (random19 == b[3]) {
        b3();
    }
    else if (random19 == b[4]) {
        b4();
    }
    else if (random19 == b[5]) {
        b5();
    }
    else {
        end();
    }
    const random20 = b[Math.floor(Math.random() * b.length)];
    if (random20 == b[0]) {
        start();
    }
    else if (random20 == b[1]) {
        b1();
    }
    else if (random20 == b[2]) {
        b2();
    }
    else if (random20 == b[3]) {
        b3();
    }
    else if (random20 == b[4]) {
        b4();
    }
    else {
        end();
    }
    const random21 = b[Math.floor(Math.random() * b.length)];
    if (random21 == b[0]) {
        start();
    }
    else if (random21 == b[1]) {
        b1();
    }
    else if (random21 == b[2]) {
        b2();
    }
    else if (random21 == b[3]) {
        b3();
    }
    else {
        end();
    }
    const random22 = b[Math.floor(Math.random() * b.length)];
    if (random22 == b[0]) {
        start();
    }
    else if (random22 == b[1]) {
        b1();
    }
    else if (random22 == b[2])  {
        b2();
    }
    else {
        end();
    }
    const random23 = b[Math.floor(Math.random() * b.length)];
    if (random23 == b[0]) {
        start();
    }
    else if (random23 == b[1]) {
        b1();
    }
    else {
        end();
    }
    const random24 = b[Math.floor(Math.random() * b.length)];
    if (random24 == b[0]) {
        start();
    }
    else {
        end();
    }
    const random25 = b[Math.floor(Math.random() * b.length)];
    if (random25 == b[0]) {
        start();
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
    eightteenth.innerHTML = random18;
    nineteenth.innerHTML = random19;
    twentieth.innerHTML = random20;
    twentyfirst.innerHTML = random21;
    twentysecond.innerHTML = random22;
    twentythird.innerHTML = random23;
    twentyforth.innerHTML = random24;
    twentyfifth.innerHTML = random25;
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
    else if (score == 17) {
        if (input == R) {
            iftrue();
        }
        else {
            iffalse();
        }
    }
    else if (score == 18) {
        if (input == S) {
            iftrue();
        }
        else {
            iffalse();
        }
    }
    else if (score == 19) {
        if (input == T) {
            iftrue();
        }
        else {
            iffalse();
        }
    }
    else if (score == 20) {
        if (input == U) {
            iftrue();
        }
        else {
            iffalse();
        }
    }
    else if (score == 21) {
        if (input == V) {
            iftrue();
        }
        else {
            iffalse();
        }
    }
    else if (score == 22) {
        if (input == W) {
            iftrue();
        }
        else {
            iffalse();
        }
    }
    else if (score == 23) {
        if (input == X) {
            iftrue();
        }
        else {
            iffalse();
        }
    }
});