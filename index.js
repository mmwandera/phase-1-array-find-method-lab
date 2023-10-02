// code your solution here

function superbowlWin(array){
    const yearWon = array.find(function(element){
        return element.result === "W"
    })

    if(yearWon){
        return yearWon.year
    } else {
        return undefined
    }
}