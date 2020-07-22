const x = 'x'
const o = 'o'

const boxItems = docmument.querySelectorAll('[box]')
let oTurn
boxItems.forEach(box => {
  box.addEventListener('click', handleClick,{once:true})
})

function onClick(c){
  const box = c.target
  const currentTurn = oTurn ? o : x
  console.log('clicked')
  letter(box,currentTurn)
  turns()
  if (win(currentTurn)){

  }
}

function letter(box,currentTurn){
  box.classList.add(currentTurn)
}

function changeTurn(){
  oTurn = !oTurn
}

function win(currentTurn){
  waysToWin.some( combination =>)
}

//Ways to win
const waysToWin [
[0,1,2],
[3,4,5],
[6,7,8],

[0,3,6],
[1,4,7],
[2,5,8],

[0,4,8],
[2,4,6]
]
