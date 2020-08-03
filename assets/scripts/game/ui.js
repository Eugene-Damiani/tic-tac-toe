'use strict'
const store = require('../store')

const startGameSuccess = function (response) {
  store.player = 'X'
  store.game = response.game
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
  $('#lazer').hide()
  $('#message').text("Let's Do This!")
  $('#board').show()
  $('#start-game').hide()
}

const startGameFailure = function () {
  $('#message').text('Are you still on dail-up internet?')
}

const topLeftSuccess = function (response) {
  store.game.cells[0] = response.game.cells[0]
  $('#top-left').text(response.game.cells[0])
  if (store.player === 'O') {
    store.player = 'X'
  } else {
    store.player = 'O'
  }
  let cells = store.game.cells
  if ((cells[0] === 'X' && cells[1] === 'X' && cells[2] === 'X') ||
      (cells[3] === 'X' && cells[4] === 'X' && cells[5] === 'X') ||
      (cells[6] === 'X' && cells[7] === 'X' && cells[8] === 'X') ||
      (cells[0] === 'X' && cells[3] === 'X' && cells[6] === 'X') ||
      (cells[1] === 'X' && cells[4] === 'X' && cells[7] === 'X') ||
      (cells[2] === 'X' && cells[5] === 'X' && cells[8] === 'X') ||
      (cells[0] === 'X' && cells[4] === 'X' && cells[8] === 'X') ||
      (cells[2] === 'X' && cells[4] === 'X' && cells[6] === 'X')
  ) {
    store.game.over = true
    $('#message').text('X Wins!!!')
    $('#board').hide()
    $('#start-game').show()
  } else if ((cells[0] === 'O' && cells[1] === 'O' && cells[2] === 'O') ||
          (cells[3] === 'O' && cells[4] === 'O' && cells[5] === 'O') ||
          (cells[6] === 'O' && cells[7] === 'O' && cells[8] === 'O') ||
          (cells[0] === 'O' && cells[3] === 'O' && cells[6] === 'O') ||
          (cells[1] === 'O' && cells[4] === 'O' && cells[7] === 'O') ||
          (cells[2] === 'O' && cells[5] === 'O' && cells[8] === 'O') ||
          (cells[0] === 'O' && cells[4] === 'O' && cells[8] === 'O') ||
          (cells[2] === 'O' && cells[4] === 'O' && cells[6] === 'O')
  ) {
    store.game.over = true
    $('#message').text('O WINS!!!')
    $('#board').hide()
    $('#start-game').show()
  } else if (cells[0] !== '' && cells[1] !== '' && cells[2] !== '' &&
          cells[3] !== '' && cells[4] !== '' && cells[5] !== '' &&
          cells[6] !== '' && cells[7] !== '' && cells[8] !== '' &&
          cells[0] !== '' && cells[3] !== '' && cells[6] !== '' &&
          cells[1] !== '' && cells[4] !== '' && cells[7] !== '' &&
          cells[2] !== '' && cells[5] !== '' && cells[8] !== '' &&
          cells[0] !== '' && cells[4] !== '' && cells[8] !== '' &&
          cells[2] !== '' && cells[4] !== '' && cells[6] !== ''
  ) {
    store.game.over = true
    $('#message').text('Both X and O win!')
    $('#board').hide()
    $('#start-game').show()
  } else {
    $('#message').text(`Nice Move! Your move ${store.player}!`)
  }
}

const topLeftFailure = function (error) {
  $('#message').text('NOPE')
}

