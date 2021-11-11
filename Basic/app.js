// O(1) -> constant
const x = 4 + 3;

// O(n) -> linear
for (let i = 0; i < n; i++) {

}

// O(n) -> linear
let x = 0;
for (let i = 0; i < n; i++) {
    x += 1;
}

// O(n) -> linear
for (let i = 0; i < n; i++) {}
for (let i = 0; i < n; i++) {}
for (let i = 0; i < n; i++) {}
for (let i = 0; i < n; i++) {}
for (let i = 0; i < n; i++) {}
for (let i = 0; i < n; i++) {}


// O(n²) -> quadratic
for (let i = 0; i < n; i++) {
    for (let j = 0; j < y; j++) {

    }
}

// O(log n) -> lograthmic
while (n > 0) {
    n /= 2;      // divided by 2
}

// O(n log n) -> lograthmic
// O(n)
for (let i = 0; i < n; i++) {
    // O(log n)
    while (x > 0) {
        x /= 2;
    }
}