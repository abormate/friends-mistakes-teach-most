# Python function that evaluates lists item/element quantities and returns the list that has more elements inside.

def larger_list(lst1, lst2):
  if len(lst1) >= len(lst2):
    return lst1[-1]
  else:
    return lst2[-1]