const topMiddleSuccess = function (response) {
  store.game.cells[1] = response.game.cells[1]
  $('#top-middle').text(response.game.cells[1])
  if (store.player === 'O') {
    store.player = 'X'
  } else {
    store.player = 'O'
  }
  let cells = store.game.cells
  if ((cells[0] === 'X' && cells[1] === 'X' && cells[2] === 'X') ||
          (cells[3] === 'X' && cells[4] === 'X' && cells[5] === 'X') ||
          (cells[6] === 'X' && cells[7] === 'X' && cells[8] === 'X') ||
          (cells[0] === 'X' && cells[3] === 'X' && cells[6] === 'X') ||
          (cells[1] === 'X' && cells[4] === 'X' && cells[7] === 'X') ||
          (cells[2] === 'X' && cells[5] === 'X' && cells[8] === 'X') ||
          (cells[0] === 'X' && cells[4] === 'X' && cells[8] === 'X') ||
          (cells[2] === 'X' && cells[4] === 'X' && cells[6] === 'X')
  ) {
    store.game.over = true
    $('#message').text('X WINS!!!')
    $('#board').hide()
    $('#start-game').show()
  } else if ((cells[0] === 'O' && cells[1] === 'O' && cells[2] === 'O') ||
          (cells[3] === 'O' && cells[4] === 'O' && cells[5] === 'O') ||
          (cells[6] === 'O' && cells[7] === 'O' && cells[8] === 'O') ||
          (cells[0] === 'O' && cells[3] === 'O' && cells[6] === 'O') ||
          (cells[1] === 'O' && cells[4] === 'O' && cells[7] === 'O') ||
          (cells[2] === 'O' && cells[5] === 'O' && cells[8] === 'O') ||
          (cells[0] === 'O' && cells[4] === 'O' && cells[8] === 'O') ||
          (cells[2] === 'O' && cells[4] === 'O' && cells[6] === 'O')
  ) {
    store.game.over = true
    $('#message').text('O WINS!!!')
    $('#board').hide()
    $('#start-game').show()
} else if (cells[0] !== '' && cells[1] !== '' && cells[2] !== '' &&
           cells[3] !== '' && cells[4] !== '' && cells[5] !== '' &&
           cells[6] !== '' && cells[7] !== '' && cells[8] !== '' &&
           cells[0] !== '' && cells[3] !== '' && cells[6] !== '' &&
           cells[1] !== '' && cells[4] !== '' && cells[7] !== '' &&
           cells[2] !== '' && cells[5] !== '' && cells[8] !== '' &&
           cells[0] !== '' && cells[4] !== '' && cells[8] !== '' &&
           cells[2] !== '' && cells[4] !== '' && cells[6] !== ''
  ) {
    store.game.over = true
    $('#message').text('Both X and O WIN!!! AKA TIE')
    $('#board').hide()
    $('#start-game').show()
  } else {
    $('#message').text(`You Make it Looke Easy ${store.player}!`)
  }
}

const topMiddleFailure = function (error) {
  $('#message').text('NOPE')
}

const topRightSuccess = function (response) {
  store.game.cells[2] = response.game.cells[2]
  $('#top-right').text(response.game.cells[2])
  if (store.player === 'O') {
    store.player = 'X'
  } else {
    store.player = 'O'
  }
  let cells = store.game.cells
  if ((cells[0] === 'X' && cells[1] === 'X' && cells[2] === 'X') ||
              (cells[3] === 'X' && cells[4] === 'X' && cells[5] === 'X') ||
              (cells[6] === 'X' && cells[7] === 'X' && cells[8] === 'X') ||
              (cells[0] === 'X' && cells[3] === 'X' && cells[6] === 'X') ||
              (cells[1] === 'X' && cells[4] === 'X' && cells[7] === 'X') ||
              (cells[2] === 'X' && cells[5] === 'X' && cells[8] === 'X') ||
              (cells[0] === 'X' && cells[4] === 'X' && cells[8] === 'X') ||
              (cells[2] === 'X' && cells[4] === 'X' && cells[6] === 'X')
  ) {
    store.game.over = true
    $('#message').text('X WINS!!!')
    $('#board').hide()
    $('#start-game').show()
  } else if ((cells[0] === 'O' && cells[1] === 'O' && cells[2] === 'O') ||
          (cells[3] === 'O' && cells[4] === 'O' && cells[5] === 'O') ||
          (cells[6] === 'O' && cells[7] === 'O' && cells[8] === 'O') ||
          (cells[0] === 'O' && cells[3] === 'O' && cells[6] === 'O') ||
          (cells[1] === 'O' && cells[4] === 'O' && cells[7] === 'O') ||
          (cells[2] === 'O' && cells[5] === 'O' && cells[8] === 'O') ||
          (cells[0] === 'O' && cells[4] === 'O' && cells[8] === 'O') ||
          (cells[2] === 'O' && cells[4] === 'O' && cells[6] === 'O')
  ) {
    store.game.over = true
    $('#board').hide()
    $('#start-game').show()
    $('#message').text('O Wins!!!')
  } else if (cells[0] !== '' && cells[1] !== '' && cells[2] !== '' &&
           cells[3] !== '' && cells[4] !== '' && cells[5] !== '' &&
           cells[6] !== '' && cells[7] !== '' && cells[8] !== '' &&
           cells[0] !== '' && cells[3] !== '' && cells[6] !== '' &&
           cells[1] !== '' && cells[4] !== '' && cells[7] !== '' &&
           cells[2] !== '' && cells[5] !== '' && cells[8] !== '' &&
           cells[0] !== '' && cells[4] !== '' && cells[8] !== '' &&
           cells[2] !== '' && cells[4] !== '' && cells[6] !== ''
  ) {
    store.game.over = true
    $('#board').hide()
    $('#start-game').show()
    $('#message').text('Everyone wins! AKA TIE GAME!')
  } else {
    $('#message').text(`${store.player} is too cool for Scool`)
  }
}

