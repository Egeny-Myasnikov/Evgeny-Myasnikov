import phoneInputMask from "./moduls/phoneMask.module.js";
import openingPopup, {
  consultation,
  lending,
  catalog,
  shop,
} from "./moduls/popup.module.js";

function hideShowSocialIcons(selector) {
  const elem = document.querySelector(selector);
  document.addEventListener("click", (e) => {
    e.target.closest(selector)
      ? elem.classList.toggle("active")
      : elem.classList.remove("active");
  });
}

hideShowSocialIcons(".header-social");

openingPopup(".js-get-consultation", consultation);
openingPopup(".js-lending", lending);
openingPopup(".js-catalog", catalog);
openingPopup(".js-shop", shop);

phoneInputMask();
