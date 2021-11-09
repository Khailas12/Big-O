const swap = ((array, i, j) => {
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
});

const selectionSort = ((array) => {
    for (let i = 0; i < array.length; i++) {
        let min = i;

        // O(n) -> linear
        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < array[min]) {
                min = j;
            }
        }
        if (i != min) {
            swap(array, i, min);
        }
    }
    return array;
});