function numberPattern(n) {
    let number = n;
    for(let i=0; i<2*n-1; i++) {
        for(let j=0; j<2*n-1; j++) {
            let row = (2*n-2)-i;
            let col = (2*n-2)-j
            number = n - Math.min(Math.min(i,j), Math.min(row, col));
            process.stdout.write(number+' ');
        }
        console.log();
    }
}
numberPattern(9);
