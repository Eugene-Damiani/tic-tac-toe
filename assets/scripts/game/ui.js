'use strict'
const store = require('../store')

const startGameSuccess = function (response) {
store.game = response.game
store.player = "X"
store.game.over = false
$('#top-left').empty()
$('#top-middle').empty()
$('#top-right').empty()
$('#middle-left').empty()
$('#middle-middle').empty()
$('#middle-right').empty()
$('#low-left').empty()
$('#low-middle').empty()
$('#low-right').empty()
}

const startGameFailure = function () {
  $('#message').text('Are you still on dail-up internet?')
}

const topLeftSuccess = function (response) {
  store.game.cells[0] = response.game.cells[0]
  $('#top-left').text(response.game.cells[0])
let value = store.player
if(value === "O"){
  value = "X"
}else{
  value = "O"
}
let cells = store.game.cells
if ((cells[0] === "X" && cells[1] === "X" && cells[2])
|| (cells[3] === "X" && cells[4] === "X" && cells[5])
|| (cells[6] === "X" && cells[7] === "X" && cells[8])
|| (cells[0] === "X" && cells[3] === "X" && cells[6])
|| (cells[1] === "X" && cells[4] === "X" && cells[7])
|| (cells[2] === "X" && cells[5] === "X" && cells[8])
|| (cells[0] === "X" && cells[4] === "X" && cells[8])
|| (cells[2] === "X" && cells[4] === "X" && cells[6])
) {
  $('#board').hide
  store.game.over = true
  $('#message').text('X Wins')
} else if ((cells[0] === "X" && cells[1] === "X" && cells[2])
|| (cells[3] === "O" && cells[4] === "O" && cells[5])
|| (cells[6] === "O" && cells[7] === "O" && cells[8])
|| (cells[0] === "O" && cells[3] === "O" && cells[6])
|| (cells[1] === "O" && cells[4] === "O" && cells[7])
|| (cells[2] === "O" && cells[5] === "O" && cells[8])
|| (cells[0] === "O" && cells[4] === "O" && cells[8])
|| (cells[2] === "O" && cells[4] === "O" && cells[6])
) {
  $('#board').hide
  store.game.over = true
  $('#message').text('O Wins!')
} else if ((cells[0] === "X" && cells[1] === "X" && cells[2])
|| (cells[3] === "" && cells[4] === "" && cells[5])
|| (cells[6] === "" && cells[7] === "" && cells[8])
|| (cells[0] === "" && cells[3] === "" && cells[6])
|| (cells[1] === "" && cells[4] === "" && cells[7])
|| (cells[2] === "" && cells[5] === "" && cells[8])
|| (cells[0] === "" && cells[4] === "" && cells[8])
|| (cells[2] === "" && cells[4] === "" && cells[6])
) { $('#board').hide
store.game.over = true
$('#message').text('X and O win JK It is a Tie!')
} else {
$('#message').text('You know what to do' + value)
  }
}
const topLeftFailure = function(error){
  $('#message').text('NOPE!!!')
}

const topMiddleSuccess = function (response) {
  store.game.cells[0] = response.game.cells[0]
  $('#top-middle').text(response.game.cells[0])
  let value = store.player
  if (value === "O") {
    value = "X"
  } else {
    value = "O"
  }
let cells = store.game.cells
if ((cells[0] === "X" && cells[1] === "X" && cells[2])
|| (cells[3] === "X" && cells[4] === "X" && cells[5])
|| (cells[6] === "X" && cells[7] === "X" && cells[8])
|| (cells[0] === "X" && cells[3] === "X" && cells[6])
|| (cells[1] === "X" && cells[4] === "X" && cells[7])
|| (cells[2] === "X" && cells[5] === "X" && cells[8])
|| (cells[0] === "X" && cells[4] === "X" && cells[8])
|| (cells[2] === "X" && cells[4] === "X" && cells[6])
) {
  $('#board').hide
  store.game.over = true
  $('#message').text('X Wins')
} else if ((cells[0] === "X" && cells[1] === "X" && cells[2])
|| (cells[3] === "O" && cells[4] === "O" && cells[5])
|| (cells[6] === "O" && cells[7] === "O" && cells[8])
|| (cells[0] === "O" && cells[3] === "O" && cells[6])
|| (cells[1] === "O" && cells[4] === "O" && cells[7])
|| (cells[2] === "O" && cells[5] === "O" && cells[8])
|| (cells[0] === "O" && cells[4] === "O" && cells[8])
|| (cells[2] === "O" && cells[4] === "O" && cells[6])
) {
  $('#board').hide
  store.game.over = true
  $('#message').text('O Wins!')
} else if ((cells[0] === "X" && cells[1] === "X" && cells[2])
|| (cells[3] === "" && cells[4] === "" && cells[5])
|| (cells[6] === "" && cells[7] === "" && cells[8])
|| (cells[0] === "" && cells[3] === "" && cells[6])
|| (cells[1] === "" && cells[4] === "" && cells[7])
|| (cells[2] === "" && cells[5] === "" && cells[8])
|| (cells[0] === "" && cells[4] === "" && cells[8])
|| (cells[2] === "" && cells[4] === "" && cells[6])
) { $('#board').hide
store.game.over = true
$('#message').text('X and O win JK It is a Tie!')
} else {
$('#message').text('You know what to do' + value)
  }
}
const topMiddleFailure = function(error){
  $('#message').text('NOT!!!')
}

