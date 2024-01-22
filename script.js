const grosris = document.getElementsByClassName("groseris")[0];
const pencil = document.getElementById("pencil");
const allitems = document.getElementById("allItems");
const userInput = document.getElementById("userInput");

pencil.addEventListener("click", function(){
    allitems.innerHTML = "";
});

userInput.addEventListener("keydown", function(event){
    if(event.key == "Enter")
    addItem();
});

function addItem() {
    var h2 = document.createElement("h2");
    h2.innerHTML =  "- "  + userInput.value;
    h2.addEventListener("click" , function(){
        h2.style.textDecoration = "line-through";
    })

    allitems.insertAdjacentElement("beforeend", h2);

    userInput.value = ""
}