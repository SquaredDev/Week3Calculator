console.log('Week 3 Project');

// #calcMain
let input = document.getElementById('calcMain')

let displayB = document.getElementById('displayB')

input.addEventListener('click', function(e) {
  let output = e.target.innerHTML
  displayB.innerHTML += output
})
