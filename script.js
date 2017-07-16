console.log('Week 3 Project');

// #calcMain
let input = document.getElementById('calcMain')

let displayB = document.getElementById('displayB')
let clear = document.getElementById('operatorClearB')

input.addEventListener('click', function(e) {
  let output = e.target.innerHTML
  displayB.innerHTML += output

  let history = document.getElementById('operatorPastB')
  let buffer = ''
  let equal = document.getElementById('operatorEquB')

  equal.addEventListener('click', function (e) {
    buffer = eval(displayB.innerHTML)
    displayB.innerHTML = buffer
  })

  clear.addEventListener('click', function wipe() {
    displayB.innerHTML = ''
  })
})
