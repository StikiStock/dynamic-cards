import data from "./cards.json" with { type: "json" };
const cardsInfo = data["allCards"]
const cards = document.getElementsByClassName("card");
document.getElementById("cards").onmousemove = e => {
    for (const card of cards) {
        const rect = card.getBoundingClientRect(),
            x = e.clientX - rect.left,
            y = e.clientY - rect.top;

        card.style.setProperty("--mouse-x", `${x}px`);
        card.style.setProperty("--mouse-y", `${y}px`);
    }
    ;
}

const x = document.querySelectorAll(['.card']);
let activeIndex = -1;

const Select = (id) => {
    x[id].classList.add('translate-y-[2px]')
    activeIndex = id;
}

const clearQueue = () => {
    if (activeIndex !== -1 && x[activeIndex]) {
        x[activeIndex].classList.remove('translate-y-[2px]');
        activeIndex = -1;
    }
}

document.getElementById('cards').addEventListener('click', (e) => {
    const card = e.target.closest('.card');
    if (card) {
        const i = Array.from(x).indexOf(card);
        if (i > -1) {
            clearQueue(), Select(i), setTimeout(() => {
                toggleDetails(cardsInfo[i].imgurl, cardsInfo[i].title, cardsInfo[i].desc)
            }, 200);
        }
    }
})

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

