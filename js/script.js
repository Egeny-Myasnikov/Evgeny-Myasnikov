import phoneInputMask from "./moduls/phoneMask.module.js";
import openingPopup, {
  consultation,
  lending,
  catalog,
  shop,
} from "./moduls/popup.module.js";

function hideShowSocialIcons(selector) {
  const elem = document.querySelector(selector);
  elem.addEventListener("click", () => {
    elem.classList.toggle("active");
  });
}

hideShowSocialIcons(".header-social");

openingPopup(".js-get-consultation", consultation);
openingPopup(".js-lending", lending);
openingPopup(".js-catalog", catalog);
openingPopup(".js-shop", shop);

phoneInputMask();
