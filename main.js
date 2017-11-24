//1. Создать класс бытовой техники:
//- должны быть общие данные, которые подходят для большинства техники
//- должны быть инкапсулированные данные
//- должны быть сеттеры и геттеры
//2) На основе этого класса с помощью наследовония создать несколько вариантов бытовой техники. Попробовать применить
// цепные методы


    function Appliances (name, size, power) {
        this.name = name;
        this.size = size;
        this.power = power;
        var made;
        this.setMade = function (newmade) {
            made = newmade;
        }
        this.getMade = function () {
            return (made);
        }
    }

 function Fridge(color) {
     Appliances.call(this);
     this.color = color;
 }

 var fridge = new Fridge('blue');
fridge.setMade('Europe');
console.log(fridge.getMade());
console.log(fridge.color);

function Freezer (volume) {
    Fridge.call(this);
    this.volume = volume;
}

var freezer = new Freezer(300);
freezer.setMade('USA');
freezer.color = 'green';
console.log(freezer.getMade());
console.log(freezer.volume);
console.log(freezer.color);

function Dishwasher(liter) {
    Freezer.call(this);
    this.liter = liter;
}

var dishwasher = new Dishwasher(20);
dishwasher.setMade('China');
console.log(dishwasher.getMade());
console.log(dishwasher.liter);



var Tehno = {
    color: 'white',
   setColor: function (col) {
      this.color = col;
      return this;
   } ,
    getColor: function () {
        return this.color;
    }
};

var microwave = Object.create(Tehno);
microwave.setColor('pink');
console.log(microwave.getColor());

var stove = Object.create(Tehno);
stove.setColor('red');
console.log(stove.getColor());
