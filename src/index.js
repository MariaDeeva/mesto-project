import './pages/index.css';
import { createCard, renderCardPrepend, cardList} from './components/card.js';
import { toggleButtonState, validConfig } from './components/validate.js';
import { openPopup, closePopup } from './components/modal.js';
import { getCards, configApi, getUserInfo, editProfilApi, deleteCards } from './components/api.js';

const editProfilButton = document.querySelector('.profil__edit');
const popupProfil = document.querySelector('.popup__profil');
//const closeProfilButton = document.querySelector('#closeButtonProfil');
//const popupContainer = document.querySelector('.popup__container');
const nameProfilPopup = popupProfil.querySelector('#popup__name');
const abouMeProfilPoup = popupProfil.querySelector('#popup__aboutme');
const nameProfil = document.querySelector('.profil__fullname');
const abouMeProfil = document.querySelector('.profil__aboutme');
const infoProfil = popupProfil.querySelector('#EditForm');
const newCardPopup = document.querySelector('.popup__card-new');
const newCardFormPopup = document.querySelector('#NewCard');
const nameNewCard = newCardFormPopup.querySelector('#card__name');
const linkNewCard = newCardFormPopup.querySelector('#card__url');
const addCardButton = document.querySelector('.profil__add');
const avatarProfil = document.querySelector('.profil__avatar');
//Массив с сервера карточки
function renderProfil(user){
  nameProfil.textContent = user.name;
  abouMeProfil.textContent = user.about;
  avatarProfil.src = user.avatar;
}


Promise.all([getUserInfo(configApi),getCards(configApi)])
  .then(([elm, cards]) => {
    renderProfile(elm);
    const initialCards = Array.from(cards.reverse());
    initialCards.forEach(element => {
      elementContainer.prepend(addCard(element));
    })
  })
  .catch((err)=> console.log(`Ошибка: ${err}`));


addCardButton.addEventListener('click', () => {
  openPopup(newCardPopup);
  newCardFormPopup.reset();
  toggleButtonState(newCardFormPopup, validConfig);
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

//Открытие Кусто

editProfilButton.addEventListener('click', () => {
//  editProfilLook();
});

//Добавления имени в имя профиля 

infoProfil.addEventListener('submit', function(evt){
  editProfilButton.textContent = "Сохранение...";
  editProfilApi(configApi, {name: nameProfil.value, aboutme: abouMeProfil.value})
 .then((res)=>{
   renderProfil(res);
   closePopup(popupProfil);
 }).catch((err) => {
   console.log(`Ошибка: ${err}`);
 })
 .finally(() => {
   editProfilButton.textContent = "Сохранить";
 });
});







