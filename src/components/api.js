export const configApi = {
    baseURL: 'https://nomoreparties.co/v1/plus-cohort-25',
    headers: {
        authorization: '14392650-b976-4fa0-a527-612dfe2e913d',
        'Content-Type': 'application/json'
    }
};

export class Api {
    #onResponse(res) {
        if (res.ok) {
            return res.json();
        }
        else {
            return Promise.reject("Ошибка");
        }
    }
    
    constructor({ baseURL, headers }) {
        this._baseURL = baseURL;
        this._headers = headers;
    }
    
    //Работа с профилем
    //1. Профиль 
    getUserInfo() {
        return fetch(`${this._baseURL}/users/me`, {
            method: 'GET',
            headers: this._headers
        }).then(this.#onResponse);
    } 
    
    //2. Изменение
    editProfilApi(nameProfilPopup, abouMeProfilPopup) {
        return fetch(`${this._baseURL}/users/me`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                name: nameProfilPopup.value,
                about: abouMeProfilPopup.value,
            })
        })
            .then(this.#onResponse)
    }
    //Работа с карточками
    //1. Карточка
    getCards() {
        return fetch(`${this._baseURL}/cards`, {
            method: 'GET',
            headers: this._headers
        })
            .then(this.#onResponse)
    }

    // 2. Добавление карточки
    addCards(nameNewCard, linkNewCard) {
        return fetch(`${this._baseURL}/cards`, {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify({
                name: nameNewCard.value,
                link: linkNewCard.value,
            }),
        })
            .then(this.#onResponse)
    }
    //3.Удаление карточки 
    deleteCardsApi(cardId) {
        return fetch(`${this._baseURL}/cards/${cardId}`, {
            method: 'DELETE',
            headers: this._headers,

        })
            .then(this.#onResponse)
    }

    //Лайки 
    //1. Добавление лайка
    addLikeApi(cardId) {
        return fetch(`${this._baseURL}/cards/likes/${cardId}`, {
            method: "PUT",
            headers: this._headers,
        })
            .then(this.#onResponse)
    }

    deleteLikeApi(cardId) {
        return fetch(`${this._baseURL}/cards/likes/${cardId}`, {
            method: 'DELETE',
            headers: this._headers,
        })
            .then(this.#onResponse)
    }

    //Аватар
    changeAvatar(avatarSrcPopup) {
        return fetch(`${this._baseURL}/users/me/avatar`, {
            method: "PATCH",
            headers: this._headers,
            body: JSON.stringify({
                avatar: avatarSrcPopup.value
            }),
        }).then(this.#onResponse)
    }
}



