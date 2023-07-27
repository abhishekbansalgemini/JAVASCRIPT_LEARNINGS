const inp = document.querySelector('#inp');
const btn = document.querySelector("#btn");
const list = document.querySelector("#list");

btn.addEventListener("click", ()=>{
    const todoText = inp.value;
    const li = document.createElement("li");
    li.innerText = todoText;

    // To delete todo task after clicking on it
    li.addEventListener("click", ()=>{
        li.remove();
    })
    list.appendChild(li);
    inp.value = ""; 
})