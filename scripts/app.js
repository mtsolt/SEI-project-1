function init() {

  const gridReb = document.querySelector('#rebelSide .grid-wrapper .grid')
  // this creates const for the rebel side
  const gridImp = document.querySelector('#impSide .grid-wrapper .grid')
  // this creastes const for imp ide
  const gridSquare = document.querySelectorAll('.grid')
  // selects the grids
  const square = document.querySelectorAll('.square')
  //gets all squares


  // selects all squares in the divs




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
    const squareImp = document.querySelectorAll('#impSide .grid-wrapper .grid .square')
    for (let i = 0; i < 5; i++) {
      squareImp[startingShipPosition].classList.replace('square', 'ship')
      startingShipPosition = Math.floor(Math.random() * squareImp.length)
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




  gridSquare.forEach(item => {
    item.addEventListener('click', shoot)
  })

  createGrids()


}

window.addEventListener('DOMContentLoaded', init)