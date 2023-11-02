{
// Learning Function
// Normal Function 
// Arrow Function

// normal function in js
function add(num1 :number, num2: number): number {
    return num1 + num2;
}
add(2,2)

const addArrow = (num1:number, num2:number): number => num1+num2

const poorUser = {
    name: "Tareq",
    balance: 0,
    addBalance(balance: number): string {
        return `My New balance is: ${this.balance + balance}`;
    }
}

const arr : number[] = [1,2,3]

const newArray : number [] = arr.map((elem: number): number => elem*elem)

}