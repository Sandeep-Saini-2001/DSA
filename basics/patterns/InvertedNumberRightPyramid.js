function invertedNumberRightPyramid(n) {
    for(let i=0; i<n; i++) {
        for(let j=0; j<n-i; j++) {
            process.stdout.write(`${j+1}`)
        }
        console.log()
    }
}

invertedNumberRightPyramid(5)