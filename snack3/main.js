'use strict';

//1. Creo un array di oggetti
//2. Aggiungo gli oggetti che sono bici con 2 proprietà nome e peso
const bikes = [
    {
        name: "Peugeot",
        weight: 15
    },
    {
        name: "Allegro",
        weight: 22
    },
    {
        name: "Rocker",
        weight: 10
    },
    {
        name: "Holland",
        weight: 14
    },
    {
        name: "Bianchi",
        weight: 9
    },
    {
        name: "Canyon",
        weight: 10
    },
    {
        name: "Gant",
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
console.log(lightBike);

//destructuring per estrarre le proprietà "nome" e "peso"
const {name, weight} = lightBike;

//template literal
console.log(`La bici piuma è ${name} che pesa ${weight} kg.`);



