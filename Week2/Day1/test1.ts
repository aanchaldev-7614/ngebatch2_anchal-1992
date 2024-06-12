const addNum = (arg1 : any,arg2 : any) =>{
    return arg1 + arg2
}

const output = addNum(10,10);
console.log("output>",output);

//one line arrow function
const addNumber = (num1 : any,num2 : any) => num1 + num2;
console.log("number addition>",addNumber(200,300));

//add pure function
//const addOnePure = (i) => i * i;

//rest params
//const toArray = (...args) => args
//toArray(1,2,3)

//