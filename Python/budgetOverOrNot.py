def over_budget(budget, food_bill, electricity_bill, internet_bill, rent):
  expenses = food_bill + electricity_bill + internet_bill + rent
  if budget < expenses:
    return True
  else:
    return False
