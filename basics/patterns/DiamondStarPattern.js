function dimondStarPattern(n) {
    for(let i=0; i<2*n ; i++) {
        for(let j=0; j<2*n-1; j++) {
            if(i<=n) {
                if(j<(n-1)-i || j>=n+i) {
                    process.stdout.write(" ");
                }else {
                    process.stdout.write('*');
                }
            }else {
                if(j<i-n || j>n+(2*n-2)-i) {
                    process.stdout.write(" ");
                }else {
                    process.stdout.write('*');
                }
            }
        }
        console.log()
    }
}

dimondStarPattern(14)