const topRightSuccess = function (response) {
  store.game.cells[0] = response.game.cells[0]
  $('#top-right').text(response.game.cells[0])
  let value = store.player
  if (value === "O") {
    value = "X"
  } else {
    value = "O"
  }
let cells = store.game.cells
if ((cells[0] === "X" && cells[1] === "X" && cells[2])
|| (cells[3] === "X" && cells[4] === "X" && cells[5])
|| (cells[6] === "X" && cells[7] === "X" && cells[8])
|| (cells[0] === "X" && cells[3] === "X" && cells[6])
|| (cells[1] === "X" && cells[4] === "X" && cells[7])
|| (cells[2] === "X" && cells[5] === "X" && cells[8])
|| (cells[0] === "X" && cells[4] === "X" && cells[8])
|| (cells[2] === "X" && cells[4] === "X" && cells[6])
) {
  $('#board').hide
  store.game.over = true
  $('#message').text('X Wins')
} else if ((cells[0] === "X" && cells[1] === "X" && cells[2])
|| (cells[3] === "O" && cells[4] === "O" && cells[5])
|| (cells[6] === "O" && cells[7] === "O" && cells[8])
|| (cells[0] === "O" && cells[3] === "O" && cells[6])
|| (cells[1] === "O" && cells[4] === "O" && cells[7])
|| (cells[2] === "O" && cells[5] === "O" && cells[8])
|| (cells[0] === "O" && cells[4] === "O" && cells[8])
|| (cells[2] === "O" && cells[4] === "O" && cells[6])
) {
  $('#board').hide
  store.game.over = true
  $('#message').text('O Wins!')
} else if ((cells[0] === "X" && cells[1] === "X" && cells[2])
|| (cells[3] === "" && cells[4] === "" && cells[5])
|| (cells[6] === "" && cells[7] === "" && cells[8])
|| (cells[0] === "" && cells[3] === "" && cells[6])
|| (cells[1] === "" && cells[4] === "" && cells[7])
|| (cells[2] === "" && cells[5] === "" && cells[8])
|| (cells[0] === "" && cells[4] === "" && cells[8])
|| (cells[2] === "" && cells[4] === "" && cells[6])
) { $('#board').hide
store.game.over = true
$('#message').text('X and O win JK It is a Tie!')
} else {
$('#message').text('You know what to do' + value)
  }
}
const topRightFailure = function(error){
  $('#message').text('SIKE!!!')
}

