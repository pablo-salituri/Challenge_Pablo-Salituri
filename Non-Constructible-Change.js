const coins = [5, 7, 1, 1, 2, 3, 22]
const orderedCoins = bubbleSort(coins)

function bubbleSort(array) {
    for (let i = 0; i < array.length - 1; i++) {
      let aux;
      if (array[i] > array[i+1]) {
        aux = array[i+1];
        array[i+1] = array[i];
        array[i] = aux;
        return bubbleSort(array);
      }
    }
    return array
}

function checkConstructible(currentMinimum, currentMinimumPos) {
    let partialSum = orderedCoins[currentMinimumPos]
    for (let i = currentMinimumPos - 1; i >= 0; i--) {
        if (partialSum + orderedCoins[i] === currentMinimum)
            return partialSum + orderedCoins[i] + 1
        if (partialSum + orderedCoins[i] < currentMinimum)
            partialSum = partialSum + orderedCoins[i]
    }
    return partialSum + 1
}


/*************************  Main function ***********************/
function nonConstructibleChange(currentMinimum = 1) {

    if (coins.length === 0  || orderedCoins[0] !== 1)
        return 1

    while (orderedCoins.indexOf(currentMinimum) !== -1) {
        currentMinimum = currentMinimum + 1
    }
    const currentMinimumPos = orderedCoins.findLastIndex(elem => elem < currentMinimum)
    const answer = checkConstructible(currentMinimum, currentMinimumPos);
    if (orderedCoins.indexOf(answer) !== -1)
        return nonConstructibleChange(answer + 1)
    if (currentMinimum === answer)
        return answer
    return nonConstructibleChange(answer)
}


console.log(nonConstructibleChange())

