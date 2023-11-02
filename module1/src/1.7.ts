{
// Spread operator
// rest operator
// destructuring 


// Learn Spread operator
//  for array
const bros1: string[] = ['Mir', 'Firoz', 'Mizan']
const bros2: string[] = ['Tanmoy', 'Nahid', 'Rahat']

bros1.push(...bros2)


// for object

const mentors1 = {
    typescript: 'Mezba',
    redux: 'Mir',
    dbms: 'Mizan'
}

const mentors2 ={
    prisma: 'Firoz',
    next: 'Tonmoy',
    cloud: 'Nahid'
}

const mentorList= {
    ...mentors1,
    ...mentors2
};
console.log(mentorList);

// learn rest operator 

// const greetFriends = (friend1: string, friend2: string, friend3: string) => {
//     console.log(`Hi ${friend1} ${friend2} ${friend3}`);
// };
// greetFriends("Abul", "Kabul", "Babul");


const greetFriends = (...friends: string[]) => {
    friends.forEach((friend:string) => console.log(`hi ${friend}`))
}
greetFriends("Abul", "Kabul", "Babul", "Habul");
}




