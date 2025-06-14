const posts = [
  { author: "Marco", date: "12/3/2021", content: "lorem ipsum..." },
  { author: "Luca", date: "30/6/2021", content: "lorem ipsum..." },
  { author: "Fabrizio", date: "12/9/2020", content: "lorem ipsum..." },
  { author: "Enrico", date: "09/12/2021", content: "lorem ipsum..." },
];

// Crea un nuovo array coi nomi di tutti gli autori
// Risultato: ['Marco', 'Luca', 'Fabrizio', 'Enrico']

const nomeAutore = posts.map((element, index, arr) => {
  return element.author;
});
console.log(nomeAutore);

// //forEach

const nomiAutori = [];
posts.forEach((element, index, arr) => {
  nomiAutori.push(element.author);
});
console.log(nomiAutori);

//metodo FOR

const nome = [];
for (let i = 0; i < posts.length; i++) {
  const naME = posts[i];
  console.log(naME);

  nome.push(naME.author);
}
console.log(nome);
