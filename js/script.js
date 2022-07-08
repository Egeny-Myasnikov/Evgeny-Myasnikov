function hideShowSocialIcons(selector) {
  const elem = document.querySelector(selector);
  elem.addEventListener("click", () => {
    elem.classList.toggle("active");
  });
}
hideShowSocialIcons(".header-social");

class Popup {
  constructor(title, content) {
    this.title = title;
    this.content = content;
    this.wrapper = document.querySelector(".wrapper");
    this.popupTitle = document.querySelector(".popup .title");
    this.popupContent = document.querySelector(".popup .content");
    this.popup = document.querySelector(".popup");
    this.btnClose = document.querySelector(".ui__btn-close");
  }
  log() {
    console.log(this.popupTitle);
    console.log(this.title);
    console.log(this.popupContent);
    console.log(this.content);
  }
  _createElem(selector, className) {
    const elem = document.createElement(selector);
    className && elem.classList.add(className);
    return elem;
  }
  _createPopup() {
    const popup = this._createElem("div", "popup");
    const popupWrap = this._createElem("div", "popup-wrap");
    const title = this._createElem("h3", "title");
    z;
    const btnClose = this._createElem("span", "ui__btn-close");
    const content = this._createElem("div", "content");
    title.textContent = this.title;
    content.innerHTML = this.content;
    popupWrap.append(title, btnClose, content);
    popup.append(popupWrap);
    this.wrapper.insertAdjacentElement("afterbegin", popup);
  }
  _mountBody() {
    // this.popupTitle.textContent = this.title;
    // this.popupContent.innerHTML = this.content;
    this.wrapper.insertAdjacentHTML("afterbegin", this._createPopup());
  }
  _unMountBody() {
    this.popupTitle.textContent = "";
    this.popupContent.innerHTML = "";
  }
  close() {
    this.popup.addEventListener("click", (e) => {
      if (
        e.target.classList.contains("popup") ||
        e.target.classList.contains("ui__btn-close")
      ) {
        this.popup.classList.remove("active");
        document.body.removeAttribute("style");
        this._unMountBody();
        console.log(e.target);
      }
    });
  }
  open() {
    this._createPopup();
    this.popup.classList.add("active");
    document.body.style.overflow = "hidden";
    this.close();
  }
}

const popupCollBack = new Popup(
  "Обратный звонок",
  `
<div class="content-collback">
<h4>Позвоните мне по телефону</h4>
<a href="tel:+79501081773" title="Позвонить" class="phone link">
    <svg class="phone-svg">
        <use xlink:href="assets/svg/icons.svg#phone"></use>
    </svg>
    +7 (950) 108-17-73
</a>
<h4>Или оставьте свой и я перезвоню Вам в течении 5 - 15 минут</h4>

<form class="ui__form-collback">
   <input type="tel" class="input-tel" placeholder="+7(950) 108-17-73">
   <label for="agreement"><input type="checkbox" name="agreement" id="agreement" checked>Я согласен на обработку персональных данных</label> 
   <button class="btn-primary" type="submit">Отправить</button>
</form>
</div>`
);
document
  .querySelector(".js-get-consultation")
  .addEventListener("click", () => popupCollBack.open());
