// function halfDiamondStarPattern(n) {
//     for(let i=0; i<2*n-1; i++) {
//         if(i<n) {
//             for(let j=0; j<=i; j++) {
//                 process.stdout.write('*')
//             }
//         }else {
//             for(let k=0; k<(2*n-i)-1 ; k++) {
//                 process.stdout.write('*')
//             }
//         }
//         console.log()
//     }
// }

function halfDiamondStarPattern(n) {
    for(let i=1; i<2*n; i++) {
        let stars = i;
        if(i>n) stars = (2*n-i)
        for(let j=1; j<=stars; j++) {
            process.stdout.write('*')
        }
        console.log()
    }
}
halfDiamondStarPattern(15)