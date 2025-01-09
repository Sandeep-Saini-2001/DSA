function rightAngledNumberPyramid2(n) {
    for(let i=0; i<n; i++) {
        for(let j=0; j<=i; j++) {
            process.stdout.write(`${i+1}`)
        }
        console.log()
    }
}
rightAngledNumberPyramid2(3)