function twoNumberSum(array, targetSum) {
    for (let index = 0; index < array.length; index++) {
      no_check_index = index
      for(let index2=0; index2 < array.length; index2++){
        if(index2 != index){
          if(array[index]+array[index2] == targetSum){
            return [array[index], array[index2]]
          }
        }
      }
    }
    // Write your code here.
}



//alternatively a guy solved in this way 
function twoNumberSum(array, targetSum) {
    for (let index = 0; index < array.length; index++) {
      no_check_index = index
      for(let index2=0; index2 < array.length; index2++){
        if(index2 != index){
          if(array[index]+array[index2] == targetSum){
            return [array[index], array[index2]]
          }
        }
      }
    }
    return []
    // Write your code here.
  }
  
  // Do not edit the line below.
  exports.twoNumberSum = twoNumberSum;

  /*
  When X+Y=Z then y we should be able to find Y=Z-X
  */
  