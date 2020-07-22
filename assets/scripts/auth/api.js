'use strict'
const config = require('../config')
const store = require('../store')

const signUp = function (formData){
  console.log(formData)
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: 'POST',
    data: formData
  })
}

const signIn = function (formData){
  return $.ajax({
    url:config.apiUrl + '/sign-in',
    method: 'POST',
    data: formData
  })
}

const changePassword = function (formData){
  console.log(store.user)
  return $.ajax({
    url: config.apiUrl + '/change-password',
    header:{
      Authorization: 'Bearer ' + store.user.token
    },
    method: 'PATCH',
    data: formData
  })
}

const signOut = function (formData){
  return $.ajax({
    url: congfig.apiUrl + '/sign-out',
    method: 'DELETE',
    header:{
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

module.exports ={
  signUp,
  signOut,
  signIn,
  changePassword
}
