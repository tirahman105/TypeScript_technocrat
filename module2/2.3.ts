{
    // 

// generic 

type GenericArray<T> = Array<T>

// const rollNumber : number [] = [2,4,6]
const rollNumber : GenericArray<number> = [2,4,6]

// const mentors : string [] = ['Tareq', 'Anonna', 'Tahsin']
const mentors : GenericArray<string> = ['Tareq', 'Anonna', 'Tahsin']

// const boolArray : boolean [] = [true, true, false] 
const boolArray : GenericArray<boolean>= [true, true, false] 


const user : GenericArray<{name: string, age: number}> = [
    {
        name: 'Tareq',
        age: 33
    },
    {
        name: 'Anonna',
        age: 26
    }
]


// generic tuple 

type GenericTuple <X,Y> = [X,Y]

const manush : GenericTuple<string,string> = ['Mr. X', 'Mr. Y']


const nameWithId : GenericTuple<number, {name: string, email: string}> = [12, {name: 'Tareq', email: 'mail@gmail.com'}]





    // 
}