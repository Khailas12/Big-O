// O(log n) time complexity
const logFunc = ((n) => {
    if (n === 0) {
        return 'Done';
    }   // this can be excluded
    n = Math.floor(n / 2);
    return logFunc(n);
});