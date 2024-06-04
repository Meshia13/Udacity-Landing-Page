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

 // Selecting all sections
 const sections = document.querySelectorAll("section");


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
    li.classList.add("menu__link");
    // adding id atribute
    li.setAttribute("href", `#section${i+1}`);
    li.innerHTML = navList[i];
    myNav.appendChild(li);
    
}


// Add class 'active' to section when near top of viewport

// scroll
document.addEventListener("scroll", function(){
    
    function allSections (section){

        const topPage = section.getBoundingClientRect().top;

        // class is active if it is between 0 - 100px
        if (topPage > 0 && topPage < 100) {
            section.classList.add("your-active-class");
        }
        else {
            // if not, class is removed
            section.classList.remove("your-active-class");
        }
    }

    // looping through each section
    sections.forEach(allSections);
})


// Scroll to anchor ID using scrollTO event

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


