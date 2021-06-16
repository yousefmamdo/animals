


var name = prompt("what is your name?")
alert("welcome to Animals type website " + name)
var typeanimal = prompt("what is type animal you lave")

if (typeanimal == "birds") {
  document.write("<p>" + "great thing you love birds" +
    "I think the birds are beautiful and cute" + "</p>" + name)
}

else if (typeanimal == "fish") {
  document.write("<p>" + "I think seeing fish in the water is very beautiful " + "</p>" + name)
}
else if (typeanimal == "reptiles") {
  document.write("<p>" + "Nice to see what they do " + "</p>" + name)
}

else {
  alert("We're sorry we don't have the kind of animals you like" + name)
}