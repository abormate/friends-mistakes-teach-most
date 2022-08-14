# Outputs true if base number raised with another number equals to greater than 5,000

def large_power(base, exponent):
  if base ** exponent > 5000:
    return True
  else:
    return False
