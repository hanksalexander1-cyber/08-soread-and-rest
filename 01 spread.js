//spread allow expand or unpack iterable

let numbers = [1,2,3,4,5]
console.log(numbers)

let myMax = Math.max(numbers);
console.log(myMax);

let uname = "IwishWeWereMoreFocused";
let letters = [...uname]
console.log(letters);
//join it all back tg
console.log(letters.join('-'))

let sports = ["baseball", 'football', 'soccer']
let sportsCopy = sports
sportsCopy[0] = 'fortnite'
console.log(sports)
console.log(sportsCopy)

//copy array and elemetnts
let realCopy = [...sports]
realCopy[0] = 'blackjack'
console.log(sports)
console.log(realCopy)

let combined = sports + realCopy; //not good

console.log(combined)
combined = [...sports, ...realCopy, "happy birthday daniel", 'futa']
console.log(combined)