const middleLeftSuccess = function (response) {
  store.game.cells[0] = response.game.cells[0]
  $('#middle-left').text(response.game.cells[0])
  let value = store.player
  if (value === "O") {
    value = "X"
  } else {
    value = "O"
  }
let cells = store.game.cells
if ((cells[0] === "X" && cells[1] === "X" && cells[2])
|| (cells[3] === "X" && cells[4] === "X" && cells[5])
|| (cells[6] === "X" && cells[7] === "X" && cells[8])
|| (cells[0] === "X" && cells[3] === "X" && cells[6])
|| (cells[1] === "X" && cells[4] === "X" && cells[7])
|| (cells[2] === "X" && cells[5] === "X" && cells[8])
|| (cells[0] === "X" && cells[4] === "X" && cells[8])
|| (cells[2] === "X" && cells[4] === "X" && cells[6])
) {
  $('#board').hide
  store.game.over = true
  $('#message').text('X Wins')
} else if ((cells[0] === "X" && cells[1] === "X" && cells[2])
|| (cells[3] === "O" && cells[4] === "O" && cells[5])
|| (cells[6] === "O" && cells[7] === "O" && cells[8])
|| (cells[0] === "O" && cells[3] === "O" && cells[6])
|| (cells[1] === "O" && cells[4] === "O" && cells[7])
|| (cells[2] === "O" && cells[5] === "O" && cells[8])
|| (cells[0] === "O" && cells[4] === "O" && cells[8])
|| (cells[2] === "O" && cells[4] === "O" && cells[6])
) {
  $('#board').hide
  store.game.over = true
  $('#message').text('O Wins!')
} else if ((cells[0] === "X" && cells[1] === "X" && cells[2])
|| (cells[3] === "" && cells[4] === "" && cells[5])
|| (cells[6] === "" && cells[7] === "" && cells[8])
|| (cells[0] === "" && cells[3] === "" && cells[6])
|| (cells[1] === "" && cells[4] === "" && cells[7])
|| (cells[2] === "" && cells[5] === "" && cells[8])
|| (cells[0] === "" && cells[4] === "" && cells[8])
|| (cells[2] === "" && cells[4] === "" && cells[6])
) { $('#board').hide
store.game.over = true
$('#message').text('X and O win JK It is a Tie!')
} else {
$('#message').text('You know what to do' + value)
  }
}
const middleLeftFailure = function(error){
  $('#message').text('Try One More Time!!!')
}
const middleMiddleSuccess = function (response) {
  store.game.cells[0] = response.game.cells[0]
  $('#middle-middle').text(response.game.cells[0])
  let value = store.player
  if (value === "O") {
    value = "X"
  } else {
    value = "O"
  }
let cells = store.game.cells
if ((cells[0] === "X" && cells[1] === "X" && cells[2])
|| (cells[3] === "X" && cells[4] === "X" && cells[5])
|| (cells[6] === "X" && cells[7] === "X" && cells[8])
|| (cells[0] === "X" && cells[3] === "X" && cells[6])
|| (cells[1] === "X" && cells[4] === "X" && cells[7])
|| (cells[2] === "X" && cells[5] === "X" && cells[8])
|| (cells[0] === "X" && cells[4] === "X" && cells[8])
|| (cells[2] === "X" && cells[4] === "X" && cells[6])
) {
  $('#board').hide
  store.game.over = true
  $('#message').text('X Wins')
} else if ((cells[0] === "X" && cells[1] === "X" && cells[2])
|| (cells[3] === "O" && cells[4] === "O" && cells[5])
|| (cells[6] === "O" && cells[7] === "O" && cells[8])
|| (cells[0] === "O" && cells[3] === "O" && cells[6])
|| (cells[1] === "O" && cells[4] === "O" && cells[7])
|| (cells[2] === "O" && cells[5] === "O" && cells[8])
|| (cells[0] === "O" && cells[4] === "O" && cells[8])
|| (cells[2] === "O" && cells[4] === "O" && cells[6])
) {
  $('#board').hide
  store.game.over = true
  $('#message').text('O Wins!')
} else if ((cells[0] === "X" && cells[1] === "X" && cells[2])
|| (cells[3] === "" && cells[4] === "" && cells[5])
|| (cells[6] === "" && cells[7] === "" && cells[8])
|| (cells[0] === "" && cells[3] === "" && cells[6])
|| (cells[1] === "" && cells[4] === "" && cells[7])
|| (cells[2] === "" && cells[5] === "" && cells[8])
|| (cells[0] === "" && cells[4] === "" && cells[8])
|| (cells[2] === "" && cells[4] === "" && cells[6])
) { $('#board').hide
store.game.over = true
$('#message').text('X and O win JK It is a Tie!')
} else {
$('#message').text('You know what to do' + value)
  }
}
const middleMiddleFailure = function(error){
  $('#message').text('SIKE!!!')
}

