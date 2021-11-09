// O(1) + O(n) * O(1) = O(n)
const algoSearch = ((value, list) => {
    // O(1) -> constant
    let found = false;
    let index = 0;
    let position = -1;

    // O(n) -> linear
    while (!found && index < list.length) {
        // O(1) -> constant. the entire if and else statement
        if (list[index] === value) {
            found = true;
            position = index;
        }
        else {
            index += 1;
        }
    }
    return position;
});