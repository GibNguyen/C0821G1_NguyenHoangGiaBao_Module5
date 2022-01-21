function fibonacci(n: number): number {
    if (n <= 0) {
        return -1;
    } else if (n == 0 || n == 1) {
        return n;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}
let sum = 0;
for (let i = 2; i <= 11; i++) {
    console.log(fibonacci(i));
    sum += fibonacci(i);
}
console.log("Tổng của 10 số fibonacci đầu tiên là : " + sum);
