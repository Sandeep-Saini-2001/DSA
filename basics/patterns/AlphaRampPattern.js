function alphaRampPattern(n) {
    let char = "A".charCodeAt(0);
    for(let i=0; i<n; i++) {
        for(let j=0; j<=i; j++) {
            process.stdout.write(`${String.fromCharCode(char)} `);
        }
        char++;
        console.log()
    }
}
alphaRampPattern(6)