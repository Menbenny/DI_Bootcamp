const persons = require(`./data.js`);

const ageSum = () => {
   let sum = 0;
  persons.forEach(person => {
   sum += person.age;
  })
  const averageAge = sum / persons.length;
  console.log(parseInt(averageAge));
}
ageSum()
