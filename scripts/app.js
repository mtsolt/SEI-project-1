function init() {


  // Are§ for selecting bits of the HTML
  const startGameButton = document.querySelector('#start-button')
  // selects start button
  const centerColumn = document.querySelector('#center')
  // selects center column

  const rebelSide = document.querySelector('#rebelSide')
  const impSide = document.querySelector('#impSide')

  const gridReb = document.querySelector('#rebelSide .grid-wrapper .grid')
  // console.log('this is gridReb', gridReb)
  // this creates const for the rebel side
  const gridImp = document.querySelector('#impSide .grid-wrapper .grid')
  // this creastes const for imp side
  const gridSquare = document.querySelectorAll('.grid')
  // selects the grids
  const square = document.querySelectorAll('.square')
  // selects all squares
  const squareImp = document.querySelectorAll('#impSide .grid-wrapper .grid div')
  // console.log('this is squareImp', squareImp)
  // selects all squares on Imp
  const squareReb = document.querySelectorAll('#rebelSide .grid-wrapper .grid div')
  // selects all squares on Reb
  const scroller = document.querySelector('#scroller')
  // selects the scroller
  const counters = document.querySelector('#counters')

  const main = document.querySelector('main')
  console.log('main', main)


  const rebelButtonsBox = document.querySelector('#rebel')
  // console.log(rebelButtonsBox, 'rebelButtonsBox')

  const imperialButtonsBox = document.querySelector('#imperial')
  // console.log(imperialButtonsBox, 'imperialButtonsBox')

  const finish = document.querySelectorAll('#rebelSide, #center, #impSide')
  console.log('finish', finish)


  // Rebel start button
  const chooseRebButton = document.createElement('button')
  chooseRebButton.innerText = 'REBEL'
  chooseRebButton.style.padding = '30%'
  chooseRebButton.style.background = 'none'
  chooseRebButton.style.border = 'none'
  // Imperial start button
  const chooseImpButton = document.createElement('button')
  chooseImpButton.innerText = 'IMPERIAL'
  chooseImpButton.style.padding = '30%'
  chooseImpButton.style.background = 'none'
  chooseImpButton.style.border = 'none'

  // restart page
  const restartButton = document.createElement('button')
  restartButton.innerText = 'Restart Game'
  restartButton.style.display = 'flex'
  restartButton.style.justifyContent = 'center'

  // game end options

  const playerImperialWin = document.createElement('section')
  playerImperialWin.innerText = 'You have crushed these rebels like the dogs they are. Pick up any of their survivors, we have ways of making them talk. Well done.'


  const playerImperialLoss = document.createElement('section')
  playerImperialLoss.innerText = 'You fool, you have lost the day. Better that you die out there than the Emperor hear of your idiocy.'

  const playerRebelWin = document.createElement('section')
  playerRebelWin.innerText = 'You have won! The Imperial fleet will surely suffer as a result of this victory. Well done Commander!'

  const playerRebelLoss = document.createElement('section')
  playerRebelLoss.innerText = "Commander, we can't sustain these losses any longer, pull back what remains of your group. We have lost this day."


  // Button selects.
  const tieSelect1 = document.querySelector('#tieSelect1')
  const tieSelect2 = document.querySelector('#tieSelect2')
  const tieSelect3 = document.querySelector('#tieSelect3')
  const tieSelect4 = document.querySelector('#tieSelect4')
  const cruiserSelect = document.querySelector('#cruiserSelect')
  const impRandom = document.querySelector('#impRandom')

  const xWingSelect1 = document.querySelector('#xSelect1')
  const xWingSelect2 = document.querySelector('#xSelect2')
  const xWingSelect3 = document.querySelector('#xSelect3')
  const xWingSelect4 = document.querySelector('#xSelect4')
  const falconSelect = document.querySelector('#falconSelect')
  const rebRandom = document.querySelector('#rebRandom')
  // start game 
  const rebBegin = document.querySelector('#rebBegin')

  const impBegin = document.querySelector('#impBegin')

  const shots = document.querySelector('#shotsTaken')

  const enRem = document.querySelector('#enRem')
  console.log('enRem', enRem)

  const youRem = document.querySelector('#youRem')
  console.log('youRem', youRem)




  // const imperialShot = document.querySelector('.computerShoot')


  const width = 14
  const cellCount = width * width
  const cells = []
  const rebDeployed = []
  const impDeployed = []
  let value = 0
  const xWing = [value, value + 1, value + 3, value + 4, value - width + 1, value + width + 1]
  console.log('xWing', xWing)
  const falcon = []
  
  function placeXWing (gridPosition) {
    let value = gridPosition
    xWing.forEach(item => {
      item.classList.replace('square', 'ship')
    })
  }
  


  // function aWingPlace(positionosition) {
  //   aWing.forEach(value)
  // }



  // this is format of grids

  // let tieFighter[] = 


  let gridPosition = Math.floor(Math.random() * square.length)
  let shotPosition
  let nextShot
  let shotsTaken = 0
  let enemyParts = 46
  let youParts = 46

  youRem.innerText = youParts
  enRem.innerText = enemyParts



  // }

  function startGame() {
    startGameButton.style.display = 'none'
    scroller.innerText = 'Which side will you choose?'
    gridReb.appendChild(chooseRebButton)
    gridImp.appendChild(chooseImpButton)
    centerColumn.appendChild(restartButton)
    // return createGrids()
  }

  function createGrids() { //this creates both grids. Feel like there must be a way to do this with just one for loop, not sure how just yet though. 
    for (let i = 0; i < cellCount; i++) {
      const cell = document.createElement('div')
      cell.classList.add('square')
      cell.innerHTML = i
      gridReb.appendChild(cell) // rebel grid
      cells.push(cell)
      // console.log('this is gridReb', gridReb)
    }

    for (let i = 0; i < cellCount; i++) {
      const cell = document.createElement('div')
      // console.log('cell', cell)
      cell.classList.add('square')
      cell.innerHTML = i
      gridImp.appendChild(cell) //imperial grid
      cells.push(cell)
    }
  }

  function chooseImperial() {
    gridImp.removeChild(chooseImpButton)
    gridReb.removeChild(chooseRebButton)
    setTimeout(createGrids(), 2000)
    setTimeout(placeFalcon(), 10)
    setTimeout(placeXWing(), 10)
    scroller.innerText = 'Your loyalty to the Emperor will be rewarded Captain. Crush these Rebel scum'
    imperialButtonsBox.style.display = 'flex'
    rebelSide.style.padding = '0 0 49px 0'
  }

  function imperialBattle() {
    imperialButtonsBox.style.display = 'none'
    rebelSide.style.padding = '0'
    scroller.innerText = ''
    impBegin.style.display = 'none'
    return playerImperial()
  }

  function playerImperial() {
    counters.style.display = 'flex'
    const num = Math.floor(Math.random() * 2)
    console.log(num, 'num')
    gridReb.addEventListener('click', playerImperialShot)
    if (num === 0) {
      scroller.innerText = "The Rebels dropped out of hyperspace too early, it's your go first!"
      return playerImperialShot()
    } else if (num === 1) {
      scroller.innerText = 'The Rebels are here! Watch out, they are going first!'
      setTimeout(computerRebelShot, 4000)
    }

    function playerImperialShot(event) {
      scroller.innerText = 'It is your go!'
      if (event.target.classList.contains('square')) {
        event.target.classList.replace('square', 'miss')
        scroller.innerText = "You missed! It's the computer's go"
        // console.log('miss')
        shotsTaken++
        shots.innerText = shotsTaken
        setTimeout(computerRebelShot, 2000)
      } else if (event.target.classList.contains('hit') || event.target.classList.contains('miss')) {
        scroller.innerText = "You've already fired there, try again!"
      } else {
        scroller.innerText = 'You hit! You can go again'
        event.target.classList.replace('ship', 'hit')
        shotsTaken++
        shots.innerText = shotsTaken
        enemyParts--
        enRem.innerText = enemyParts
        if (enemyParts === 0) {
          return playerImpWin()
        }
        // console.log('hit')
        // repeat function
      }
    }
    function computerRebelShot() {
      scroller.innerText = "It is the computer's go"
      // console.log('computer shoots')
      for (let i = 0; i < 1; i++) {
        const squareImp = document.querySelectorAll('#impSide .grid-wrapper .grid div')
        gridPosition = Math.floor(Math.random() * squareImp.length)
        if (squareImp[gridPosition].classList.contains('square')) {
          squareImp[gridPosition].classList.replace('square', 'miss')
          // console.log('computer miss')
          return playerImperialShot()
        } else if (squareImp[gridPosition].classList.contains('miss') || squareImp[gridPosition].classList.contains('hit')) {
          i--
        } else {
          scroller.innerText = 'The computer hit! It will go again'
          squareImp[gridPosition].classList.replace('ship', 'hit')
          youParts--
          youRem.innerText = youParts
          if (youParts === 0) {
            return playerImpLoss()
          } else {
            setTimeout(computerRebelHit, 2000)
          }
        }
      }
      function computerRebelHit() {
        for (let i = 0; i < 1; i++) {
          const squareImp = document.querySelectorAll('#impSide .grid-wrapper .grid div')
          const hitBox = []
          hitBox.push(gridPosition - 1, gridPosition + 1, gridPosition - width - 1, gridPosition - width, gridPosition - width + 1, gridPosition + width - 1, gridPosition + width, gridPosition + width + 1)
          shotPosition = Math.floor(Math.random() * hitBox.length)
          nextShot = hitBox.slice(shotPosition, shotPosition + 1)
          // console.log('nextshot', nextShot)
          if (squareImp[nextShot].classList.contains('square')) {
            squareImp[nextShot].classList.replace('square', 'miss')
            // console.log('computer miss')
            return playerImperialShot()
          } else if (squareImp[nextShot].classList.contains('miss') || squareImp[nextShot].classList.contains('hit')) {
            i--
          } else {
            scroller.innerText = 'The computer hit! It will go again'
            squareImp[nextShot].classList.replace('ship', 'hit')
            youParts--
            youRem.innerText = youParts
            if (youParts === 0) {
              return playerImpLoss()
            } else {
              setTimeout(computerRebelHit, 2000)
            }
          }
        }
      }
    }
  }

  function playerImpWin() {
    finish.forEach(item => {
      item.style.display = 'none'
    })
    main.appendChild(playerImperialWin)
  }

  function playerImpLoss() {
    finish.forEach(item => {
      item.style.display = 'none'
    })
    main.appendChild(playerImperialLoss)
  }

  function playerRebWin() {
    finish.forEach(item => {
      item.style.display = 'none'
    })
    main.appendChild(playerRebelWin)
  }
  function playerRebLoss() {
    finish.forEach(item => {
      item.style.display = 'none'
    })
    main.appendChild(playerRebelLoss)
  }


  function chooseRebel() {
    gridReb.removeChild(chooseRebButton)
    gridImp.removeChild(chooseImpButton)
    setTimeout(createGrids(), 2000)
    setTimeout(placeCruiser(), 10)
    setTimeout(placeTieFighter(), 10)
    scroller.innerText = 'This is Gold Wing standing by. Tell us how you want us deployed Commander'
    rebelButtonsBox.style.display = 'flex'
    impSide.style.padding = '0 0 49px 0'
  }

  function rebelBattle() {
    rebelButtonsBox.style.display = 'none'
    impSide.style.padding = '0'
    scroller.innerText = ''
    rebBegin.style.display = 'none'
    playerRebel()

  }

  function playerRebel() {
    counters.style.display = 'flex'
    const num = Math.floor(Math.random() * 2)
    // console.log(num, 'num')
    gridImp.addEventListener('click', playerRebelShot)
    if (num === 0) {
      scroller.innerText = "You took them by surprise! It's your go first!"
      return playerRebelShot()
    } else if (num === 1) {
      scroller.innerText = 'The Imperials saw us coming and are going first!'
      setTimeout(computerImperialShot, 4000)
    }

    function playerRebelShot(event) {
      scroller.innerText = 'It is your go! Click on a square to take a shot'
      // console.log('click Rebel')
      // console.log(event.target, 'event target')
      if (event.target.classList.contains('square')) {
        event.target.classList.replace('square', 'miss')
        scroller.innerText = "You missed! It's the computer's go"
        shotsTaken++
        shots.innerText = shotsTaken
        // console.log('miss')
        setTimeout(computerImperialShot, 2000)
      } else if (event.target.classList.contains('hit') || event.target.classList.contains('miss')) {
        scroller.innerText = "You've already fired there, try again!"
      } else {
        event.target.classList.replace('ship', 'hit')
        scroller.innerText = 'You hit! You can go again'
        shotsTaken++
        shots.innerText = shotsTaken
        enemyParts--
        enRem.innerText = enemyParts
        if (enemyParts === 0) {
          return playerRebWin()
        }
        // console.log('hit')
        // repeat function
      }
    }
    function computerImperialShot() {
      // console.log('computer shoots')
      for (let i = 0; i < 1; i++) {
        const squareReb = document.querySelectorAll('#rebelSide .grid-wrapper .grid div')
        gridPosition = Math.floor(Math.random() * squareReb.length)
        if (squareReb[gridPosition].classList.contains('square')) {
          squareReb[gridPosition].classList.replace('square', 'miss')
          // console.log('computer miss')
          return playerRebelShot()
        } else if (squareReb[gridPosition].classList.contains('miss') || squareReb[gridPosition].classList.contains('hit')) {
          i--
        } else {
          squareReb[gridPosition].classList.replace('ship', 'hit')
          scroller.innerText = 'The computer hit, it will go again'
          youParts--
          youRem.innerText = youParts
          if (youParts === 0) {
            return playerRebLoss()
          } else {
            setTimeout(computerImpHit, 2000)
          }
        }
      }
      function computerImpHit() {
        for (let i = 0; i < 1; i++) {
          const squareReb = document.querySelectorAll('#rebelSide .grid-wrapper .grid div')
          const hitBox = []
          hitBox.push(gridPosition - 1, gridPosition + 1, gridPosition - width - 1, gridPosition - width, gridPosition - width + 1, gridPosition + width - 1, gridPosition + width, gridPosition + width + 1)
          shotPosition = Math.floor(Math.random() * hitBox.length)
          nextShot = hitBox.slice(shotPosition, shotPosition + 1)
          // console.log('nextshot', nextShot)
          if (squareReb[nextShot].classList.contains('square')) {
            squareReb[nextShot].classList.replace('square', 'miss')
            // console.log('computer miss')
            return playerRebelShot()
          } else if (squareReb[nextShot].classList.contains('miss') || squareReb[nextShot].classList.contains('hit')) {
            i--
          } else {
            squareReb[nextShot].classList.replace('ship', 'hit')
            scroller.innerText = 'The computer hit, it will go again'
            youParts--
            youRem.innerText = youParts
            if (youParts === 0) {
              return playerRebLoss()
            } else {
              setTimeout(computerImpHit, 2000)
            }
            // console.log('Computer hits, it goes again!')

          }
        }
      }
    }
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
    console.log('squareImp', squareImp)
    impDeployed.push(1)
    if (impDeployed.length === 5) {
      impBegin.style.display = 'flex'
    }
  }

  function placeTieFighter2(gridPosition) {
    const squareImp = document.querySelectorAll('#impSide .grid-wrapper .grid div')
    gridPosition = width - 3
    squareImp[gridPosition].classList.replace('square', 'ship')
    squareImp[gridPosition + 1].classList.replace('square', 'ship')
    squareImp[gridPosition + 2].classList.replace('square', 'ship')
    squareImp[gridPosition + (width + 1)].classList.replace('square', 'ship')
    squareImp[gridPosition + (width * 2)].classList.replace('square', 'ship')
    squareImp[gridPosition + (width * 2) + 1].classList.replace('square', 'ship')
    squareImp[gridPosition + (width * 2) + 2].classList.replace('square', 'ship')
    tieSelect2.style.display = 'none'
    impRandom.style.display = 'none'
    impDeployed.push(1)
    if (impDeployed.length === 5) {
      impBegin.style.display = 'flex'
    }
  }
  function placeTieFighter3(gridPosition) {
    const squareImp = document.querySelectorAll('#impSide .grid-wrapper .grid div')
    gridPosition = ((width * width) - (width * 3))
    squareImp[gridPosition].classList.replace('square', 'ship')
    squareImp[gridPosition + 1].classList.replace('square', 'ship')
    squareImp[gridPosition + 2].classList.replace('square', 'ship')
    squareImp[gridPosition + (width + 1)].classList.replace('square', 'ship')
    squareImp[gridPosition + (width * 2)].classList.replace('square', 'ship')
    squareImp[gridPosition + (width * 2) + 1].classList.replace('square', 'ship')
    squareImp[gridPosition + (width * 2) + 2].classList.replace('square', 'ship')
    tieSelect3.style.display = 'none'
    impRandom.style.display = 'none'
    impDeployed.push(1)
    if (impDeployed.length === 5) {
      impBegin.style.display = 'flex'
    }
  }
  function placeTieFighter4(gridPosition) {
    const squareImp = document.querySelectorAll('#impSide .grid-wrapper .grid div')
    gridPosition = ((width * width) - (width * 2) - 3)
    squareImp[gridPosition].classList.replace('square', 'ship')
    squareImp[gridPosition + 1].classList.replace('square', 'ship')
    squareImp[gridPosition + 2].classList.replace('square', 'ship')
    squareImp[gridPosition + (width + 1)].classList.replace('square', 'ship')
    squareImp[gridPosition + (width * 2)].classList.replace('square', 'ship')
    squareImp[gridPosition + (width * 2) + 1].classList.replace('square', 'ship')
    squareImp[gridPosition + (width * 2) + 2].classList.replace('square', 'ship')
    tieSelect4.style.display = 'none'
    impRandom.style.display = 'none'
    impDeployed.push(1)
    if (impDeployed.length === 5) {
      impBegin.style.display = 'flex'
    }
  }
  function placeCruiser1() {
    const squareImp = document.querySelectorAll('#impSide .grid-wrapper .grid div')
    gridPosition = (width * 6) + 4
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
    impDeployed.push(1)
    if (impDeployed.length === 5) {
      impBegin.style.display = 'flex'
    }
  }






  //? Deploys imperial ships randomly when player chooses rebel --------------------------------------------------------------------------------------------------
  // deploy the tie fighters
  function placeTieFighter() {
    for (let i = 0; i < 4; i++) { // ridiculously long code for if any conditions that would cause ships to be partially off grid, or overlapping, to not run. Otherwise place i amount ships. 
      const squareImp = document.querySelectorAll('#impSide .grid-wrapper .grid div')
      gridPosition = Math.floor(Math.random() * squareImp.length)
      if (gridPosition % width === width - 2 || gridPosition % width === width - 1 || gridPosition >= ((width * width) - (width * 2) - 3) || squareImp[gridPosition].classList.contains('ship') || squareImp[gridPosition + 1].classList.contains('ship') || squareImp[gridPosition + 2].classList.contains('ship') || squareImp[gridPosition + width].classList.contains('ship') || squareImp[gridPosition + width + 1].classList.contains('ship') || squareImp[gridPosition + width + 2].classList.contains('ship') || squareImp[gridPosition + (width * 2)].classList.contains('ship') || squareImp[gridPosition + (width * 2) + 1].classList.contains('ship') || squareImp[gridPosition + (width * 2) + 2].classList.contains('ship')) {
        i--
      } else { // this is the code for the template of the tie fighter - must be a way to have this in single variable, which can then be used to rotate, and display image when whole ship gone. 
        squareImp[gridPosition].classList.replace('square', 'ship')
        squareImp[gridPosition + 1].classList.replace('square', 'ship')
        squareImp[gridPosition + 2].classList.replace('square', 'ship')
        squareImp[gridPosition + (width + 1)].classList.replace('square', 'ship')
        squareImp[gridPosition + (width * 2)].classList.replace('square', 'ship')
        squareImp[gridPosition + (width * 2) + 1].classList.replace('square', 'ship')
        squareImp[gridPosition + (width * 2) + 2].classList.replace('square', 'ship')
        impDeployed.push(1)
      }
    }
  }
  // deploy the cruiser
  function placeCruiser() {
    for (let i = 0; i < 1; i++) {
      const squareImp = document.querySelectorAll('#impSide .grid-wrapper .grid div')
      gridPosition = Math.floor(Math.random() * squareImp.length)
      if (gridPosition <= width || gridPosition > ((width * width) - (2 * width) - 6) || gridPosition % width === width - 5 || gridPosition % width === width - 4 || gridPosition % width === width - 3 || gridPosition % width === width - 2 || gridPosition % width === width - 1 || squareImp[gridPosition - width + 2].classList.contains('ship') || squareImp[gridPosition - width + 3].classList.contains('ship') || squareImp[gridPosition - width + 5].classList.contains('ship') || squareImp[gridPosition].classList.contains('ship') || squareImp[gridPosition + 1].classList.contains('ship') || squareImp[gridPosition + 2].classList.contains('ship') || squareImp[gridPosition + 3].classList.contains('ship') || squareImp[gridPosition + 4].classList.contains('ship') || squareImp[gridPosition + 5].classList.contains('ship') || squareImp[gridPosition + width].classList.contains('ship') || squareImp[gridPosition + width + 1].classList.contains('ship') || squareImp[gridPosition + width + 2].classList.contains('ship') || squareImp[gridPosition + width + 3].classList.contains('ship') || squareImp[gridPosition + width + 4].classList.contains('ship') || squareImp[gridPosition + width + 5].classList.contains('ship') || squareImp[gridPosition + (width * 2) + 2].classList.contains('ship') || squareImp[gridPosition + (width * 2) + 3].classList.contains('ship') || squareImp[gridPosition + (width * 2) + 5].classList.contains('ship')) {
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
    impDeployed.push(1)
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
    rebDeployed.push(1)
    if (rebDeployed.length === 5) {
      rebBegin.style.display = 'flex'
    }
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
    rebDeployed.push(1)
    if (rebDeployed.length === 5) {
      rebBegin.style.display = 'flex'
    }
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
    rebDeployed.push(1)
    if (rebDeployed.length === 5) {
      rebBegin.style.display = 'flex'
    }
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
    rebDeployed.push(1)
    if (rebDeployed.length === 5) {
      rebBegin.style.display = 'flex'
    }
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
    rebDeployed.push(1)
    if (rebDeployed.length === 5) {
      rebBegin.style.display = 'flex'
    }
  }

  function removeImpRandomly() {
    tieSelect1.style.display = 'none'
    tieSelect2.style.display = 'none'
    tieSelect3.style.display = 'none'
    tieSelect4.style.display = 'none'
    cruiserSelect.style.display = 'none'
    impRandom.style.display = 'none'
  }

  function removeRebRandomly() {
    xWingSelect1.style.display = 'none'
    xWingSelect2.style.display = 'none'
    xWingSelect3.style.display = 'none'
    xWingSelect4.style.display = 'none'
    falconSelect.style.display = 'none'
    rebRandom.style.display = 'none'
  }




  //? Deploys the rebel ships randomly when player chooses Imperial --------------------------------------------------------------------------------------------------
  // deploy xwings
  function placeXWing() {
    for (let i = 0; i < 4; i++) { // ridiculously long code for if any conditions that would cause ships to be partially off grid, or overlapping, to not run. Otherwise place i amount ships.
      const squareReb = document.querySelectorAll('#rebelSide .grid-wrapper .grid div')
      gridPosition = Math.floor(Math.random() * squareReb.length)
      if (gridPosition % width === width - 4 || gridPosition % width === width - 3 || gridPosition % width === width - 2 || gridPosition % width === width - 1 || gridPosition >= ((width * width) - width - 4) || gridPosition <= width || squareReb[gridPosition].classList.contains('ship') || squareReb[gridPosition + 1].classList.contains('ship') || squareReb[gridPosition + 2].classList.contains('ship') || squareReb[gridPosition + 3].classList.contains('ship') || squareReb[gridPosition + 4].classList.contains('ship') || squareReb[gridPosition + width + 1].classList.contains('ship') || squareReb[gridPosition - width + 1].classList.contains('ship')) {
        i--
      } else { // this is the code for the template of the xWing
        squareReb[gridPosition].classList.replace('square', 'ship')
        squareReb[gridPosition + 1].classList.replace('square', 'ship')
        squareReb[gridPosition + 2].classList.replace('square', 'ship')
        squareReb[gridPosition + 3].classList.replace('square', 'ship')
        squareReb[gridPosition + 4].classList.replace('square', 'ship')
        squareReb[gridPosition - width + 1].classList.replace('square', 'ship')
        squareReb[gridPosition + width + 1].classList.replace('square', 'ship')
        rebDeployed.push(1)
      }
    }
  }
  // deploy falcon
  function placeFalcon() {
    for (let i = 0; i < 1; i++) {
      const squareReb = document.querySelectorAll('#rebelSide .grid-wrapper .grid div')
      gridPosition = Math.floor(Math.random() * squareReb.length)
      if (gridPosition % width === width - 4 || gridPosition % width === width - 3 || gridPosition % width === width - 2 || gridPosition % width === width - 1 || gridPosition <= width - 1 || gridPosition > ((width * width) - (width * 3) - 5) || squareReb[gridPosition].classList.contains('ship') || squareReb[gridPosition - width + 2].classList.contains('ship') || squareReb[gridPosition - width + 1].classList.contains('ship') || squareReb[gridPosition + 1].classList.contains('ship') || squareReb[gridPosition + 2].classList.contains('ship') || squareReb[gridPosition + 3].classList.contains('ship') || squareReb[gridPosition + 4].classList.contains('ship') || squareReb[gridPosition + width].classList.contains('ship') || squareReb[gridPosition + width + 1].classList.contains('ship') || squareReb[gridPosition + width + 2].classList.contains('ship') || squareReb[gridPosition + width + 3].classList.contains('ship') || squareReb[gridPosition + (width * 2)].classList.contains('ship') || squareReb[gridPosition + (width * 2) + 1].classList.contains('ship') || squareReb[gridPosition + (width * 2) + 2].classList.contains('ship') || squareReb[gridPosition + (width * 2) + 3].classList.contains('ship') || squareReb[gridPosition + (width * 2) + 4].classList.contains('ship') || squareReb[gridPosition + (width * 3) + 1].classList.contains('ship') || squareReb[gridPosition + (width * 2) + 2].classList.contains('ship')) {
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
        rebDeployed.push(1)
      }
    }
  }
  // ? ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------



  // ? Functions for making shots based on whether player chose rebel or imperial ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  // Function for player choosing rebel------------------------------------------------


  // Function for player choosing Imperial side. --------------------------------------------------



  // ?------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------






  startGameButton.addEventListener('click', startGame)

  restartButton.addEventListener('click', startGame)

  chooseRebButton.addEventListener('click', chooseRebel)

  chooseImpButton.addEventListener('click', chooseImperial)

  restartButton.addEventListener('click', () => {
    location = location
  })

  rebBegin.addEventListener('click', rebelBattle)
  impBegin.addEventListener('click', imperialBattle)


  // imperialShot.addEventListener('click', computerShoot)

  tieSelect1.addEventListener('click', placeTieFighter1)
  tieSelect2.addEventListener('click', placeTieFighter2)
  tieSelect3.addEventListener('click', placeTieFighter3)
  tieSelect4.addEventListener('click', placeTieFighter4)
  cruiserSelect.addEventListener('click', placeCruiser1)
  impRandom.addEventListener('click', () => {
    placeTieFighter()
    placeCruiser()
    removeImpRandomly()
    if (impDeployed.length === 5) {
      impBegin.style.display = 'flex'
    }
  })

  xWingSelect1.addEventListener('click', placeXWing1)
  xWingSelect2.addEventListener('click', placeXWing2)
  xWingSelect3.addEventListener('click', placeXWing3)
  xWingSelect4.addEventListener('click', placeXWing4)
  falconSelect.addEventListener('click', placeFalcon1)
  rebRandom.addEventListener('click', () => {
    placeXWing()
    placeFalcon()
    removeRebRandomly()
    if (rebDeployed.length === 5) {
      rebBegin.style.display = 'flex'
    }
  })

  // begin.addEventListener('click', beginBattle)


  // gridSquare.forEach(item => {
  //   item.addEventListener('click', playerShot)
  // })





  // createGrids()
  // run music
  // start scroller
  // 1 or 2 player - dream
  // player choice imp or rebel - dream



}

window.addEventListener('DOMContentLoaded', init)