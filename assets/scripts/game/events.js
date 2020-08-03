'use strict'
const api = require('./api')
const ui = require('./ui')

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
      .then(ui.topLeftSuccess)
      .catch(ui.topLeftFailure)
  }
}

const onTm = function () {
  event.preventDefault()
  if ($('#top-middle').text() === '') {
    api.topMiddle()
      .then(ui.topMiddleSuccess)
      .catch(ui.topMiddleFailure)
  }
}

const onTr = function () {
  event.preventDefault()
  if ($('#top-right').text() === '') {
    api.topRight()
      .then(ui.topRightSuccess)
      .catch(ui.topRightFailure)
  }
}

const onMl = function () {
  event.preventDefault()
  if ($('#middle-left').text() === '') {
    api.middleLeft()
      .then(ui.middleLeftSuccess)
      .catch(ui.middleLeftFailure)
  }
}

const onMm = function () {
  event.preventDefault()
  if ($('#middle-middle').text() === '') {
    api.middleMiddle()
      .then(ui.middleMiddleSuccess)
      .catch(ui.middleMiddleFailure)
  }
}

const onMr = function () {
  event.preventDefault()
  if ($('#middle-right').text() === '') {
    api.middleRight()
      .then(ui.middleRightSuccess)
      .catch(ui.middleRightFailure)
  }
}

const onLl = function () {
  event.preventDefault()
  if ($('#low-left').text() === '') {
    api.lowLeft()
      .then(ui.lowLeftSuccess)
      .catch(ui.lowLeftFailure)
  }
}

const onLm = function () {
  event.preventDefault()
  if ($('#low-middle').text() === '') {
    api.lowMiddle()
      .then(ui.lowMiddleSuccess)
      .catch(ui.lowMiddleFailure)
  }
}

const onLr = function () {
  event.preventDefault()
  if ($('#low-right').text() === '') {
    api.lowRight()
      .then(ui.lowRightSuccess)
      .catch(ui.lowRightFailure)
  }
}

const onGameIndex = function (event) {
  event.preventDefault()
  api.gameIndex()
    .then(ui.gameIndexSuccess)
    .catch(ui.gameIndexFailure)
}


  api.updateGame(formData)
    .then(ui.updateGameSuccess)
    .catch(ui.updateGameFailure)
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
  onGameIndex,
  onUpdateGame
}
