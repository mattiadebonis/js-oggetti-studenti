// Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.
var studente = {
    'nome': "Mattia",
    'studente': "De Bonis",
    'età': 33
};

// Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.
for(indice in studente){
    console.log(studente[indice]);
}
// Creare un array di oggetti di studenti.

var classe = [
    {
        'nome': "Mattia",
        'studente': "De Bonis",
        'eta': 33
    },
    {
        'nome': "Lorenzo",
        'studente': "Marucelli",
        'eta': 32
    },
    {
        'nome': "Daniele",
        'studente': "Giberti",
        'eta': 40
    },
    {
        'nome': "Simone",
        'studente': "Rossi Tisbeni",
        'eta': 29
    },
    {
        'nome': "Andrea",
        'studente': "Maffia",
        'eta': 32
    }

];

// Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.
for(indice in classe){
    console.log(classe[indice]);
}

// Dare la possibilità all'utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell'ordine: nome, cognome e età.

var nomeNuovoStudente = prompt("Inserisci il nome del nuovo studente");

var cognomeNuovoStudente = prompt("Inserisci il cognome del nuovo studente");

var etaNuovoStudente = parseInt(prompt("Inserisci l'età del nuovo studente"));

classe.push({nome: nomeNuovoStudente, cognome: cognomeNuovoStudente, eta:etaNuovoStudente});

for(indice in classe){
    console.log(classe[indice]);
}