const middleRightSuccess = function (response) {
  store.game.cells[0] = response.game.cells[0]
  $('#middle-right').text(response.game.cells[0])
  let value = store.player
  if (value === "O") {
    value = "X"
  } else {
    value = "O"
  }
let cells = store.game.cells
if ((cells[0] === "X" && cells[1] === "X" && cells[2])
|| (cells[3] === "X" && cells[4] === "X" && cells[5])
|| (cells[6] === "X" && cells[7] === "X" && cells[8])
|| (cells[0] === "X" && cells[3] === "X" && cells[6])
|| (cells[1] === "X" && cells[4] === "X" && cells[7])
|| (cells[2] === "X" && cells[5] === "X" && cells[8])
|| (cells[0] === "X" && cells[4] === "X" && cells[8])
|| (cells[2] === "X" && cells[4] === "X" && cells[6])
) {
  $('#board').hide
  store.game.over = true
  $('#message').text('X Wins')
} else if ((cells[0] === "X" && cells[1] === "X" && cells[2])
|| (cells[3] === "O" && cells[4] === "O" && cells[5])
|| (cells[6] === "O" && cells[7] === "O" && cells[8])
|| (cells[0] === "O" && cells[3] === "O" && cells[6])
|| (cells[1] === "O" && cells[4] === "O" && cells[7])
|| (cells[2] === "O" && cells[5] === "O" && cells[8])
|| (cells[0] === "O" && cells[4] === "O" && cells[8])
|| (cells[2] === "O" && cells[4] === "O" && cells[6])
) {
  $('#board').hide
  store.game.over = true
  $('#message').text('O Wins!')
} else if ((cells[0] === "X" && cells[1] === "X" && cells[2])
|| (cells[3] === "" && cells[4] === "" && cells[5])
|| (cells[6] === "" && cells[7] === "" && cells[8])
|| (cells[0] === "" && cells[3] === "" && cells[6])
|| (cells[1] === "" && cells[4] === "" && cells[7])
|| (cells[2] === "" && cells[5] === "" && cells[8])
|| (cells[0] === "" && cells[4] === "" && cells[8])
|| (cells[2] === "" && cells[4] === "" && cells[6])
) { $('#board').hide
store.game.over = true
$('#message').text('X and O win JK It is a Tie!')
} else {
$('#message').text('You know what to do' + value)
  }
}
const middleRightFailure = function(error){
  $('#message').text('Try One More Time')
}
const lowLeftSuccess = function (response) {
  store.game.cells[0] = response.game.cells[0]
  $('#low-left').text(response.game.cells[0])
  let value = store.player
  if (value === "O") {
    value = "X"
  } else {
    value = "O"
  }
let cells = store.game.cells
if ((cells[0] === "X" && cells[1] === "X" && cells[2])
|| (cells[3] === "X" && cells[4] === "X" && cells[5])
|| (cells[6] === "X" && cells[7] === "X" && cells[8])
|| (cells[0] === "X" && cells[3] === "X" && cells[6])
|| (cells[1] === "X" && cells[4] === "X" && cells[7])
|| (cells[2] === "X" && cells[5] === "X" && cells[8])
|| (cells[0] === "X" && cells[4] === "X" && cells[8])
|| (cells[2] === "X" && cells[4] === "X" && cells[6])
) {
  $('#board').hide
  store.game.over = true
  $('#message').text('X Wins')
} else if ((cells[0] === "X" && cells[1] === "X" && cells[2])
|| (cells[3] === "O" && cells[4] === "O" && cells[5])
|| (cells[6] === "O" && cells[7] === "O" && cells[8])
|| (cells[0] === "O" && cells[3] === "O" && cells[6])
|| (cells[1] === "O" && cells[4] === "O" && cells[7])
|| (cells[2] === "O" && cells[5] === "O" && cells[8])
|| (cells[0] === "O" && cells[4] === "O" && cells[8])
|| (cells[2] === "O" && cells[4] === "O" && cells[6])
) {
  $('#board').hide
  store.game.over = true
  $('#message').text('O Wins!')
} else if ((cells[0] === "X" && cells[1] === "X" && cells[2])
|| (cells[3] === "" && cells[4] === "" && cells[5])
|| (cells[6] === "" && cells[7] === "" && cells[8])
|| (cells[0] === "" && cells[3] === "" && cells[6])
|| (cells[1] === "" && cells[4] === "" && cells[7])
|| (cells[2] === "" && cells[5] === "" && cells[8])
|| (cells[0] === "" && cells[4] === "" && cells[8])
|| (cells[2] === "" && cells[4] === "" && cells[6])
) { $('#board').hide
store.game.over = true
$('#message').text('X and O win JK It is a Tie!')
} else {
$('#message').text('You know what to do' + value)
  }
}
const lowLeftFailure = function(error){
  $('#message').text('SIKE')
}

