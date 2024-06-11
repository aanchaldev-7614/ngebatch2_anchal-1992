// Cursor Park (anyone not typing put your cursor here)

const someAcademitesWithAges = [ // array of objects
  { name: 'Aisha', age: 8 }, // ages in months!
  { name: 'Oscar', age: 9 },
  { name: 'Wiggins', age: 44 },
  { name: 'Gatsby', age: 56 }
]

type Academite = {
  name: string, 
  age: number
}

// Reduce the array to only the total age in months of all the doggie Academites
// TODO

// Sort the array by the names (alphabetically)
// Make a separate sorting function then use it
// TODO
function sortByAlphabet(dataList : any[]){
  dataList.sort(function(a,b){
    return a.name.localeCompare(b.name);
  })
}
sortByAlphabet(someAcademitesWithAges);
console.log("sorted array by name>>",someAcademitesWithAges);

// Sort the array by the reverse ages (so, oldest first)
// Make a separate sorting function then use it
function sortByAge(dataList : any[]){
  dataList.sort((a, b) => b.age - a.age)
}
const sortedData = sortByAge(someAcademitesWithAges);
console.log("sorted array by age>>",someAcademitesWithAges);
//const sortByAges = 'TODO'
// TODO


// EOF
