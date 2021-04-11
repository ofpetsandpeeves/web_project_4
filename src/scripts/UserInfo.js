import {profileName, profileJob} from "../utils/constants.js";

class UserInfo {
  constructor ({name, link}) {
    this._name = name;
    this._link = link;
  }

  getUserInfo() {
    return {
      name: this._name,
      link: this._link
    }
  }

  setUserInfo() {
    profileName.textContent = this._name; //h1
    profileJob.textContent = this._link; //p
  }
}

export default UserInfo;