const lowMiddleSuccess = function (response) {
  store.game.cells[0] = response.game.cells[0]
  $('#low-middle').text(response.game.cells[0])
  let value = store.player
  if (value === "O") {
    value = "X"
  } else {
    value = "O"
  }
let cells = store.game.cells
if ((cells[0] === "X" && cells[1] === "X" && cells[2])
|| (cells[3] === "X" && cells[4] === "X" && cells[5])
|| (cells[6] === "X" && cells[7] === "X" && cells[8])
|| (cells[0] === "X" && cells[3] === "X" && cells[6])
|| (cells[1] === "X" && cells[4] === "X" && cells[7])
|| (cells[2] === "X" && cells[5] === "X" && cells[8])
|| (cells[0] === "X" && cells[4] === "X" && cells[8])
|| (cells[2] === "X" && cells[4] === "X" && cells[6])
) {
  $('#board').hide
  store.game.over = true
  $('#message').text('X Wins')
} else if ((cells[0] === "X" && cells[1] === "X" && cells[2])
|| (cells[3] === "O" && cells[4] === "O" && cells[5])
|| (cells[6] === "O" && cells[7] === "O" && cells[8])
|| (cells[0] === "O" && cells[3] === "O" && cells[6])
|| (cells[1] === "O" && cells[4] === "O" && cells[7])
|| (cells[2] === "O" && cells[5] === "O" && cells[8])
|| (cells[0] === "O" && cells[4] === "O" && cells[8])
|| (cells[2] === "O" && cells[4] === "O" && cells[6])
) {
  $('#board').hide
  store.game.over = true
  $('#message').text('O Wins!')
} else if ((cells[0] === "X" && cells[1] === "X" && cells[2])
|| (cells[3] === "" && cells[4] === "" && cells[5])
|| (cells[6] === "" && cells[7] === "" && cells[8])
|| (cells[0] === "" && cells[3] === "" && cells[6])
|| (cells[1] === "" && cells[4] === "" && cells[7])
|| (cells[2] === "" && cells[5] === "" && cells[8])
|| (cells[0] === "" && cells[4] === "" && cells[8])
|| (cells[2] === "" && cells[4] === "" && cells[6])
) { $('#board').hide
store.game.over = true
$('#message').text('X and O win JK It is a Tie!')
} else {
$('#message').text('You know what to do' + value)
  }
}
const lowMiddleFailure = function(error){
  $('#message').text('Unlucky')
}

const lowRightSuccess = function (response) {
  store.game.cells[0] = response.game.cells[0]
  $('#low-Right').text(response.game.cells[0])
  let value = store.player
  if (value === "O") {
    value = "X"
  } else {
    value = "O"
  }
let cells = store.game.cells
if ((cells[0] === "X" && cells[1] === "X" && cells[2])
|| (cells[3] === "X" && cells[4] === "X" && cells[5])
|| (cells[6] === "X" && cells[7] === "X" && cells[8])
|| (cells[0] === "X" && cells[3] === "X" && cells[6])
|| (cells[1] === "X" && cells[4] === "X" && cells[7])
|| (cells[2] === "X" && cells[5] === "X" && cells[8])
|| (cells[0] === "X" && cells[4] === "X" && cells[8])
|| (cells[2] === "X" && cells[4] === "X" && cells[6])
) {
  $('#board').hide
  store.game.over = true
  $('#message').text('X Wins')
} else if ((cells[0] === "X" && cells[1] === "X" && cells[2])
|| (cells[3] === "O" && cells[4] === "O" && cells[5])
|| (cells[6] === "O" && cells[7] === "O" && cells[8])
|| (cells[0] === "O" && cells[3] === "O" && cells[6])
|| (cells[1] === "O" && cells[4] === "O" && cells[7])
|| (cells[2] === "O" && cells[5] === "O" && cells[8])
|| (cells[0] === "O" && cells[4] === "O" && cells[8])
|| (cells[2] === "O" && cells[4] === "O" && cells[6])
) {
  $('#board').hide
  store.game.over = true
  $('#message').text('O Wins!')
} else if ((cells[0] === "X" && cells[1] === "X" && cells[2])
|| (cells[3] === "" && cells[4] === "" && cells[5])
|| (cells[6] === "" && cells[7] === "" && cells[8])
|| (cells[0] === "" && cells[3] === "" && cells[6])
|| (cells[1] === "" && cells[4] === "" && cells[7])
|| (cells[2] === "" && cells[5] === "" && cells[8])
|| (cells[0] === "" && cells[4] === "" && cells[8])
|| (cells[2] === "" && cells[4] === "" && cells[6])
) { $('#board').hide
store.game.over = true
$('#message').text('X and O win JK It is a Tie!')
} else {
$('#message').text('You know what to do' + value)
  }
}
const lowRightFailure = function(error) {
  $('#message').text('ZZZZZZ')
}

