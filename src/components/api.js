export const configApi = {
    baseURL: 'https://nomoreparties.co/v1/plus-cohort-25',
    headers: {
        authorization: '14392650-b976-4fa0-a527-612dfe2e913d',
        'Content-Type': 'application/json'
    }
}

function onResponse(res) {
    if (res.ok) {
        return res.json();
    }
    else {
        return Promise.reject("Ошибка");
    }
}

//Работа с профилем
//1. Профиль 
export function getUserInfo() {
    return fetch(`${configApi.baseURL}/users/me`, {
        method: 'GET',
        headers: configApi.headers
    })
        .then(onResponse)
}

//2. Изменение
export function editProfilApi(nameProfilPopup, abouMeProfilPopup) {
    return fetch(`${configApi.baseURL}/users/me`, {
        method: 'PATCH',
        headers: configApi.headers,
        body: JSON.stringify({
            name: nameProfilPopup.value,
            about: abouMeProfilPopup.value,
        })
    })
        .then(onResponse)
}

//Работа с карточками
//1. Карточка
export function getCards() {
    return fetch(`${configApi.baseURL}/cards`, {
        method: 'GET',
        headers: configApi.headers
    })
        .then(onResponse)
}

// 2. Добавление карточки
export function addCards(nameNewCard, linkNewCard) {
    return fetch(`${configApi.baseURL}/cards`, {
        method: 'POST',
        headers: configApi.headers,
        body: JSON.stringify({
            name: nameNewCard.value,
            link: linkNewCard.value,
        }),
    })
        .then(onResponse)
}

//3.Удаление карточки 
export function deleteCardsApi(cardId) {
    return fetch(`${configApi.baseURL}/cards/${cardId}`, {
        method: 'DELETE',
        headers: configApi.headers,

    })
        .then(onResponse)
}

//Лайки 
//1. Добавление лайка
export function addLikeApi(cardId) {
    return fetch(`${configApi.baseURL}/cards/likes/${cardId}`, {
        method: "PUT",
        headers: configApi.headers,
    })
    .then(onResponse)
}
    
export function deleteLikeApi(cardId) {
    return fetch(`${configApi.baseURL}/cards/likes/${cardId}`, {
        method: 'DELETE',
        headers: configApi.headers,
    })
        .then(onResponse)
}

//Аватар
export function changeAvatar(avatarSrcPopup) {
    return fetch(`${configApi.baseURL}/users/me/avatar`, {
      method: "PATCH",
      headers: configApi.headers,
      body: JSON.stringify({
        avatar: avatarSrcPopup.value
      }),
    }).then(onResponse)
  }