function invertedStarPyramid(n) {
    for(let i=0; i<n; i++) {
        for(let j=0; j<2*n-1; j++) {
            if(j<i || j>=(2*n-i)-1) {
                process.stdout.write(" ");
            }else {
                process.stdout.write("*")
            }
        }
        console.log();
    }
}
invertedStarPyramid(6);