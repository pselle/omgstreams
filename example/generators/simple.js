var output = document.getElementById('output')
var button = document.getElementById('continue')
button.addEventListener('click', nextValue)

function* MyGenerator() {
  console.log('something')
  yield(this)
  console.log('something else')
  yield(this)
  console.log('something else entirely')
}

var ourGenerator = MyGenerator()

function nextValue() {
  var p = document.createElement("p")
  p.innerText = "Generator done: " + ourGenerator.next().done
  output.appendChild(p)
}
