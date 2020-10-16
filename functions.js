var toDoList = [];

/*----------------------------------------------------------*/
//List of buttons and corerlated functions
const btnAddTxt = document.getElementById("btnAddTxt");
const btnShowTxt = document.getElementById("btnShowTxt");
const btnDoneTxt = document.getElementById("btnDoneTxt");
const btnHideTxt = document.getElementById("btnHideTxt");

btnAddTxt.onclick = addTheText; 
btnShowTxt.onclick = showTheText;
btnDoneTxt.onclick = doneTheText;
btnHideTxt.onclick = hideTheText;

/*----------------------------------------------------------*/

function addTheText() {
  const txt = document.getElementById("txt");
  function addItem(txt);
  txt.value = "";
  createDiv(toDoList.length);
}


//This function creates a new object and pushes it into the array TtoDoList
function addItem(txt){
  //Creates a new object with the text, the flags and the date
  const note = {
    text : txt.value,
    done : false,
    print : false, 
    add : new Date()
  };
  //Adds the object at the end of the array
  toDoList.push(note);
}


//This function iterate the print function for each object into the toDoList array.
function showTheText() {
  toDoList.forEach(print);
}

function hideTheText() {
  toDoList.forEach(hide);
}

//Function that create a checkbox for each div
function createCheckBox(index) {
  var checkbox = document.createElement('input');
  checkbox.type = "checkbox";
  checkbox.id = "cb"+index;
  return checkbox;
}

//This function print the text into a different div
function print(group, index){
  document.getElementById("div"+index).style.display = 'block';
  toDoList[index].print = true;
}

function hide(group, index){
  document.getElementById("div"+index).style.display = 'none'; 
  toDoList[index].print = false;
}

function createDiv(group, index){
  var my_string = toDoList[index].text;
  const div = document.createElement("div");
  div.id = "div"+index;
  var textnode = document.createTextNode(my_string); 
  var checkbox = createCheckBox(index);
  div.classList.add("note");
  div.appendChild(checkbox);
  div.appendChild(textnode);
  document.getElementById("content").appendChild(div);
}