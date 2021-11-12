const func = ((n) => {
    if (n === 0) {
        console.log('*******');
        return
    }
    for (let i = 0; i < n; i++) {
        func(n - 1);
    }
});

let f = func(3);
console.log(f);