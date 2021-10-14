// 1. Get the header element
// 2. Get all the section elements
// 3. Get the section element with class="current"
// 4. Get the section that comes after the current section
// 5. Get the h2 node from the section before the 'current' section
// 6. Get the div that contains the section that has an h2 with a class of 'highlight'
// 7. Get all the sections that contain an H2 (using a single statement);

let selectedItem = document.querySelectorAll('li'); //querySelector just gives one li, the first one.
let arrayOfLi = Array.from(selectedItem);   //convert nodelist into an array, easier to work with
console.log(selectedItem);  //outputs NodeList(3) [li.first, li.selected, li.last]
console.log(arrayOfLi.length); 
for(let i=0; i<arrayOfLi.length; i++) {
    console.log(arrayOfLi[i]);
}

let newSelectedItem = document.querySelector(".last, .selected"); //only returns the first seen element in the doc, 
console.log("\n");                  //even if multiple selectors are specified. Order of selectors is not relevant
console.log(newSelectedItem);


//Number 1
selectedItem = document.querySelector("header");
console.log(selectedItem);
//Number 2
selectedItem = document.querySelectorAll("section");
console.log(selectedItem);
//Number 3
selectedItem = document.querySelector(".current");
console.log(selectedItem);
//Number 4
let brother = selectedItem.nextElementSibling;  //syntax is node.nextElementSibling where node is the variable
console.log(brother);  //for the element we stored. nextSibling a little whack. nextElementSibling better
//Number 5
let prevBrother = selectedItem.previousElementSibling.firstElementChild;    //use firstElementChild to get
console.log(prevBrother);   //the first element child. 
//Number 6
let gparent = selectedItem.parentElement;
console.log(gparent);
//Number 7
let allSectionsThatHaveanH2 = document.querySelectorAll("h2");
console.log(allSectionsThatHaveanH2);