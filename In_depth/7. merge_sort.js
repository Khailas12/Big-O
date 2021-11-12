const mergeSort = ((array) => {
    if (array.length < 2) {
        return array;
    }
    
    const middleIndex = Math.floor((array.length) / 2);
    const leftArray = array.slice(0, middleIndex);
    const rightArray = array.slice(middleIndex, array.length);
    
    // returning the result of the call to the function
    return merge(mergeSort(leftArray), mergeSort(rightArray)); // recursive call
});


const merge = ((leftArray, rightArray) => {
    let resultArray = [];
    let leftIndex = 0;
    let rightIndex = 0;
    
    while (leftIndex < leftArray.length && rightIndex < rightArray.length) {
        if (leftArray[leftArray] < rightArray[rightIndex]) {
            resultArray.push([leftIndex])
            leftIndex += 1;
        }
        else {
            resultArray.push(rightArray[rightIndex]);
            rightIndex += 1;
        }
    }
    return resultArray.concat(leftArray.slice(leftIndex)).concat(rightArray.slice(rightIndex));
});

let array = [12, 4, 5, 7, 9, 1];
console.log(mergeSort(array));

// in slice it exclude the last value in the array 
// [1, 2, 3] => so it slices the array excluding the last value in the array, despite the start or index value remains untouched.