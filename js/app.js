/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/

// Getting the <ul> element and assigning to variable
const myNav = document.getElementById("navbar__list");


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav

// Array of nav items, or <li> elements, to append to the <ul> element
const navList = [
    "Section 1", 
    "Section 2",
    "Section 3", 
    "Section 4" 
];

// Looping through navList and appending it to <ul> element
for (let i =0; i < navList.length; i++) {
    let li = document.createElement("li");
    // Appending <li> to parent element <ul>
    myNav.append(li);
    // adding a class attribute to the <li> elements
    li.setAttribute("class", "menu__link"); 
    li.innerHTML = navList[i];
    myNav.appendChild(li);
}


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


