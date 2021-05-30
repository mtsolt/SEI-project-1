function init() {

  // Are§ for selecting bits of the HTML
  const startGameButton = document.querySelector('#start-button')
  // selects start button
  const centerColumn = document.querySelector('#center')
  // selects center column

  const gridReb = document.querySelector('#rebelSide .grid-wrapper .grid')
  // this creates const for the rebel side
  const gridImp = document.querySelector('#impSide .grid-wrapper .grid')
  // this creastes const for imp ide
  const gridSquare = document.querySelectorAll('.grid')
  // selects the grids
  const square = document.querySelectorAll('.square')
  // selects all squares
  // const squareImp = document.querySelectorAll('#impSide .grid-wrapper .grid div')
  // selects all squares on Imp
  // const squareReb = document.querySelectorAll('#rebelSide .grid-wrapper .grid div')
  // selects all squares on Reb
  const rebelButtonsBox = document.querySelector('#rebel')
  console.log(rebelButtonsBox, 'rebelButtonsBox')

  const imperialButtonsBox = document.querySelector('#imperial')
  console.log(imperialButtonsBox, 'imperialButtonsBox')

  // Area for creating new elements
  const chooseRebButton = document.createElement('button')
  chooseRebButton.innerText = 'REBEL'
  chooseRebButton.style.padding = '20px'

  // Rebel start button
  const chooseImpButton = document.createElement('button')
  chooseImpButton.innerText = 'IMPERIAL'
  chooseImpButton.style.padding = '20px'
  // Imperial start button
  const restartButton = document.createElement('button')
  restartButton.innerText = 'Restart Game'
  restartButton.style.display = 'flex'
  restartButton.style.margin = '0 30%'



  // Button selects.
  const tieSelect = document.querySelector('.tieSelect')

  const xWingSelect = document.querySelector('.xSelect')

  const falconSelect = document.querySelector('.falconSelect')

  const cruiserSelect = document.querySelector('.cruiserSelect')

  // const imperialShot = document.querySelector('.computerShoot')


  const width = 16
  const cellCount = width * width
  const cells = []
  // this is format of grids

  let gridPositiion = Math.floor(Math.random() * square.length)
  console.log('gridSquare', gridReb)

  // function startGame() {
  //   createGrids()


  // }

  function startGame() {
    startGameButton.style.display = 'none'
    gridReb.appendChild(chooseRebButton)
    gridImp.appendChild(chooseImpButton)
    centerColumn.appendChild(restartButton)

    // return createGrids()
  }

  function chooseImperial() {
    gridImp.removeChild(chooseImpButton)
    gridReb.removeChild(chooseRebButton)
    imperialButtonsBox.style.display = 'flex'
    setTimeout(createGrids(), 2000)
    setTimeout(placeFalcon(), 10)
    setTimeout(placeXWing(), 10)
  }

  function chooseRebel() {
    gridReb.removeChild(chooseRebButton)
    gridImp.removeChild(chooseImpButton)
    rebelButtonsBox.style.display = 'flex'
    setTimeout(createGrids(), 2000)
    setTimeout(placeCruiser(), 10)
    setTimeout(placeTieFighter(), 10)
  }



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
    //   squareImp[gridPositiion].classList.replace('square', 'ship')
    //   gridPositiion = Math.floor(Math.random() * squareImp.length)
    // }
    // const squareReb = document.querySelectorAll('#rebelSide .grid-wrapper .grid .square')     <<<<<--- to randomly assign 5 sqaures on imperial side. 
    // for (let i = 0; i < 5; i++) {
    //   squareReb[gridPositiion].classList.replace('square', 'ship')
    //   gridPositiion = Math.floor(Math.random() * squareReb.length)
    // }
  }



  // Deploys imperial ships
  // deploy the tie fighters
  function placeTieFighter() {
    for (let i = 0; i < 3; i++) { // ridiculously long code for if any conditions that would cause ships to be partially off grid, or overlapping, to not run. Otherwise place i amount ships. 
      const squareImp = document.querySelectorAll('#impSide .grid-wrapper .grid div')
      gridPositiion = Math.floor(Math.random() * squareImp.length)
      if (gridPositiion % width === 14 || gridPositiion % width === 15 || gridPositiion >= 222 || squareImp[gridPositiion].classList.contains('ship') || squareImp[gridPositiion + 1].classList.contains('ship') || squareImp[gridPositiion + 2].classList.contains('ship') || squareImp[gridPositiion + 16].classList.contains('ship') || squareImp[gridPositiion + 17].classList.contains('ship') || squareImp[gridPositiion + 18].classList.contains('ship') || squareImp[gridPositiion + 32].classList.contains('ship') || squareImp[gridPositiion + 33].classList.contains('ship') || squareImp[gridPositiion + 35].classList.contains('ship')) {
        i--
      } else { // this is the code for the template of the tie fighter - must be a way to have this in single variable, which can then be used to rotate, and display image when whole ship gone. 
        squareImp[gridPositiion].classList.replace('square', 'ship')
        squareImp[gridPositiion + 1].classList.replace('square', 'ship')
        squareImp[gridPositiion + 2].classList.replace('square', 'ship')
        squareImp[gridPositiion + 17].classList.replace('square', 'ship')
        squareImp[gridPositiion + 32].classList.replace('square', 'ship')
        squareImp[gridPositiion + 33].classList.replace('square', 'ship')
        squareImp[gridPositiion + 34].classList.replace('square', 'ship')
      }
    }
  }
  // deploy the cruiser
  function placeCruiser() {
    for (let i = 0; i < 1; i++) {
      const squareImp = document.querySelectorAll('#impSide .grid-wrapper .grid div')
      gridPositiion = Math.floor(Math.random() * squareImp.length)
      if (gridPositiion <= 15 || gridPositiion > 218 || gridPositiion % width === 11 || gridPositiion % width === 12 || gridPositiion % width === 13 || gridPositiion % width === 14 || gridPositiion % width === 15 || squareImp[gridPositiion - 14].classList.contains('ship') || squareImp[gridPositiion - 13].classList.contains('ship') || squareImp[gridPositiion - 11].classList.contains('ship') || squareImp[gridPositiion].classList.contains('ship') || squareImp[gridPositiion + 1].classList.contains('ship') || squareImp[gridPositiion + 2].classList.contains('ship') || squareImp[gridPositiion + 3].classList.contains('ship') || squareImp[gridPositiion + 4].classList.contains('ship') || squareImp[gridPositiion + 5].classList.contains('ship') || squareImp[gridPositiion + 16].classList.contains('ship') || squareImp[gridPositiion + 17].classList.contains('ship') || squareImp[gridPositiion + 18].classList.contains('ship') || squareImp[gridPositiion + 19].classList.contains('ship') || squareImp[gridPositiion + 20].classList.contains('ship') || squareImp[gridPositiion + 21].classList.contains('ship') || squareImp[gridPositiion + 34].classList.contains('ship') || squareImp[gridPositiion + 35].classList.contains('ship') || squareImp[gridPositiion + 37].classList.contains('ship')) {
        i--
      } else {
        squareImp[gridPositiion - 14].classList.replace('square', 'ship')
        squareImp[gridPositiion - 13].classList.replace('square', 'ship')
        squareImp[gridPositiion - 11].classList.replace('square', 'ship')
        squareImp[gridPositiion].classList.replace('square', 'ship')
        squareImp[gridPositiion + 1].classList.replace('square', 'ship')
        squareImp[gridPositiion + 2].classList.replace('square', 'ship')
        squareImp[gridPositiion + 3].classList.replace('square', 'ship')
        squareImp[gridPositiion + 4].classList.replace('square', 'ship')
        squareImp[gridPositiion + 5].classList.replace('square', 'ship')
        squareImp[gridPositiion + 16].classList.replace('square', 'ship')
        squareImp[gridPositiion + 17].classList.replace('square', 'ship')
        squareImp[gridPositiion + 18].classList.replace('square', 'ship')
        squareImp[gridPositiion + 19].classList.replace('square', 'ship')
        squareImp[gridPositiion + 20].classList.replace('square', 'ship')
        squareImp[gridPositiion + 21].classList.replace('square', 'ship')
        squareImp[gridPositiion + 34].classList.replace('square', 'ship')
        squareImp[gridPositiion + 35].classList.replace('square', 'ship')
        squareImp[gridPositiion + 37].classList.replace('square', 'ship')

      }
    }
  }



  // Deploys the rebel ships
  // deploy xwings
  function placeXWing() {
    for (let i = 0; i < 3; i++) { // ridiculously long code for if any conditions that would cause ships to be partially off grid, or overlapping, to not run. Otherwise place i amount ships.
      const squareReb = document.querySelectorAll('#rebelSide .grid-wrapper .grid div')
      gridPositiion = Math.floor(Math.random() * squareReb.length)
      if (gridPositiion % width === 12 || gridPositiion % width === 13 || gridPositiion % width === 14 || gridPositiion % width === 15 || gridPositiion >= 236 || gridPositiion <= 16 || squareReb[gridPositiion].classList.contains('ship') || squareReb[gridPositiion + 1].classList.contains('ship') || squareReb[gridPositiion + 2].classList.contains('ship') || squareReb[gridPositiion + 3].classList.contains('ship') || squareReb[gridPositiion + 4].classList.contains('ship') || squareReb[gridPositiion + 17].classList.contains('ship') || squareReb[gridPositiion - 15].classList.contains('ship')) {
        i--
      } else { // this is the code for the template of the xWing
        squareReb[gridPositiion].classList.replace('square', 'ship')
        squareReb[gridPositiion + 1].classList.replace('square', 'ship')
        squareReb[gridPositiion + 2].classList.replace('square', 'ship')
        squareReb[gridPositiion + 3].classList.replace('square', 'ship')
        squareReb[gridPositiion + 4].classList.replace('square', 'ship')
        squareReb[gridPositiion - 15].classList.replace('square', 'ship')
        squareReb[gridPositiion + 17].classList.replace('square', 'ship')
      }
    }
  }
  // deploy falcon
  function placeFalcon() {
    for (let i = 0; i < 1; i++) {
      const squareReb = document.querySelectorAll('#rebelSide .grid-wrapper .grid div')
      gridPositiion = Math.floor(Math.random() * squareReb.length)
      if (gridPositiion % width === 12 || gridPositiion % width === 13 || gridPositiion % width === 14 || gridPositiion % width === 15 || gridPositiion <= 15 || gridPositiion > 203 || squareReb[gridPositiion].classList.contains('ship') || squareReb[gridPositiion - 14].classList.contains('ship') || squareReb[gridPositiion - 15].classList.contains('ship') || squareReb[gridPositiion + 1].classList.contains('ship') || squareReb[gridPositiion + 2].classList.contains('ship') || squareReb[gridPositiion + 3].classList.contains('ship') || squareReb[gridPositiion + 4].classList.contains('ship') || squareReb[gridPositiion + 16].classList.contains('ship') || squareReb[gridPositiion + 17].classList.contains('ship') || squareReb[gridPositiion + 18].classList.contains('ship') || squareReb[gridPositiion + 19].classList.contains('ship') || squareReb[gridPositiion + 32].classList.contains('ship') || squareReb[gridPositiion + 33].classList.contains('ship') || squareReb[gridPositiion + 34].classList.contains('ship') || squareReb[gridPositiion + 35].classList.contains('ship') || squareReb[gridPositiion + 36].classList.contains('ship') || squareReb[gridPositiion + 49].classList.contains('ship') || squareReb[gridPositiion + 50].classList.contains('ship')) {
        i--
      } else {
        squareReb[gridPositiion].classList.replace('square', 'ship')
        squareReb[gridPositiion - 15].classList.replace('square', 'ship')
        squareReb[gridPositiion - 14].classList.replace('square', 'ship')
        squareReb[gridPositiion + 1].classList.replace('square', 'ship')
        squareReb[gridPositiion + 2].classList.replace('square', 'ship')
        squareReb[gridPositiion + 3].classList.replace('square', 'ship')
        squareReb[gridPositiion + 4].classList.replace('square', 'ship')
        squareReb[gridPositiion + 16].classList.replace('square', 'ship')
        squareReb[gridPositiion + 17].classList.replace('square', 'ship')
        squareReb[gridPositiion + 18].classList.replace('square', 'ship')
        squareReb[gridPositiion + 19].classList.replace('square', 'ship')
        squareReb[gridPositiion + 32].classList.replace('square', 'ship')
        squareReb[gridPositiion + 33].classList.replace('square', 'ship')
        squareReb[gridPositiion + 34].classList.replace('square', 'ship')
        squareReb[gridPositiion + 35].classList.replace('square', 'ship')
        squareReb[gridPositiion + 36].classList.replace('square', 'ship')
        squareReb[gridPositiion + 49].classList.replace('square', 'ship')
        squareReb[gridPositiion + 50].classList.replace('square', 'ship')
      }
    }
  }


  function playerRebelShot(event) {
    console.log('click')
    console.log(event.target, 'event target')
    if (event.target.classList.contains('square')) {
      event.target.classList.replace('square', 'miss')
      console.log('miss')
      setTimeout(computerImperialShot, 2000)
    } else {
      event.target.classList.replace('ship', 'hit')
      console.log('hit')
      // repeat function
    }
  }
  // 
  function computerImperialShot() {
    console.log('computer shoots')
    for (let i = 0; i < 1; i++) {
      const squareReb = document.querySelectorAll('#rebelSide .grid-wrapper .grid div')
      gridPositiion = Math.floor(Math.random() * squareReb.length)
      if (squareReb[gridPositiion].classList.contains('square')) {
        squareReb[gridPositiion].classList.replace('square', 'miss')
        console.log('computer miss')
      } else if (squareReb[gridPositiion].classList.contains('miss') || squareReb[gridPositiion].classList.contains('hit')) {
        i--
      } else {
        squareReb[gridPositiion].classList.replace('ship', 'hit')
        console.log('Computer hits, it goes again!')
        setTimeout(computerImperialShot, 2000)
      }
    }
  }

  
  function playerImperialShot(event) {
    console.log('click')
    console.log(event.target, 'event target')
    if (event.target.classList.contains('square')) {
      event.target.classList.replace('square', 'miss')
      console.log('miss')
      setTimeout(computerRebelShot, 2000)
    } else {
      event.target.classList.replace('ship', 'hit')
      console.log('hit')
      // repeat function
    }
  }
  function computerRebelShot() {
    console.log('computer shoots')
    for (let i = 0; i < 1; i++) {
      const squareImp = document.querySelectorAll('#impSide .grid-wrapper .grid div')
      gridPositiion = Math.floor(Math.random() * squareImp.length)
      if (squareImp[gridPositiion].classList.contains('square')) {
        squareImp[gridPositiion].classList.replace('square', 'miss')
        console.log('computer miss')
      } else if (squareImp[gridPositiion].classList.contains('miss') || squareImp[gridPositiion].classList.contains('hit')) {
        i--
      } else {
        squareImp[gridPositiion].classList.replace('ship', 'hit')
        console.log('Computer hits, it goes again!')
        setTimeout(computerRebelShot, 2000)
      }
    }
  }






  startGameButton.addEventListener('click', startGame)

  restartButton.addEventListener('click', startGame)

  chooseRebButton.addEventListener('click', chooseRebel)
  chooseImpButton.addEventListener('click', chooseImperial)

  // imperialShot.addEventListener('click', computerShoot)

  tieSelect.addEventListener('click', placeTieFighter)

  xWingSelect.addEventListener('click', placeXWing)

  falconSelect.addEventListener('click', placeFalcon)

  cruiserSelect.addEventListener('click', placeCruiser)

  // gridSquare.forEach(item => {
  //   item.addEventListener('click', playerShot)
  // })

  gridImp.addEventListener('click', playerRebelShot)

  gridReb.addEventListener('click', playerImperialShot)




  // createGrids()
  // run music
  // start scroller
  // 1 or 2 player - dream
  // player choice imp or rebel - dream



}

window.addEventListener('DOMContentLoaded', init)