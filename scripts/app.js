function init() {

  const gridReb = document.querySelector('#rebelSide .grid-wrapper .grid')
  // this creates const for the rebel side
  const gridImp = document.querySelector('#impSide .grid-wrapper .grid')
  // this creastes const for imp ide
  const gridSquare = document.querySelectorAll('.grid')
  // selects the grids
  const square = document.querySelectorAll('.square')
  //gets all squares
  const squareImp = document.querySelectorAll('#impSide .grid-wrapper .grid div')
  // selects all squares on Imp
  const squareReb = document.querySelectorAll('#rebelSide .grid-wrapper .grid div')
  // selects all squares on Reb
  const tieSelect = document.querySelector('.tieSelect')

  const xWingSelect = document.querySelector('.xSelect')






  const width = 16
  const cellCount = width * width
  const cells = []
  // this is format of grids

  let startingShipPosition = Math.floor(Math.random() * square.length)
  console.log('gridSquare', gridReb)




  function createGrids() { //this creates both grids. Feel like there must be a way to do this with just one for loop, not sure how just yet though. 
    for (let i = 0; i < cellCount; i++) {
      const cell = document.createElement('div')
      cell.classList.add('square')
      cell.innerHTML = i
      gridReb.appendChild(cell) // rebel grid
      cells.push(cell)
    }

    for (let i = 0; i < cellCount; i++) {
      const cell = document.createElement('div')
      console.log('cell', cell)
      cell.classList.add('square')
      cell.innerHTML = i
      gridImp.appendChild(cell) //imperial grid
      cells.push(cell)
    }
    // const squareImp = document.querySelectorAll('#impSide .grid-wrapper .grid .square')
    // for (let i = 0; i < 5; i++) {
    //   squareImp[startingShipPosition].classList.replace('square', 'ship')
    //   startingShipPosition = Math.floor(Math.random() * squareImp.length)
    // }
    // const squareReb = document.querySelectorAll('#rebelSide .grid-wrapper .grid .square')
    // for (let i = 0; i < 5; i++) {
    //   squareReb[startingShipPosition].classList.replace('square', 'ship')
    //   startingShipPosition = Math.floor(Math.random() * squareReb.length)
    // }
  }




  // const squareImp = document.querySelectorAll('#impSide .grid-wrapper .grid div')
  // const squareReb = document.querySelectorAll('#rebSide .grid-wrapper .grid div')

  function tieFighter() {
    for (let i = 0; i < 3; i++) {
      const squareImp = document.querySelectorAll('#impSide .grid-wrapper .grid div')
      startingShipPosition = Math.floor(Math.random() * squareImp.length)
      if (startingShipPosition % width === 14 || startingShipPosition % width === 15 || startingShipPosition >= 222 || squareImp[startingShipPosition].classList.contains('ship') || squareImp[startingShipPosition + 1].classList.contains('ship') || squareImp[startingShipPosition + 2].classList.contains('ship') || squareImp[startingShipPosition + 16].classList.contains('ship') || squareImp[startingShipPosition + 17].classList.contains('ship') || squareImp[startingShipPosition + 18].classList.contains('ship') || squareImp[startingShipPosition + 32].classList.contains('ship') || squareImp[startingShipPosition + 33].classList.contains('ship') || squareImp[startingShipPosition + 35].classList.contains('ship')) {
        i--
      } else {
        squareImp[startingShipPosition].classList.replace('square', 'ship')
        squareImp[startingShipPosition + 1].classList.replace('square', 'ship')
        squareImp[startingShipPosition + 2].classList.replace('square', 'ship')
        squareImp[startingShipPosition + 17].classList.replace('square', 'ship')
        squareImp[startingShipPosition + 32].classList.replace('square', 'ship')
        squareImp[startingShipPosition + 33].classList.replace('square', 'ship')
        squareImp[startingShipPosition + 34].classList.replace('square', 'ship')
      }
    }
  }

  function xWing() {
    for (let i = 0; i < 3; i++) {
      const squareReb = document.querySelectorAll('#rebelSide .grid-wrapper .grid div')
      startingShipPosition = Math.floor(Math.random() * squareReb.length)
      if (startingShipPosition % width === 12 || startingShipPosition % width === 13 || startingShipPosition % width === 14 || startingShipPosition % width === 15 || startingShipPosition >= 236 || startingShipPosition <= 16 || squareReb[startingShipPosition].classList.contains('ship') || squareReb[startingShipPosition + 1].classList.contains('ship') || squareReb[startingShipPosition + 2].classList.contains('ship') || squareReb[startingShipPosition + 3].classList.contains('ship') || squareReb[startingShipPosition + 4].classList.contains('ship') || squareReb[startingShipPosition + 17].classList.contains('ship') || squareReb[startingShipPosition - 15].classList.contains('ship')) {
        i--
      } else {
        squareReb[startingShipPosition].classList.replace('square', 'ship')
        squareReb[startingShipPosition + 1].classList.replace('square', 'ship')
        squareReb[startingShipPosition + 2].classList.replace('square', 'ship')
        squareReb[startingShipPosition + 3].classList.replace('square', 'ship')
        squareReb[startingShipPosition + 4].classList.replace('square', 'ship')
        squareReb[startingShipPosition - 15].classList.replace('square', 'ship')
        squareReb[startingShipPosition + 17].classList.replace('square', 'ship')
      }
    }
  }


  function shoot(event) {
    console.log('click')
    console.log(event.target, 'event target')
    if (event.target.classList.contains('square')) {
      event.target.classList.replace('square', 'miss')
      console.log('miss')
    } else {
      event.target.classList.replace('ship', 'hit')
      console.log('hit')
    }


  }



  tieSelect.addEventListener('click', tieFighter)

  xWingSelect.addEventListener('click', xWing)


  gridSquare.forEach(item => {
    item.addEventListener('click', shoot)
  })

  createGrids()


}

window.addEventListener('DOMContentLoaded', init)