


var name = prompt("what is your name?")
alert("welcome to Animals type website " + name)
var age = prompt("what is your age?")

var typeanimal = prompt("what is type animal you love")

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
function favoretanimal() {
  var favanimal = prompt("what is your type favoret animal?")
  var y

  while (favanimal != "birds" && favanimal != "reptiles" && favanimal != "fish") {
    var favanimal = prompt("plase try agin what is your type favoret animal?")
    y++
  }
  if (favanimal == "birds") {

    var num = prompt("How many times do you want to repeat an image?")
    for (var i = 1; i <= num; i++) {
      document.write(i + "<div>" + "<h3>" + "birds" + "</h3>" +
        '<img src="https://image.freepik.com/free-vector/birds-set-twelve-isolated-images-colourful-birds-with-different-species-blank_1284-29372.jpg">' +
        "</div>")
    }
  } else if (favanimal == "fish") {
    var num = prompt("How many times do you want to repeat an image?")
    for (var i = 0; i < num; i++) {

      document.write(i + "<div>" + "<h3>" + "fish" + "</h3>" +
        "<img src='https://image.shutterstock.com/image-vector/sea-fish-set-vector-illustration-600w-564883570.jpg'>" +
        "</div>")
    }
  } else if (favanimal == "reptiles") {
    var num = prompt("How many times do you want to repeat an image?")
    for (var i = 1; i <= num; i++) {
      document.write(i + "<div>" + "<h3>" + "reptiles" + "</h3>" +
        '<img src="https://taby3a.com/wp-content/uploads/2020/02/%D8%B2%D9%88%D8%A7%D8%AD%D9%81.jpg">' +
        "</div>")
    }
  }
}

var catNum = prompt('How many fish do you rate our website ?')

function rating (num){
  
for (var i = 0; i < num ; i++) {

    document.write( "<div>" + "<h3>" + "fish" + "</h3>" +
         "<img src='https://image.shutterstock.com/image-vector/sea-fish-set-vector-illustration-600w-564883570.jpg'>" + "</div>")
}

}
rating(catNum);