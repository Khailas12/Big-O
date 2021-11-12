let array = [12, 3, 16, 6, 5, 1];

const mergeSort = ((array) => {
    if (array.length < 2) {
        return array;
    }

    const middleIndex = Math.floor(array.length / 2);
    const leftArray = array.slice(0, middleIndex);
    const rightArray = array.slice(middleIndex, array.length);

    // returning the result of the call to the function
    return merge(mergeSort(leftArray), mergeSort(rightArray));  // recursive call
});


const merge = ((leftArray, rightArray) => {
    let leftIndex = 0;
    let rightIndex = 0;
    let resultArray = [];
    
    while (leftIndex < leftArray.length && rightIndex < rightArray.length) {
        if (leftArray[leftIndex] < rightArray[rightIndex]) {
            resultArray.push(leftArray[leftIndex]);     // appends to the resultarray
            leftIndex += 1;     // jumps to next index from 0 to 1 and so on
        }
        else {
            resultArray.push(rightArray[rightIndex]);
            rightIndex += 1; 
        }
    }
    // resultArray + leftArray + rightArray
    return resultArray.concat(leftArray.slice(leftIndex)).concat(rightArray.slice(rightIndex));
});

console.log(mergeSort(array));


// in slice it exclude the last value in the array 
// [1, 2, 3] => so it slices the array excluding the last value in the array, despite the start value remains untouched.

// https://www.youtube.com/watch?v=Mo4vesaut8g  01:03:00 onwards