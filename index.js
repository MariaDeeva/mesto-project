const popupProfil = document.querySelector('.popup__profil');
const editProfilButton = document.querySelector('.profil__edit');
const closeProfilButton = document.querySelector('.popup__close-button');
const popupContainer = document.querySelector('.popup__container');
const nameProfilPopup = popupProfil.querySelector('#popup__name');
const abouMeProfilPoup = popupProfil.querySelector('#popup__aboutme');
const nameProfil = document.querySelector('.profil__fullname');
const abouMeProfil = document.querySelector('.profil__aboutme');
const infoProfil = popupProfil.querySelector('#EditForm');

const newCardPopup = document.querySelector('.popup__card-new');
const newCardFormPopup = document.querySelector('#NewCard');
const addCardButton = document.querySelector('.profil__add');
const closeCardButton = newCardPopup.querySelector('.popup__close-button');


const cardList = document.querySelector('.card__list');
const cardTemplate = document.querySelector("#card__template");

const popupImage = document.querySelector('.popup__card-open')

const closeImageButton = popupImage.querySelector('.popup__close-button');
const imagePopupCard = popupImage.querySelector('.popup__card-image');
const titlePopupCard = popupImage.querySelector('.popup__card-title');

const nameNewCard = newCardFormPopup.querySelector('#card__name');
const linkNewCard = newCardFormPopup.querySelector('#card__url');

//Открытие попапа Профиль 

/*function closePopup(popup) {
  popup.classList.remove('popup_opened');
}*/
function openPopup(popupOpen) {
  popupOpen.classList.add('popup_opened');
}
//Закрытие всех попав 
function closePopup(popupClose) {
  popupClose.classList.remove('popup_opened');
}

/*closeProfilButton.addEventListener('click', () => {
  closePopup(popupProfil);
});*/


//Изменение профиля 
function editProfil() {
  openPopup(popupProfil);
  nameProfilPopup.value = nameProfil.textContent;
  abouMeProfilPoup.value = abouMeProfil.textContent;
}

editProfilButton.addEventListener('click', () => {
  editProfil();
});

//Добавления имени в имя профиля 

infoProfil.addEventListener('submit', function addInfoProfil(evt) {
  evt.preventDefault();
  nameProfil.textContent = nameProfilPopup.value;
  abouMeProfil.textContent = abouMeProfilPoup.value;
  closePopup(popupProfil);
});

//Карточки 
const initialCards = [
  {
    name: 'Подводный мир',
    link: 'https://images.unsplash.com/photo-1682687982107-14492010e05e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
  },
  {
    name: 'Санторини',
    link: 'https://images.unsplash.com/photo-1682700371094-d17b84054b6b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
  },
  {
    name: 'Исландия',
    link: 'https://plus.unsplash.com/premium_photo-1668799886418-2335be7716e9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1158&q=80'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Трафольгарская площадь',
    link: 'https://images.unsplash.com/photo-1682074905426-8b944309c1cc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];



//closePopup(popupImage);

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
  cardImage.addEventListener('click', function () {
    openPopup(popupImage);
    imagePopupCard.src = cardAdd.link;
    imagePopupCard.alt = cardAdd.name;
    titlePopupCard.textContent = cardAdd.name;
  });
  closeImageButton.addEventListener('click', () => {
    closePopup(popupImage);
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



addCardButton.addEventListener('click', function () {
  newCardPopup.classList.add('popup_opened');
});


closeCardButton.addEventListener('click', () => {
  closePopup(newCardPopup);
});



function newCardAdd(evt) {
  evt.preventDefault();
  const name = nameNewCard.value;
  const link = linkNewCard.value;
  const cardAdd = { name, link };
  renderCardPrepend(createCard(cardAdd));
  nameNewCard.value = '';
  linkNewCard.value = '';
  closePopup(newCardPopup);
};

newCardFormPopup.addEventListener('submit', newCardAdd);
// открытие попапа с картинкой




