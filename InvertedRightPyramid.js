function invertedRightPyramid(n) {
    for(let i=0; i<n; i++) {
        for(let j=0; j<n-i; j++) {
            process.stdout.write("* ")
        }
        console.log()
    }
}

invertedRightPyramid(6)
