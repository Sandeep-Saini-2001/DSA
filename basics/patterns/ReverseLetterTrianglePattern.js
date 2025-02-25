function ReverseLetterTrianglePattern(n) {
    let char = null;
    for(let i=0; i<n; i++) {
        char = 'A'.charCodeAt(0)
        for(j=n; j>i; j--) {
            process.stdout.write(`${String.fromCharCode(char)}`);
            char++;
        }
        console.log()
    }
}
ReverseLetterTrianglePattern(6);