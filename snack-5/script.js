const nums = [2, 8, 4, 7, 12, 87];

// Crea un array a partire dall'array nums, che abbia solo i numeri pari
// Risultato: [2, 8, 4, 12]

// ciclo FOR
const numPari = [];

for (let i = 0; i < nums.length; i++) {
  const numP = nums[i];

  if (numP % 2 === 0) {
    numPari.push(num);
  }
}

console.log(numPari);
