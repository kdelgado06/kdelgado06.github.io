function init(){
// add your javascript code below
// Create a variable to store button object content
    const myButton = document.querySelector("#entrybutton");

// Create a function for the addEventListener (myFunction) {
    function myFunction() {

// Create a variable to store what the user types into the textbox
        const userInput = document.querySelector("input").value;

// Display in the alert box as your new message. Watch video.
        alert("Katie Delgado: " + userInput);

// change the value of the h2 below the button to have the text contents of
// the textbox
        document.querySelector("h2").textContent = userInput;
    }

myButton.addEventListener("click", myFunction);
}
window.addEventListener('load', init);