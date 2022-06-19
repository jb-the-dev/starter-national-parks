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
// main.removeChild(park); 
// ^^if you comment this out, the child will reappear


/* ---- 20.5 Event listeners ---- */ 

// add event listener to button
const firstBtn = document.querySelector("button");
firstBtn.addEventListener("click", (event) => {
    console.log("You clicked the button", event);
    console.log("event.target tells you what element was used", event.target)
  });

  // if you wanna add event listener to all buttons:
  const allButtons = document.querySelectorAll("button");
  allButtons.forEach((btn)=>{
    btn.addEventListener("click", (event) => {
        console.log("event listener for each button, using a loop", event.target)
    })
  })

  // pulling the parent element using a listener
  allButtons.forEach((btn) => {
    btn.addEventListener("click", (event) => {
      console.log("parent element", event.target.parentNode);

        //you can also adjust parent element within this listener loop
        const park = event.target.parentNode;
        park.style.backgroundColor = "#c8e6c9";
    });
  });

// USING A SORTER | COMPLETE EXAMPLE 20.5
  // Select the `nameSorter` link
const nameSorter = document.querySelector("#name-sorter");

// Add an event listener
nameSorter.addEventListener("click", (event) => {
    event.preventDefault(); // stops page from simply reloading after click 
    console.log("You clicked the name sorter");

    // 1.  Get the main element
    const main = document.querySelector("main");

    // 2. Get the list of parks
    const parksList = main.querySelectorAll(".park-display");

     // 3. Empty the main element. If you stop here, parks will disappear from DOM, but are stored in parksList
    main.innerHTML = "";

    // 4. Create an array
    const parksArray = Array.from(parksList);

    // 5. Sort the array. DOM is still empty at this point. We need to append list back into <main> element.
    parksArray.sort((parkA, parkB) => {
        const parkAName = parkA.querySelector("h2").innerText;
        const parkBName = parkB.querySelector("h2").innerText;
        if (parkAName < parkBName) {
        return -1;
        } else if (parkAName > parkBName) {
        return 1;
        } else {
        return 0;
        }
    });

    // ^^ This step could be created as a helper function and inserted, to help create more readable code.

    // 6. Insert each park into the DOM. Now it sorts!
    parksArray.forEach((park) => {
        main.appendChild(park);
    });
});

// Using DOMContentLoaded event handler
console.log("Before!");

window.addEventListener("DOMContentLoaded", (event) => {
  console.log("Loaded!");
});

console.log("After!");
