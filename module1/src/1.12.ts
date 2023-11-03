{
    // 

// nullable type 

const searchName = (value: string | null) => {
    if(value){
        console.log("Searching");
    }else{
        console.log("There is nothing to search")
    }
}


searchName(null)


// unknown type of

const getSpeedInMeterPerSecond = (value: unknown) => {
    if(typeof value === 'number'){
        const convertedSpeed = (value*1000)/3600;
        console.log(`The speed is ${convertedSpeed} ms^-1`)
    }
    else if(typeof value == 'string'){
        const [result, unit] = value.split(' ')
        const convertedSpeed = (parseFloat(result)*1000)/3600;
        console.log(`The speed is ${convertedSpeed} ms^-1`)
    }
    else{
        console.log('Wrong input')
    }
};
getSpeedInMeterPerSecond(null)




// never type

const throwError = (msg: string): never => {
    throw new Error(msg);
}

throwError('Error hoy geche!')







    // 
}