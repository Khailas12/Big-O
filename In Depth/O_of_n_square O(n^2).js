// O(n^2)
// 2 dimensional array with rows and columns
const square = ((n) => {
    for (let i = 0; i < n; i++) {
        // nested for loop
        for (let j = 0; j < n; j++) { 
            // i = column and j = row
            console.log(i, j);  
        }
    }
});

square(5);

// https://www.youtube.com/watch?v=Mo4vesaut8g 7:30 onwards