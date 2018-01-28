var addTask = document.getElementById("addTask"); // access to add button
var close = document.getElementsByClassName("close"); //access to X button
var i;

var check = document.querySelector("ul");
check.addEventListener("click", function(ev){ // the function targets "li" elements for making task "checked/unchecked"
    if(ev.target.tagName === "LI"){
        ev.target.classList.toggle("checked");
    }
},false);

addTask.onclick = function addTask() { //function which creates "li" elements
    var newLi = document.createElement("li");
    var inputValue = document.getElementById("myInput").value;// take value from input
    var taskText = document.createTextNode(inputValue); //add value to text node
    newLi.appendChild(taskText); // and add text node to "li" element
    if (inputValue === ""){ // check input condition
        document.getElementById("alert").innerHTML = "Your task does not have a name?"; //set alert for empty input
    }else {
        document.getElementById("myUl").appendChild(newLi); //add "li" element with text node to ul element
        document.getElementById("alert").innerHTML = ""; //clear alert div
    }
    document.getElementById("myInput").value = ""; //then clear input
    var span = document.createElement("SPAN");//next step is making a close button
    var txt = document.createTextNode("\u00D7");// "x" in close button
    span.className = "close"; //add style to close button
    span.appendChild(txt);//add text node to span element
    newLi.appendChild(span); //add button to li element which contains task

    for (i = 0; i < close.length; i++){
        close[i].onclick = function () { //function to kill "li" by click on "X" button
            var li = this.parentElement;
            li.style.display = "none";
        }
    }
};
