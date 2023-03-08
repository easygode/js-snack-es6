esercizio di oggi: Snack Array Methods
repo: js-snack-es6
Create, all’interno della repo, una cartellina per ogni snack.(es. snack1, snack2)
SNACK 1
Il Grande Gatsby ci ha chiesto di creare i segnaposto per il tavolo degli invitati alla sua mega festa vip.
Ci ha lasciato il nome del tavolo (“Tavolo Vip”) e la lista degli invitati in ordine di posto: `[ ‘Brad Pitt’, ‘Johnny Depp’, ‘Lady Gaga’, ‘Cristiano Ronaldo’, ‘Georgina Rodriguez’, ‘Chiara Ferragni’, ‘Fedez’, ‘George Clooney’, ‘Amal Clooney’, ‘Maneskin’]`
Ma la tipografia per stampare il tutto vuole che le mandiamo una lista di ospiti in cui ogni ospite sia un oggetto javascript che ha come attributi: nome del tavolo, nome dell’ospite e posto occupato.
Generiamo e stampiamo in console la lista per i segnaposto.
SNACK 2
Abbiamo un elenco degli studenti di una facoltà, identificati da _id_, _Nome_ e _somma totale_ dei loro voti di esame...
1. Per preparare l’aula di un nuovo corso, dobbiamo stampare le targhe col nome degli studenti: creare una lista contenente il loro nome tutto in maiuscolo
ES (Marco della Rovere => MARCO DELLA ROVERE);
2. Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70
3. Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70 e id superiore a 120
Questo è l’elenco degli studenti:
Id  Name                Grades
213 Marco della Rovere      78
110 Paola Cortellessa       96
250 Andrea Mantegna         48
145 Gaia Borromini          74
196 Luigi Grimaldello       68
102 Piero della Francesca   50
120 Francesca da Polenta    84
Ricordate: il primo push dovrà essere un file README.md contenente la risoluzione dell’esercizio in linguaggio naturale!

------SVOLGIMENTO-------

**SNACK 1**
JavaScript
1. Creo una lista con un array contentente gli ospiti per ordine di posto
2. Per ogni ospite creo un oggetto contenente:
    - nome del tavolo
    - nome dell'ospite
    - posto occupato
3. Stampo a console la lista degli ospiti

**SNACK 2**
JavaScript
1. Creo una lista con un array contentente gli studenti
2. Per ogni studente creo un oggetto contenente:
   - Id
   - Nome
   - Voto
3. Stampo a console una lista dei nomi degli studenti in maiuscolo
4. Stampo a console una lista degli studenti con voto superiore a 70
5. Stampo a console una lista degli studenti con voto superiore a 70 e id superiore a 120