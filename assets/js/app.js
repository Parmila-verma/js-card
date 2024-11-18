const cardsData = [
    {
        image: "assets/image/card-page.png",
        title: "Talan Torff",
        subtitle: "Web Developer",
    },
];

function createCard(cardData) {
    const card = document.createElement('div');
    card.classList.add('col-12', 'col-md-6', 'col-xl-3', 'mb-24');
    let cardContent = `
    <div class="card">
      <img src="${cardData.image}" class="w-100 mb-4" alt="${cardData.title}">
      <div class="card-body p-0">
        <h5 class="card-title poppins-font fw-semibold fs-md  mb-3 text-center">${cardData.title}</h5>
          <p class="card-subtitle fs-sm poppins-font fw-normal mb-3 text-center">${cardData.subtitle}</p>
        </div>
    </div>
  `;
    card.innerHTML = cardContent;
    return card;
}

const cardContainer = document.getElementById('card-box');
cardsData.forEach(cardData => {
    const card = createCard(cardData);
    cardContainer.appendChild(card);
});