const students = [
  {
    id: 1,
    name: 'Marco Lanci',
    age: 32,
    class: '3C'
  },
  {
    id: 2,
    name: 'Mario Banfi',
    age: 34,
    class: '4A'
  },
  {
    id: 3,
    name: 'Luigi Banzi',
    age: 33,
    class: '5B'
  },
];

// Recupera la classe dello studente 'Marco Lanci'
// Risultato: '3C'
console.table(students);

// const marcosClass = students[0].class;
// console.log('Risultato: ', marcosClass);

const marcoLanci = students.find(({name}) => name === 'Marco Lanci');
const classOfMarco = marcoLanci.class;
console.log('Risultato: ', classOfMarco);