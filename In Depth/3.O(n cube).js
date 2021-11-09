// O(n^3)
// 3 Dimensional array that follows rows, columns and height
const cube = ((n) => {
    // columns
    for (let i = 0; i < n; i++) {
        // rows
        for (let j = 0; j < n; j++) {
            // height
            for (let k = 0; k < n; k++) { // k increments first and the rest follows.
                console.log(i, j, k);
            }
        }
    }
}); 

cube(4);

// after first iteration it'd increment the k.
// i = 0
// j = 0
// k = 1 and it stops iterating when it reaches 4 as of the assigned value.