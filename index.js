
let editProfilButton = document.querySelector('.profil__edit');
let popupProfil = document.querySelector('.popup__profil');
let closeProfilButton = document.querySelector('.popup__close-button_profil');
let popupContainer = document.querySelector('.popup__container');

let formPopup = document.querySelector('.popup__form');
let namePopup = document.querySelector('#popup__name');
let aboutMePopup = document.querySelector('#popup__aboutme');
let nameProfil = document.querySelector('.profil__fullname');
let aboutMeProfil = document.querySelector('.profil__aboutme');

let popupNewCard = document.querySelector('.popup__card-new');
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
const popupOpenCards = document.querySelector('.popup__card-open');
const popupCard = popupOpenCards.querySelector('.popup__card');
const closePopupCard = popupOpenCards.querySelector('.popup__close-button_card-open');
const popupCardTitle = popupOpenCards.querySelector('.popup__card-title');
//Открытие и закрытие попапа с картинками 
function popupOpenImage() {
  popupOpenCards.classList.add('popup_opened');
}

function popupCloseImage() {
  popupOpenCards.classList.remove('popup_opened');
}
closePopupCard.addEventListener('click',popupCloseImage);


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
const createCard = (cardAdd) => {
  const card = cardTemplate.content
    .querySelector(".card__item")
    .cloneNode(true);

  const cardTitle = card.querySelector(".card__title");
  const cardImage = card.querySelector(".card__image");

  cardTitle.textContent = cardAdd.name;
  cardImage.src = cardAdd.link;
  cardImage.alt = cardAdd.name;

 cardImage.addEventListener("click", () => {
    popupOpenImage(popupOpenCards);
    popupCard.src = cardAdd.link;
    popupCard.alt = cardAdd.name;
    popupCardTitle.textContent = cardAdd.name;
  });

  const likeCardButton = card.querySelector(".card__like-button");
  const deliteCardButton = card.querySelector(".card__trash");

  const handleLike = () => {
    likeCardButton.classList.toggle("card__like-button_active");
  };

  const handleDelete = () => {
    card.remove();
  };

  likeCardButton.addEventListener("click", handleLike);
  deliteCardButton.addEventListener("click", handleDelete);

  return card;
};

const renderCardPre = (elem) => {
  card.prepend(elem);
};

const renderCardApp = (elem) => {
  card.append(elem)
};

initialCards.forEach((elem) => {
  renderCardApp(createCard(elem));
});

const handlePopupAdd = document.querySelector('#NewForm')
const popupAddSubmit = (event) => {
  event.preventDefault();

  const nameInput = handlePopupAdd.querySelector(".popup__input_type_name");
  const linkInput = handlePopupAdd.querySelector(".popup__input_type_link");

  const name = nameInput.value;
  const link = linkInput.value;

  const elementData = {
    name,
    link,
  };
  renderElement(createElement(elementData));
  nameInput.value = "";
  linkInput.value = "";
};

handlePopupAdd.addEventListener("submit", popupAddSubmit);