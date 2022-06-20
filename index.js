const submitHandler = (event) => {
  event.preventDefault();

  const form = document.querySelector("#park-form");
  const formData = new FormData(form);
  // Keep track of if any errors are found
  let hasErrors = false;

  // Validation code
  formData.forEach((value, key) => {
    let errorId = `#${key}-error`;
    if (value.trim() === "") {
      document.querySelector(errorId).style.display = "block";
      hasErrors = true;
    } else {
      document.querySelector(errorId).style.display = "none";
    }
  });

  // if there are no errors
  if (!hasErrors) {

    //* RENDER WAY OF ADDING ELEMENT
    //create an empty object
    const park = {
        name: formData.get('name'),
        location: formData.get("location"),
        description: formData.get("description"),
        established: formData.get('established'),
        area: formData.get('area'),
        rating: formData.get('rating'),
    };

    parks.push(park);

    render()

    /* OLD/DOM WAY OF ADDING NEW ELEMENT
    //* create a new element
    const parkSection = document.createElement("section");

    //* add the park class
    parkSection.classList.add("park-display");

    //* construct the HTML for this element
    const content = `
    <h2>${formData.get("name")}</h2>
    <div class="location-display">${formData.get("location")}</div>
    <div class="description-display">${formData.get("description")}</div>
    <button class="rate-button" title="Add to Favourites">&#9734;</button>
    <div class="stats">
      <div class="established-display stat">
        <h3>Established</h3>
        <div class="value">${formData.get("established")}</div>
      </div>
      <div class="area-display stat">
        <h3>Area</h3>
        <div class="value">${formData.get("area")}</div>
      </div>
      <div class="rating-display stat">
        <h3>Rating</h3>
        <div class="value">${formData.get("rating")}</div>
      </div>
    </div>
    `;

    //* set the innerHTML
    parkSection.innerHTML = content;

    //* append to the main element
    document.querySelector("main").appendChild(parkSection);
    */

  }
};

// function to handle favorite button clicks
const favoriteButtonClickHandler = (event) => {
//* RENDER-FRIENDLY VERSION OF BUTTON HANDLER
 if( event.target && event.target.nodeName == "BUTTON"){
    const park = event.target.parentNode;
    park.style.backgroundColor = "#c8e6c9";
 }

/* DOM-FRIENDLY VERSION OF BUTTON HANDLER
  const park = event.target.parentNode;
  park.style.backgroundColor = "#c8e6c9";
  */
};

// function for sorting by name
const sortByName = (parkA, parkB) => {
  const parkAName = parkA.name //* pre-render, this was parkA.querySelector("h2").innerText;
  const parkBName = parkB.name //* pre-render, this was parkB.querySelector("h2").innerText;
  if (parkAName < parkBName) {
    return -1;
  } else if (parkAName > parkBName) {
    return 1;
  } else {
    return 0;
  }
};

// function for sorting by rating
const sortByRating = (parkA, parkB) => {
  const parkARating = parseFloat(
    parkA.name //* was parkA.querySelector(".rating-display > .value").innerText
  );
  const parkBRating = parseFloat(
    parkB.name //* was parkB.querySelector(".rating-display > .value").innerText
  );
  return parkBRating - parkARating;
};

// function for handling the nameSorter click
const nameSorterClickHandler = (event) => {
  event.preventDefault();
  
    //* Block to be used with render()
    parks.sort(sortByName);
  
    render();

/** USE THIS BLOCK IF WORKING WITH DOM, NO RENDER
  // 1.  get the main element
  const main = document.querySelector("main");

  // 2. get the list of parks
  const parksList = main.querySelectorAll(".park-display");

  // 3. empty the main
  main.innerHTML = "";

  // 4. create an array
  const parksArray = Array.from(parksList);

  // 5. sort the array
  parksArray.sort(sortByName);

  // 6. Insert each park into the DOM
  parksArray.forEach((park) => {
    main.appendChild(park);
  });
  */
};

// function to handle the ratingSorter click
const ratingSorterClickHandler = (event) => {
  event.preventDefault();

  /** USE WITH DOM, NOT RENDER()
  // 1.  get the main element
  const main = document.querySelector("main");

  // 2. get the list of parks
  const parksList = main.querySelectorAll(".park-display");

  // 3. empty the main
  main.innerHTML = "";

  // 4. create an array
  const parksArray = Array.from(parksList);

  // 5. sort the array
  parksArray.sort(sortByRating);

  // 6. Insert each park into the DOM
  parksArray.forEach((park) => {
    main.appendChild(park);
  });
  */

  //* Use with render(), no DOM
  parks.sort(sortByRating);

  render();
};

// the point where all the code starts
const main = () => {
  // select the nameSorter link
  const nameSorter = document.querySelector("#name-sorter");

  // add an event listener
  nameSorter.addEventListener("click", nameSorterClickHandler);

  // select the ratingSorter link
  const ratingSorter = document.querySelector("#rating-sorter");

  // add an event listener
  ratingSorter.addEventListener("click", ratingSorterClickHandler);

  //* RENDER-FRIENDLY BUTTON HANDLER
  // Select all the buttons for all the parks
  const main = document.querySelector('main');

  // Add event handler to the main
  main.addEventListener('click', favoriteButtonClickHandler);


/* DOM-FRIENDLY BUTTON HANDLER 
  //* select all the buttons for all the parks
  const allBtns = document.querySelectorAll(".rate-button");

  //* iterate the list of buttons and add an event handler to each
  allBtns.forEach((btn) => {
    btn.addEventListener("click", favoriteButtonClickHandler);
  });
  */

  // get the form element
  const form = document.querySelector("#park-form");

  // attach the submit handler
  form.addEventListener("submit", submitHandler);

  //*adding render()
  render();
  //*render removes the dependency to use DOM, so now we can refactor our sort functions and some of our eventListeners affected by render
};

// Add event listener for DOMContentLoaded
window.addEventListener("DOMContentLoaded", main);


/* ---- 20.7 Rendering Practice ---- */
const renderOnePark = (park) => {
    // Get the individual props of the park
    const { name, location, description, established, area, rating} = park;

    // build HTML elements
    const content = `
        <section class="park-dsplay">
            <h2>${name}</h2>
            <div class="location-display">${location}</div>
            <div class="description-display">${description}</div>
            <button class="rate-button" title="Add to Favouries">&#9734;</button>
            <div class="stats">
                <div class="established-display stat">
                    <h3>Established</h3>
                    <div class="value">${established}</div>
                </div>
                <div class="area-display stat">
                    <h3>Area</h3>
                    <div class="value">${area}</div>
                </div>
                <div class="rating-display stat">
                    <h3>Rating</h3>
                    <div class="value">${rating}</div>
                </div>
            </div>
        </section>
    `;
    return content
};

// create render function
const render = () => {
    // Get the parent element
    const main = document.querySelector("main");

    // Empty the parent element
    main.innerHTML = "";

    // Get the parks HTML
    const content = parks.map(renderOnePark).join("");
    //* Remember! Passing in a callback as a parameter means the callback will use the argument passed in as its own parameter

    // Set the `innerHTML` of parent element
    main.innerHTML = content;
    //* Now that you've built render(), call it in the main()
}