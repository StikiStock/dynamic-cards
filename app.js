import data from "./cards.json" assert { type: "json" };
const cardsInfo = data["allCards"]
document.getElementById("cards").onmousemove = e => {
    for (const card of document.getElementsByClassName("card")) {
        const rect = card.getBoundingClientRect(),
            x = e.clientX - rect.left,
            y = e.clientY - rect.top;

        card.style.setProperty("--mouse-x", `${x}px`);
        card.style.setProperty("--mouse-y", `${y}px`);
    }
    ;
}

const x = document.querySelectorAll(['.card']);

const Select = (id) => {
    x[id].classList.add('translate-y-[2px]')
}

const clearQueue = () => {
    for (let i = 0; i < x.length; i++) {
        x[i].classList.remove('translate-y-[2px]');
    }
}

for (let i = 0; i < x.length; i++) {
    x[i].addEventListener('click', () => {
        clearQueue(), Select(i), setTimeout(() => {
            toggleDetails(cardsInfo[i].imgurl, cardsInfo[i].title, cardsInfo[i].desc)
        }, 200);
    })
}

const popUp = document.querySelector('#popUp')
const popUpCard = document.querySelector('#popUpCard')
const popImg = document.querySelector('#popImg')
const popTitle = document.querySelector('#popTitle')
const popDesc = document.querySelector('#popDesc')

const toggleDetails = (imgurl, title, desc) => {
    popImg.setAttribute('src', `${imgurl}`)
    popTitle.innerHTML = title
    popDesc.innerHTML = desc
    popUpCard.classList.toggle('hidden')
    popUp.classList.toggle('hidden')
}

document.querySelector('#popUp').addEventListener('click', () => {
    popUpCard.classList.toggle('hidden')
    popUp.classList.toggle('hidden')
    clearQueue();
})

