function rightAngledNumberPyramid(n) {
    for(let i=0; i<n; i++) {
        for(j=0; j<=i; j++) {
            process.stdout.write(`${j+1}`)
        }
        console.log()
    }
}

rightAngledNumberPyramid(6)