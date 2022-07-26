def perform_quick_sort(arr):
  left_end_array = []
  right_end_array = []

  if(len(arr)<=1):
    return arr
  else:
    pivot = arr[0]
    for element in arr[1:]:
      if(element < pivot):
        left_end_array.append(element)
      else:
        right_end_array.append(element)
    return perform_quick_sort(left_end_array)+[pivot]+perform_quick_sort(right_end_array)



print(perform_quick_sort([143,12,35,63]))
    