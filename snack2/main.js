'use strict';

// 1. Creo una lista con un array contentente gli studenti
// 2. Per ogni studente creo un oggetto contenente:
//    - Id
//    - Nome
//    - Voto

const students = [
    {
        id: 213,
        name: 'Marco della Rovere',  
        grade: 78,
    },
    {
        id: 110,
        name: 'Paola Cortellessa',  
        grade: 96,
    },
    {
        id: 250,
        name: 'Andrea Mantegna',  
        grade: 48,
    },
    {
        id: 145,
        name: 'Gaia Borromini',  
        grade: 74,
    },
    {
        id: 196,
        name: 'Luigi Grimaldello',  
        grade: 68,
    },
    {
        id: 102,
        name: 'Piero della Francesca',  
        grade: 50,
    },
    {
        id: 120,
        name: 'Francesca da Polenta',  
        grade: 84,
    }
] 


//students.toUpperCase();

// 3. Stampo a console una lista dei nomi degli studenti in maiuscolo

const targheStudenti = [];

students.forEach ((students)=> {
    
    const upperStudent = students.name.toUpperCase();

    console.log(students.name.toUpperCase());
    console.log(students['name'].toUpperCase());
    targheStudenti.push(upperStudent);
});

console.log(targheStudenti);

//const targheStudenti = students.map(students => students.name.toUpperCase()); 

// 4. Stampo a console una lista degli studenti con voto superiore a 70

//soluzione con forEach
const studentiTop = [];

students.forEach(function(students){
    console.log(students.grade);
    console.log(students.name);

    if(students.grade > 70){
        studentiTop.push(students.name);
    }
});

//soluzione con filter
const studentiTop1 = students.filter(function(students){
    console.log(students);
    console.log(students['grade']);
    console.log(students['name']);

    if(students.grade > 70) {
        return true;
    }

})

// 5. Stampo a console una lista degli studenti con voto superiore a 70 e id superiore a 120

