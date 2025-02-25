function symmetricVoidPattern(n) {
    for(let i=0; i<2*n; i++) {
        for(let j=0; j<2*n; j++) {
            if(i<n) {
                if(j<n) {
                    j<n-i ? process.stdout.write('*'): process.stdout.write(' ')
                }else {
                    j-i < n ? process.stdout.write(' '): process.stdout.write('*')
                }
            }else {
                if(j<n) {
                    i-j >= n ? process.stdout.write('*'): process.stdout.write(' ')
                }else {
                    ((i+j) - 2*n) < (n-1) ? process.stdout.write(' '): process.stdout.write('*')
                }
            }
        }
        console.log()
    }
}
symmetricVoidPattern(6);