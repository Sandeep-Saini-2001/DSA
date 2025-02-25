function increasingLetterTriangle(n) {
    for(let i=0; i<n; i++) {
        let char = 'A'.charCodeAt(0);
        for(let j=0; j<=i; j++) {
            process.stdout.write(`${String.fromCharCode(char)}`);
            char++;
        }
        console.log()
    }
}
increasingLetterTriangle(5)