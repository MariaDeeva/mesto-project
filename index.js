
let editProfilButton = document.querySelector('.profil__edit');
let popupProfil = document.querySelector('.popup__profil');
let closeProfilButton = document.querySelector('.popup__close-button_profil');
let popupContainer = document.querySelector('.popup__container');

let formPopup = document.querySelector('.popup__form');
let namePopup = document.querySelector('#popup__name');
let aboutMePopup = document.querySelector('#popup__aboutme');
let nameProfil = document.querySelector('.profil__fullname');
let aboutMeProfil = document.querySelector('.profil__aboutme');

let popupNewCard = document.querySelector('.popup__card');
let addCardButton = document.querySelector('.profil__add');
let closeCardButton = document.querySelector('.popup__close-button_card');

// Открытие-закрытие попапа редактирования профиля
editProfilButton.addEventListener('click', function () {
  popupProfil.classList.add('popup_opened');
  namePopup.value = nameProfil.textContent;
  aboutMePopup.value = aboutMeProfil.textContent;
})
closeProfilButton.addEventListener('click', function () {
  popupProfil.classList.remove('popup_opened');
});

//Добавление информации об имени в шапку сайте 
formPopup.addEventListener('submit', function addName(evt) {
  evt.preventDefault();
  nameProfil.textContent = namePopup.value;
  aboutMeProfil.textContent = aboutMePopup.value
  popupProfil.classList.remove('popup_opened');
});

//Открытие второго попапа для добавления карточки
function popupOpenCard() {
  popupNewCard.classList.add('popup_opened');
}
addCardButton.addEventListener('click', popupOpenCard);
closeCardButton.addEventListener('click', function () {
  popupNewCard.classList.remove('popup_opened');
});


// Работа с карточками

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];
const card = document.querySelector(".card__list");
const cardTemplate = document.querySelector("#card__template");
const createCard = function (cardAdd) {
  const card = cardTemplate.content
    .querySelector(".card__item")
    .cloneNode(true);

  const cardTitle = card.querySelector(".card__title");
  const cardImage = card.querySelector(".card__image");

  cardTitle.textContent = cardAdd.name;
  cardImage.src = cardAdd.link;
  cardImage.alt = cardAdd.name;

  /*cardImage.addEventListener("click", () => {
    openPopup(handlePopupImage);
    popupImage.src = cardAdd.link;
    popupImage.alt = cardAdd.name;
    popupName.textContent = cardAdd.name;
  });*/

  const likeCardButton = card.querySelector(".card__like-button");
  /*const deleteElement = element.querySelector(".element__delete");*/

  const handleLike = () => {
    likeElement.classList.toggle("card__like-button_active");
  };

  const handleDelete = () => {
    card.remove();
  };

  likeCardButton.addEventListener("click", handleLike);
 /*  deleteElement.addEventListener("click", handleDelete);*/

  return card;
};

const renderCardPre = (card) => {
  card.prepend(card);
};

const renderCardApp = (card) => {
  card.append(card)
};

initialCards.forEach((card) => {
  renderCardApp(createCard(card));
});