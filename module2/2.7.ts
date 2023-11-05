{
    // 

// generic constrain with key of operator 

type Vehicle = {
    bike: string;
    car: string;
    ship: string
}

type Owner = 'bike' | 'car' | 'ship' //manually 

type Owner2 = keyof Vehicle


const getPropertyValue = <X, Y extends keyof X> (obj: X, key:Y) => {
    return obj[key]
}

const user = {
    name : 'Tareq',
    age: 26,
    address: 'Dhaka'
}

const result1 = getPropertyValue(user, 'name')






















    // 
}