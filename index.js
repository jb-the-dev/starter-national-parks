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