const nLogN = ((n) => {
    let y = n;  
    while (n > 1) {     // n = 4
        n = Math.floor(n / 2);  // 4 / 2 = 2
        
        // 'y'still remains 4 comparing with the n which got divided prior into 2.
        for (let i = 0; i <= y; i++) {
            console.log(i);
        }
    }
});

nLogN(4);

// O(n log n) = O(n * log n)

// both while and for loop has the complexity of O(n) considering that both gets iterated by the full size of y. which is 4 as assigned. so the splitted n = 4 into 2 will also get iterated 4 times.
// processing time increases linearly with the size of n.