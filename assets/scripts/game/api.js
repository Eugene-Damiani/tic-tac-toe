'use strict'

const store = require ('../store')
const config = require('../config')

// Starts new game

const startGame = function () {
  return $.ajax({
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    url: config.apiUrl + '/games',
    method: 'POST'
  })
}

//  The following block of code records each move for each game ID
const topLeft = function () {
  return $.ajax({
    url: config.apiUrl + '/games/' + store.game._id,
    method: 'PATCH',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: {
      game: {
        cell: {
          index: $('#top-left').attr('data-cell'),
          value: store.player
        },
        over: false
      }
    }
  })
}

const topMiddle = function () {
  return $.ajax({
    url: config.apiUrl + '/games/' + store.game._id,
    method: 'PATCH',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: {
      game: {
        cell: {
          index: $('#top-middle').attr('data-cell'),
          value: store.player
        },
        over: false
      }
    }
  })
}

const topRight = function () {
  return $.ajax({
    url: config.apiUrl + '/games/' + store.game._id,
    method: 'PATCH',
    headers: {
      id: store.game._id,
      Authorization: 'Bearer ' + store.user.token
    },
    data: {
      game: {
        cell: {
          index: $('#top-right').attr('data-cell'),
          value: store.player
        },
        over: false
      }
    }
  })
}

const middleLeft = function () {
  return $.ajax({
    url: config.apiUrl + '/games/' + store.game._id,
    method: 'PATCH',
    headers: {
      id: store.game._id,
      Authorization: 'Bearer ' + store.user.token
    },
    data: {
      game: {
        cell: {
          index: $('#middle-left').attr('data-cell'),
          value: store.player
        },
        over: false
      }
    }
  })
}
const middleMiddle = function () {
  return $.ajax({
    url: config.apiUrl + '/games/' + store.game._id,
    method: 'PATCH',
    headers: {
      id: store.game._id,
      Authorization: 'Bearer ' + store.user.token
    },
    data: {
      game: {
        cell: {
          index: $('#middle-middle').attr('data-cell'),
          value: store.player
        },
        over: false
      }
    }
  })
}

const middleRight= function() {
  return $.ajax({
    url: config.apiUrl + '/games/' + store.game._id,
    method: 'PATCH',
    headers: {
      id: store.game._id,
      Authorization: 'Bearer ' + store.user.token
    },
    data: {
      game: {
        cell: {
          index: $('#middle-right').attr('data-cell'),
          value: store.player
        },
        over: false
      }
    }
  })
}

const lowLeft= function() {
  return $.ajax({
    url: config.apiUrl + '/games/' + store.game._id,
    method: 'PATCH',
    headers: {
      id: store.game._id,
      Authorization: 'Bearer ' + store.user.token
    },
    data: {
      game: {
        cell: {
          index: $('#low-left').attr('data-cell'),
          value: store.player
        },
        over: false
      }
    }
  })
}

const lowMiddle= function() {
  return $.ajax({
    url: config.apiUrl + '/games/' + store.game._id,
    method: 'PATCH',
    headers: {
      id: store.game._id,
      Authorization: 'Bearer ' + store.user.token
    },
    data: {
      game: {
        cell: {
          index: $('#low-middle').attr('data-cell'),
          value: store.player
        },
        over: false
      }
    }
  })
}

const lowRight = function () {
  return $.ajax({
    url: config.apiUrl + '/games/' + store.game._id,
    method: 'PATCH',
    headers: {
      id: store.game._id,
      Authorization: 'Bearer ' + store.user.token
    },
    data: {
      game: {
        cell: {
          index: $('#low-right').attr('data-cell'),
          value: store.player
        },
        over: false
      }
    }
  })
}

const gameIndex = function () {
  return $.ajax({
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    url: config.apiUrl + '/games/',
    method: 'GET',
    data: {
      games: []
    }
  })
}
// const gameIndex = function () {
//   return $.ajax({
//     url: config.apiUrl + ' /games/',
//     method: 'GET',
//     headers: {
//       Authorization: 'Bearer ' + store.user.token
//     }
//   })
// }
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
//           index: $('#low-right').attr('data-cell'),
//           value: store.player
//         },
//         over: false
//       }
//     }
//   })
// }
module.exports = {
  startGame,
  topLeft,
  topMiddle,
  topRight,
  middleLeft,
  middleMiddle,
  middleRight,
  lowLeft,
  lowMiddle,
  lowRight,
  gameIndex
}

// const config = require('../config')
// const store = require('../store')
// const events = require('./events')
// const ui = require('./ui')
//
// const xSymbol = 'x'
// const oSymbol = 'o'

// const statusDiv = document.querySlector('.status');
// const resetDiv = document.querySlector('.reset');
// const cellDivs = document.querySlectorAll('.board')
//
// //game status Start and who's turn
// let gameStart = true;
// let xSymbol = true;
//
//
// //check status
//
// const gameStatus = function (){
//
// }
//
// //event handler to reset game
// const resetGame = function (event){
//   console.log(event)
// };
//
//
// // To click on a cell and have players take turns.
// const cellClick = function (event) {
//   const classList = event.target.classList;
//   const location = classList[1];
//
//   if(classList[2] === 'x' || classList[2] ==='o'){
//     return;
//   }
//
//   if (xSymbol) {
//     classList.add('x')
//     xSymbol = !xSymbol
// } else {
//     classList.add('o')
//     xSymbol = !xSymbol
//   }
// }
//
// // event listeners
// resetBoard.addEventListener('click, resetGame');
//
// for (const cell of cell ){
//   cell.addEventListener('click', cellClick)
// }
//
//
// //How to stop a cell from being used twice
