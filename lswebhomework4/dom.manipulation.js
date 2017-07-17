//Change the background color of the entire document to red
document.body.style.backgroundColor = "red";

//Change the background color of just the "about me" portion to blue
document.querySelector("h1").style.backgroundColor = "blue";

//Change the font-style of the entire document to sans-serif
document.body.style.fontFamily = "sans-serif";

//Add your nickname 
document.getElementById("nickname").innerHTML = "Beaver";

//Add your favorites
document.getElementById("favorites").innerHTML = "South Park and Cheese Cake";

//Add your hometown
document.getElementById("hometown").innerHTML = "Vacaville, CA";


// EXTRA CREDIT


//Iterate through each li and change the class to "listitem".
var x = document.querySelectorAll("li");

for (i = 0; i < x.length; i++) {
	x[i].className = "listitem";
}

//Add a style tag that sets a rule for "listitem" to make the color red.
var y = document.querySelectorAll(".listitem");

for (i = 0; i < y.length; i++) {
	y[i].style.color = "red";
}

//Create a new `img` element and set its src attribute to a picture of you. 
var addPic = document.createElement("img");
addPic.src = "images/IMG_0561.jpg";
addPic.setAttribute("height", "683");
addPic.setAttribute("width", "1024");
addPic.setAttribute("alt", "Chris");

//Append that element to the page.
document.querySelector("body").appendChild(addPic);