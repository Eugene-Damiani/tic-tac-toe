'use strict'

const store = require('../store')

const signUpSuccess = function () {
  $('#message').text('Successfully Signed Up!')
  $('form').trigger('reset')
}

const signUpFailure = function() {
  $('#message').text('Missing Infomation Try Again')
  $('form').trigger('reset')
}

const signInSuccess = function (response) {
  $('#message').text('Welcome to Tic Tac Toe')
  console.log(store)
  store.user = response.user
  console.log('store ', store)
  $('#authenticated').show()
  $('#unauthenticated').hide()
  $('form').trigger('reset')
}

const signInFailure = function () {
  $('#message').text('Your password or username is incorrect')
  $('form').trigger('reset')
}

const changePasswordSuccess = function () {
  $('#message').text('Your password has been changed')
  $('form').trigger('reset')
}

const changePasswordFailure = function () {
  $('#message').text('Your new passowrd does not match')
  $('form').trigger('reset')
}

const signOutSuccess = function () {
  $('#message').text('You have signed out')
  store.user = null
  $('form').trigger('reset')
}

const signOutFailure = function () {
  $('#message').text('You are still signed in')

}

module.exports = {
  signUpSuccess,
  signInFailure,
  signUpFailure,
  signInSuccess,
  signOutSuccess,
  signOutFailure,
  changePasswordSuccess,
  changePasswordFailure
}
