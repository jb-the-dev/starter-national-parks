console.log(document)

const heading = document.querySelector("h1");
console.log("heading", heading)

// find element with class `value`
const value = document.querySelector(".value");
console.log("value", value)

// find a <button> element
const button = document.querySelector("button");
console.log("button", button)

// Find an element with class `area`
const area = document.querySelector(".area-display");
console.log("area", area)

// find a <div> that's a descendant of the class `stat`
const divOfStat = document.querySelector(".stat > div");
console.log("divOfStat", divOfStat)

// find an element with class `hello`
const hello = document.querySelector(".hello");
console.log("hello", hello)

// find all buttons
const allBtns = document.querySelectorAll("button");
console.log("allBtns", allBtns)

// Get a list of all `<h3>` elements
const heading3List = document.querySelectorAll("h3");

// Iterate over the list and print each one
for (let element of heading3List.values()) {
    console.log(element);
}

for (let i = 0; i < heading3List.length; i++) {
    const element = heading3List[i];
    console.log("heading v2", element);
}

  // get list of all divs containing rating. Log using .values() method
const divRatingList = document.querySelectorAll(".rating-display")
console.log(divRatingList)
for (let elem of divRatingList.values()){
    console.log(elem)
}

// get list of all divs containing areas. Log using simple for loop.
const divAreaList = document.querySelectorAll('.area-display')
console.log(divAreaList);
for (let i = 0; i < divAreaList.length; i++){
    console.log(divAreaList[i])
}

/* -------- 20.4 Updating the DOM --------- */

// Changing the text using innerText and innerHTML
const descriptions = document.querySelectorAll(".description-display");

for (let desc of descriptions.values()){
    let content = desc.innerText;

    if (content.length > 250){
        content = content.slice(0, 250);
        // content += "...";    ---> string change to be used with desc.innerText
        content += '<a href="#">...</a>' // string change to be used with desc.innerHTML
    }

    console.log("CONTENT: ", content);

    desc.innerHTML = content;
}

// changing the style of elements
const ratings = document.querySelectorAll(".rating-display .value");

for (let rating of ratings) {
    let ratingValue = parseFloat(rating.innerText);
    if (ratingValue > 4.7) {
        // CHANGE USING `STYLE` PROPERTY
        // rating.style.fontWeight = "bold"
        // rating.style.color = "#3ba17c";

        // CHANGE USING `CLASSLIST` PROPERTY + ADDING CSS CLASS
        rating.classList.add("high-rating");
        rating.classList.remove("value");

    }
}

// creating DOM elements, number of parks example
const parks = document.querySelectorAll(".park-display"); // get all the parks
const numberParks = parks.length; // count total parks
const newElement = document.createElement("div"); // create new element
newElement.innerText = `${numberParks} exciting parks to visit`; // add text to new element
newElement.classList.add("header-statement"); // add new class

const header = document.querySelector("header"); // select header, assign to variable
header.appendChild(newElement); // add new element to header

// removing DOM elements
// Get the parent element of all parks
const main = document.querySelector("main");

// Select a single park
const park = main.querySelector(".park-display");

// Remove that park
main.removeChild(park);