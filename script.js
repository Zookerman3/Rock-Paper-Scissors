window.onload = function(){

    let rockPlayerSelection = document.querySelector(".rockButton")
    let paperPlayerSelection = document.querySelector(".paperButton")
    let scissorsPlayerSelection = document.querySelector(".scissorsButton")

    function getComputerChoice(max) {
        return Math.floor(Math.random() * max);
    }

    console.log(getComputerChoice(3))

    let playerSelection = function(){
       return rockPlayerSelection || paperPlayerSelection || scissorsPlayerSelection
    }
    console.log(playerSelection)
}