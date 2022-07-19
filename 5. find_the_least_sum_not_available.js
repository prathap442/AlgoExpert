//Returns the minium sum change that cannot formed
function nonConstructibleChange(coins) {
    let h1 = {}
    // Write your code here.
    coins = coins.sort((a, b)=>{return a-b})
    change = 0

    coins.forEach((coin)=>{
      if(change+1 < coin){
        return;
      }
      change += coin
    })
    return change+1
}

let coins = [5, 7, 1, 1, 2, 3, 22];
console.log(nonConstructibleChange(coins))