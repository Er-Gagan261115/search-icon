const usercardtemplate = document.querySelector("[data-user-template]")
const usercardcontainer = document.querySelector("[user-card-container]")
const datasearch = document.querySelector("[data-search]")

let users = []

datasearch.addEventListener("input", e =>{
const value = e.target.value.toLowerCase()
user.forEach(user => {
    const isvisible = user.name.toLowerCase().includes(value) || user.email.toLowerCase().includes(value)
    user.element.classList.toggle("hide",!isvisible)
})
})

fetch("https://jsonplaceholder.typicode.com/users").then(res => res.json()).then(data => {
    user = data.map(user => {
const card = usercardtemplate.content.cloneNode(true).children[0]
const header = card.querySelector("[data-header]")
const body =  card.querySelector("[data-body]")
header.textContent = user.name;
body.textContent = user.email;
usercardcontainer.append(card)
return { name: user.name, email: user.email, element:card }
})
} )