const popupProfil = document.querySelector('.popup__profil');
const editProfilButton = document.querySelector('.profil__edit');
const closeProfilButton = document.querySelector('.popup__close-button');
const popupContainer = document.querySelector('.popup__container');
let nameProfilPopup = popupProfil.querySelector('#popup__name');
let abouMeProfilPoup = popupProfil.querySelector('#popup__aboutme');
let nameProfil = document.querySelector('.profil__fullname');
let abouMeProfil = document.querySelector('.profil__aboutme');

//Открытие попапа Профиль 
function openProfil() {
  popupProfil.classList.add('popup_opened');
  nameProfilPopup.value = nameProfil.textContent;
  abouMeProfilPoup.value = abouMeProfil.textContent;
}
editProfilButton.addEventListener('click', openProfil);

//Закрытие попап Профиля
function closeProfil() {
  popupProfil.classList.remove('popup_opened');
}
closeProfilButton.addEventListener('click', closeProfil)

//Добавления имени в имя профиля 
const infoProfil = popupProfil.querySelector('#EditForm');

infoProfil.addEventListener('submit', function addInfoProfil(evt) {
  evt.preventDefault();
  nameProfil.textContent = nameProfilPopup.value;
  abouMeProfilPoup.textContent = abouMeProfil.value;
  closeProfil();
});

//Карточки 
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

const cardList = document.querySelector('.card__list');
const cardTemplate = document.querySelector("#card__template");

const popupImage = document.querySelector('.popup__card-open')

const closeImageButton = popupImage.querySelector('.popup__close-button');
const imagePopupCard = popupImage.querySelector('.popup__card-image');
const titlePopupCard = popupImage.querySelector('.popup__card-title');
function closeImage() {
  popupImage.classList.remove('popup_opened');
}

function createCard(cardAdd) {
  const card = cardTemplate.content.querySelector('.card__item').cloneNode(true);
  const cardTitle = card.querySelector(".card__title");
  const cardImage = card.querySelector(".card__image");

  cardTitle.textContent = cardAdd.name;
  cardImage.src = cardAdd.link;
  cardImage.alt = cardAdd.name;

  // Лайки 
  const likeButton = card.querySelector('.card__like-button');

  likeButton.addEventListener('click', function () {
    likeButton.classList.toggle('card__like-button_active');
  });

  //удаление 
  const deleteButton = card.querySelector('.card__trash');
  deleteButton.addEventListener('click', function () {
    card.remove();
  });

  //Открытие картинки 
  cardImage.addEventListener('click', function (){
    popupImage.classList.add('popup_opened');
    imagePopupCard.src = cardAdd.link;
    imagePopupCard.alt = cardAdd.name;
    titlePopupCard.textContent = cardAdd.name;
  });
  closeImageButton.addEventListener('click',()=>{
    popupImage.classList.remove('popup_opened');
  });
  return card;
}



const renderCardPrepend = function (elm) {
  cardList.prepend(elm);
  return elm;
}

initialCards.forEach(function (elm) {
  renderCardPrepend(createCard(elm));
});

//Попап добавления карточек

const newCardPopup = document.querySelector('.popup__card-new');
const newCardFormPopup = document.querySelector('#NewCard');
const addCardButton = document.querySelector('.profil__add');
const closeCardButton = newCardPopup.querySelector('.popup__close-button');

addCardButton.addEventListener('click', function () {
  newCardPopup.classList.add('popup_opened');
});

function closeCard() {
  newCardPopup.classList.remove('popup_opened');
}
closeCardButton.addEventListener('click', closeCard);

function newCardAdd(evt) {
  evt.preventDefault();
  const nameNewCard = newCardFormPopup.querySelector('#card__name');
  const linkNewCard = newCardFormPopup.querySelector('#card__url');

  const name = nameNewCard.value;
  const link = linkNewCard.value;
  const cardAdd = { name, link };
  renderCardPrepend(createCard(cardAdd));
  nameNewCard.value = '';
  linkNewCard.value = '';
  closeCard();
};

newCardFormPopup.addEventListener('submit', newCardAdd);
// открытие попапа с картинкой




