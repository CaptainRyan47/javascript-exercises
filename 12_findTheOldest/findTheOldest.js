const findTheOldest = function (people) {
  const year = new Date().getFullYear();
  let oldest;
  let oldestAge = 0;
  let age = 0;
  people.forEach(person => {
    'yearOfDeath' in person ?
      age = person.yearOfDeath - person.yearOfBirth
      : age = year - person.yearOfBirth;
    if (age > oldestAge) {
      oldestAge = age;
      oldest = person;
    }
  });
  return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
