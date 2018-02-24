'use strict';

const josh = {
    name: 'Josh',
    age: 33,
    happy: true,
    hairColor: 'red',
};

const majid = {
    name: 'Majid',
    age: 26,
    happy: true,
    hairColor: 'brown',
};

const thom = {
    name: 'Thom',
    age: 30,
    happy: false,
    hairColor: 'brown',
};

const studentArray = [josh, majid, thom]
//console.log(studentArray);

for(let i = 0; i < studentArray.length; i++) {
    console.log(`hello, ${studentArray[i].name}. I heard you are ${studentArray[i].age}. That sure is old! Why are you so ${ studentArray[i].happy ? 'happy' : 'unhappy you old you old jerk'}?`);
}

if(josh.happy) {
    return 'happy';
} else {
    return 'unhappy';
}









//const name /* declaration */ = 'Thom'; /* assignment */
//let happy = true;
//let age = 30;
//const hairColor = 'brown';
// const test = 1/0;

// const thom = [name, happy, age, hairColor, ['kids', 'dogs', 4]];

// for (let index = 0; index < thom.length; index++) {
//     console.log(thom[index]);
// }

/* console.log(typeof name, name); 
console.log(typeof happy, happy);
happy = false;
console.log(typeof happy, happy);
console.log(typeof age, age); */
