weight = 41.5

# Ground shipping

"""
Calculates shipping cost based on variable inputs
"""

if weight <= 2:
  cost = (weight * 1.50) + 20
elif weight <= 6:
  cost = (weight * 3.00) + 20
elif weight <= 10:
  cost = (weight * 4.00) + 20
elif weight > 10:
  cost = (weight * 4.75) + 20
else:
  print('Error!')

print("Regular shipping: " + str(cost) + "\n")
# Premium Shipping

cost_premium = 125.0
print("Premium shipping costs US$ 125 \n")

# Drone shipping
if weight <= 2:
  cost = (weight * 4.50)
elif weight <= 6:
  cost = (weight * 9.00)
elif weight <= 10:
  cost = (weight * 12.00)
elif weight > 10:
  cost = (weight * 14.25)
else:
  print('Error!')

print('Drone shipping costs: ' + str(cost))
