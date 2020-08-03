'use strict'
const config = require('../config')
const store = require('../store')

const signUp = function (formData) {
  console.log(formData)
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: 'POST',
    data: formData
  })
}

const signIn = function (formData) {
  return $.ajax({
    url: config.apiUrl + '/sign-in',
    method: 'POST',
    data: formData
  })
}

const changePassword = function (formData) {
  console.log(store.user)
  return $.ajax({
    // Ask why in order for this to work why it needed to be headers and not header
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    url: config.apiUrl + '/change-password',
    method: 'PATCH',
    data: formData
  })
}

// form Data is not needed to log out.
const signOut = function () {
  return $.ajax({
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    url: config.apiUrl + '/sign-out',
    method: 'DELETE'
  })
}

<<<<<<< HEAD
<<<<<<< HEAD
=======
// const updateGame = function () {
//   return $.ajax({
//     url: config.apiUrl + '/games/' + store.game._id,
//     method: 'PATCH',
//     headers: {
//       id: store.game._id,
//       Authorization: 'Bearer ' + store.user.token
//     },
//     data: {
//       game: {
//         cell: {
//           index: $('#board').attr('data-cell'),
//           value: store.player
//         },
//         over: false
//       }
//     }
//   })
// }

>>>>>>> html
=======
>>>>>>> html
module.exports = {
  signUp,
  signOut,
  signIn,
  changePassword
}
