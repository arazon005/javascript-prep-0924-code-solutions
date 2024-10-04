const person = {
  firstName: 'Abraham',
  lastName: 'Razon',
  hobby: 'Playing video games',
};
console.log(person);

let fullName = person.firstName + ' ' + person.lastName;
console.log("The person's name is " + fullName);

person.job = 'unemployed';
console.log("The person's current job is " + person.job);

person['previousJob'] = 'Senior Election Clerk';
console.log("The person's previous job was " + person.previousJob);

console.log(person);
