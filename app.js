const fs = require('fs');

const genders = ["male", "female"];
const maleNames = ["Liam", "Noah", "Oliver", "James", "Elijah", "William", "Henry", "Lucas", "Benjamin", "Theodore"];
const femaleNames = ["Olivia", "Emma", "Charlotte", "Amelia", "Sophia", "Isabella", "Ava", "Mia", "Evelyn", "Luna"];
const lastNames = ["Smith", "Johnson", "Williams", "Brown", "Jones", "Garcia", "Miller", "Davis", "Rodriguez", "Martinez"];

function randChoice(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

people = [];

for (let i = 0; i < 20; i++) {
    const gender = randChoice(genders);
    const firstName = gender === "male" ? randChoice(maleNames) : randChoice(femaleNames);
    const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
    const age = Math.floor(Math.random() * (65 - 18 + 1) + 18);

    const person = {
        gender: gender,
        firstName: firstName,
        lastName: lastName,
        age: age
    };

    people.push(person);
}

const peopleJSON = JSON.stringify(people);

fs.writeFile('people.json', peopleJSON, (err) => {
    if (err) {
        console.error('Something went wrong! Unable to generate the file.'); 
    } else {
        console.log('File has been successfully generated! Check people.json');
    }
});