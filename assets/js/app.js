const cardsData = [
    {
        image: "assets/image/image 1.png",
        name: "Gustavo Herwitz",
        about: "UI/UX Designer",
    },

    {
        image: "assets/image/image2.png",
        name: "Phillip Curtis",
        about: "Graphic Designer",
    },

    {
        image: "assets/image/image 3.png",
        name: "Talan Torff",
        about: "Web Developer",
    },

    {
        image: "assets/image/image 4.png",
        name: "Abram Vaccaro",
        about: "App Developer",
    },

];

function createCard(cardData) {
    const card = document.createElement('div');
    card.classList.add('col-12', 'col-md-6', 'col-xl-3', 'mb-24');
    let cards = `
    <div class="card">
      <img src="${cardData.image}" class="w-100 mb-4" alt="${cardData.name}">
      <div class="card-body">
        <h5 class="name mb-3 text-center">${cardData.name}</h5>
          <p class="about mb-3 text-center">${cardData.about}</p>
        </div>
    </div>
  `;
    card.innerHTML = cards;
    return card;
}

const cardContainer = document.getElementById('card-box');
cardsData.forEach(cardData => {
    const card = createCard(cardData);
    cardContainer.appendChild(card);
});