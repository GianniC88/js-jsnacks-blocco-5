const zucchine = [
  { type: "Napoletana", weight: 10, length: 4 },
  { type: "Trombetta", weight: 13, length: 16 },
  { type: "Napoletana", weight: 4, length: 23 },
  { type: "Trombetta", weight: 11, length: 6 },
  { type: "Napoletana", weight: 2, length: 17 },
  { type: "Romana", weight: 5, length: 10 },
  { type: "Romana", weight: 7, length: 9 },
  { type: "Trombetta", weight: 3, length: 8 },
  { type: "Calabrese", weight: 6, length: 27 },
  { type: "Calabrese", weight: 14, length: 4 },
];

// A partire dall'array fornito, crea due array. Uno con le zucchine più lunghe di almeno 15cm. L'altro con le restanti.

//ciclo FOR
const xl = [];

const normal = [];

for (let i = 0; i < zucchine.length; i++) {
  const zucchINE = zucchine[i];
  if (zucchINE.length > 15) {
    xl.push(zucchINE);
  } else {
    zucchINE < 15;
    normal.push(zucchINE);
  }
}

console.log(xl);
console.log(normal);

//ciclo forEACH

const xL = [];
const noXL = [];

zucchine.forEach((element, i, arr) => {
  if (element.length < 15) {
    noXL.push(element);
  } else xL.push(element);
});
console.log(xl);
console.log(noXL);

//ciclo MAP

const zucchine15 = zucchine.map((element, i, arr) => {
  if (element.length > 15) {
    return element;
  }
});

const zucchineNO15 = zucchine.map((e, i, arr) => {
  if (e.length < 15) {
    return e;
  }
});
console.log(zucchine15);
console.log(zucchineNO15);
