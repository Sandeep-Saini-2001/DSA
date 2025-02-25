function alphaTrianglePattern(n) {
    let char = 'A'.charCodeAt(0) + (n-1);
    for(let i=0; i<n; i++) {
        for(let j=0; j<=i; j++) {
            process.stdout.write(String.fromCharCode(char + j));
        }
        char--;
        console.log();
    }
}

alphaTrianglePattern(6);