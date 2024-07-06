//getter & setter

class Person {
    private _name : string ;
    private  _age : number ;

    constructor ( name : string , age : number) {
        this._name = name ;
        this._age = age ;
    }

// Getter for 'name'
get name(): string {
    return this._name;
}

// Setter for 'age'
set name(newName: string) {
    this._name = newName;
}

// Getter for 'age'
get age(): number{
    return this._age;
}

// Setter for 'name'
set age(newAge: number) {
    this._age = newAge;
}
}

let person = new Person ("alice" , 18);

console.log (person.name);
console.log (person.age);


person.name = "bob";
person.age = 19;

console.log(person.name); // Output: Bob
console.log(person.age);  // Output: 30

// //EXAMPLE 2

class myclass {
    public _name : string;
    private _grade : number;
    private _rollno : number;

constructor (name : string, grade : number , rollno : number){
    this._name = name;
    this._grade = grade;
    this._rollno = rollno;
}

get grade() : number {
    return this._grade;
}

set grade (newGrade : number) {
    this._grade = newGrade
}

get rollno() : number {
    return this._rollno;
}

set rollno (newRollno : number) {
    this._rollno = newRollno
}
}

let Myclass = new myclass ("hania", 12 , 7)

// //old values

console.log(Myclass._name)
console.log(Myclass.grade); 
console.log(Myclass.rollno);

// //updated value

Myclass.grade = 11
Myclass.rollno = 8

 console.log(Myclass.grade) // "11" output
 console.log(Myclass.rollno) // "8" output

// //without setter

class animal {
    public _name: string ;
    private _bread : string  

    constructor (name : string , bread : string){
        this._name = name;
        this._bread = bread;
    }

get bread () : string {
    return this._bread;
}
}

let Animal = new animal("muffin" , "persion")

console.log(Animal)
console.log (Animal._name) // "muffin"
console.log(Animal.bread) // "persian"

//making every value public, and using only setter

class Party {

    public _dishes : number;
    public _guest :number

    constructor (dish : number , guest : number){

        this._dishes = dish
        this._guest = guest

    }

//only use setter keyword to update value

    set dish (newDish : number) {
        this._dishes = newDish;
    } 
}

let partyIns = new Party (10 , 30)

// console.log(partyIns._dishes) // 10 output 
// console.log(partyIns._guest) // 30 output

partyIns.dish = 12;

console.log(partyIns._dishes)// "12" output cuz we update it
console.log(partyIns._guest)// it will be "30" out cuz we dont update it