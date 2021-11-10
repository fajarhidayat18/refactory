// logika
function isPalindrome(value) {
    for (let i = 0; i < value.length; i++) {
        const indexAwal = i
        const indexAkhir = value.length - i - 1
        if(value.toLowerCase().charAt(indexAwal) != value.toLowerCase().charAt(indexAkhir)){
            return 'bukan Palindrome'
        }
        return 'Palindrom'
    }
}

// study kasus
let word1 = "Radar"
let word2 = "Malam"
let word3 = "Kasur ini rusak"
let word4 = "Ibu Ratna antar ubi"
let word5 = "Malas"
let word6 = "Makan nasi goreng"
let word7 = "Balonku ada lima"

// hasil
console.log(`kata "${word1}" adalah ${isPalindrome(word1)}`)
console.log(`kata "${word2}" adalah ${isPalindrome(word2)}`)
console.log(`kata "${word3}" adalah ${isPalindrome(word3)}`)
console.log(`kata "${word4}" adalah ${isPalindrome(word4)}`)
console.log(`kata "${word5}" adalah ${isPalindrome(word5)}`)
console.log(`kata "${word6}" adalah ${isPalindrome(word6)}`)
console.log(`kata "${word7}" adalah ${isPalindrome(word7)}`)