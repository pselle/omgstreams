var output = document.getElementById('output')
var button = document.getElementById('continue')
button.addEventListener('click', nextValue)

var ourString = 'John went to the store and said "Hey there" to the clerk'

function* StringBreaker(str) {
  var acc = ""
  var amInQuote = false
  for (character of str) {
    if (character === " " && !amInQuote){
        yield acc
        acc = ""
        continue
    }

    acc = acc + character

    if(character == '"'){
        amInQuote = !amInQuote
    }
  }

  if(acc != ""){
    yield acc
  }
  return "\000"
}

function* MyGenerator() {
  console.log('something')
  yield(this)
  console.log('something else')
  yield(this)
  console.log('something else entirely')
}

var ourGenerator = MyGenerator()
//var ourGenerator = StringBreaker(ourString)

function nextValue() {
  //for (segment of StringBreaker(ourString)) {
  var p = document.createElement("p");
  // MyGenerator
  p.innerText = "Generator done: " + ourGenerator.next().done
  // StringBreaker
  // p.innerText = ourGenerator.next().value
  output.appendChild(p); 
  //}
}
