export default class Api {
  constructor({baseLink, headers}) {
    this._baseLink = baseLink;
    this._headers = headers;
  }

  // load cards from server
  getInitialCards() {
    return fetch(`${this._baseLink}/cards`,
    {
      headers: this._headers
    })
    .then(res => res.ok ? res.json() : Promise.reject(`Error: ${res.status}`))
    .catch(err => console.log(err))
  }

  // get user info
  pullUserData() {
    return fetch(`${this._baseLink}/users/me`,
    {
      headers: this._headers
    })
    .then(res => res.ok ? res.json() : Promise.reject(`Error: ${res.status}`))
    .catch(err => console.log(err))
  }

  // set user info
  // PATCH https://around.nomoreparties.co/v1/groupId/users/me
  patchUserData(data) {
    return fetch(`${this._baseLink}/users/me`,
    {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify ({
        name: data.name,
        about: data.job
      })
    })
    .then(res => res.ok ? res.json() : Promise.reject(`Error: ${res.status}`))
    .catch(err => console.log(err))
  }

  // add new card
  // POST https://around.nomoreparties.co/v1/groupId/cards
  postNewCard({name, link}) {
    return fetch(`${this._baseLink}/cards`,
    {
      headers: this._headers,
      method: "POST",
      body: JSON.stringify({
        name,
        link
      })
    })
    .then(res => res.ok ? res.json() : Promise.reject(`Error: ${res.status}`))
    .catch(err => console.log(err))
  }

    //DELETE CARD
    //DELETE https://around.nomoreparties.co/v1/groupId/cards/cardId
    deleteCard(cardId) {
      return fetch(`${this._baseLink}/cards/${cardId}`,
      {
        headers: this._headers,
        method: "DELETE",
      })
      .then(res => res.ok ? res.json() : Promise.reject(`Error: ${res.status}`))
      .catch(err => console.log(err))
    }

    //like a card
    // PUT https://around.nomoreparties.co/v1/groupId/cards/likes/cardId

    //remove like
    // DELETE https://around.nomoreparties.co/v1/groupId/cards/likes/cardId

    // update profile image
    // PATCH https://around.nomoreparties.co/v1/groupId/users/me/avatar

}
