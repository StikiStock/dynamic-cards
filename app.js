document.getElementById("cards").onmousemove = e => {
  for(const card of document.getElementsByClassName("card")) {
    const rect = card.getBoundingClientRect(),
          x = e.clientX - rect.left,
          y = e.clientY - rect.top;

    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  };
}



let x = document.querySelectorAll(['.card']);

const Select = (id) => {
  x[id].classList.toggle('scale-95')
}

const clearQueue = () => {
  for (let i = 0; i < x.length; i++) {
    x[i].classList.remove('scale-95');
  }
}

const firstCard = {
  imgurl: "https://stiki.ir/util/blogpost/dalle-2022-09-10-180256-a-group-of-powertools-in-front-if-a-red-background.webp",
  title: "Great Powertools",
  desc: "They are soooo good. Buy these powertools now!"
}

const secondCard = {
  imgurl: "https://stiki.ir/util/blogpost/dalle-2022-09-13-095111-a-drawing-of-a-robot-hand-drawing-another-robots-hand.webp",
  title: "Two Nice Hands",
  desc: "These robotic hands are trying to touch each other!"
}

const thirdCard = {
  imgurl: "https://stiki.ir/util/blogpost/dalle-2022-09-13-100103-an-abstract-concept-of-freedom-in-style-of-oil-painting-467.webp",
  title: "Fly to liberty",
  desc: "Look! It's flying towards the sun! It indicates freedom."
}

const fourthCard = {
  imgurl: "https://stiki.ir/util/blogpost/dalle-2022-09-13-101350-black-human-figure-flying-around-in-concept-of-having-free-will.webp",
  title: "The Gentleman",
  desc: "Being mid-air must feel.. unnatural. at least for humans!"
}

const fifthCard = {
  imgurl: "https://stiki.ir/util/blogpost/dalle-2022-09-13-103326-a-beautiful-sight-of-mt-fuji-landscape-far-sight-sakura-trees-water.webp",
  title: "Mt Fuji in it's glory",
  desc: "The landscape couldn't get any better! Love the sakura tree."
}

const sixthCard = {
  imgurl: "https://stiki.ir/util/blogpost/dalle-2022-09-13-105851-golden-gate-bridge-drawn-in-matrix-rain-numbers.webp",
  title: "Golden Gate's Law",
  desc: "Is it made of gold? or numbers? We will never know."
}

const cardsOrder = [firstCard, secondCard, thirdCard, fourthCard, fifthCard, sixthCard]

for (let i = 0; i < x.length; i++) {
  if (i == 0) {
    
  }
  x[i].addEventListener('click', () => {
    clearQueue(), Select(i), setTimeout(() => {
      toggleDetails(cardsOrder[i].imgurl, cardsOrder[i].title, cardsOrder[i].desc)
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
})