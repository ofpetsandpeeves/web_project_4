import {profileName, profileJob} from "../utils/constants.js";

class UserInfo {
  constructor ({name, job}) {
    this._name = name;
    this._job = job;
  }

  getUserInfo() {
    return {
      name: this._name,
      job: this._job
    }
  }

  setUserInfo() {
    profileName.textContent = this._name; //h1
    profileJob.textContent = this._job; //p
  }
}

export default UserInfo;
