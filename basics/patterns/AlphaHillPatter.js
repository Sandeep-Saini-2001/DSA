function alphaHillPattern(n) {
    let char = 'A'.charCodeAt(0);
    for(let i=0; i<n; i++){
        for(let j=0; j<(2*n - 1); j++) {
            if(j<=n-1) {
                if(j >= n-i-1){
                    process.stdout.write(String.fromCharCode(char + ((i+j) - (n-1))));
                }else {
                    process.stdout.write(' ');
                }
            } else {
                if(j-i >= n) {
                    process.stdout.write(' ');
                }else {
                    process.stdout.write(String.fromCharCode(char + ((n+i-1)-j)));
                }
            } 
        }
        console.log();
    }
}

alphaHillPattern(10);