{

// Type Alias 

type Student = {
    name: string;
    age: number;
    gender: string;
    contactNo?: string;
    address: string;
}


const student1 : Student ={
    name : 'Tareq',
    age: 32,
    gender: 'male',
    contactNo: '01777899999',
    address: 'Dhaka',

}

const student2 : Student ={
    name : 'Anonna',
    age: 26,
    gender: 'female',
    address: 'Dhaka',

}


type UserName = string
type IsAdmin = boolean

const userName: UserName = 'Tareq'
const isAdmin: IsAdmin = true


// Type alias in function 

// normal add function 

const add = (num1: number, num2: number): number => num1 + num2

type Add = (num1: number, num2: number) => number;

const add : Add = (num1, num2) => num1 + num2











}