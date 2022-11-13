const dice = document.getElementById("dice")
const diceImage = document.getElementById("diceImg")
const diceImgs = ["diceImages/1.png",
    "diceImages/2.png",
    "diceImages/3.png",
    "diceImages/4.png",
    "diceImages/5.png",
    "diceImages/6.png"]
function doSmtn(){
    var x = ((Math.random() * 6) + .5).toFixed(0)
    dice.innerHTML = x
    diceImage.src = diceImgs[x-1]
}