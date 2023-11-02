{
// destructuring


const user = {
    id: 123,
    name:{
        firstName: "Tareq",
        middleName: "Ibna",
        lastName: "Rahman",
    },
    contactNo: "017777777",
    address: "Dhaka",
};

const {  contactNo,
    name: {middleName : midName},
} = user;


// Array destructuring

const myFriends = [' Porag','Tahsin', 'Anonna', 'Kanon', 'Rimi', 'Nuha' ]


const [,, bestFriend, ...rest] = myFriends;




// const [a, b, bestFriend] = myFriends;


}