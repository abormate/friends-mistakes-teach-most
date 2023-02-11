# Challenge item 1

"""
Create a function called append_size that has one parameter named my_list.

The function should append the size of my_list (inclusive) to the end of my_list. The function should then return this new list.

For example, if my_list was [23, 42, 108], the function should return [23, 42, 108, 3] because the size of my_list was originally 3.
"""

def append_size(my_list):
  my_list.append(len(my_list))
  return my_list

# -----------------------------------------------------------------------

# Challenge item 2

"""
Write a function named append_sum that has one parameter — a list named named my_list.

The function should add the last two elements of my_list together and append the result to my_list. It should do this process three times and then return my_list.

For example, if my_list started as [1, 1, 2], the final result should be [1, 1, 2, 3, 5, 8].
"""

def append_sum(my_list):
  my_list.append(my_list[-1] + my_list[-2])
  my_list.append(my_list[-1] + my_list[-2])
  my_list.append(my_list[-1] + my_list[-2])
  return my_list

# -----------------------------------------------------------------------

"""
Let’s say we are working with two conveyor belts that contain items represented by a numerical ID. If one conveyor belt contains more items than the other, then we need to return the ID of the last item on that belt. In the case where they have the same number of items, return the last item from the first conveyor belt. In our code, we can represent the belts using lists. Here are the steps:

Define the function to accept two parameters for our two lists of numbers
Check if the length of the first list is greater than or equal to the length of the second list
If true, then return the last element from the first list. Otherwise, return the last element from the second list
"""
