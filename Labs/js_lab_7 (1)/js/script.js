function init(){
//add your javascrip between these two lines of code
 const entryButton = document.getElementById("entrybutton");
 const entryInput = document.getElementById("entryinput");
 const textOutput = document.getElementById("textoutput");

 entryButton.addEventListener("click", function() {
    let userInput = entryInput.value;

    alert("Debarlaben: " + userInput);
    textOutput.textContent = userInput;
 });







window.addEventListener('load', init);
}
