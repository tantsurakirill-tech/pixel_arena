const title = document.querySelector("h1");
console.log(title)

// title.remove()

console.log(document.body)
console.log(document.head)
console.log(document.title)

document.title = "Открытый игровой турнир PI"

console.log(document.querySelector(".card"))
console.log(document.querySelector("#registration h2"))
console.log(document.querySelector("#registration h4"))


const cards = document.querySelectorAll(".card")

for (const card in cards) {
    console.log(card.toString())
}

cards.forEach((card)=> {
    console.log(card)
})

const refs = document.querySelectorAll("nav a")

refs.forEach((ref)=> {
    console.log(ref.textContent)
})

title.textContent = "Pixel Arena 2026"

let date = document.querySelector(".datetime")
date.textContent = "1 ноября в 12:00 по МСК"
console.log(date)

about.innerHTML += "<p>Информация о турнире может измениться. Следите за изменениями.<p/>"

const registrationMessage = document.querySelector("#registration-message")
registrationMessage.classList.add("message-success")

registrationMessage.classList.remove("hidden")

function handleTitleClick (event) {
    console.log(event)
    console.log(event.target)
    event.target.classList.toggle("active")
}

const titleAbout = document.querySelector("#about h2")

title.addEventListener("click", handleTitleClick)
titleAbout.addEventListener("mouseover", handleTitleClick)

// Альтернатива 46-50
// title.addEventListener("click", () => {
//     console.log("Нажали на заголовок");
// });

const forma = document.querySelector("#registration form")

function handleFormSubmit () {
    registrationMessage.textContent = "Регистрация успешна"
}

forma.addEventListener("submit", handleFormSubmit)