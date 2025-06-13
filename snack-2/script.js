const people = [
  { name: "Paolo", age: 35 },
  { name: "Giulia", age: 24 },
  { name: "Marco", age: 67 },
];

/*forEach */
//costante dell'array nuova, vuota, che prende il valore dal risultato del ciclo

const name = [];

people.forEach((element, index, array) => {
  name.push(element.name);
});

// Stampa in console tutti i nomi
console.log(name);

// Risultato: 'Paolo', 'Giulia', 'Marco'

// con altri cicli
/*

//ciclo for

const user = [];

for (let i = 0; i < people.length; i++) {
  const nameUser = people[i];
  user.push(nameUser.name);
}

console.log(user);

//MAP 
const nameU = people.map((elemnt, index, array) => {
  return elemnt.name;
});
console.log(nameU);


*/
