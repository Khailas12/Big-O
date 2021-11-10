const logn = ((n) => {
    while (n > 1) { // iterates until it reaches 1
        n = Math.floor(n/2);
        console.log(n);
    }
});

logn(8);