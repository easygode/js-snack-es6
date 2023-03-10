'use strict';
// 1. Creo un array di oggetti di squadre di calcio
// 2. Agiungo  per ogni squadra le proprietà:
//    nome, punti fatti, falli subiti.

/*--------
Functions
----------*/

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

/*--------
Main
----------*/

const squadre = [
    {
        nome: "Manchester",
        punti: 0,
        falli: 0
    },
    {
        nome: "Glasgow",
        punti: 0,
        falli: 0
    },
    {
        nome: "Roma",
        punti: 0,
        falli: 0
    },
    {
        nome: "Atalanta",
        punti: 0,
        falli: 0
    },
    {
        nome: "Galatasaray",
        punti: 0,
        falli: 0
    },
    {
        nome: "Salernitana",
        punti: 0,
        falli: 0
    },
    {
        nome: "Djurgarden",
        punti: 0,
        falli: 0
    },
    {
        nome: "Gefle",
        punti: 0,
        falli: 0
    }
];

// 3. Destrutturo la proprietà 'nome' e setto tutte le altre  a 0

//4. Genero numeri random al posto degli 0 nelle proprietà: Punti fatti e falli subiti.
    for (let i = 0; i < squadre.length; i++) {
        squadre[i].punti = Math.floor(Math.random() * 100);
        squadre[i].falli = Math.floor(Math.random() * 500);
    }
    console.log(squadre);
    
    //alternativa usando un forEach
    squadre.forEach(element =>{
        console.log(element);

        element.punti = getRndInteger(30,40);
        element.falli = getRndInteger(80,100);
    })
    console.log(squadre);
    
//5. Con la destrutturazione creo un nuovo array i cui elementi contengono solo nomi e falli subiti 
//6. Stampo tutto in console.
    const fallosi = squadre.map(({nome, falli}) => {({nome, falli});
    return {nome, falli};
})
console.log(fallosi);

const fallosi1 = squadre.map(({nome, falli}) => ({nome, falli}));
//^ equivalente ^ const fallosi1 = squadre.map(({nome, falli}) => return({nome, falli})); 