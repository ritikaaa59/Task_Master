

let inp=document.querySelector("#add_task");
let todo=document.querySelector(".items");

inp.addEventListener("keyup",function(text){
    if(text.key=="Enter")
    {
     addItem(inp.value);
     inp.value="";
    }
});

const addItem = (textValue)=>{
    let newItem=document.createElement("li");
    let newItem2=document.createElement("button");
    newItem.innerText=textValue;
    newItem2.innerText="Remove";

    //newItem2.classList.add("removeBtn");
    newItem.append(newItem2)
    todo.appendChild(newItem);

    newItem2.addEventListener("click", function() {
        newItem.remove();
    });

    newItem.addEventListener("click", function()
    {
        newItem.style.backgroundColor="#90EE90";
    });
}

