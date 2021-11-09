// O(log n) -> lograthmic
const binarySearch = ((value, list) => {
    // O(1) -> constant
    let first = 0;
    let last = list.length -1;
    let position = -1;
    let found = false;

    // O(log n) -> lograthmic
    while (found === false && first <= last) {  // first=0 and last = 50.
        let middle = Math.floor((first + last) / 2);    // cuts half and it goes like. first = 0 and last = 25
        // O(1) -> constant
        if (list[middle] === value) {
            found = true;
            position = middle;
        }
        else if (list[middle] > value) {
            last = middle - 1;
        }
        else {
            first = middle + 1;
        }
    }
    return position;
});