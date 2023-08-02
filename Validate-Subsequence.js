const array = [5, 1, 22, 25, 6, -1, 8, 10]; 
const sequence = [1, 6, -1, 10];
let aux = []

function validateSubsequence(array, sequence) {
    for (let i = 0; i < sequence.length; i++) {
        if (array.indexOf(sequence[i]) === -1)
            return false
        if (i === 0)
            aux.push(array.indexOf(sequence[0]))
        if (i > 0) {
            const newPosition = array.findIndex((number, index) => number === sequence[i] && index > aux[aux.length-1])
            if (newPosition === -1)
                return false;
            else aux.push(newPosition)
        }
    }
    return true
}


console.log(validateSubsequence(array, sequence))

