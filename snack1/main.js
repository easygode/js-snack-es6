'use strict';

//1. Creo una lista con un array contentente gli ospiti per ordine di posto

const ospitiVip = [
    'Brad Pitt',
    'Johnny Depp',
    'Lady Gaga',
    'Cristiano Ronaldo',
    'Georgina Rodriguez',
    'Chiara Ferragni',
    'Fedez',
    'George Clooney',
    'Amal Clooney',
    'Maneskin'
]
console.log(ospitiVip);
console.log()

//2. Per ogni ospite creo un oggetto contenente:
//     - nome del tavolo
//     - nome dell'ospite
//     - posto occupato

const ospitiVipList = ospitiVip.map((element,index) =>{
  ospitiVip.forEach(element =>{
  })
 return{name:(element), table:('Tavolo VIP'), place: (index + 1)}
})

console.log(ospitiVipList);

// 

// 3. Stampo a console la lista degli ospiti