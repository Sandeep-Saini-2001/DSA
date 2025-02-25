function symmetricButerflyPattern(n) {
    let spaces = 2*n - 2;
    let stars = 0;

    for(let i=0;i<2*n; i++) {
        // for(let j=0; j<=i && (i+j < 2*n-1); j++) {
        //     process.stdout.write('*');
        // }
        // for(let k=0; k<Math.abs(2*n- 2*(i+1)); k++) {
        //     process.stdout.write(' ');
        // }
        // for(let l=0; l < (i<n?i+1:2*n-(i+1)); l++) {
        //     process.stdout.write('*')
        // }

        stars = i+1;
        if(i+1 > n) {
            stars = 2*n - (i+1);
        }

        for(let j=0; j<stars; j++) {
            process.stdout.write('*');
        }
        for(let k=0; k<spaces; k++) {
            process.stdout.write(' ');
        }
        for(let l=0; l<stars; l++) {
            process.stdout.write('*');
        }
        
        if(i+1<n) spaces -= 2;
        else spaces += 2;
        console.log();
    }
}
symmetricButerflyPattern(5);