function myFunction() {
    let myInput = document.getElementById("text").value;    //gets the value user put in
    var newLi = document.createElement("li");   //create a new list element
    let text = document.createTextNode(myInput);    //make a text node
    newLi.appendChild(text);                    //put text node into list element
    newLi.setAttribute("onclick", "mySecondFunction(event)");   //add onclick attribute for removal
    document.querySelector("ul").appendChild(newLi);    //add list element to the list
    document.getElementById("text").value = ""; //reset the text box
}

function mySecondFunction(event) {
    //if the item is clicked, remove it from the list
    var target = event.target;  //event is the click
    target.remove();    //remove the item

}