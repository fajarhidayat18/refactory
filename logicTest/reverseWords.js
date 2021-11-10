// logika
function reverseWord(value) {
    let words = []
    value.split(' ').forEach(function(w) {
        let x = w
        // jika ada huruf capital maka kecilkan
        if (w.charAt(0) === w.charAt(0).toUpperCase()) {
            w = w.toLowerCase()
        }
        // membalikan kata
        let newWord = ""
        for (let i = w.length - 1; i >= 0; i--) {
            newWord += w[i];
        }
        // jika ada capitalkan kata yang sebelumnya pada huruf pertama
        if (x.charAt(0) === x.charAt(0).toUpperCase()) {
            newWord = newWord.split(' ').map(a => (a.charAt(0).toUpperCase() + a.slice(1))).join(' ')
        }
        // simpan ke array kosong yang diatas
        words.push(newWord)
    });
    return words.join(' ')
}
// testing
console.log(reverseWord('I am A Great human'))