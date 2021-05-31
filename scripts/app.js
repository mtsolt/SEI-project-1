function init() {

  // Are§ for selecting bits of the HTML
  const startGameButton = document.querySelector('#start-button')
  // selects start button
  const centerColumn = document.querySelector('#center')
  // selects center column

  const rebelSide = document.querySelector('#rebelSide')
  const impSide = document.querySelector('#impSide')

  const gridReb = document.querySelector('#rebelSide .grid-wrapper .grid')
  // this creates const for the rebel side
  const gridImp = document.querySelector('#impSide .grid-wrapper .grid')
  // this creastes const for imp side
  const gridSquare = document.querySelectorAll('.grid')
  // selects the grids
  const square = document.querySelectorAll('.square')
  // selects all squares
  const squareImp = document.querySelectorAll('#impSide .grid-wrapper .grid div')
  // selects all squares on Imp
  const squareReb = document.querySelectorAll('#rebelSide .grid-wrapper .grid div')
  // selects all squares on Reb
  const scroller = document.querySelector('#scroller')
  // selects the scroller
  const begin = document.querySelector('#begin')

  const rebelButtonsBox = document.querySelector('#rebel')
  console.log(rebelButtonsBox, 'rebelButtonsBox')

  const imperialButtonsBox = document.querySelector('#imperial')
  console.log(imperialButtonsBox, 'imperialButtonsBox')

  // Area for creating new elements
  const chooseRebButton = document.createElement('button')
  chooseRebButton.innerText = 'REBEL'
  chooseRebButton.style.padding = '30%'
  chooseRebButton.style.background = 'none'
  chooseRebButton.style.border = 'none'
  // Rebel start button
  const chooseImpButton = document.createElement('button')
  chooseImpButton.innerText = 'IMPERIAL'
  chooseImpButton.style.padding = '30%'
  chooseImpButton.style.background = 'none'
  chooseImpButton.style.border = 'none'

  // Imperial start button
  const restartButton = document.createElement('button')
  restartButton.innerText = 'Restart Game'
  restartButton.style.display = 'flex'
  restartButton.style.justifyContent = 'center'
  // restart page



  // Button selects.
  const tieSelect1 = document.querySelector('#tieSelect1')
  const tieSelect2 = document.querySelector('#tieSelect2')
  const tieSelect3 = document.querySelector('#tieSelect3')
  const tieSelect4 = document.querySelector('#tieSelect4')
  const cruiserSelect = document.querySelector('#cruiserSelect')
  const impRandom =  document.querySelector('#impRandom')

  const xWingSelect1 = document.querySelector('#xSelect1')
  const xWingSelect2 = document.querySelector('#xSelect2')
  const xWingSelect3 = document.querySelector('#xSelect3')
  const xWingSelect4 = document.querySelector('#xSelect4')
  const falconSelect = document.querySelector('#falconSelect')
  const rebRandom =  document.querySelector('#rebRandom')  



  // const imperialShot = document.querySelector('.computerShoot')


  const width = 16
  const cellCount = width * width
  const cells = []


  // this is format of grids

  // let tieFighter[] = 


  let gridPosition = Math.floor(Math.random() * square.length)
  let shotPosition
  let nextShot




  // }

  function startGame() {
    startGameButton.style.display = 'none'
    scroller.innerText = 'Which side will you choose?'
    gridReb.appendChild(chooseRebButton)
    gridImp.appendChild(chooseImpButton)
    centerColumn.appendChild(restartButton)
    // return createGrids()
  }

  function chooseImperial() {
    gridImp.removeChild(chooseImpButton)
    gridReb.removeChild(chooseRebButton)
    setTimeout(createGrids(), 2000)
    setTimeout(placeFalcon(), 10)
    setTimeout(placeXWing(), 10)
    scroller.innerText = 'Your loyalty to the Emperor will be rewarded Captain. Crush these Rebel scum'
    return playerPlaceImp()
  }

  function chooseRebel() {
    gridReb.removeChild(chooseRebButton)
    gridImp.removeChild(chooseImpButton)
    setTimeout(createGrids(), 2000)
    setTimeout(placeCruiser(), 10)
    setTimeout(placeTieFighter(), 10)
    scroller.innerText = 'This is Gold Wing standing by. Tell us how you want us deployed Commander'
    return playerPlaceReb()
  }

  function playerPlaceImp() {
    imperialButtonsBox.style.display = 'flex'
    rebelSide.style.padding = '0 0 49px 0'
    begin.style.display = 'flex'

  }

  function playerPlaceReb() {
    rebelButtonsBox.style.display = 'flex'
    // if ()
    impSide.style.padding = '0 0 49px 0'
    begin.style.display = 'flex'

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
      // console.log('cell', cell)
      cell.classList.add('square')
      cell.innerHTML = i
      gridImp.appendChild(cell) //imperial grid
      cells.push(cell)
    }
    // const squareImp = document.querySelectorAll('#impSide .grid-wrapper .grid .square')      <<<<---- To randomly assign 5 squares on imperial side
    // for (let i = 0; i < 5; i++) {
    //   squareImp[gridPosition].classList.replace('square', 'ship')
    //   gridPosition = Math.floor(Math.random() * squareImp.length)
    // }
    // const squareReb = document.querySelectorAll('#rebelSide .grid-wrapper .grid .square')     <<<<<--- to randomly assign 5 sqaures on imperial side. 
    // for (let i = 0; i < 5; i++) {
    //   squareReb[gridPosition].classList.replace('square', 'ship')
    //   gridPosition = Math.floor(Math.random() * squareReb.length)
    // }
  }


  function placeTieFighter1(gridPosition) {
    const squareImp = document.querySelectorAll('#impSide .grid-wrapper .grid div')
    gridPosition = 0
    squareImp[gridPosition].classList.replace('square', 'ship')
    squareImp[gridPosition + 1].classList.replace('square', 'ship')
    squareImp[gridPosition + 2].classList.replace('square', 'ship')
    squareImp[gridPosition + (width + 1)].classList.replace('square', 'ship')
    squareImp[gridPosition + (width * 2)].classList.replace('square', 'ship')
    squareImp[gridPosition + (width * 2) + 1].classList.replace('square', 'ship')
    squareImp[gridPosition + (width * 2) + 2].classList.replace('square', 'ship')
    tieSelect1.style.display = 'none'
    impRandom.style.display = 'none'

  }
  function placeTieFighter2(gridPosition) {
    const squareImp = document.querySelectorAll('#impSide .grid-wrapper .grid div')
    gridPosition = 13
    squareImp[gridPosition].classList.replace('square', 'ship')
    squareImp[gridPosition + 1].classList.replace('square', 'ship')
    squareImp[gridPosition + 2].classList.replace('square', 'ship')
    squareImp[gridPosition + (width + 1)].classList.replace('square', 'ship')
    squareImp[gridPosition + (width * 2)].classList.replace('square', 'ship')
    squareImp[gridPosition + (width * 2) + 1].classList.replace('square', 'ship')
    squareImp[gridPosition + (width * 2) + 2].classList.replace('square', 'ship')
    tieSelect2.style.display = 'none'
    impRandom.style.display = 'none'
  }
  function placeTieFighter3(gridPosition) {
    const squareImp = document.querySelectorAll('#impSide .grid-wrapper .grid div')
    gridPosition = 208
    squareImp[gridPosition].classList.replace('square', 'ship')
    squareImp[gridPosition + 1].classList.replace('square', 'ship')
    squareImp[gridPosition + 2].classList.replace('square', 'ship')
    squareImp[gridPosition + (width + 1)].classList.replace('square', 'ship')
    squareImp[gridPosition + (width * 2)].classList.replace('square', 'ship')
    squareImp[gridPosition + (width * 2) + 1].classList.replace('square', 'ship')
    squareImp[gridPosition + (width * 2) + 2].classList.replace('square', 'ship')
    tieSelect3.style.display = 'none'
    impRandom.style.display = 'none'
  }
  function placeTieFighter4(gridPosition) {
    const squareImp = document.querySelectorAll('#impSide .grid-wrapper .grid div')
    gridPosition = 221
    squareImp[gridPosition].classList.replace('square', 'ship')
    squareImp[gridPosition + 1].classList.replace('square', 'ship')
    squareImp[gridPosition + 2].classList.replace('square', 'ship')
    squareImp[gridPosition + (width + 1)].classList.replace('square', 'ship')
    squareImp[gridPosition + (width * 2)].classList.replace('square', 'ship')
    squareImp[gridPosition + (width * 2) + 1].classList.replace('square', 'ship')
    squareImp[gridPosition + (width * 2) + 2].classList.replace('square', 'ship')
    tieSelect4.style.display = 'none'
    impRandom.style.display = 'none'
  }
  function placeCruiser1() {
    const squareImp = document.querySelectorAll('#impSide .grid-wrapper .grid div')
    gridPosition = 101
    squareImp[gridPosition - width + 2].classList.replace('square', 'ship')                               
    squareImp[gridPosition - width + 3].classList.replace('square', 'ship')
    squareImp[gridPosition - width + 5].classList.replace('square', 'ship')
    squareImp[gridPosition].classList.replace('square', 'ship')
    squareImp[gridPosition + 1].classList.replace('square', 'ship')
    squareImp[gridPosition + 2].classList.replace('square', 'ship')
    squareImp[gridPosition + 3].classList.replace('square', 'ship')
    squareImp[gridPosition + 4].classList.replace('square', 'ship')
    squareImp[gridPosition + 5].classList.replace('square', 'ship')
    squareImp[gridPosition + width].classList.replace('square', 'ship')
    squareImp[gridPosition + width + 1].classList.replace('square', 'ship')
    squareImp[gridPosition + width + 2].classList.replace('square', 'ship')
    squareImp[gridPosition + width + 3].classList.replace('square', 'ship')
    squareImp[gridPosition + width + 4].classList.replace('square', 'ship')
    squareImp[gridPosition + width + 5].classList.replace('square', 'ship')
    squareImp[gridPosition + (width * 2) + 2].classList.replace('square', 'ship')
    squareImp[gridPosition + (width * 2) + 3].classList.replace('square', 'ship')
    squareImp[gridPosition + (width * 2) + 5].classList.replace('square', 'ship')
    cruiserSelect.style.display = 'none'
    impRandom.style.display = 'none'
  }






  //? Deploys imperial ships randomly when player chooses rebel --------------------------------------------------------------------------------------------------
  // deploy the tie fighters
  function placeTieFighter() {
    for (let i = 0; i < 4; i++) { // ridiculously long code for if any conditions that would cause ships to be partially off grid, or overlapping, to not run. Otherwise place i amount ships. 
      const squareImp = document.querySelectorAll('#impSide .grid-wrapper .grid div')
      gridPosition = Math.floor(Math.random() * squareImp.length)
      if (gridPosition % width === 14 || gridPosition % width === 15 || gridPosition >= 222 || squareImp[gridPosition].classList.contains('ship') || squareImp[gridPosition + 1].classList.contains('ship') || squareImp[gridPosition + 2].classList.contains('ship') || squareImp[gridPosition + width].classList.contains('ship') || squareImp[gridPosition + width + 1].classList.contains('ship') || squareImp[gridPosition + width + 2].classList.contains('ship') || squareImp[gridPosition + (width * 2)].classList.contains('ship') || squareImp[gridPosition + (width * 2) + 1].classList.contains('ship') || squareImp[gridPosition + (width * 2) + 2].classList.contains('ship')) {
        i--
      } else { // this is the code for the template of the tie fighter - must be a way to have this in single variable, which can then be used to rotate, and display image when whole ship gone. 
        squareImp[gridPosition].classList.replace('square', 'ship')
        squareImp[gridPosition + 1].classList.replace('square', 'ship')
        squareImp[gridPosition + 2].classList.replace('square', 'ship')
        squareImp[gridPosition + (width + 1)].classList.replace('square', 'ship')
        squareImp[gridPosition + (width * 2)].classList.replace('square', 'ship')
        squareImp[gridPosition + (width * 2) + 1].classList.replace('square', 'ship')
        squareImp[gridPosition + (width * 2) + 2].classList.replace('square', 'ship')
      }
    }
  }
  // deploy the cruiser
  function placeCruiser() {
    for (let i = 0; i < 1; i++) {
      const squareImp = document.querySelectorAll('#impSide .grid-wrapper .grid div')
      gridPosition = Math.floor(Math.random() * squareImp.length)
      if (gridPosition <= 15 || gridPosition > 218 || gridPosition % width === 11 || gridPosition % width === 12 || gridPosition % width === 13 || gridPosition % width === 14 || gridPosition % width === 15 || squareImp[gridPosition - width + 2].classList.contains('ship') || squareImp[gridPosition - width + 3].classList.contains('ship') || squareImp[gridPosition - width + 5].classList.contains('ship') || squareImp[gridPosition].classList.contains('ship') || squareImp[gridPosition + 1].classList.contains('ship') || squareImp[gridPosition + 2].classList.contains('ship') || squareImp[gridPosition + 3].classList.contains('ship') || squareImp[gridPosition + 4].classList.contains('ship') || squareImp[gridPosition + 5].classList.contains('ship') || squareImp[gridPosition + width].classList.contains('ship') || squareImp[gridPosition + width + 1].classList.contains('ship') || squareImp[gridPosition + width + 2].classList.contains('ship') || squareImp[gridPosition + width + 3].classList.contains('ship') || squareImp[gridPosition + width + 4].classList.contains('ship') || squareImp[gridPosition + width + 5].classList.contains('ship') || squareImp[gridPosition + (width * 2) + 2].classList.contains('ship') || squareImp[gridPosition + (width * 2) + 3].classList.contains('ship') || squareImp[gridPosition + (width * 2) + 5].classList.contains('ship')) {
        i--
      } else {
        squareImp[gridPosition - width + 2].classList.replace('square', 'ship')
        squareImp[gridPosition - width + 3].classList.replace('square', 'ship')
        squareImp[gridPosition - width + 5].classList.replace('square', 'ship')
        squareImp[gridPosition].classList.replace('square', 'ship')
        squareImp[gridPosition + 1].classList.replace('square', 'ship')
        squareImp[gridPosition + 2].classList.replace('square', 'ship')
        squareImp[gridPosition + 3].classList.replace('square', 'ship')
        squareImp[gridPosition + 4].classList.replace('square', 'ship')
        squareImp[gridPosition + 5].classList.replace('square', 'ship')
        squareImp[gridPosition + width].classList.replace('square', 'ship')
        squareImp[gridPosition + width + 1].classList.replace('square', 'ship')
        squareImp[gridPosition + width + 2].classList.replace('square', 'ship')
        squareImp[gridPosition + width + 3].classList.replace('square', 'ship')
        squareImp[gridPosition + width + 4].classList.replace('square', 'ship')
        squareImp[gridPosition + width + 5].classList.replace('square', 'ship')
        squareImp[gridPosition + (width * 2) + 2].classList.replace('square', 'ship')
        squareImp[gridPosition + (width * 2) + 3].classList.replace('square', 'ship')
        squareImp[gridPosition + (width * 2) + 5].classList.replace('square', 'ship')

      }
    }
  }

  // Functions to place the individual REBEL ships based on buttons
  function placeXWing1(gridPosition) {
    // ridiculously long code for if any conditions that would cause ships to be partially off grid, or overlapping, to not run. Otherwise place i amount ships.
    const squareReb = document.querySelectorAll('#rebelSide .grid-wrapper .grid div')
    gridPosition = 16
    squareReb[gridPosition].classList.replace('square', 'ship')
    squareReb[gridPosition + 1].classList.replace('square', 'ship')
    squareReb[gridPosition + 2].classList.replace('square', 'ship')
    squareReb[gridPosition + 3].classList.replace('square', 'ship')
    squareReb[gridPosition + 4].classList.replace('square', 'ship')
    squareReb[gridPosition - width + 1].classList.replace('square', 'ship')
    squareReb[gridPosition + width + 1].classList.replace('square', 'ship')
    xWingSelect1.style.display = 'none'
    rebRandom.style.display = 'none'
  }
  function placeXWing2(gridPosition) {
    // ridiculously long code for if any conditions that would cause ships to be partially off grid, or overlapping, to not run. Otherwise place i amount ships.
    const squareReb = document.querySelectorAll('#rebelSide .grid-wrapper .grid div')
    gridPosition = 27
    squareReb[gridPosition].classList.replace('square', 'ship')
    squareReb[gridPosition + 1].classList.replace('square', 'ship')
    squareReb[gridPosition + 2].classList.replace('square', 'ship')
    squareReb[gridPosition + 3].classList.replace('square', 'ship')
    squareReb[gridPosition + 4].classList.replace('square', 'ship')
    squareReb[gridPosition - width + 1].classList.replace('square', 'ship')
    squareReb[gridPosition + width + 1].classList.replace('square', 'ship')
    xWingSelect2.style.display = 'none'
    rebRandom.style.display = 'none'
  }
  function placeXWing3(gridPosition) {
    // ridiculously long code for if any conditions that would cause ships to be partially off grid, or overlapping, to not run. Otherwise place i amount ships.
    const squareReb = document.querySelectorAll('#rebelSide .grid-wrapper .grid div')
    gridPosition = 224
    squareReb[gridPosition].classList.replace('square', 'ship')
    squareReb[gridPosition + 1].classList.replace('square', 'ship')
    squareReb[gridPosition + 2].classList.replace('square', 'ship')
    squareReb[gridPosition + 3].classList.replace('square', 'ship')
    squareReb[gridPosition + 4].classList.replace('square', 'ship')
    squareReb[gridPosition - width + 1].classList.replace('square', 'ship')
    squareReb[gridPosition + width + 1].classList.replace('square', 'ship')
    xWingSelect3.style.display = 'none'
    rebRandom.style.display = 'none'
  }
  function placeXWing4(gridPosition) {
    // ridiculously long code for if any conditions that would cause ships to be partially off grid, or overlapping, to not run. Otherwise place i amount ships.
    const squareReb = document.querySelectorAll('#rebelSide .grid-wrapper .grid div')
    gridPosition = 235
    squareReb[gridPosition].classList.replace('square', 'ship')
    squareReb[gridPosition + 1].classList.replace('square', 'ship')
    squareReb[gridPosition + 2].classList.replace('square', 'ship')
    squareReb[gridPosition + 3].classList.replace('square', 'ship')
    squareReb[gridPosition + 4].classList.replace('square', 'ship')
    squareReb[gridPosition - width + 1].classList.replace('square', 'ship')
    squareReb[gridPosition + width + 1].classList.replace('square', 'ship')
    xWingSelect4.style.display = 'none'
    rebRandom.style.display = 'none'
  }
  function placeFalcon1(gridPosition) {
    const squareReb = document.querySelectorAll('#rebelSide .grid-wrapper .grid div')
    gridPosition = 101
    squareReb[gridPosition].classList.replace('square', 'ship')
    squareReb[gridPosition - width + 1].classList.replace('square', 'ship')
    squareReb[gridPosition - width + 2].classList.replace('square', 'ship')
    squareReb[gridPosition + 1].classList.replace('square', 'ship')
    squareReb[gridPosition + 2].classList.replace('square', 'ship')
    squareReb[gridPosition + 3].classList.replace('square', 'ship')
    squareReb[gridPosition + 4].classList.replace('square', 'ship')
    squareReb[gridPosition + width].classList.replace('square', 'ship')
    squareReb[gridPosition + width + 1].classList.replace('square', 'ship')
    squareReb[gridPosition + width + 2].classList.replace('square', 'ship')
    squareReb[gridPosition + width + 3].classList.replace('square', 'ship')
    squareReb[gridPosition + (2 * width)].classList.replace('square', 'ship')
    squareReb[gridPosition + (2 * width) + 1].classList.replace('square', 'ship')
    squareReb[gridPosition + (2 * width) + 2].classList.replace('square', 'ship')
    squareReb[gridPosition + (2 * width) + 3].classList.replace('square', 'ship')
    squareReb[gridPosition + (2 * width) + 4].classList.replace('square', 'ship')
    squareReb[gridPosition + (3 * width) + 1].classList.replace('square', 'ship')
    squareReb[gridPosition + (3 * width) + 2].classList.replace('square', 'ship')
    falconSelect.style.display = 'none'
    rebRandom.style.display = 'none'
  }





  //? Deploys the rebel ships randomly when player chooses Imperial --------------------------------------------------------------------------------------------------
  // deploy xwings
  function placeXWing() {
    for (let i = 0; i < 4; i++) { // ridiculously long code for if any conditions that would cause ships to be partially off grid, or overlapping, to not run. Otherwise place i amount ships.
      const squareReb = document.querySelectorAll('#rebelSide .grid-wrapper .grid div')
      gridPosition = Math.floor(Math.random() * squareReb.length)
      if (gridPosition % width === 12 || gridPosition % width === 13 || gridPosition % width === 14 || gridPosition % width === 15 || gridPosition >= 236 || gridPosition <= 16 || squareReb[gridPosition].classList.contains('ship') || squareReb[gridPosition + 1].classList.contains('ship') || squareReb[gridPosition + 2].classList.contains('ship') || squareReb[gridPosition + 3].classList.contains('ship') || squareReb[gridPosition + 4].classList.contains('ship') || squareReb[gridPosition + width + 1].classList.contains('ship') || squareReb[gridPosition - width + 1].classList.contains('ship')) {
        i--
      } else { // this is the code for the template of the xWing
        squareReb[gridPosition].classList.replace('square', 'ship')
        squareReb[gridPosition + 1].classList.replace('square', 'ship')
        squareReb[gridPosition + 2].classList.replace('square', 'ship')
        squareReb[gridPosition + 3].classList.replace('square', 'ship')
        squareReb[gridPosition + 4].classList.replace('square', 'ship')
        squareReb[gridPosition - width + 1].classList.replace('square', 'ship')
        squareReb[gridPosition + width + 1].classList.replace('square', 'ship')
      }
    }
  }
  // deploy falcon
  function placeFalcon() {
    for (let i = 0; i < 1; i++) {
      const squareReb = document.querySelectorAll('#rebelSide .grid-wrapper .grid div')
      gridPosition = Math.floor(Math.random() * squareReb.length)
      if (gridPosition % width === 12 || gridPosition % width === 13 || gridPosition % width === 14 || gridPosition % width === 15 || gridPosition <= 15 || gridPosition > 203 || squareReb[gridPosition].classList.contains('ship') || squareReb[gridPosition - width + 2].classList.contains('ship') || squareReb[gridPosition - width + 1].classList.contains('ship') || squareReb[gridPosition + 1].classList.contains('ship') || squareReb[gridPosition + 2].classList.contains('ship') || squareReb[gridPosition + 3].classList.contains('ship') || squareReb[gridPosition + 4].classList.contains('ship') || squareReb[gridPosition + width].classList.contains('ship') || squareReb[gridPosition + width + 1].classList.contains('ship') || squareReb[gridPosition + width + 2].classList.contains('ship') || squareReb[gridPosition + width + 3].classList.contains('ship') || squareReb[gridPosition + (width * 2)].classList.contains('ship') || squareReb[gridPosition + (width * 2) + 1].classList.contains('ship') || squareReb[gridPosition + (width * 2) + 2].classList.contains('ship') || squareReb[gridPosition + (width * 2) + 3].classList.contains('ship') || squareReb[gridPosition + (width * 2) + 4].classList.contains('ship') || squareReb[gridPosition + (width * 3) + 1].classList.contains('ship') || squareReb[gridPosition + (width * 2) + 2].classList.contains('ship')) {
        i--
      } else {
        squareReb[gridPosition].classList.replace('square', 'ship')
        squareReb[gridPosition - width + 1].classList.replace('square', 'ship')
        squareReb[gridPosition - width + 2].classList.replace('square', 'ship')
        squareReb[gridPosition + 1].classList.replace('square', 'ship')
        squareReb[gridPosition + 2].classList.replace('square', 'ship')
        squareReb[gridPosition + 3].classList.replace('square', 'ship')
        squareReb[gridPosition + 4].classList.replace('square', 'ship')
        squareReb[gridPosition + width].classList.replace('square', 'ship')
        squareReb[gridPosition + width + 1].classList.replace('square', 'ship')
        squareReb[gridPosition + width + 2].classList.replace('square', 'ship')
        squareReb[gridPosition + width + 3].classList.replace('square', 'ship')
        squareReb[gridPosition + (2 * width)].classList.replace('square', 'ship')
        squareReb[gridPosition + (2 * width) + 1].classList.replace('square', 'ship')
        squareReb[gridPosition + (2 * width) + 2].classList.replace('square', 'ship')
        squareReb[gridPosition + (2 * width) + 3].classList.replace('square', 'ship')
        squareReb[gridPosition + (2 * width) + 4].classList.replace('square', 'ship')
        squareReb[gridPosition + (3 * width) + 1].classList.replace('square', 'ship')
        squareReb[gridPosition + (3 * width) + 2].classList.replace('square', 'ship')
      }
    }
  }
  // ? ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------



  // ? Functions for making shots based on whether player chose rebel or imperial ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  // Function for player choosing rebel------------------------------------------------
  function playerRebelShot(event) {
    console.log('click Rebel')
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
  function computerImperialShot() {
    console.log('computer shoots')
    for (let i = 0; i < 1; i++) {
      const squareReb = document.querySelectorAll('#rebelSide .grid-wrapper .grid div')
      gridPosition = Math.floor(Math.random() * squareReb.length)
      if (squareReb[gridPosition].classList.contains('square')) {
        squareReb[gridPosition].classList.replace('square', 'miss')
        console.log('computer miss')
        return playerRebelShot()
      } else if (squareReb[gridPosition].classList.contains('miss') || squareReb[gridPosition].classList.contains('hit')) {
        i--
      } else {
        squareReb[gridPosition].classList.replace('ship', 'hit')
        console.log('Computer hits, it goes again!')
        setTimeout(computerImpHit, 2000)
      }
    }
    function computerImpHit() {
      for (let i = 0; i < 1; i++) {
        const squareReb = document.querySelectorAll('#rebelSide .grid-wrapper .grid div')
        const hitBox = []
        hitBox.push(gridPosition - 1, gridPosition + 1, gridPosition - 17, gridPosition - 16, gridPosition - 15, gridPosition + 15, gridPosition + 16, gridPosition + 17)
        shotPosition = Math.floor(Math.random() * hitBox.length)
        nextShot = hitBox.slice(shotPosition, shotPosition + 1)
        console.log('nextshot', nextShot)
        if (squareReb[nextShot].classList.contains('square')) {
          squareReb[nextShot].classList.replace('square', 'miss')
          console.log('computer miss')
          return playerRebelShot()
        } else if (squareReb[nextShot].classList.contains('miss') || squareReb[nextShot].classList.contains('hit')) {
          i--
        } else {
          squareReb[nextShot].classList.replace('ship', 'hit')
          console.log('Computer hits, it goes again!')
          setTimeout(computerImpHit, 2000)
        }
      }
    }
  }

  // Function for player choosing Imperial side. --------------------------------------------------
  function playerImperialShot(event) {
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
      gridPosition = Math.floor(Math.random() * squareImp.length)
      if (squareImp[gridPosition].classList.contains('square')) {
        squareImp[gridPosition].classList.replace('square', 'miss')
        console.log('computer miss')
        return playerImperialShot()
      } else if (squareImp[gridPosition].classList.contains('miss') || squareImp[gridPosition].classList.contains('hit')) {
        i--
      } else {
        squareImp[gridPosition].classList.replace('ship', 'hit')
        console.log('Computer hits, it goes again!')
        setTimeout(computerRebelHit, 2000)
      }
    }
    function computerRebelHit() {
      for (let i = 0; i < 1; i++) {
        const squareImp = document.querySelectorAll('#impSide .grid-wrapper .grid div')
        const hitBox = []
        hitBox.push(gridPosition - 1, gridPosition + 1, gridPosition - 17, gridPosition - 16, gridPosition - 15, gridPosition + 15, gridPosition + 16, gridPosition + 17)
        shotPosition = Math.floor(Math.random() * hitBox.length)
        nextShot = hitBox.slice(shotPosition, shotPosition + 1)
        console.log('nextshot', nextShot)
        if (squareImp[nextShot].classList.contains('square')) {
          squareImp[nextShot].classList.replace('square', 'miss')
          console.log('computer miss')
          return playerImperialShot()
        } else if (squareImp[nextShot].classList.contains('miss') || squareImp[nextShot].classList.contains('hit')) {
          i--
        } else {
          squareImp[nextShot].classList.replace('ship', 'hit')
          console.log('Computer hits, it goes again!')
          setTimeout(computerRebelHit, 2000)
        }
      }
    }
  }


  // ?------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------






  startGameButton.addEventListener('click', startGame)

  restartButton.addEventListener('click', startGame)

  chooseRebButton.addEventListener('click', chooseRebel)

  chooseImpButton.addEventListener('click', chooseImperial)

  restartButton.addEventListener('click', () => {
    location = location
  })

  // imperialShot.addEventListener('click', computerShoot)

  tieSelect1.addEventListener('click', placeTieFighter1)
  tieSelect2.addEventListener('click', placeTieFighter2)
  tieSelect3.addEventListener('click', placeTieFighter3)
  tieSelect4.addEventListener('click', placeTieFighter4)
  cruiserSelect.addEventListener('click', placeCruiser1)
  impRandom.addEventListener('click', () => {
    placeTieFighter()
    placeCruiser()
  })

  xWingSelect1.addEventListener('click', placeXWing1)
  xWingSelect2.addEventListener('click', placeXWing2)
  xWingSelect3.addEventListener('click', placeXWing3)
  xWingSelect4.addEventListener('click', placeXWing4)
  falconSelect.addEventListener('click', placeFalcon1)
  rebRandom.addEventListener('click', () => {
    placeXWing()
    placeFalcon()
  })



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