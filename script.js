//complete this code
class Person {
	constructor(name,age){
		this.name;
		this.age;
	}
	getname(){
		return this.name;
	}
	getage(){
		this.age=age;
	}
}

class Student extends Person {
	constructor(name,age,){
		super(name,age);
	}
	study(){
		console.log(`${this.getname()}`)
	}
		
	}


class Teacher extends Person {
	constructor(name,age){
		super(name,age);
		
	}
	teach(){
		console.log(`$this.getname()} is teaching`)
	}
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
