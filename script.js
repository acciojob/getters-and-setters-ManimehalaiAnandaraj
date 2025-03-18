//complete this code
class Person {
	constructor(name,age){
		this.name;
		this.age;
	}
	get name(){
		return this.name;
	}
	get age(){
		this.age=age;
	}
	set age(newage)
	{
		this.age=newage;
	}
}

class Student extends Person {
	constructor(name,age,){
		super(name,age);
	}
	study(){
		console.log (`${this.name} is studying`);
	}
		
	}


class Teacher extends Person {
	constructor(name,age){
		super(name,age);
		
	}
	teach(){
		return `${this.name} is teaching`;
	}
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