const topRightFailure = function (error) {
  $('#message').text('NOPE')
}

const middleLeftSuccess = function (response) {
  store.game.cells[3] = response.game.cells[3]
  $('#middle-left').text(response.game.cells[3])
  if (store.player === 'O') {
    store.player = 'X'
  } else {
    store.player = 'O'
  }
  let cells = store.game.cells
  if ((cells[0] === 'X' && cells[1] === 'X' && cells[2] === 'X') ||
          (cells[3] === 'X' && cells[4] === 'X' && cells[5] === 'X') ||
          (cells[6] === 'X' && cells[7] === 'X' && cells[8] === 'X') ||
          (cells[0] === 'X' && cells[3] === 'X' && cells[6] === 'X') ||
          (cells[1] === 'X' && cells[4] === 'X' && cells[7] === 'X') ||
          (cells[2] === 'X' && cells[5] === 'X' && cells[8] === 'X') ||
          (cells[0] === 'X' && cells[4] === 'X' && cells[8] === 'X') ||
          (cells[2] === 'X' && cells[4] === 'X' && cells[6] === 'X')
  ) {
    store.game.over = true
    $('#board').hide()
    $('#start-game').show()
    $('#message').text('X WINS!!!')
  } else if ((cells[0] === 'O' && cells[1] === 'O' && cells[2] === 'O') ||
              (cells[3] === 'O' && cells[4] === 'O' && cells[5] === 'O') ||
              (cells[6] === 'O' && cells[7] === 'O' && cells[8] === 'O') ||
              (cells[0] === 'O' && cells[3] === 'O' && cells[6] === 'O') ||
              (cells[1] === 'O' && cells[4] === 'O' && cells[7] === 'O') ||
              (cells[2] === 'O' && cells[5] === 'O' && cells[8] === 'O') ||
              (cells[0] === 'O' && cells[4] === 'O' && cells[8] === 'O') ||
              (cells[2] === 'O' && cells[4] === 'O' && cells[6] === 'O')
  ) {
    store.game.over = true
    $('#board').hide()
    $('#start-game').show()
    $('#message').text('O WINS!!!')
  } else if (cells[0] !== '' && cells[1] !== '' && cells[2] !== '' &&
                cells[3] !== '' && cells[4] !== '' && cells[5] !== '' &&
                cells[6] !== '' && cells[7] !== '' && cells[8] !== '' &&
                cells[0] !== '' && cells[3] !== '' && cells[6] !== '' &&
                cells[1] !== '' && cells[4] !== '' && cells[7] !== '' &&
                cells[2] !== '' && cells[5] !== '' && cells[8] !== '' &&
                cells[0] !== '' && cells[4] !== '' && cells[8] !== '' &&
                cells[2] !== '' && cells[4] !== '' && cells[6] !== ''
  ) {
    $('#board').hide()
    $('#start-game').show()
    store.game.over = true
    $('#message').text("Both X and O win AKA it's a TIE!")
  } else {
    $("#message").text(`It's All ${store.player}'s`)
  }
}

