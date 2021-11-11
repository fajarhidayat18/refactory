function findFibonacci(arr) {
    newArray = arr
    let i = 0
    // newArray.reduce((acc, curr) => acc + curr)
    for (let i = 2; i <= newArray.length; i++) {
        console.log(newArray[i])
    }
    // newArray.filter(function(e){
    //     return newArray[i] = newArray[i - 1] + newArray[i - 2]
    // })
}

console.log(findFibonacci([15,1,3]))