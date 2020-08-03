'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const authEvents = require ('./auth/events')

const gameEvents = require ('./game/events')

$(() => {
  // SignUp, SignIn, Signout and ChangePassword events
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('submit', authEvents.onSignOut)
  // JS for the game
  // Game Events
  // $('#restart').on('submit',gameEvents.onRetry)
  // $('.box').on('click', gameEvents.onBoxClick)

  // $('#update-game').on('click', gameEvents.onUpdateGame)
  $('#start-game').on('click', gameEvents.onStartGame)
  $('#game-index').on('click', gameEvents.onGameIndex)
  $('#update-game').on('click', gameEvents.onUpdateGame)

  $('#top-left').on('click', gameEvents.onTl)
  $('#top-middle').on('click', gameEvents.onTm)
  $('#top-right').on('click', gameEvents.onTr)
  $('#middle-left').on('click', gameEvents.onMl)
  $('#middle-middle').on('click', gameEvents.onMm)
  $('#middle-right').on('click', gameEvents.onMr)
  $('#low-left').on('click', gameEvents.onLl)
  $('#low-middle').on('click', gameEvents.onLm)
  $('#low-right').on('click', gameEvents.onLr)
})