const middleLeftFailure = function (error) {
  $('#message').text('NOPE')
}

const middleMiddleSuccess = function (response) {
  store.game.cells[4] = response.game.cells[4]
  $('#middle-middle').text(response.game.cells[4])
  if (store.player === 'O') {
    store.player = 'X'
  } else {
    store.player = 'O'
  }
  let cells = store.game.cells
  if ((cells[0] === 'X' && cells[1] === 'X' && cells[2] === 'X') ||
      (cells[3] === 'X' && cells[4] === 'X' && cells[5] === 'X') ||
      (cells[6] === 'X' && cells[7] === 'X' && cells[8] === 'X') ||
      (cells[0] === 'X' && cells[3] === 'X' && cells[6] === 'X') ||
      (cells[1] === 'X' && cells[4] === 'X' && cells[7] === 'X') ||
      (cells[2] === 'X' && cells[5] === 'X' && cells[8] === 'X') ||
      (cells[0] === 'X' && cells[4] === 'X' && cells[8] === 'X') ||
      (cells[2] === 'X' && cells[4] === 'X' && cells[6] === 'X')
  ) {
    store.game.over = true
    $('#board').hide()
    $('#start-game').show()
    $('#message').text('X WINS!!!')
  } else if ((cells[0] === 'O' && cells[1] === 'O' && cells[2] === 'O') ||
        (cells[3] === 'O' && cells[4] === 'O' && cells[5] === 'O') ||
        (cells[6] === 'O' && cells[7] === 'O' && cells[8] === 'O') ||
        (cells[0] === 'O' && cells[3] === 'O' && cells[6] === 'O') ||
        (cells[1] === 'O' && cells[4] === 'O' && cells[7] === 'O') ||
        (cells[2] === 'O' && cells[5] === 'O' && cells[8] === 'O') ||
        (cells[0] === 'O' && cells[4] === 'O' && cells[8] === 'O') ||
        (cells[2] === 'O' && cells[4] === 'O' && cells[6] === 'O')
  ) {
    store.game.over = true
    $('#board').hide()
    $('#start-game').show()
    $('#message').text('O WINS!!!')
  } else if (cells[0] !== '' && cells[1] !== '' && cells[2] !== '' &&
          cells[3] !== '' && cells[4] !== '' && cells[5] !== '' &&
          cells[6] !== '' && cells[7] !== '' && cells[8] !== '' &&
          cells[0] !== '' && cells[3] !== '' && cells[6] !== '' &&
          cells[1] !== '' && cells[4] !== '' && cells[7] !== '' &&
          cells[2] !== '' && cells[5] !== '' && cells[8] !== '' &&
          cells[0] !== '' && cells[4] !== '' && cells[8] !== '' &&
          cells[2] !== '' && cells[4] !== '' && cells[6] !== ''
  ) {
    $('#board').hide()
    $('#start-game').show()
    store.game.over = true
    $('#message').text("Both X and O win AKA it's a TIE!")
  } else {
    $('#message').text(`I know it's ${store.player} turn`)
  }
}

const middleMiddleFailure = function (error) {
  $('#message').text('NOPE')
}

