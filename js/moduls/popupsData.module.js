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

export default popups;
