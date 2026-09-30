//rest paratmaer sall wos af unction ot sacppce ta varbiale numer bs argumets
// also used ...
function sum(...nums){
    console.log(nums)
    let total = 0
    for(let num of nums){
        total += num
    }
    return total;
}
let total = sum(1,2,3,4,5,6,7,8)
console.log(total)