const middleRightSuccess = function (response) {
  store.game.cells[5] = response.game.cells[5]
  $('#middle-right').text(response.game.cells[5])
  if (store.player === 'O') {
    store.player = 'X'
  } else {
    store.player = 'O'
  }
  let cells = store.game.cells
  if ((cells[0] === 'X' && cells[1] === 'X' && cells[2] === 'X') ||
      (cells[3] === 'X' && cells[4] === 'X' && cells[5] === 'X') ||
      (cells[6] === 'X' && cells[7] === 'X' && cells[8] === 'X') ||
      (cells[0] === 'X' && cells[3] === 'X' && cells[6] === 'X') ||
      (cells[1] === 'X' && cells[4] === 'X' && cells[7] === 'X') ||
      (cells[2] === 'X' && cells[5] === 'X' && cells[8] === 'X') ||
      (cells[0] === 'X' && cells[4] === 'X' && cells[8] === 'X') ||
      (cells[2] === 'X' && cells[4] === 'X' && cells[6] === 'X')
  ) {
    $('#board').hide()
    $('#start-game').show()
    store.game.over = true
    $('#message').text('X WINS!!!')
  } else if ((cells[0] === 'O' && cells[1] === 'O' && cells[2] === 'O') ||
          (cells[3] === 'O' && cells[4] === 'O' && cells[5] === 'O') ||
          (cells[6] === 'O' && cells[7] === 'O' && cells[8] === 'O') ||
          (cells[0] === 'O' && cells[3] === 'O' && cells[6] === 'O') ||
          (cells[1] === 'O' && cells[4] === 'O' && cells[7] === 'O') ||
          (cells[2] === 'O' && cells[5] === 'O' && cells[8] === 'O') ||
          (cells[0] === 'O' && cells[4] === 'O' && cells[8] === 'O') ||
          (cells[2] === 'O' && cells[4] === 'O' && cells[6] === 'O')
  ) {
    $('#board').hide()
    $('#start-game').show()
    store.game.over = true
    $('#message').text('O WINS!!!')
  } else if (cells[0] !== '' && cells[1] !== '' && cells[2] !== '' &&
          cells[3] !== '' && cells[4] !== '' && cells[5] !== '' &&
          cells[6] !== '' && cells[7] !== '' && cells[8] !== '' &&
          cells[0] !== '' && cells[3] !== '' && cells[6] !== '' &&
          cells[1] !== '' && cells[4] !== '' && cells[7] !== '' &&
          cells[2] !== '' && cells[5] !== '' && cells[8] !== '' &&
          cells[0] !== '' && cells[4] !== '' && cells[8] !== '' &&
          cells[2] !== '' && cells[4] !== '' && cells[6] !== ''
  ) {
    $('#board').hide()
    $('#start-game').show()
    store.game.over = true
    $('#message').text("Both X and O win AKA it's a TIE!")
  } else {
    $('#message').text(`No One Puts ${store.player} In A Corner! ${store.player} Turn!`)
  }
}

const middleRightFailure = function (error) {
  $('#message').text('NOPE')
}

const lowLeftSuccess = function (response) {
  store.game.cells[6] = response.game.cells[6]
  $('#low-left').text(response.game.cells[6])
  if (store.player === 'O') {
    store.player = 'X'
  } else {
    store.player = 'O'
  }
  let cells = store.game.cells
  if ((cells[0] === 'X' && cells[1] === 'X' && cells[2] === 'X') ||
        (cells[3] === 'X' && cells[4] === 'X' && cells[5] === 'X') ||
        (cells[6] === 'X' && cells[7] === 'X' && cells[8] === 'X') ||
        (cells[0] === 'X' && cells[3] === 'X' && cells[6] === 'X') ||
        (cells[1] === 'X' && cells[4] === 'X' && cells[7] === 'X') ||
        (cells[2] === 'X' && cells[5] === 'X' && cells[8] === 'X') ||
        (cells[0] === 'X' && cells[4] === 'X' && cells[8] === 'X') ||
        (cells[2] === 'X' && cells[4] === 'X' && cells[6] === 'X')
  ) {
    store.game.over = true
    $('#message').text('X WINS!!!')
    $('#board').hide()
    $('#start-game').show()
  } else if ((cells[0] === 'O' && cells[1] === 'O' && cells[2] === 'O') ||
        (cells[3] === 'O' && cells[4] === 'O' && cells[5] === 'O') ||
        (cells[6] === 'O' && cells[7] === 'O' && cells[8] === 'O') ||
        (cells[0] === 'O' && cells[3] === 'O' && cells[6] === 'O') ||
        (cells[1] === 'O' && cells[4] === 'O' && cells[7] === 'O') ||
        (cells[2] === 'O' && cells[5] === 'O' && cells[8] === 'O') ||
        (cells[0] === 'O' && cells[4] === 'O' && cells[8] === 'O') ||
        (cells[2] === 'O' && cells[4] === 'O' && cells[6] === 'O')
  ) {
    store.game.over = true
    $('#board').hide()
    $('#start-game').show()
    $('#message').text('O WINS!!!')
  } else if (cells[0] !== '' && cells[1] !== '' && cells[2] !== '' &&
           cells[3] !== '' && cells[4] !== '' && cells[5] !== '' &&
           cells[6] !== '' && cells[7] !== '' && cells[8] !== '' &&
           cells[0] !== '' && cells[3] !== '' && cells[6] !== '' &&
           cells[1] !== '' && cells[4] !== '' && cells[7] !== '' &&
           cells[2] !== '' && cells[5] !== '' && cells[8] !== '' &&
           cells[0] !== '' && cells[4] !== '' && cells[8] !== '' &&
           cells[2] !== '' && cells[4] !== '' && cells[6] !== ''
  ) {
    $('#board').hide()
    $('#start-game').show()
    store.game.over = true
    $('#message').text("Both X and O win AKA it's a TIE!")
  } else {
    $('#message').text('Party On')
  }
}

