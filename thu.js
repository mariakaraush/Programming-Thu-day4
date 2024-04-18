// function mutliplyArray(arr) {
//     let result = 1;
//     for (const num of arr) {
//         result *= num
//     }
//     return result
// }

// const num = [2, 4, 6]
// console.log(mutliplyArray(num))

// const person = ["John", "Doe", 46];
// console.log(person[2])


// let examResults = {
//     steve: [99, 98, 95],
//     violet: [56, 53, 88],
//     aqil: [100, 100, 100],
// }

// console.log(examResults.steve)
// console.log(examResults.steve[0])
// console.log(examResults.steve.length)
// console.log(examResults.steve.includes(98))
// console.log(examResults.steve.includes("hello"))

// const dog = {
//     dogName : "Spot",
//     dogBreed : "Jack Russel",
//     dogAge : 4,
//     coatColour : ["Brown", "White"],
//     barkType : "Yap",
//     dogBark: function() {
//         return `${this.barkType} ${this.barkType} !`;
//     }
// };

// console.log(dog.dogBark());

let readline = require("readline-sync")


let library = [
    {
    title: "Dragonflight",
    author: "Anne McCaffrey",
    checkedOut: true
},
{
    title: "Hyperion",
    author: "Dan Simmons",
    checkedOut: false
},
{
    title: "The Road Ahead",
    author: "Bill Gates",
    checkedOut: true
}
];

// for (let i = 0; i < library.length; i++) {
//     let book = `'${library[i].title}' by '${library[i].author}';`;
//     if (library[i].checkedOut) {
//         console.log("Out on loan: " + book);
//     } else {
//         console.log("On the shelf: " + book);
//     }
// }


function searchBook(arr, title) {
    for (let i = 0; i < arr.length; i++) {
        if (title == arr[i].title) {
            if (arr[i].checkedOut) {
            return `Status: Out on loan, ${arr[i].title} by ${arr[i].author};`
            }
            return `Status: Available, ${arr[i].title} by ${arr[i].author};`
        }
    }
}

function booksAvailability(arr) {
    let countAvailable = 0;
    let countUnavailable = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].checkedOut) {
        countUnavailable ++
    } else {
        countAvailable ++
    }
    }
    return `Number of available books: ${countAvailable}
Number of Unavailable books: ${countUnavailable}`
}

function changeAvailability(arr, title) {

    for (let i = 0; i < arr.length; i++) {
        if (title == arr[i].title) {
            if (arr[i].checkedOut == true) {
                arr[i].checkedOut = false
                console.log(arr[i])
            } else {
                arr[i].checkedOut = true
                console.log(arr[i])
        }    
     }      
    }
    
}

// let userTitle = readline.question("Please enter the title of the book you are serching for: ")

// console.log(searchBook(library, userTitle))
// console.log(booksAvailability(library))
// console.log(changeAvailability(library, "Hyperion"))



const validWholeNumberRegEx = /^[0-9]+$/;
console.log(validWholeNumberRegEx.test(456))
console.log(validWholeNumberRegEx.test("4"))
console.log(validWholeNumberRegEx.test(4.4))
console.log(validWholeNumberRegEx.test("error"))

function validInput(input) {
    const aToZandSpaceregex = /^[A-Za-z]+$/
    return aToZandSpaceregex.test(input)
}

while (true) {
    userInput = readline.question("Please enter alpha chars only: ")
    if (validInput(userInput)) {
        console.log("Thank you. Please continue.")
        break;
    } else {
        console.log("Incorrect input")
    }
}