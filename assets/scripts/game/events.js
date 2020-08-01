'use strict'
const api = require('./api')
const ui = require('./ui')
// const store = require('../store')

// Start the new game
const onStartGame = function (event) {
  event.preventDefault()
  api.startGame()
    .then(ui.startGameSuccess)
    .catch(ui.startGameFailure)
}

const onTl = function () {
  event.preventDefault()
  if ($('#top-left').text() === '') {
    api.topLeft()
    api.valueTurn()
      .then(ui.topLeftSuccess)
      .catch(ui.topLeftFailure)
  }
}

const onTm = function () {
  event.preventDefault()
  if ($('#top-middle').text() === '') {
    api.topMiddle ()
    api.valueTurn()
      .then(ui.todleSuccess)
      .catch(ui.topMiddleFailure)
  } else {
    $('#message').text('NOT!!!')
  }
}

const onTr = function () {
  event.preventDefault()
  if ($('#top-right').text() === '') {
    api.topRight()
    api.valueTurn()
      .then(ui.topRightSuccess)
      .catch(ui.topRightFailure)
  }
}

const onMl = function () {
  event.preventDefault()
  if ($('#middle-middle').text() === '') {
    api.middleMiddle()
    api.valueTurn()
      .then(ui.middleMiddleSuccess)
      .catch(ui.middleMiddleFailure)
  }
}

const onMm = function () {
  event.preventDefault()
  if ($('#middle-middle').text() === '') {
    api.middleMiddle()
    api.valueTurn()
      .then(ui.middleMiddleSuccess)
      .catch(ui.middleMiddleFailure)
  }
}

const onMr = function () {
  event.preventDefault()
  if ($('#middle-right').text() === '') {
    api.middleRight()
    api.valueTurn()
      .then(ui.middleRightSuccess)
      .catch(ui.middleRightFailure)
  }
}

const onLl = function () {
  event.preventDefault()
  if ($('#low-left').text() === '') {
    api.lowLeft()
    api.valueTurn()
      .then(ui.lowLeftSuccess)
      .catch(ui.lowLeftFailure)
  }
}

const onLm = function () {
  event.preventDefault()
  if ($('#low-middle').text() === '') {
    api.lowMiddle()
    api.valueTurn()
      .then(ui.lowMiddleSuccess)
      .catch(ui.lowMiddleFailure)
  }
}

const onLr = function () {
  event.preventDefault()
  if ($('#low-right').text() === '') {
    api.lowRight()
    api.valueTurn()
      .then(ui.lowRightSuccess)
      .catch(ui.lowRightFailure)
  }
}

const onGameIndex = function (event) {
  event.preventDefault()
  api.gamesPlayed()
    .then(ui.gameIndexSuccess)
    .catch(ui.gameIndexFailure)
}

module.exports = {
  onStartGame,
  onTl,
  onTm,
  onTr,
  onMl,
  onMm,
  onMr,
  onLl,
  onLm,
  onLr,
  onGameIndex
}
