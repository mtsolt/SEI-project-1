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



  // Button selects.
  const tieSelect = document.querySelector('.tieSelect')

  const xWingSelect = document.querySelector('.xSelect')

  const falconSelect = document.querySelector('.falconSelect')

  const cruiserSelect = document.querySelector('.cruiserSelect')

  const imperialShot = document.querySelector('.computerShoot')


  const width = 16
  const cellCount = width * width
  const cells = []
  // this is format of grids

  let startingShipPosition = Math.floor(Math.random() * square.length)
  console.log('gridSquare', gridReb)

  // function startGame() {
  //   createGrids()


  // }


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
    // const squareImp = document.querySelectorAll('#impSide .grid-wrapper .grid .square')      <<<<---- To randomly assign 5 squares on imperial side
    // for (let i = 0; i < 5; i++) {
    //   squareImp[startingShipPosition].classList.replace('square', 'ship')
    //   startingShipPosition = Math.floor(Math.random() * squareImp.length)
    // }
    // const squareReb = document.querySelectorAll('#rebelSide .grid-wrapper .grid .square')     <<<<<--- to randomly assign 5 sqaures on imperial side. 
    // for (let i = 0; i < 5; i++) {
    //   squareReb[startingShipPosition].classList.replace('square', 'ship')
    //   startingShipPosition = Math.floor(Math.random() * squareReb.length)
    // }
  }

  // Deploys imperial ships
  function tieFighter() {
    for (let i = 0; i < 3; i++) { // ridiculously long code for if any conditions that would cause ships to be partially off grid, or overlapping, to not run. Otherwise place i amount ships. 
      const squareImp = document.querySelectorAll('#impSide .grid-wrapper .grid div')
      startingShipPosition = Math.floor(Math.random() * squareImp.length)
      if (startingShipPosition % width === 14 || startingShipPosition % width === 15 || startingShipPosition >= 222 || squareImp[startingShipPosition].classList.contains('ship') || squareImp[startingShipPosition + 1].classList.contains('ship') || squareImp[startingShipPosition + 2].classList.contains('ship') || squareImp[startingShipPosition + 16].classList.contains('ship') || squareImp[startingShipPosition + 17].classList.contains('ship') || squareImp[startingShipPosition + 18].classList.contains('ship') || squareImp[startingShipPosition + 32].classList.contains('ship') || squareImp[startingShipPosition + 33].classList.contains('ship') || squareImp[startingShipPosition + 35].classList.contains('ship')) {
        i--
      } else { // this is the code for the template of the tie fighter
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

  function impCruiser() {
    for (let i = 0; i < 1; i++) {
      const squareImp = document.querySelectorAll('#impSide .grid-wrapper .grid div')
      startingShipPosition = Math.floor(Math.random() * squareImp.length)
      if (startingShipPosition <= 15 || startingShipPosition > 218 || startingShipPosition % width === 11 || startingShipPosition % width === 12 || startingShipPosition % width === 13 || startingShipPosition % width === 14 || startingShipPosition % width === 15 || squareImp[startingShipPosition - 14].classList.contains('ship') || squareImp[startingShipPosition - 13].classList.contains('ship') || squareImp[startingShipPosition - 11].classList.contains('ship') || squareImp[startingShipPosition].classList.contains('ship') || squareImp[startingShipPosition + 1].classList.contains('ship') || squareImp[startingShipPosition + 2].classList.contains('ship') || squareImp[startingShipPosition + 3].classList.contains('ship') || squareImp[startingShipPosition + 4].classList.contains('ship') || squareImp[startingShipPosition + 5].classList.contains('ship') || squareImp[startingShipPosition + 16].classList.contains('ship') || squareImp[startingShipPosition + 17].classList.contains('ship') || squareImp[startingShipPosition + 18].classList.contains('ship') || squareImp[startingShipPosition + 19].classList.contains('ship') || squareImp[startingShipPosition + 20].classList.contains('ship') || squareImp[startingShipPosition + 21].classList.contains('ship') || squareImp[startingShipPosition + 34].classList.contains('ship') || squareImp[startingShipPosition + 35].classList.contains('ship') || squareImp[startingShipPosition + 37].classList.contains('ship')) {
        i--
      } else {
        squareImp[startingShipPosition - 14].classList.replace('square', 'ship')
        squareImp[startingShipPosition - 13].classList.replace('square', 'ship')
        squareImp[startingShipPosition - 11].classList.replace('square', 'ship')
        squareImp[startingShipPosition].classList.replace('square', 'ship')
        squareImp[startingShipPosition + 1].classList.replace('square', 'ship')
        squareImp[startingShipPosition + 2].classList.replace('square', 'ship')
        squareImp[startingShipPosition + 3].classList.replace('square', 'ship')
        squareImp[startingShipPosition + 4].classList.replace('square', 'ship')
        squareImp[startingShipPosition + 5].classList.replace('square', 'ship')
        squareImp[startingShipPosition + 16].classList.replace('square', 'ship')
        squareImp[startingShipPosition + 17].classList.replace('square', 'ship')
        squareImp[startingShipPosition + 18].classList.replace('square', 'ship')
        squareImp[startingShipPosition + 19].classList.replace('square', 'ship')
        squareImp[startingShipPosition + 20].classList.replace('square', 'ship')
        squareImp[startingShipPosition + 21].classList.replace('square', 'ship')
        squareImp[startingShipPosition + 34].classList.replace('square', 'ship')
        squareImp[startingShipPosition + 35].classList.replace('square', 'ship')
        squareImp[startingShipPosition + 37].classList.replace('square', 'ship')

      }
    }
  }



  // Deploys the rebel ships
  function xWing() {
    for (let i = 0; i < 3; i++) { // ridiculously long code for if any conditions that would cause ships to be partially off grid, or overlapping, to not run. Otherwise place i amount ships.
      const squareReb = document.querySelectorAll('#rebelSide .grid-wrapper .grid div')
      startingShipPosition = Math.floor(Math.random() * squareReb.length)
      if (startingShipPosition % width === 12 || startingShipPosition % width === 13 || startingShipPosition % width === 14 || startingShipPosition % width === 15 || startingShipPosition >= 236 || startingShipPosition <= 16 || squareReb[startingShipPosition].classList.contains('ship') || squareReb[startingShipPosition + 1].classList.contains('ship') || squareReb[startingShipPosition + 2].classList.contains('ship') || squareReb[startingShipPosition + 3].classList.contains('ship') || squareReb[startingShipPosition + 4].classList.contains('ship') || squareReb[startingShipPosition + 17].classList.contains('ship') || squareReb[startingShipPosition - 15].classList.contains('ship')) {
        i--
      } else { // this is the code for the template of the xWing
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

  function falcon() {
    for (let i = 0; i < 1; i++) {
      const squareReb = document.querySelectorAll('#rebelSide .grid-wrapper .grid div')
      startingShipPosition = Math.floor(Math.random() * squareReb.length)
      if (startingShipPosition % width === 12 || startingShipPosition % width === 13 || startingShipPosition % width === 14 || startingShipPosition % width === 15 || startingShipPosition <= 15 || startingShipPosition > 203 || squareReb[startingShipPosition].classList.contains('ship') || squareReb[startingShipPosition - 14].classList.contains('ship') || squareReb[startingShipPosition - 15].classList.contains('ship') || squareReb[startingShipPosition + 1].classList.contains('ship') || squareReb[startingShipPosition + 2].classList.contains('ship') || squareReb[startingShipPosition + 3].classList.contains('ship') || squareReb[startingShipPosition + 4].classList.contains('ship') || squareReb[startingShipPosition + 16].classList.contains('ship') || squareReb[startingShipPosition + 17].classList.contains('ship') || squareReb[startingShipPosition + 18].classList.contains('ship') || squareReb[startingShipPosition + 19].classList.contains('ship') || squareReb[startingShipPosition + 32].classList.contains('ship') || squareReb[startingShipPosition + 33].classList.contains('ship') || squareReb[startingShipPosition + 34].classList.contains('ship') || squareReb[startingShipPosition + 35].classList.contains('ship') || squareReb[startingShipPosition + 36].classList.contains('ship') || squareReb[startingShipPosition + 49].classList.contains('ship') || squareReb[startingShipPosition + 50].classList.contains('ship')) {
        i--
      } else {
        squareReb[startingShipPosition].classList.replace('square', 'ship')
        squareReb[startingShipPosition - 15].classList.replace('square', 'ship')
        squareReb[startingShipPosition - 14].classList.replace('square', 'ship')
        squareReb[startingShipPosition + 1].classList.replace('square', 'ship')
        squareReb[startingShipPosition + 2].classList.replace('square', 'ship')
        squareReb[startingShipPosition + 3].classList.replace('square', 'ship')
        squareReb[startingShipPosition + 4].classList.replace('square', 'ship')
        squareReb[startingShipPosition + 16].classList.replace('square', 'ship')
        squareReb[startingShipPosition + 17].classList.replace('square', 'ship')
        squareReb[startingShipPosition + 18].classList.replace('square', 'ship')
        squareReb[startingShipPosition + 19].classList.replace('square', 'ship')
        squareReb[startingShipPosition + 32].classList.replace('square', 'ship')
        squareReb[startingShipPosition + 33].classList.replace('square', 'ship')
        squareReb[startingShipPosition + 34].classList.replace('square', 'ship')
        squareReb[startingShipPosition + 35].classList.replace('square', 'ship')
        squareReb[startingShipPosition + 36].classList.replace('square', 'ship')
        squareReb[startingShipPosition + 49].classList.replace('square', 'ship')
        squareReb[startingShipPosition + 50].classList.replace('square', 'ship')
      }
    }
  }





  // The function for player to shoot.
  function playerShot(event) {
    console.log('click')
    console.log(event.target, 'event target')
    if (event.target.classList.contains('square')) {
      event.target.classList.replace('square', 'miss')
      console.log('miss')
      setTimeout(computerShoot, 2000)
    } else {
      event.target.classList.replace('ship', 'hit')
      console.log('hit')
      // repeat function
    }
  }

  // The function for the computer to shoot.



  function computerShoot() {
    console.log('computer shoots')
    for (let i = 0; i < 1; i++) {
      const squareReb = document.querySelectorAll('#rebelSide .grid-wrapper .grid div')
      startingShipPosition = Math.floor(Math.random() * squareReb.length)
      if (squareReb[startingShipPosition].classList.contains('square')) {
        squareReb[startingShipPosition].classList.replace('square', 'miss')
        console.log('computer miss')
      } else if (squareReb[startingShipPosition].classList.contains('miss') || squareReb[startingShipPosition].classList.contains('hit')) {
        i--
      } else {
        squareReb[startingShipPosition].classList.replace('ship', 'hit')
        console.log('Computer hits, it goes again!')
        setTimeout(computerShoot, 2000)
      }
    }
    // function computerHits(startingShipPosition) {
    //   console.log('computer shoots')
    //   for (let i = 0; i < 1; i++) {


    // }
  // }
  }



  imperialShot.addEventListener('click', computerShoot)

  tieSelect.addEventListener('click', tieFighter)

  xWingSelect.addEventListener('click', xWing)

  falconSelect.addEventListener('click', falcon)

  cruiserSelect.addEventListener('click', impCruiser)

  gridSquare.forEach(item => {
    item.addEventListener('click', playerShot)
  })

  createGrids()
  // run music
  // start scroller
  // 1 or 2 player - dream
  // player choice imp or rebel - dream



}

window.addEventListener('DOMContentLoaded', init)