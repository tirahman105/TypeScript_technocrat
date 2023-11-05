{
    // 
// conditional type


type a1 =null
type b1 = undefined

type x = a1 extends null ? true : false //conditional type 
type y = a1 extends null ? true : b1 extends undefined ? undefined : any ; 



type Sheikh = {
    bike: string;
    car: string;
    ship: string;
}

// keyof Sheikh



// type CheckVehicle <T> = T extends "bike" | "car" | "ship" ? true : false 
type CheckVehicle <T> = T extends keyof Sheikh ? true : false 

type HasShip = CheckVehicle<"ship">














    // 
}