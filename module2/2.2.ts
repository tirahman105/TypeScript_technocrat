{
    // 

// interface

type User1 = {
    name: string;
    age: number;
}

type UserWithRole = User1 & {role: string}

const user1: UserWithRole = {
    name: 'Tareq',
    age: 32,
    role: "Admin"
}


interface User2 {
    name: string;
    age: number;
}


interface UserWithRole2 extends User1 {
    role: string
}

const user2: UserWithRole2 = {
    name: 'Tareq',
    age: 32,
    role: "Admin"
}



type RollNumber = number

type Roll1 = number[];


interface Roll2 {
    [index: number]: number
}

const rollNumber1 : Roll2 = [1,2,3]

// function 



type Add = (num1: number, num2: number) => number

const add : Add =(num1, num2) => num1 + num2

add(11,22)

interface Add2 {
    (num1 : number, num2: number ) :number
}
 
const add2 : Add2 =(num1, num2) => num1 + num2

add2(11,22)





    // 
}