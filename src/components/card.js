import {openPopup, closePopup} from './modal.js';
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
const popupImage = document.querySelector('.popup__card-open');
const imagePopupCard = popupImage.querySelector('.popup__card-image');
const titlePopupCard = popupImage.querySelector('.popup__card-title');


const cardList = document.querySelector('.card__list');
const cardTemplate = document.querySelector("#card__template");


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
    /*closeImageButton.addEventListener('click', () => {
      closePopup(popupImage);
    });*/
    return card;
  }
   
  const renderCardPrepend = function (elm) {
    cardList.prepend(elm);
    return elm;
  }
  
  initialCards.forEach(function (elm) {
    renderCardPrepend(createCard(elm));
  });
 

export {createCard, renderCardPrepend}