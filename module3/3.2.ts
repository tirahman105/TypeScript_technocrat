{

    // 

class Parent {
    name: string;
    age: number;
    address: string;

    constructor(name: string, age: number, address: string){
        this.name = name;
        this.age = age;
        this.address = address;
    }

    getSleep (numOfHour: number){
        console.log(`${this.name} sleep for ${numOfHour}`)
}

}



    class Student extends Parent {
      

        constructor(name: string, age: number, address: string){
            super(name, age, address)
        }

        getSleep (numOfHour: number){
            console.log(`${this.name} sleep for ${numOfHour}`)
    }
    
}
const student1 = new Student("Mr. Student", 20, "Dhk")

// teacher class 

class Teacher extends Parent {
   
    designation: string;

    constructor(name: string, age: number, address: string, designation: string){
       
        super(name, age, address)
        this.designation = designation;
    }

    getSleep (numOfHour: number){
        console.log(`${this.name} sleep for ${numOfHour}`)
}

takeClass(numOfClass: number){
    console.log(`${this.name} will take ${numOfClass} `)
}

}

const teacher1 = new Teacher("Mr. Teacher", 40, "Dhk", "Lecturer")

teacher1.
    // 
}