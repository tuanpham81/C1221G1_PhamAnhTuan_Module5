function generateFibonacci(num) {
    var fibonacciArr = [];
    var fibonacciNum = 1;
    var temp = 0;
    for (var i = 0; i < num; i++) {
        fibonacciArr.push(fibonacciNum);
        fibonacciNum += temp;
        temp = fibonacciNum - temp;
    }
    return fibonacciArr;
}
var fibonacciArr = generateFibonacci(10);
var sum = 0;
for (var i = 0; i < fibonacciArr.length; i++) {
    console.log(fibonacciArr[i]);
    sum += fibonacciArr[i];
}
console.log('Tổng ' + fibonacciArr.length + ' số fibonacci đầu tiên là: ' + sum);
