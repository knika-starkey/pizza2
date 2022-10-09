"use strict";
function orderingPizza(n = 0, count = 1) {
  //   n = n == null ? 0 : n;
  count = count == 0 ? 1 : count;
  console.log(count);
  let str = "Ваше замовлення: ";
  let sum = count;
  switch (n) {
    case 0:
      str += `Фірмова піца -`;
      sum *= 75;
      break;
    case 1:
      str += `Піца з грибами -`;
      sum *= 123;
      break;
    case 2:
      str += `Піца з куркою і ананасом -`;
      sum *= 150;
      break;
    case 3:
      str += `Піца 'Маргарита' -`;
      sum *= 65;
      break;
    case 4:
      str += `Піца 'Чотири сири' -`;
      sum *= 95;
      break;
    case 5:
      str += `Bегетаріанська піца -`;
      sum *= 95;
      break;
    default:
      str = "Вибачте, у нас нема такої піцци у меню";
      break;
  }
  str += `${count}шт. Ціна замовлення - ${sum}$ `;
  return str;
}
let order = +prompt(
  "наприклад, 1 - піца з грибами, 2 - піца з куркою і ананасом, 3 - піца 'Маргарита', 4 - піца 'Чотири сири', 5 - вегетаріанська піца"
);
let countt = +prompt("Скільки піц?");
alert(orderingPizza(order, countt));