const lowLeftFailure = function (error) {
 $('#message').text('NOPE')
}

const lowMiddleSuccess = function (response) {
  store.game.cells[7] = response.game.cells[7]
  $('#low-middle').text(response.game.cells[7])
  if (store.player === 'O') {
    store.player = 'X'
  } else {
    store.player = 'O'
  }
  let cells = store.game.cells
  if ((cells[0] === 'X' && cells[1] === 'X' && cells[2] === 'X') ||
      (cells[3] === 'X' && cells[4] === 'X' && cells[5] === 'X') ||
      (cells[6] === 'X' && cells[7] === 'X' && cells[8] === 'X') ||
      (cells[0] === 'X' && cells[3] === 'X' && cells[6] === 'X') ||
      (cells[1] === 'X' && cells[4] === 'X' && cells[7] === 'X') ||
      (cells[2] === 'X' && cells[5] === 'X' && cells[8] === 'X') ||
      (cells[0] === 'X' && cells[4] === 'X' && cells[8] === 'X') ||
      (cells[2] === 'X' && cells[4] === 'X' && cells[6] === 'X')
  ) {
    store.game.over = true
    $('#board').hide()
    $('#start-game').show()
    $('#message').text('X WINS!!!')
  } else if ((cells[0] === 'O' && cells[1] === 'O' && cells[2] === 'O') ||
          (cells[3] === 'O' && cells[4] === 'O' && cells[5] === 'O') ||
          (cells[6] === 'O' && cells[7] === 'O' && cells[8] === 'O') ||
          (cells[0] === 'O' && cells[3] === 'O' && cells[6] === 'O') ||
          (cells[1] === 'O' && cells[4] === 'O' && cells[7] === 'O') ||
          (cells[2] === 'O' && cells[5] === 'O' && cells[8] === 'O') ||
          (cells[0] === 'O' && cells[4] === 'O' && cells[8] === 'O') ||
          (cells[2] === 'O' && cells[4] === 'O' && cells[6] === 'O')
  ) {
    store.game.over = true
    $('#board').hide()
    $('#start-game').show()
    $('#message').text('O WINS!!!')
  } else if (cells[0] !== '' && cells[1] !== '' && cells[2] !== '' &&
          cells[3] !== '' && cells[4] !== '' && cells[5] !== '' &&
          cells[6] !== '' && cells[7] !== '' && cells[8] !== '' &&
          cells[0] !== '' && cells[3] !== '' && cells[6] !== '' &&
          cells[1] !== '' && cells[4] !== '' && cells[7] !== '' &&
          cells[2] !== '' && cells[5] !== '' && cells[8] !== '' &&
          cells[0] !== '' && cells[4] !== '' && cells[8] !== '' &&
          cells[2] !== '' && cells[4] !== '' && cells[6] !== ''
  ) {
    store.game.over = true
    $('#board').hide()
    $('#start-game').show()
    $('#message').text("Both X and O win AKA it's a TIE!")
  } else {
    $('#message').text(`${store.player} Just Click It!`)
  }
}
const lowMiddleFailure = function (error) {
  $('#message').text('NOPE!')
}

