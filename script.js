const form = document.getElementById("my-form")
console.log(form);

const nodeItems =  document.querySelectorAll(".item");
const colItems = document.getElementsByClassName("item");
// console.log(document.getElementsByTagName("li"));
// console.log(([]));

nodeItems.forEach(item => console.log(item))

//dom manipulation
const ul = document.querySelector("#items")
const btn = document.querySelector(".btn")
btn.style.backgroundColor = "red"
btn.style.textTransform = "uppercase"
btn.style.color = "yellow"

btn.addEventListener("click", e => {
    e.preventDefault()
    ul.firstChild.textContent = "html"
    ul.children[1].innerText = "CSS"
    ul.lastElementChild.innerHTML = "<h1>javascript</h1>"
    console.log(e);
})


//final form
 const myForm = document.querySelector("#my-form")
 const nameInput = document.querySelector("#name")
 const emailInput = document.querySelector("#email")
 const msg = document.querySelector(".msg")
 const userList = document.querySelector("#users")

myForm.addEventListener("submit", onSubmit)

function onSubmit(e){
    e.preventDefault()
    // console.log(nameInput.value);
    // console.log(emailInput.value);

    if(nameInput.value === "" || emailInput.value === ""){
        msg.classList.add("error")
        msg.innerText = "please enter all the details"
        setTimeout(() => msg.remove(), 3000)
    }else{
        const liItem = document.createElement("li")
        liItem.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`))
        userList.appendChild(liItem)
        nameInput.value = ""
        emailInput.value = ""
    }
}
