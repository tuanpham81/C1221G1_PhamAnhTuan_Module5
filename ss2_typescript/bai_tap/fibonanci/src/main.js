var sum = 0;
// let fibonacciArr: number[];
var fibonacciNum = 1;
var temp = 0;
// fibonacciArr.push(fibonacciNum);
for (var i = 0; i < 10; i++) {
    fibonacciNum += temp;
    console.log(fibonacciNum);
    temp = fibonacciNum - temp;
    sum += fibonacciNum;
}
console.log(sum);