// const lowRightSuccess = function (response) {
//   store.game.cells[0] = response.game.cells[0]
//   $('#low-right').text(response.game.cells[0])
//   let value = store.player
//   if (value === "O") {
//     value = "X"
//   } else {
//     value = "O"
//   }
// let cells = store.game.cells
// if ((cells[0] === "X" && cells[1] === "X" && cells[2])
// || (cells[3] === "X" && cells[4] === "X" && cells[5])
// || (cells[6] === "X" && cells[7] === "X" && cells[8])
// || (cells[0] === "X" && cells[3] === "X" && cells[6])
// || (cells[1] === "X" && cells[4] === "X" && cells[7])
// || (cells[2] === "X" && cells[5] === "X" && cells[8])
// || (cells[0] === "X" && cells[4] === "X" && cells[8])
// || (cells[2] === "X" && cells[4] === "X" && cells[6])
// ) {
//   $('#board').hide
//   store.game.over = true
//   $('#message').text('X Wins')
// } else if ((cells[0] === "X" && cells[1] === "X" && cells[2])
// || (cells[3] === "O" && cells[4] === "O" && cells[5])
// || (cells[6] === "O" && cells[7] === "O" && cells[8])
// || (cells[0] === "O" && cells[3] === "O" && cells[6])
// || (cells[1] === "O" && cells[4] === "O" && cells[7])
// || (cells[2] === "O" && cells[5] === "O" && cells[8])
// || (cells[0] === "O" && cells[4] === "O" && cells[8])
// || (cells[2] === "O" && cells[4] === "O" && cells[6])
// ) {
//   $('#board').hide
//   store.game.over = true
//   $('#message').text('O Wins!')
// } else if ((cells[0] === "X" && cells[1] === "X" && cells[2])
// || (cells[3] === "" && cells[4] === "" && cells[5])
// || (cells[6] === "" && cells[7] === "" && cells[8])
// || (cells[0] === "" && cells[3] === "" && cells[6])
// || (cells[1] === "" && cells[4] === "" && cells[7])
// || (cells[2] === "" && cells[5] === "" && cells[8])
// || (cells[0] === "" && cells[4] === "" && cells[8])
// || (cells[2] === "" && cells[4] === "" && cells[6])
// ) { $('#board').hide
// store.game.over = true
// $('#message').text('X and O win JK It is a Tie!')
// } else {
// $('#message').text('You know what to do' + value)
//   }
// }
// const lowRightFailure = function(error){
//   $('#message').text('If Only')
// }

const gameIndexSuccess = function(response) {
  $('#index').text(response.game.length + "Played!")
}

const gameIndexFailure = function(response) {
  $('#index').text('No Sweat Play a game')
}


module.exports = {
  startGameSuccess,
  startGameFailure,
  topLeftSuccess,
  topLeftFailure,
  topMiddleSuccess,
  topMiddleFailure,
  topRightSuccess,
  topRightFailure,
  middleLeftSuccess,
  middleLeftFailure,
  middleMiddleSuccess,
  middleMiddleFailure,
  middleRightSuccess,
  middleRightFailure,
  lowLeftSuccess,
  lowLeftFailure,
  lowMiddleSuccess,
  lowMiddleFailure,
  lowRightSuccess,
  lowRightFailure,
  gameIndexSuccess,
  gameIndexFailure
}
