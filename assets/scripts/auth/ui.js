'use strict'

const store = require('../store')

const signUpSuccess = function (){
  $('message').text('Successfully Signed Up!')
}

const signUpFailure = function(){
  $('message').text('Missing Infomation Try Again')
}

const signInSuccess = function (){
  $('message').text('Welcome to Tic Tac Toe')
  console.log(store)
  store.user = response.user
  console.log('store ', store)
  console.log('token ', store.user.token)
}

const signInFailure = function (){
  $('message').text('Your password or username is incorrect')
}

const changePasswordSuccess = function (){
  $('message').text('Your password has been changed')
}

const changePasswordFailure = function (){
  $('message').text('Your new passowrd does not match')
}

const signOutSuccess = function(){
  $('message').text('You have signed out')
}

const signOutFailure = function(){
  $('message').text('You are still signed in')
}

module.exports = {
  signUpSuccess,
  signInFailure,
  signUpFailure,
  signInSuccess,
  signOutSuccess,
  signOutFailure
}
