// Открытие-закрытие попапа 
const editButton = document.querySelector('.profil__edit');
const popup = document.querySelector('#popup');
const closeButton = document.querySelector('.popup__close-button');

editButton.addEventListener('click',function(){
    popup.classList.add('popup_opened');
});

closeButton.addEventListener('click',function(){
    popup.classList.remove('popup_opened');
});