console.log('Week 3 Project');

// #calcMain
let input = document.getElementById('calcMain')

let displayB = document.getElementById('displayB')


input.addEventListener('click', function(e) {
  let output = e.target.innerHTML
  displayB.innerHTML += output

  let buffer = ' '
  let equal = document.getElementById('operatorEquB')
  equal.addEventListener('click', function (e) {
    hLog += displayB.innerHTML + '\n' + ' is '
    buffer = eval(displayB.innerHTML)
    displayB.innerHTML = buffer
  })

  let sqrt = document.getElementById('operatorSQRtB')
  sqrt.addEventListener('click', function (e) {
    hLog += 'Square Root of ' + displayB.innerHTML + ' is '
    buffer = Math.sqrt(displayB.innerHTML)
    displayB.innerHTML = buffer
  })

  let clear = document.getElementById('operatorClearB')
  clear.addEventListener('click', function wipe() {
    hLog += displayB.innerHTML + '\n'
    displayB.innerHTML = ' '
  })
  // let hLog = 'test'
  //
  // let history = document.getElementById('operatorPastB'){
  //   hLog = ''
  //   history.innerHTML = hLog
  // }
})
