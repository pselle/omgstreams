var output = document.getElementById('output')
var button = document.getElementById('continue')
button.addEventListener('click', nextValue)

var foo = 'John went to the store and said "Hey there " "Another thing" to the clerk'

function* StateParser(str) {
  var acc = ""
  var amInQuote = false
  for (charIndex in str) {
    var character = str[charIndex]
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

var myGenerator = StateParser(foo)

function nextValue() {
  var p = document.createElement("p");
  //p.innerText = "Generator done: " + myGenerator.next().done
  p.innerText = myGenerator.next().value
  output.appendChild(p);

//  for (x in StateParser())
}
