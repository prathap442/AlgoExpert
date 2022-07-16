//My Solution 
/*
function sortedSquaredArray(array) {
  for (let index = 0; index < array.length; index++) {
    array[index] = (array[index]**2)
  }
  return array.sort((a,b)=> {return a-b })
}
*/

//Solution with top rated at AlgoExpert
function sortedSquaredArray(array) {
    var firstIndex = 0;
    var counter = array.length
    var lastIndex = counter-1;
    var arr1 = new Array(counter);
    var counter = array.length
    while(counter!=0){
      if(Math.abs(array[firstIndex]) > Math.abs(array[lastIndex])){
        arr1[counter-1] = Math.abs(array[firstIndex]**2)
        firstIndex+=1
      }
      else{
        arr1[counter-1] = Math.abs(array[lastIndex]**2)
        lastIndex-=1
      }
      counter-=1
    }
    return arr1
  }

console.log(sortedSquaredArray([-2, -1]));