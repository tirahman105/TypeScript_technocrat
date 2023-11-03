{
// 

// ternary operator || optional chaining || nullishing coalescing operator 


const age: number = 15;

if (age >= 18){
    console.log("adult")
}else{
    console.log("not adult")
}

const isAdult = age >= 18 ? 'adult' : 'not adult';
// console.log({ isAdult });



// nullish coalescing operator 
// null / undefined --> decision making 

const isAuthenticated = "" ;

const result1 = isAuthenticated ?? 'Guest'
const result2 = isAuthenticated ? isAuthenticated : "Guest"

console.log({result1}, {result2});


type User = {
    name: string;
    address:{
        city: string;
        presentAddress: string;
        parmanentAddress?: string;
    }
}

const user : User ={
    name: 'Tareq',
    address: {
        city: 'Dhaka',
        presentAddress: "Kuril, Dhaka",
    }
}

const permanentAddress = user?.address?.parmanentAddress ?? 'No Permanent address found'

console.log({permanentAddress})



// 
}