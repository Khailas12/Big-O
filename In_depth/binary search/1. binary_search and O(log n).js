// binary search and O(log n) 
let array = [1, 2, 3, 4, 5, 6, 7, 8];
let start = 0;
let end = array.length - 1;
let target = 8;


const binarySearch = ((array, start, end, target) => {
    // 4 = midIndex considering the array. 
    let midIndex = Math.floor((start + end) / 2);  // 8 / 2 = 4

    if (array[midIndex] === target) {
        return true;
    }
    // this excludes the error when the target's existence is less or greater than an elements in the array, eg: -2 and 10
    else if (start > end) {
        return false;
    }
    else if (array[midIndex] > target) {
        // midIndex - 1 = 3 -> accessing left side of the array
        return binarySearch(array, start, midIndex - 1, target);
    }
    else {
        // midIndex + 1 =5 because starts from midpoint to right side of the array 
        return binarySearch(array, midIndex + 1, end, target);
    }
});

bs = binarySearch(array, start, end, target);
console.log(bs);