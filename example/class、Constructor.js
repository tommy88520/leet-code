
// Constructor 第一個字母通常大寫
function Person(name){
  //設定 this 的 name property 值為傳進來的參數， this 為建立的物件
  this.name = name
}
//用 new 呼叫 Person 使它成為一個 Constructor ，替 mary 及 kitty 設定 name
const mary = new Person('Mary')
const kitty = new Person('Kitty')

console.log(mary.name)
// Mary

//每個 Instance 的 constructor 屬性都會指向 Constructor 本身
kitty.constructor === Person
// true


class Car {

  static getNextVin(){
		return Car.nextVin++
	}
  constructor(make, model){
    this.make = make;
    this.model = model;
    this.userGears = ['P', 'N', 'R', 'D'];
    this.userGear = this.userGears[0];
    this.vin = Car.getNextVin()
  }

  shift(gear) {
    if (this.userGear.indexOf(gear) < 0){
      throw new Error('Invalid Gear')
    }
    this.userGear = gear;
  }

  static areSimilar(car1, car2) {
    return car1.make === car2.make && car1.model === car2.model;
  }
  
}

Car.nextVin = 0;
const car1 = new Car("Tesla", "Model S");
const car2 = new Car("Mazda", "3i") 
console.log(car1, car2)


class Vehicle {
  constructor() {
    this.passengers = [];
    console.log("Vehicle created")
  }
  addPassenger(p){
    this.passengers.push(p)
  }
}

class Moto extends Vehicle {
  constructor() {
    super()
    console.log("Moto Created")
  }

  deployAirbags(){
    console.log("Boom")
  }
}