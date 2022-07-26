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
    <p>Веб-страница, основной задачей которой является сбор контактных данных целевой аудитории. Используется для усиления эффективности рекламы, увеличения аудитории. Целевая страница обычно содержит информацию о товаре или услуге.</p>
    <div class="btn-container">
    <button class="btn-primary" type="submit">Заказать</button>
    <button class="btn-secondary" type="submit">Смотреть примеры</button>
    </div>`,
  },
  catalog: {
    title: "Каталог",
    body: `
    <h4>Сайт Каталог</h4>
    <p>Это вид коммерческого сайта, на котором представлен весь ассортимент компании с подробным описанием. Это прекрасный способ проинформировать покупателей о том, какие товары и услуги предоставляет предприятие. Такой ресурс ещё называют ветриной.</p>
    <div class="btn-container">
    <button class="btn-secondary" type="submit">Смотреть примеры</button>
    <button class="btn-primary" type="submit">Заказать</button>
    </div>`,
  },
  shop: {
    title: "Интернет магазин",
    body: `
    <h4>Интернет магазин</h4>
    <p>Сайт, торгующий товарами посредством сети интернет. Позволяет пользователям онлайн, в своём браузере или через мобильное приложение сформировать заказ на покупку, выбрать способ оплаты и доставки заказа, оплатить заказ.</p>
    <div class="btn-container">
    <button class="btn-secondary" type="submit">Смотреть примеры</button>
    <button class="btn-primary" type="submit">Заказать</button>
    </div>`,
  },
};

export default popups;
