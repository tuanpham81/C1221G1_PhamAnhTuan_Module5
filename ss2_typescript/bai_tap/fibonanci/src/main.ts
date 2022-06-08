function generateFibonacci(num:number):number[] {
    let fibonacciArr:number[] = [];
    let fibonacciNum:number = 1;
    let temp:number = 0;
    for (let i = 0; i < num; i++) {
        fibonacciArr.push(fibonacciNum)
        fibonacciNum += temp;
        temp = fibonacciNum - temp;
    }
    return fibonacciArr;
}

let fibonacciArr = generateFibonacci(10);
let sum: number = 0;
for (let i = 0; i < fibonacciArr.length; i++) {
    console.log(fibonacciArr[i]);
    sum += fibonacciArr[i];
}
console.log('Tổng '+fibonacciArr.length+' số fibonacci đầu tiên là: '+sum);
