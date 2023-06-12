import './pages/index.css';
import {createCard, renderCardPrepend} from './components/card.js';
import {toggleButtonState, validConfig} from './components/validate.js';
import {openPopup, closePopup} from './components/modal.js';


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

  
 




