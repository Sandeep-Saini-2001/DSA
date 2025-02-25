function numberCrownPattern(n) {
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= 2 * n; j++) {
            if (j <= i) {
                process.stdout.write(`${j}`)
            } else
                if (j > i && j <= (2 * n )- i) {
                    process.stdout.write(' ');
                } else
                    // if (j >= (2 * n - i) + 1) {
                        process.stdout.write(`${(2 * n - j) + 1}`)
                    // }
        }
        console.log()
    }
}
numberCrownPattern(9);