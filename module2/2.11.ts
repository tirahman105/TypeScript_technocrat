{

    // 

// utility types


// pick type 
type Person = {
    name: string;
    age: number;
    email?: string;
    contactNo: string
}

type NameAge = Pick<Person, "name"| "age">


// Omit 

type ContactInfo = Omit<Person, "name" | "age">


// Required 

type PersonRequired = Required<Person>

//  Partial 

type PersonPartial = Partial<Person>

//  Read Only

type PersonReadonly = Readonly<Person>



// Record 

type MyObj = Record<string,string>

const EmptyObj : Record<string, unknown> = {}

const obj1: MyObj = {
    a: "aa",
    b: "bb"
}

    // 
}