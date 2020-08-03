// 'use strict'
//
// const xSymbol = 'x'
// const oSymbol = 'o'
// const waysToWin = [
// // across
//   [0, 1, 2],
//   [3, 4, 5],
//   [6, 7, 8],
// // up and down
//   [0, 3 ,6],
//   [1, 4, 7],
//   [2, 5, 8],
// // diagonal win
//   [0, 4, 8],
//   [2, 4, 6]
// ]
//
// const restartButton = document.getElementById('restartButton')
// const boxItems = document.querySelectorAll('[cell]')
// // const board = document.getElementById('board')
// const winningMessage = document.getElementById('winningMessage')
// const win = document.querySelector(['winningMessage'])
// //Game needs to change between x and o so I made a function that will let me do that.
// let oTurn
//
// startGame()
//
// restartButton.addEventListener('click', startGame)
//
// //
// function startGame () {
//   // I can start with x because I put oTurn to false.
//   oTurn = false
//   boxItems.forEach(box => {
//     box.classList.remove(xSymbol)
//     box.classList.remove(oSymbol)
//     box.removeEventListener('click', boxClick)
//     box.addEventListener('click', boxClick, { once: true }) // only has the click work once
//   })
//   winningMessage.classList.remove('show')
// }
//
// function boxClick(event) {
//   const box = event.target
//   const currentSymbol = oTurn ? oSymbol : xSymbol
//   if (checkWaysToWin(currentSymbol)) {
//     endGame(false)
//   } else if (isDraw()) {
//     endGame(true)
//   } else {
//     changeTurn()
// }
// }
//
// function endGame(draw) {
//   if (draw) {
//     winningMessage.innerText = 'Draw!'
// //This code let's user know who won.
// //the "?" is used as a shorcut instead of an if else statement.
//   }else{
//     win.innerText = `${oSymbol ? "O's" : "X's"} Wins!`
//   }
//   winningMessage.classList.add('show')
// }
//
// function placeMark(box, currentTurn) {
//   cell.classList.add(currentTurn)
// }
//
// function letter(cell, currentTurn) {
//   cell.classList.add(currentTurn)
// }
//
// function changeTurn () {
//   oChange = !oChange
// }
//
// function checkWaysToWin(currentTurn) {
//   return waysToWin.some( combination => {
//     return combination.every(index => {
//       return cellItems[index].classList.contains(currentTurn)
//     })
//   })
// }
//
// function isDraw () {
//   return [...boxItems].every(box => {
//     // This is being used in case of a draw
//     return box.classList.contains(oSymbol) || box.classList.contains(xSymbol)
//   })
// }
