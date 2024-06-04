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

 
// Array of nav items, or <li> elements, to append to the <ul> element
const navList = [
    "Section 1", 
    "Section 2",
    "Section 3", 
    "Section 4" 
];


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/


function getAnchorId() {
    const getId = document.querySelectorAll("[id]")

    let arr = [];
    for (let i =1; i < getId.length; i++){
        const myIds = getId[i].id;
        // return myIds;
      
      
    }
   
    
    
}



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
function buildNav () {
    // Looping through navList and appending it to <ul> element
    for (let i =0; i < navList.length; i++) {
        // creating <li> element
        let li = document.createElement("li");
        // Appending <li> to parent element <ul>
        myNav.append(li);
        // adding a class attribute to the <li> elements
        li.classList.add("menu__link");
        // creating <a> element and links to anchor with section id
        let a = document.createElement("a");
        a.setAttribute("href", `#section${i+1}`);
        // a.setAttribute("href", `#${getAnchorId()}`);
        a.innerHTML = navList[i];
        li.appendChild(a);
        myNav.appendChild(li);
        
    }
}

// Add class 'active' to section when near top of viewport
function makeActive() {
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
}

// Scroll to anchor ID using scrollTO event

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 
buildNav ();

// Scroll to section on link click

// Set sections as active
makeActive();


