const closeButtons = document.querySelectorAll('.popup__close-button');
 
function openPopup(popupOpen) {
    popupOpen.classList.add('popup_opened');
    document.addEventListener('keydown', closePopupEscape);
     // popupClose.addEventListener('click',closePopupClick);
  }
  //Закрытие всех попав 
  
  function closePopup(popupClose) {
    popupClose.classList.remove('popup_opened');
    document.removeEventListener('keydown', closePopupEscape);
   // popupClose.removeEventListener('click',closePopupClick);
  }
  //Закрытие по Esc
  function closePopupEscape (event)  {
    if (event.key === 'Escape'){
     const popupCloseEscape = document.querySelector('.popup_opened');
      closePopup(popupCloseEscape);
    }
  }
  //Закрытие по оверлей
  function closePopupClick(event){
    if (event.target === event.currentTarget){
      closePopup(event.currentTarget);
    }
  }

  closeButtons.forEach((button) => {
    const popup = button.closest('.popup');
    button.addEventListener('click', () => closePopup(popup));
    popup.addEventListener('mousedown', closePopupClick);
  });
  export {openPopup, closePopup, closePopupEscape, closePopupClick,} 