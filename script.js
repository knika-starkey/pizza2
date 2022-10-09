"use strict";
function orderingPizza(n = 0, count = 1) {
  //   n = n == null ? 0 : n;
  count = count == 0 ? 1 : count;
  console.log(count);
  let str = "Ваше замовлення: ";
  let sum = 0;
  switch (n) {
    case 0:
      str += `Фірмова піца -`;
      sum = count * 75;
      break;
    case 1:
      str += `Піца з грибами -`;
      sum = count * 123;
      break;
    case 2:
      str += `Піца з куркою і ананасом -`;
      sum = count * 150;
      break;
    default:
      str = "Вибачте, у нас нема такої піцци у меню";
      break;
  }
  str += `${count}шт. Ціна замовлення - ${sum}$ `;
  return str;
}
let order = +prompt(
  "наприклад, 1 - піца з грибами, 2 - піца з куркою і ананасом"
);
let countt = +prompt("Скільки піц?");
alert(orderingPizza(order, countt));
