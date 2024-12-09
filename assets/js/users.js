class User {
  constructor(firstName, lastName, age, location) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.location = location;
  }

  ageCompare(otherUser) {
    if (this.age < otherUser.age) {
      return `${otherUser.firstName} è più vecchio di ${this.firstName}.`;
    } else if (this.age > otherUser.age) {
      return `${otherUser.firstName} è più giovane di ${this.firstName}.`;
    } else {
      return `${otherUser.firstName} è della stessa età di ${this.firstName}.`;
    }
  }
}

firstUser = new User ('Tommaso','Di Berto Mancini','33', 'Roma');
secondUser = new User ('Michael','Jordan','61', 'Brooklyn');
thirdUser = new User ('Charles','Leclerc','27', 'Montecarlo')

console.log(firstUser.ageCompare(secondUser));
console.log(secondUser.ageCompare(thirdUser));
console.log(thirdUser.ageCompare(firstUser));