/*
Each function will be passed an array of objects that looks like:
    [
        { firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 34, language: 'Javascript' },
        { firstName: 'Aisha', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python' },
        { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 23, language: 'Python' }
    ]
See instructions above each function to find out what it should return.
*/

const empDetails =  [
  { firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 34, language: 'Javascript' },
  { firstName: 'Aisha', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python' },
  { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 23, language: 'Python' }
]
export type Developer = {
  firstName: string, 
  lastName: string, 
  country: string, 
  continent: string, 
  age: number, 
  language: string
}


// countFromEurope should return the number of developers who are from Europe.
// For the list above it would return 1.
export function countFromEurope (developers: Developer[]) {
    return developers.filter(continents => continents.continent == 'Europe')
}

 const count  = countFromEurope(empDetails);
 console.log("countFromEurope>>",count.length);


// getGreetings should return an array where each element contains an appropriate greeting for the matching developer from the input.
// Greetings should be of the form 'Hi <firstName>, what do you like the most about <language>?'
// For the list above, it would return ['Hi Sofia, what do you like the most about Javascript?', 'Hi Aisha, what do you like the most about Python?', 'Hi Madison, what do you like the most about Python?']
export function getGreetings (developers: Developer[]) {
   var emp = new Array();  
   developers.map((x, index, array) => {
    emp.push(`Hi ${x.firstName},what do you like the most about ${x.language}?`);
  });

  return emp ;
}
const greetingList  = getGreetings(empDetails);
console.log("getGreetings>>",greetingList);

// isJSComing should return true if the array contains at least one developer whose language is Javascript.
// For the list above it would return true.
export function isJSComing (developers: Developer[]) {
  var isJSComingStatus = false;
  developers.map((dataList) => {
    if(dataList.language == 'Javascript'){
      isJSComingStatus = true;
    };
  });
  return isJSComingStatus;
}

const isJSComingOutput = isJSComing(empDetails);
console.log("isJSComing>>",isJSComingOutput);

// getFirstPythonDeveloper should return the first developer in the array whose language is Python
// You should return a string formatted like '<firstName>, <country>', or the string 'none' if no python developers are present.
// For the list above, it would return 'Aisha, Croatia'
export function getFirstPythonDeveloper (developers: Developer[]) {
  const index = developers.findIndex(dataList => dataList.language == 'Python');
  return developers[index].firstName +' '+ developers[index].country;

}
const devName = getFirstPythonDeveloper(empDetails);
console.log("getFirstPythonDeveloper>>",devName);

// getAverageAge should return the average age of the developers (rounded down).
// If there are no developers, return -1
// For the list above, it would return 30.


export function getAverageAge(developers: Developer[]) {
  let ages = developers.map(person => person.age);
  //const average = ages => ages.reduce((prev, curr) => prev + curr) / ages.length;
  console.log("getAverageAge>",ages);
}
getAverageAge(empDetails);




// getLanguageCounts should return an object representing how many developers of each language there are.
// For the list above, it would return { Javascript: 1, Python: 2 }
// NB. Developers could know any language (not just JS or Python), so the keys of the object will depend on what developers you get passed.
export function getLanguageCounts (developers: Developer[]) {
  let language = developers.map(person => person.language);
  console.log("getLanguageCounts>"+language);
}
getLanguageCounts(empDetails);

// getOldest should return an array which includes the name of the developer who is the oldest.
// In case of a tie, include all same-age developers listed in the same order as they appeared in the original input array.
// For the list above, it would return ['Aisha']
export function getOldest (developers: Developer[]) {
  developers.sort((a, b) => b.age - a.age); 
  const firstName = developers[0].firstName; 
  return firstName;
}
const firstName = getOldest(empDetails);
console.log("getOldest>",firstName);

// isGlobalGroup should return true if the list contains a developer from each of these 5 zones:
// 'Africa', 'Americas', 'Asia', 'Europe', 'Oceania'
// For the list above, it would return false
export function isGlobalGroup (developers: Developer[]) {
  return ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania']
  .every(r => developers.some(d => d.continent === r))

}
const globalGroupList = isGlobalGroup(empDetails);
console.log("isGlobalGroup>",globalGroupList);

