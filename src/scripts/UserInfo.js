
class UserInfo {
  constructor ({nameTitle, jobTitle}) {
    this._nameTitle = document.querySelector(nameTitle);
    this._jobTitle = document.querySelector(jobTitle);
  }

  getUserInfo() {
    return {
      name: this._nameTitle.textContent,
      job: this._jobTitle.textContent
    }
  }

  setUserInfo(nameTitle, jobTitle) {
    this._nameTitle.textContent = nameTitle; //h1
    this._jobTitle.textContent = jobTitle; //p
  }
}

export default UserInfo;
