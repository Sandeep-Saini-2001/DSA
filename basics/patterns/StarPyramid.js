function starPyramid(n) {
    for(i=0; i<n; i++) {
        for(j=0; j<n*2-1 ; j++) {
            // if(j<=n-i) {
            //     process.stdout.write(' ')                 //this works for i=1 & j=1
            // }
            // if(j>n-i && j<n+i) {
            //     process.stdout.write('*')
            // }
            if(j<(n-i)-1 || j>=n+i) {
                process.stdout.write(' ')
            }else {
                process.stdout.write('*')
            }
        }
        console.log()
    }
}

starPyramid(6)