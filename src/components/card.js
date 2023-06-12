import {openPopup, closePopup} from './modal.js';
import {configApi, addLike, deleteLike} from './api.js';

/*const initialCards = [
  {
    name: 'Подводный мир',
    link: 'https://images.unsplash.com/photo-1682687982107-14492010e05e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    likes: 1
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
];*/
const popupImage = document.querySelector('.popup__card-open');
const imagePopupCard = popupImage.querySelector('.popup__card-image');
const titlePopupCard = popupImage.querySelector('.popup__card-title');
const cardList = document.querySelector('.card__list');
const cardTemplate = document.querySelector("#card__template");

//создание и редактировние карточки 
  function createCard(cardAdd, userId) {
    const card = cardTemplate.content.querySelector('.card__item').cloneNode(true);
    const cardTitle = card.querySelector(".card__title");
    const cardImage = card.querySelector(".card__image");
    cardTitle.textContent = cardAdd.name;
    cardImage.src = cardAdd.link;
    cardImage.alt = cardAdd.name;
    const likeButton = card.querySelector('.card__like-button');
    const likeNumber = card.querySelector('.card__like-number');
    likeNumber.textContent = cardAdd.likes.length;

  if (cardAdd.likes.some(like =>like._id === userId)){
      likeButton.classList.add('card__like-button_active');
    }
    likeNumber.textContent = cardAdd.likes.length;
    likeButton.addEventListener('click', function (evt) {
      if(evt.target.classList.contains('card__like-button_active')){
        deleteLike(configApi, cardAdd)
        .then((cardUpd) =>{
          evt.target.classList.remove('card__like-button_active');
          likeNumber.textContent = cardUpd.likes.length;
        })
        .catch((err)=> console.log(`Ошибка: ${err}`));
      }
      else {
        addLike(configApi, cardAdd)
        .then((cardUpd)=>{
          evt.target.classList.add('card__like-button_active');
          likeNumber.textContent = cardUpd.likes.length;
        })
        .catch((err)=> console.log(`Ошибка: ${err}`));
      }
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
   //перебор карточек
  const renderCardPrepend = function (elm) {
    cardList.prepend(elm);
    return elm;
  }
  
 /* initialCards.forEach(function (elm) {
    renderCardPrepend(createCard(elm));
  });*/
 

export {createCard, renderCardPrepend, cardList}