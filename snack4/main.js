'use strict';
// 1. Creo un array di oggetti di squadre di calcio
// 2. Agiungo  per ogni squadra le proprietà:
//    nome, punti fatti, falli subiti.

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
    
//5. Con la destrutturazione creo un nuovo array i cui elementi contengono solo nomi e falli subiti 
//6. Stampo tutto in console.
    const fallosi = squadre.map(({nome, falli}) => ({nome, falli}));
    console.log(fallosi);