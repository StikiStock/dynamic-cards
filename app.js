import data from "./cards.json" assert { type: "json" };
const cardsInfo = data["allCards"]
const cards = document.getElementsByClassName("card");
let ticking = false;
let mouseX = 0;
let mouseY = 0;

document.getElementById("cards").onmousemove = e => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    if (!ticking) {
        window.requestAnimationFrame(() => {
            const updates = [];
            // Read phase
            for (const card of cards) {
                const rect = card.getBoundingClientRect();
                updates.push({
                    card,
                    x: mouseX - rect.left,
                    y: mouseY - rect.top
                });
            }

            // Write phase
            for (const update of updates) {
                update.card.style.setProperty("--mouse-x", `${update.x}px`);
                update.card.style.setProperty("--mouse-y", `${update.y}px`);
            }
            ticking = false;
        });
        ticking = true;
    }
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

