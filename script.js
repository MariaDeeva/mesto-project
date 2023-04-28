
let editProfilButton = document.querySelector('.profil__edit');
let popupProfil = document.querySelector('#popupProfil');
let closeProfilButton = document.querySelector('.popup__close-button_profil');
let popupContainer = document.querySelector('.popup__container');

let formPopup = document.querySelector('.popup__form');
let namePopup = document.querySelector('#popup__name');
let aboutMePopup = document.querySelector('#popup__aboutme');
let nameProfil = document.querySelector('.profil__fullname');
let aboutMeProfil = document.querySelector('.profil__aboutme');

let popupNewCard = document.querySelector('#popupCard');
let addCardButton = document.querySelector('.profil__add');
let closeCardButton = document.querySelector('.popup__close-button_card');

// Открытие-закрытие попапа редактирования профиля
editProfilButton.addEventListener('click', function(){
    popupProfil.classList.add('popup_opened');
    namePopup.value = nameProfil.textContent;
    aboutMePopup.value = aboutMeProfil.textContent;
})
closeProfilButton.addEventListener('click',function(){
    popupProfil.classList.remove('popup_opened');
});

//Добавление информации об имени в шапку сайте 
formPopup.addEventListener('submit', function addName(evt){
    evt.preventDefault();
    nameProfil.textContent = namePopup.value;
    aboutMeProfil.textContent = aboutMePopup.value
    popupProfil.classList.remove('popup_opened');
});

//Открытие второго попапа добавления карточки
addCardButton.addEventListener('click', function(){
    popupNewCard.classList.add('popup_opened');
});
closeCardButton.addEventListener('click', function(){
    popupNewCard.classList.remove('popup_opened');
});
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