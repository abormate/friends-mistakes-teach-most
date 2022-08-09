# Codey's varying weights on different planets with different specific gravities

print("I have information for the following planets:\n")

print("   1. Venus   2. Mars    3. Jupiter")
print("   4. Saturn  5. Uranus  6. Neptune\n")

weight = 185
planet = 3

# Write an if statement below:
if planet == 1:
  weight *= 0.91
  print("Codey's weight is " + str(weight) + " on Venus")
elif planet == 2:
  weight *= 0.38
  print("Codey's weight is " + str(weight) + " on Mars")
elif planet == 3:
  weight *= 2.34
  print("Codey's weight is " + str(weight) + " on Jupiter")
elif planet == 4:
  weight *= 1.06
  print("Codey's weight is " + str(weight) + " on Saturn")
elif planet == 5:
  weight *= 0.92
  print("Codey's weight is " + str(weight) + " on Uranus")
else:
  weight *= 1.19
  print("Codey's weight is " + str(weight) + " on Neptune")
