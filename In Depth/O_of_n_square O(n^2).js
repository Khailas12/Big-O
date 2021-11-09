// O(n^2)
const square = ((n) => {
    for (let i = 0; i < n; i++) {
        // nested for loop
        for (let j = 0; j < n; j++) { 
            console.log(i, j);
        }
    }
});

square(5);