def findClosestValueInBst(tree, target):
    # Write your code here.
    def find_recursive_naturewise(tree, closest):
      if !tree:
        return  closest
      else:
        if abs(tree.value - target) < closest:
          closest = tree.value
          print("Updated the closest value to be": closest)
        
        if target > tree.value:
          print("search towards right")
          return find_recursive_naturewise(tree.right, closest)
        elif target < tree.value:
          print("search towards left")
          return find_recursive_naturewise(tree.left, closest)
        

    find_recursive_naturewise(tree, float('inf'))



# This is the class of the input tree. Do not edit.
class BST:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None
