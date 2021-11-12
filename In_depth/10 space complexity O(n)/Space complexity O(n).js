const countDown = ((n) => {
    if (n === 0) {
        return;
    }
    return countDown(n - 1);
});

let cd = countDown(5);
console.log(cd);