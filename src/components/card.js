import { openPopup } from './modal.js';
import {addLikeApi, deleteLikeApi, deleteCardsApi } from './api.js';
import {popupImage,imagePopupCard, titlePopupCard, cardList, cardTemplate} from './constant.js';

//создание и редактировние карточки 
function createCard(cardAdd, userId) {
  const card = cardTemplate.content.querySelector('.card__item').cloneNode(true);
  const cardTitle = card.querySelector(".card__title");
  const cardImage = card.querySelector(".card__image");
  cardTitle.textContent = cardAdd.name;
  cardImage.src = cardAdd.link;
  cardImage.alt = cardAdd.name;
  //лайки
  const likeButton = card.querySelector('.card__like-button');
  const likeNumber = card.querySelector('.card__like-number');
  likeNumber.textContent = cardAdd.likes.length;
  if(cardAdd.likes.some(like => like._id == userId)) {
    likeButton.classList.add('card__like-button_active');
  }
  likeButton.addEventListener('click', (evt)=>{
    if(evt.target.classList.contains('card__like-button_active')) {
      deleteLike(cardAdd._id,likeNumber, likeButton);
    }
    else{
      addLike(cardAdd._id, likeNumber,likeButton);
    }
});

  //удаление 
  const deleteButton = card.querySelector('.card__trash');
  if (cardAdd.owner._id !== userId) {
    deleteButton.remove();
  }
  deleteButton.addEventListener('click', (evt) => {
    deleteCard(cardAdd._id, card)
  });

  //Открытие картинки 
  cardImage.addEventListener('click', function () {
    openPopup(popupImage);
    imagePopupCard.src = cardAdd.link;
    imagePopupCard.alt = cardAdd.name;
    titlePopupCard.textContent = cardAdd.name;
  });
  return card;
}

//перебор карточек
const renderCardPrepend = function (elm) {
  cardList.prepend(elm);
  return elm;
}
//удаление карточки ассинхрон
function deleteCard(cardId, cardElm) {
  deleteCardsApi(cardId)
    .then(() => {
      cardElm.remove();
    })
    .catch((err) => console.log(`Ошибка: ${err}`));
}

//добавление удаление карточки ассинхрон
function addLike(cardId, number, likeElm) {
  addLikeApi(cardId)
    .then((elm) => {
      number.textContent = elm.likes.length;
      likeElm.classList.add("card__like-button_active");
    })
    .catch((err) => console.log(`Ошибка: ${err}`));
}

function deleteLike(cardId, number, likeElm) {
  deleteLikeApi(cardId)
    .then((elm) => {
      number.textContent = elm.likes.length;
      likeElm.classList.remove("card__like-button_active");
    })
    .catch((err) => console.log(`Ошибка: ${err}`));
}

export { createCard, renderCardPrepend, cardList}