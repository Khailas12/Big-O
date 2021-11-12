// O(2^n)
const fibinacci = ((n) => {
    if (n === 0) {
        return 0;   // n = 0
    }
    if (n === 1) {
        return 1;   // n = 1
    }

    return fibinacci(n - 1) + fibinacci(n - 2);
});

let fib = fibinacci(4);
console.log(fib); 

// recursive fibinacci is of exponential time complexity. 