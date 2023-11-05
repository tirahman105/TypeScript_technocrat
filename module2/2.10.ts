{
    // 

// mapped type 

const arrOfNumber : number[] = [1,2,3,4]
// const arrOfString : string[] = ['1','2','3']

const arrOfStrings : string[] = arrOfNumber.map(number=> number.toString())
console.log(arrOfStrings)

// const arrOfString : string[] = ['Tareq', 'Anonna', 'Tithi']


// mapped array

type AreaNumber = {
    height: number ;
    width: number
}

type Height = AreaNumber["height"] //look up type 

// keyof AreaNumber => "height" | "width"

type AreaString<T> = {
    [key in keyof T ] : T[key];
}


const area1 : AreaString<{height: string; width: number}> = {
    height: "100",
    width: 50
}















    // 
}