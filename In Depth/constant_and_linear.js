// O(n) -> linear
const linearFunction = ((array) => {
    for (let i = 0; i < array.length; i++) {
        // O(1) -> constant
        console.log(1000 * 100000);     // constant time
    }
});

const array = [1, 2, 3, 4, 5, 6, 7];
linearFunction(array);

// constant -> any step that doesn't scale with the input to the function. it takes the constant time to return a result. O(1)


const linFunc = ((arr) => {
    for (let i = 0; i < arr.length; i++) {  // O(n) -> linear
        console.log(100 * 100000);  // O(1) -> constant
        let something = (2000000 * 2000000) / 2;    // O(1)
        console.log(something); // O(1)
    }
});

// O(n) + O(1) + O(1) + O(1) = O(n) 
// the rest gets cancelled or ignored due to the efficiency of the algo in linear than constant

// the O(1) is the best case and yet we cares about the worse case or the highest order operations, one is O(n) -> linear because of the better performance.