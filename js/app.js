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

// Adding classes to the section tags
function sectionClass() {
    
    const sect = document.querySelectorAll("section");

    for (const classes  of sect){
        classes.classList.add("section-active")
    }
    
}

// getting "section" id values in order to use them as anchor links
function createLinkIds() {
    const sectId = document.querySelectorAll("section"); 
    let sectList =[];
    sectId.forEach(element => {
        sectList.push(element.id)
    })
    return sectList;
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
        a.setAttribute("href", `#${createLinkIds()[i]}`);
        a.setAttribute("class", "nav__link");
        if (i === 0){
            a.classList.add("nav__link", "active")
        }
        a.innerHTML = navList[i];
        li.appendChild(a);
        myNav.appendChild(li);
     
    }
}

// Add class 'active' to section when near top of viewport
function makeActive() {
    window.addEventListener("scroll", function(){
    
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


function scrollToAnchor() {

    const menuLinkEl = document.querySelectorAll(".nav__link");
    const sectionEl = document.querySelectorAll(".section-active");

    let current = "section1";
    

    window.addEventListener("scroll", () => {
        sectionEl.forEach(sectEl => {
            if (window.scrollY >= sectEl.offsetTop) {
                current = sectEl.id;
            }
        })

        menuLinkEl.forEach(menuLink => {
            if (menuLinkEl.href.includes(current)) {
                menuLink.classList.add("your-active-class");
            }
        })
    })
    // sectionClass(); buildNav ()
}

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 
buildNav ();

// Scroll to section on link click
scrollToAnchor()

// Set sections as active
makeActive();




