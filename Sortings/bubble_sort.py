def sort_by_bubble(arr):
  if(len(arr) <= 1):
    return arr
  else:
    counter  = len(arr)-1
    while(counter != 0):
      for idx, element in enumerate(arr):
        if(idx < len(arr)-1):
          if(arr[idx]>arr[idx+1]):
            tmp = arr[idx]
            arr[idx] = arr[idx+1]
            arr[idx+1] = temp
      counter -= 1
  return arr

print(sort_by_bubble([1,12,13,14]))