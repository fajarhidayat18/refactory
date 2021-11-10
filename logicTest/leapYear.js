// logika
function fizzbuzz(from, to) {
    let leapyear = []
    for (let i = from; i <= to; i++) {
        if (i % 4 == 0 || i % 100 == 0 || i % 400 == 0) {
            leapyear.push(i)
        }
    }
    console.log(leapyear)
}
// hasil
fizzbuzz(1900, 2020)