class BST{
  constructor(){
    this.value = value
    this.left =null
    this.right =null
  }
}

function dfs(tree, target, diff){
  if(!tree) return;
  const currentDiff = Math.abs(target - tree.value)
  if(currentDiff < diff.value){
    diff.closet = tree.value
    diff.value = currentDiff
  }
  if(target < tree.value){dfs(tree.left, target, diff)}
  else if(target > tree.value){dfs(tree.right, target, diff)}
}

function findClosestInBst(tree, target){
  const diff ={closest: null, value: Infinity};
  dfs(tree, target, diff)
  return dfs.closest
}

