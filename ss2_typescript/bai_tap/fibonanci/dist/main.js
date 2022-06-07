function generateFibonacci(num) {
    let fibonacciArr = [];
    let fibonacciNum = 1;
    let temp = 0;
    for (let i = 0; i < num; i++) {
        fibonacciNum += temp;
        fibonacciArr.push(fibonacciNum);
        temp = fibonacciNum - temp;
    }
    return fibonacciArr;
}
let fibonacciArr = generateFibonacci(10);
let sum = 0;
for (let i = 0; i < fibonacciArr.length; i++) {
    console.log(fibonacciArr[i]);
    sum += fibonacciArr[i];
}
console.log('Tổng các số fibonacci là: ' + sum);
//# sourceMappingURL=main.js.map