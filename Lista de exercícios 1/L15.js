console.log('Os 10 primeiros números da sequência de Fibonacci são:');

let num1 = 0;
let num2 = 1;

for (let i = 3; i <= 10; i++) {
    let nextNum = num1 + num2;
    console.log(nextNum);

    num1 = num2;
    num2 = nextNum;
}
