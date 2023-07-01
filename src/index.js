import './pages/index.css';
import { createCard, renderCardPrepend, cardList} from './components/card.js';
import { toggleButtonState, validConfig } from './components/validate.js';
import { openPopup, closePopup } from './components/modal.js';
import { getCards, getUserInfo, editProfilApi,addCards,changeAvatar } from './components/api.js';
import {editProfilButton, popupProfil, nameProfilPopup,abouMeProfilPopup, nameProfil, 
        abouMeProfil, infoProfil, newCardPopup, newCardFormPopup, nameNewCard, linkNewCard, addCardButton,
        avatarProfil, buttonSaveProfil, buttonSaveCard, avatarPopup, avatarProfilForm,buttonSaveAvatar,
        buttonOpenAvatar, avatarSrcPopup
} from './components/constant.js';
let userId;

//Массив с сервера карточки
Promise.all([getUserInfo(), getCards()])
  .then(([users, cards]) => {
    nameProfil.textContent = users.name;
    abouMeProfil.textContent = users.about;
    avatarProfil.src = users.avatar;
    userId =users._id;
    const initialCards = Array.from(cards.reverse());
    initialCards.forEach(element => {
    cardList.prepend(createCard(element, userId));
    });
  })
  .catch((err) => console.log(`Ошибка: ${err}`));


addCardButton.addEventListener('click', () => {
  openPopup(newCardPopup);
  
  toggleButtonState(newCardFormPopup, validConfig);
});

function newCardAddSubmit(evt){
  buttonSaveCard.textContent = "Сохранение...";
  evt.preventDefault();
  addCards(nameNewCard, linkNewCard)
  .then((cardAdd)=>{
    renderCardPrepend(createCard(cardAdd));
    console.log(cardAdd);
    closePopup(newCardPopup);
    newCardFormPopup.reset();
    location.reload();
  })
  .catch((err) => console.log(`Ошибка: ${err}`))
  .finally(() => {
   buttonSaveCard.textContent = "Сохранить";
   
  })
}

newCardFormPopup.addEventListener('submit', newCardAddSubmit);

//Профиль
editProfilButton.addEventListener('click', () => {
  openPopup(popupProfil);
  editProfil();
});

//Добавления имени в имя профиля 
function editProfil() {
  nameProfilPopup.value = nameProfil.textContent;
  abouMeProfilPopup.value = abouMeProfil.textContent;
}


function editProfilSubmit(evt) {
  evt.preventDefault();
  buttonSaveProfil.textContent = "Сохранение...";
  editProfilApi(nameProfilPopup, abouMeProfilPopup)
    .then((user) => {
      nameProfil.textContent = user.name;
      abouMeProfil.textContent = user.about;
      closePopup(popupProfil);
      buttonSaveProfil.disabled = true;
    })
    .catch((err) => console.log(`Ошибка: ${err}`))
    .finally(() => {
      buttonSaveProfil.textContent = "Сохранить";
    })
}
infoProfil.addEventListener('submit', editProfilSubmit);

// изменение аватара
buttonOpenAvatar.addEventListener('click', ()=>{
  openPopup(avatarPopup);
})
function editAvatar(evt){
  buttonSaveAvatar.textContent = 'Сохраняем...';
  evt.preventDefault();
  changeAvatar(avatarSrcPopup)
  .then((profil)=>{
    avatarProfil.src = profil.avatar;
    closePopup(avatarPopup);
    avatarProfilForm.reset();
  }).catch((err) => console.log(`Ошибка: ${err}`))
  .finally(()=>{
    buttonSaveAvatar.textContent = 'Сохранить';
  })
}

avatarProfilForm.addEventListener("submit", editAvatar);