const lowRightSuccess = function (response) {
  store.game.cells[8] = response.game.cells[8]
  $('#low-right').text(response.game.cells[8])
  if (store.player === 'O') {
    store.player = 'X'
  } else {
    store.player = 'O'
  }

  let cells = store.game.cells
  if ((cells[0] === 'X' && cells[1] === 'X' && cells[2] === 'X') ||
      (cells[3] === 'X' && cells[4] === 'X' && cells[5] === 'X') ||
      (cells[6] === 'X' && cells[7] === 'X' && cells[8] === 'X') ||
      (cells[0] === 'X' && cells[3] === 'X' && cells[6] === 'X') ||
      (cells[1] === 'X' && cells[4] === 'X' && cells[7] === 'X') ||
      (cells[2] === 'X' && cells[5] === 'X' && cells[8] === 'X') ||
      (cells[0] === 'X' && cells[4] === 'X' && cells[8] === 'X') ||
      (cells[2] === 'X' && cells[4] === 'X' && cells[6] === 'X')
  ) {
    store.game.over = true
    $('#message').text('X WINS!!!')
    $('#board').hide()
    $('#start-game').show()
  } else if ((cells[0] === 'O' && cells[1] === 'O' && cells[2] === 'O') ||
        (cells[3] === 'O' && cells[4] === 'O' && cells[5] === 'O') ||
        (cells[6] === 'O' && cells[7] === 'O' && cells[8] === 'O') ||
        (cells[0] === 'O' && cells[3] === 'O' && cells[6] === 'O') ||
        (cells[1] === 'O' && cells[4] === 'O' && cells[7] === 'O') ||
        (cells[2] === 'O' && cells[5] === 'O' && cells[8] === 'O') ||
        (cells[0] === 'O' && cells[4] === 'O' && cells[8] === 'O') ||
        (cells[2] === 'O' && cells[4] === 'O' && cells[6] === 'O')
  ) {
    store.game.over = true
    $('#message').text('O WINS!!!')
    $('#board').hide()
    $('#start-game').show()
  } else if (cells[0] !== '' && cells[1] !== '' && cells[2] !== '' &&
          cells[3] !== '' && cells[4] !== '' && cells[5] !== '' &&
          cells[6] !== '' && cells[7] !== '' && cells[8] !== '' &&
          cells[0] !== '' && cells[3] !== '' && cells[6] !== '' &&
          cells[1] !== '' && cells[4] !== '' && cells[7] !== '' &&
          cells[2] !== '' && cells[5] !== '' && cells[8] !== '' &&
          cells[0] !== '' && cells[4] !== '' && cells[8] !== '' &&
          cells[2] !== '' && cells[4] !== '' && cells[6] !== ''
  ) {
    $('#board').hide()
    $('#start-game').show()
    store.game.over = true
    $('#message').text("Both X and O win AKA it's a TIE!")
  } else {
    $('#message').text(`${store.player} for the win?`)
  }
}
const lowRightFailure = function (error) {
  $('#message').text('NOPE')
}

const gameIndexSuccess = function (response) {
  $('#message').text(response.games.length + ' Games Played!')
}

const gameIndexFailure = function (response) {
  $('#message').text('No Sweat Play A Game')
}

const updateGamesPlayedSuccess = function (response) {
  const gamesPlayed = response.games.length
  $('#update-game').text(gamesPlayed + ' Games Played!')
}
const updateGamesPlayedFailed = function(error) {
  $('#update-game').text('Get Playing Already!')
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
<<<<<<< HEAD
<<<<<<< HEAD
  lowRightFailure,
  gameIndexSuccess,
<<<<<<< HEAD
  gameIndexFailure
=======
  lowRightFailure
>>>>>>> html
=======
  lowRightFailure,
  gameIndexSuccess,
  gameIndexFailure
>>>>>>> html
=======
  gameIndexFailure,
  updateGamesPlayedSuccess,
  updateGamesPlayedFailed
>>>>>>> html
}
