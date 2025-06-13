const numbers = [2, 8, 4, 7, 2, 87];

// Crea un nuovo array in cui tutti i numeri siano incrementati di 1
// Risultato: [3, 9, 5, 8, 3, 88]

//ciclo for
const numb = [];
for (let i = 0; i < numbers.length; i++) {
  const num = numbers[i];
  numb.push(num + 1);
}
console.log(numb);

//ciclo forEach

const numeriDue = [];

numbers.forEach((elemnt, index, arr) => {
  numeriDue.push(elemnt + 1);
});
console.groupCollapsed(numeriDue);

//ciclo map

const nuMeri = numbers.map((element, index, arr) => {
  return element + 1;
});
console.log(nuMeri);
