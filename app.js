
function place(){
document.getElementById('what').value = "";}



var add = function(){
	var listItems = document.getElementById("list").getElementsByTagName("li");
	var what = document.getElementById('what').value;
	var li = document.createElement('li');
	li.appendChild(document.createTextNode("Task number " + (listItems.length + 1) + " "+ what));
	list.appendChild(li);
	store();
	place();
	  	
} 

var remove = function(){
	var listItems = document.getElementById("list").getElementsByTagName("li");
	var last = listItems[listItems.length - 1];
	if (last) {
       last.parentNode.removeChild(last);
       store();
       if (listItems.length === 0){
       	alert();
       }
    }
   

var clearAll = function(){
	var myNode = document.getElementById("list");
	while (myNode.firstChild) {
    	myNode.removeChild(myNode.firstChild);
    	clearStore();
	}
	alert();
}

// add enter
var input = document.getElementById("what");

input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
      event.preventDefault();
      document.getElementById("add").click();    
  }
}); 


// localStorage

function store() {
    window.localStorage.myToDoList = list.innerHTML;
  }
function clearStore() {
 	localStorage.clear();
 }
 function getValues() {
        var storedValues = window.localStorage.myToDoList;
        if(!storedValues) {
          list.innerHTML = '';
        }
        else {
          list.innerHTML = storedValues;
          }
      }
  

 //modal box
var modal = document.getElementById("myModal");

//button that opens the modal
var btn = document.getElementById("myBtn");

//<span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

//open the modal
function alert() {
  modal.style.display = "block";
}

//clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

//clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
} 

getValues();
