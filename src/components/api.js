export const configApi = {
    baseURL: 'https://nomoreparties.co/v1/plus-cohort-25',
    headers: {
        authorization: '14392650-b976-4fa0-a527-612dfe2e913d',
        'content-Type': 'application/json'
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
export const getUserInfo = (configApi) => {
    return fetch(`${configApi.baseUrl}/users/me`, {
        method: 'GET',
        headers: configApi.headers
    })
    .then(res => checkRes(res))
}
//2. Изменение
export function editProfilApi(body) {
    return fetch(`${configApi.baseURL}/users/me`, {
        method: 'PATCH',
        headers: configApi.headers, 
        body: JSON.stringify(body)
    })
        .then(onResponse)
}

//Работа с карточками
//1. Карточка
export function getCards(configApi) {
  return  fetch(`${configApi.baseURL}/cards`, {
        //method: 'GET',
        headers: configApi.headers
    })
        .then(onResponse)
}

// 2. Добавление карточки
export function addCards(body) {
    return fetch(`${configApi.baseURL}/cards`, {
        method: 'POST',
        headers: configApi.headers, 
        body: JSON.stringify(body),
    })
        .then(onResponse)
}

//3.Удаление карточки 
export function deleteCards(cardId) {
    return fetch(`${configApi.baseURL}/cards/${cardId}`, {
        method: 'DELETE',
        headers: configApi.headers, 
     
    })
        .then(onResponse)
}

//Лайки 
export function addLike(cardId) {
    return fetch(`${configApi.baseUrl}/cards/likes/${cardId}`, {
        method: "PUT",
        headers: configApi.headers,
      })
        .then(onResponse)
    }
export function deleteLike(cardId) {
    return fetch(`${configApi.baseURL}/cards/likes/${cardId}`, {
        method: 'DELETE',
        headers: configApi.headers, 
     
    })
        .then(onResponse)
}

