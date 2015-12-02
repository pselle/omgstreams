var output = document.getElementById('output')
var button = document.getElementById('continue')
button.addEventListener('click', nextValue)

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

var ourString = 'John went to the store and said "Hey there" to the clerk'
var ourGenerator = StringBreaker(ourString)

function nextValue() {
  // for (segment of StringBreaker(ourString)) {
  var p = document.createElement("p")
  // p.innerText = segment
  p.innerText = ourGenerator.next().value
  output.appendChild(p)
  // }
}
