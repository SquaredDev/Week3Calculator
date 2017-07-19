// #calcMain
let input = document.getElementById('calcMain')
let displayB = document.getElementById('displayB')

input.addEventListener('click', function(e) {
  let output = e.target.innerHTML
  displayB.innerHTML += output

  let buffer = ''
  let equal = document.getElementById('operatorEquB')
  equal.addEventListener('click', function (e) {
    buffer = eval(displayB.innerHTML)
    displayB.innerHTML = buffer
  })
})

let clear = document.getElementById('operatorClearB')
clear.addEventListener('click', function(e) {
  displayB.innerHTML = ''
})
