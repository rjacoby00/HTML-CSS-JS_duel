var animals = ["Squirrel", "Bird", "Cat", "Dog", "Snake", "Bear", "Wolf", "Lion", "Pig", "Tiger", "Deer", "Horse", "Monkey", "Fish", "Elephant", "Bat", "Fox", "Turtle", "Rabbit", "Rhinoceros", "Cow", "Leopard", "Dolphin", "Shark", "Otter", "Kangaroo", "Panda", "Giraffe", "Zebra", "Goat"]
var search = document.getElementById("search");

for (i = 0; i < animals.length; i ++) {
  document.getElementById("dropdown").innerHTML += "<li class='listitems' id='" + animals[i].toLowerCase() + "'>" + animals[i] + "</li>";
}

search.addEventListener("focus", function() {
  document.getElementById("dropdown").classList.remove("list_hidden");
  document.getElementById("dropdown").classList.add("list");
  document.getElementById("search").classList.remove("search");
  document.getElementById("search").classList.add("search_extended");
}, true);

search.addEventListener("blur", function() {
  document.getElementById("dropdown").classList.remove("list");
  document.getElementById("dropdown").classList.add("list_hidden");
  document.getElementById("search").classList.remove("search_extended");
  document.getElementById("search").classList.add("search");
}, true);

search.addEventListener("keyup", function() {
  for (j = 0; j < animals.length; j ++) {
    if (document.getElementById("search").value.toLowerCase() != animals[j].toLowerCase().substring(0, document.getElementById("search").value.length)) {
      document.getElementById(animals[j].toLowerCase()).classList.remove("listitems");
      document.getElementById(animals[j].toLowerCase()).classList.add("listitem_hidden");
    } else {
      document.getElementById(animals[j].toLowerCase()).classList.remove("listitem_hidden");
      document.getElementById(animals[j].toLowerCase()).classList.add("listitems");
    }
  }
  j = 0;
}, true);
