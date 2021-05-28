function init() {

  const gridReb = document.querySelector('#rebelSide .grid-wrapper .grid')
  // this creates const for the rebel side
  const gridImp = document.querySelector('#impSide .grid-wrapper .grid')
  // this creastes const for imp ide
  const gridSquare = document.querySelectorAll('.grid')
  // selects all divs within the grib

  const width = 16
  const cellCount = width * width
  const cells = []
  // this is format of grids

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
      cell.classList.add('square')
      cell.innerHTML = i
      gridImp.appendChild(cell) //imperial grid
      cells.push(cell)
    }

  }

  function shoot(event) {
    console.log('click')
    event.target.classList.replace('square', 'hit')



  }




  gridSquare.forEach(item => {
    item.addEventListener('click', shoot)
  })

  createGrids()

  console.log('JS up and running')
}

window.addEventListener('DOMContentLoaded', init)