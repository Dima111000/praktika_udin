// Propagate template.
(function(selector) {
  var template = document.querySelector(selector);
  var arrayDataProvider = getJsonAsArray();
  arrayDataProvider.forEach(function(element) {
    var templateClone = template.content.cloneNode(true);
    templateClone.querySelector('.name > span').textContent +=
      ' ' + element.name;
    templateClone.querySelector('.age > span').textContent +=
      ' ' + element.age;
    templateClone.querySelector('.email > span').textContent +=
      ' ' + element.email;
    templateClone.querySelector('.phone > span').textContent +=
      ' ' + element.phone;
    templateClone.querySelector('.address > span').textContent +=
      ' ' + element.address;
    document.body.appendChild(templateClone);
  });
})('#table-template');

function getJsonAsArray() {
  return JSON.parse(`[
    {
      "name": "Иван",
      "age": "32",
      "email": "ivan@ivanov.ru",
      "phone": "+7(954)148-45-73",
      "address": "Торфяная ул. 7/4"
    },
    {
      "name": "Екатерина",
      "age": "24",
      "email": "katja@yandex.ru",
      "phone": "+7(956)172-12-23",
      "address": "Никитинская ул. 12б"
    },
    {
      "name": "Федор",
      "age": "45",
      "email": "fedor@sidirov.ru",
      "phone": "+7(911)760-45-35",
      "address": "Ленинский пр-т. 74/3"
    },
    {
      "name": "Станислав",
      "age": "19",
      "email": "stas@fedorov.ru",
      "phone": "+7(954)343-55-55",
      "address": "Московский пр-т. 14/4"
    },
    {
      "name": "Евгений",
      "age": "28",
      "email": "evgeny@gmail.com",
      "phone": "+7(918)577-98-89",
      "address": "Советская ул. 60"
    },
    {
      "name": "Елена",
      "age": "22",
      "email": "elena@mail.ru",
      "phone": "+7(931)466-77-19",
      "address": "Есенина ул. 4"
    }
  ]`);
}