import './pages/index.css';
import {initialCards, createCard} from './components/card.js';
import {enableValidation} from './components/validate.js';
import {openPopup, closePopup, closePopupClick} from './components/utils.js';


const editProfilButton = document.querySelector('.profil__edit');
const popupProfil = document.querySelector('.popup__profil');
//const closeProfilButton = document.querySelector('#closeButtonProfil');
//const popupContainer = document.querySelector('.popup__container');
const nameProfilPopup = popupProfil.querySelector('#popup__name');
const abouMeProfilPoup = popupProfil.querySelector('#popup__aboutme');
const nameProfil = document.querySelector('.profil__fullname');
const abouMeProfil = document.querySelector('.profil__aboutme');
const infoProfil = popupProfil.querySelector('#EditForm');


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

  
 




