'use strict';

//1. Creo un array di oggetti
//2. Aggiungo gli oggetti che sono bici con 2 proprietà nome e peso
const bikes = [
    {
        nome: "Peugeot",
        weight: 15
    },
    {
        nome: "Allegro",
        weight: 22
    },
    {
        nome: "Rocker",
        weight: 10
    },
    {
        nome: "Holland",
        weight: 14
    },
    {
        nome: "Bianchi",
        weight: 9
    },
    {
        nome: "Canyon",
        weight: 10
    },
    {
        nome: "Gant",
        weight: 7
    },
    {
        nome: "Cannondale",
        weight: 7
    },
];

//3. Stampo in console la bici con peso minore utilizzando destructuring e template literal
let lightBike = bikes[0];

for (let i = 1; i < bikes.length; i++) {
  if (bikes[i].weight < lightBike.weight) {
    lightBike = bikes[i];
  }
}

//alternativa usando una costante currentBike invece di bikes[i]
for (let i = 1; i < bikes.length; i++) {
    const currentBike = bikes[i];
    if (currentBike.weight < lightBike.weight) {
      lightBike = currentBike;
    }
  }
console.log(lightBike);

const resultBikes = bikes.filter(({weight}) => {
    console.log(weight);
    if(weight === lightBike.weight){
        return true;
    }
});

console.log(resultBikes);

//destructuring per estrarre le proprietà "nome" e "peso"
const {nome, weight} = lightBike;

//template literal
console.log(`La bici piuma è ${nome} che pesa ${weight} kg.`);

//aggiungo un ciclo forEach nel caso ci fossero più bici con lo stesso peso piuma
resultBikes.forEach(({nome, weight}) => {
    console.log(`La bici piuma è ${nome} che pesa ${weight} kg.`);
})




