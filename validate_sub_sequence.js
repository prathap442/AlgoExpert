function isValidSubsequence(array, sequence) {
  // Write your code here.
  var i=0;
  array.forEach((element)=>{
    if(element == sequence[i]){
      i += 1
    }
  })

  return  JSON.stringify(sequence.slice(0,i)) == JSON.stringify(sequence)
}
console.log(isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [1, 6, -1, -1]))
