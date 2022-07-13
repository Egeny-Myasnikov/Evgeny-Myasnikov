import phoneInputMask from "./phoneMask.module.js";
import popups from "./popupsData.module.js";
class Popup {
  constructor(selector = "body") {
    this.wrapper = document.querySelector(selector);
    this.popup;
    this.popupWrap;
    this.title;
    this.btnClose;
    this.content;
  }

  _createElem(selector, className) {
    const elem = document.createElement(selector);
    elem.classList.add(className);
    return elem;
  }

  _createPopup() {
    this.popup = this._createElem("div", "popup");
    this.popupWrap = this._createElem("div", "popup-wrap");
    this.title = this._createElem("h3", "title");
    this.btnClose = this._createElem("span", "ui__btn-close");
    this.content = this._createElem("div", "content");
    this.popupWrap.append(this.title, this.btnClose, this.content);
    this.popup.append(this.popupWrap);
    return this.popup;
  }
  _addPopup() {
    const popup = this._createPopup();
    this.wrapper.insertAdjacentElement("afterbegin", popup);
    return popup;
  }
  _close() {
    this.popup.addEventListener("click", (e) => {
      if (
        e.target.classList.contains("popup") ||
        e.target.classList.contains("ui__btn-close")
      ) {
        this.popup.classList.remove("active");
        document.body.removeAttribute("style");
        setTimeout(() => {
          this.popup.remove();
        }, 300);
      }
    });
  }

  open() {
    const pop = this._addPopup();
    this._addTitle();
    this._addBody();
    setTimeout(() => {
      pop.classList.add("active");
      document.body.style.overflow = "hidden";
    }, 100);

    this._close();
  }
}

class PopupFilling extends Popup {
  constructor(propety) {
    super();
    this.propety = propety;
  }
  _addTitle() {
    this.title.textContent = this.propety.title;
  }
  _addBody() {
    this.content.insertAdjacentHTML("afterbegin", this.propety.body);
    phoneInputMask();
  }
}
//instances
export const consultation = new PopupFilling({
  title: popups.consultation.title,
  body: popups.consultation.body,
});
export const lending = new PopupFilling({
  title: popups.lending.title,
  body: popups.lending.body,
});
export const catalog = new PopupFilling({
  title: popups.catalog.title,
  body: popups.catalog.body,
});
export const shop = new PopupFilling({
  title: popups.shop.title,
  body: popups.shop.body,
});

//---/instances

//openingPopup
const openingPopup = (insertSelector, instance) => {
  document
    .querySelector(insertSelector)
    .addEventListener("click", () => instance.open());
};
export default openingPopup;
