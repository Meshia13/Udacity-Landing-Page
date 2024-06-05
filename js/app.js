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
 * Define Global Variables
 * 
*/

// Getting the <ul> element and assigning to variable
const myNav = document.getElementById("navbar__list");

// Selecting all sections
const sections = document.querySelectorAll("section");


/**
 * End Global Variables
 * 
*/


/**
 * Begin Main Functions
 * 
*/

// build the nav

// This function builds the navigation bar dynamically
function buildNav() {
    for(const section of sections ) {
        // creating anchor elements for the 'a href' in order to scroll to that section
        const anchor = document.createElement("a");
        // creating <li> for the ul list 
        const li = document.createElement("li");
        // adding class name to elements
        li.classList.add("menu__link");
        // using the 'id" attributes from section tags to anchor them to the 'href'
        anchor.href = `#${section.id}`;
        anchor.textContent = section.dataset.nav;

        // clicking an item from the navigation menu will scroll the section into view
        anchor.addEventListener("click", function(clickEvent) {
            section.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"})
        });

        // appending acnchor to li & li to myNav(parent element)
        li.appendChild(anchor);
        myNav.appendChild(li);
    }
}


// Add class 'active' to section when near top of viewport
function makeActive() {
    window.addEventListener("scroll", function(){
    
        function allSections (section){
    
            // using window's innerheight to determine when section is in viewport
            let height = window.innerHeight * 0.10;
            const sectionPage = section.getBoundingClientRect();

             // apply active state on current section
            if(sectionPage.top <= height && sectionPage.bottom >= height) {
                section.classList.add("your-active-class");
            }
            else {
                // removing active state from section
                section.classList.remove("your-active-class")
            }
        }
    
        // looping through each section
        sections.forEach(allSections);
    })
}


// Build menu 
buildNav ();

// Set sections as active
makeActive();




