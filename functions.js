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
  console.log("btn : addThe Text");
  const txt = document.getElementById("txt");
  function addItem(txt);
  txt.value = "";
  createDiv(toDoList.length);
}

//This function creates a new object and pushes it into the array TtoDoList
function addItem(txt){
  const note = {
    text : txt.value,
    done : false,
    print : false, 
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

//This function print the text into a different div
function print(index){
  if(!(toDoList[index].print)){
    document.getElementById("div"+index).style.display = 'block';
    toDoList[index].print = true;
  }
}

function hide(index){
  if(toDoList[index].print){
    document.getElementById("div"+index).style.display = 'none'; 
    toDoList[index].print = false;
  }
}

//Function that creates a div for each text
function createDiv(index){
  var my_string = toDoList[index].text;
  const div = document.createElement("div");
  div.id = "div"+index;
  div.style.display = 'none';
  var textnode = document.createTextNode(my_string); 
  var checkbox = createCheckBox(index);
  div.classList.add("note");
  div.appendChild(checkbox);
  div.appendChild(textnode);
  document.getElementById("content").appendChild(div);
}

//Function that create a checkbox for each div
function createCheckBox(index) {
  var checkbox = document.createElement('input');
  checkbox.type = "checkbox";
  checkbox.id = "cb"+index;
  return checkbox;
}