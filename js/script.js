import phoneInputMask from "./phoneMask.module.js";

function hideShowSocialIcons(selector) {
  const elem = document.querySelector(selector);
  elem.addEventListener("click", () => {
    elem.classList.toggle("active");
  });
}
hideShowSocialIcons(".header-social");

const popups = {
  consultation: {
    title: "Консультация",
    body: `
    <h4>Позвоните мне по телефону</h4>
<a href="tel:+79501081773" title="Позвонить" class="phone link">
    <svg class="phone-svg">
        <use xlink:href="assets/svg/icons.svg#phone"></use>
    </svg>
    +7 (950) 108-17-73
</a>
<h4>Или оставьте свой и я перезвоню Вам в течении 5 - 15 минут</h4>
<form class="ui__form-collback">
   <input type="tel" data-input-phone class="input-tel" placeholder="+7(950) 108-17-73">
   <label for="agreement"><input type="checkbox" name="agreement" id="agreement" checked>Я согласен на обработку персональных данных</label> 
   <button class="btn-primary" type="submit">Отправить</button>
</form>`,
  },
  lending: {
    title: "Лендиг",
    body: `
    <h4>Лендинг (Lending Page)</h4>
    <p>Целевя промостраница для продвижения товара или услуги</p>
    <button class="btn-primary" type="submit">Заказать</button>`,
  },
  catalog: {
    title: "Каталог",
    body: `
    <h4>Сайт Каталог</h4>
    <p>Сайт с возможностью демонстрации каталога продукции</p>
    <button class="btn-primary" type="submit">Заказать</button>`,
  },
  shop: {
    title: "Интернет магазин",
    body: `
    <h4>Интернет магазин</h4>
    <p>Современный интернет-магазин с возможностью оплаты товаров онлайн</p>
    <button class="btn-primary" type="submit">Заказать</button>`,
  },
};

class Popup {
  constructor(selector) {
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
  constructor(wrapper, propety) {
    super(wrapper);
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

const consultation = new PopupFilling(".wrapper", {
  title: popups.consultation.title,
  body: popups.consultation.body,
});
const lending = new PopupFilling(".wrapper", {
  title: popups.lending.title,
  body: popups.lending.body,
});
const catalog = new PopupFilling(".wrapper", {
  title: popups.catalog.title,
  body: popups.catalog.body,
});
const shop = new PopupFilling(".wrapper", {
  title: popups.shop.title,
  body: popups.shop.body,
});

document
  .querySelector(".js-get-consultation")
  .addEventListener("click", () => consultation.open());
document
  .querySelector(".js-lending")
  .addEventListener("click", () => lending.open());
document
  .querySelector(".js-catalog")
  .addEventListener("click", () => catalog.open());
document.querySelector(".js-shop").addEventListener("click", () => shop.open());

phoneInputMask();
