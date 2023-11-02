{

//  union types

// type FrontendDeveloper = 'fakibazDeveloper' | 'juniorDeveloper'
// type FullStackDeveloper = 'frontEndDeveloper' | 'expertDeveloper'


// type Developer = FrontendDeveloper | FullStackDeveloper


// const newDeveloper : FrontendDeveloper = 'juniorDeveloper'

// type User ={
//     name: string;
//     email? : string;
//     gender: "male" | "female";
//     bloodGroup: "A+" | "B+" | "O+";
// }

// const user1 : User = {
//     name: "Tareq",
//     gender: "male",
//     bloodGroup: "A+",

// }

type FrontEndDeveloper = {
    skills: string[];
    designation1: 'FrontEnd Developer';
}

type BackEndDeveloper = {
    skills: string[];
    designation2: 'BackEnd Developer';
}

type FullStackDeveloper = FrontEndDeveloper & BackEndDeveloper

const fullstackDeveloper : FullStackDeveloper = {
    skills: ['HTML', 'CSS', "EXPRESS"],
    designation1: "FrontEnd Developer",
    designation2: "BackEnd Developer",
}











}