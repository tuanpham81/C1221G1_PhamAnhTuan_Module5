let sum: number = 0;
let fibonacciNum: number = 1;
let temp:number = 0;

for (let i = 0; i < 10; i++) {
    fibonacciNum += temp;
    console.log(fibonacciNum)
    temp = fibonacciNum - temp;
    sum += fibonacciNum;
}
console.log('Tổng các số fibonacci là: '+sum);