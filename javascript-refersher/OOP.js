class Dog {
  //Declare private variables
  _attendance = 0;
  constructor(name, birthday) {
    this.name = name;
    this.birthday = birthday;
    this.type = 'dog';
  }

  get age() {
    return Date.now() - this.birthday;
  }



  getAge() {
    //Getter
    return this.calcAge();
  }

  calcAge() {
    //calculate age using today's date and birthday
    return Date.now() - this.birthday;
  }

  bark() {
    return console.log("Woof!");
  }

  updateAttendance() {
    //add a day to the dog's attendance days at the petsitters
    this._attendance++;
  }
}



class HeardingDog extends Dog {
  constructor(name, birthday) {
    super(name, birthday);
    this.type = 'hearding dog';
  }

  bark() {
    return console.log('woof');
  }
}

const bailey = new HeardingDog('Bailey', new Date('05 October 2011 14:48 UTC'));
console.log('age: ', bailey.age);
console.log('bark: ', bailey.bark());
console.log('bailey: ', bailey._attendance);
