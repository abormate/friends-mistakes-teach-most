# description for the chair
lovely_loveseat_description = """
Lovely Loveseat. Tufted polyester blend on wood. 32 inches high x 40 inches wide x 30 inches deep. Red or white.
"""

# comment addition for Python

# price of the seat
lovely_loveseat_price = 254.00

# another chair
stylish_settee_description = """
Stylish Settee. Faux leather on birch. 29.50 inches high x 54.75 inches wide x 28 inches deep. Black.
"""

# stylish settee price
stylish_settee_price = 180.50

# luxurious lamp
luxurious_lamp_description = """
Luxurious Lamp. Glass and iron. 36 inches tall. Brown with cream shade.
"""

luxurious_lamp_price = 52.15

# sales tax
sales_tax = 0.088

# customer 1 tally of expenses
customer_one_total = 0

# list of descriptions of things theyre purchasing
customer_one_itemization = ""

# customer one gets the lovely loveseat
customer_one_total += lovely_loveseat_price

# add description of items purchased
customer_one_itemization += lovely_loveseat_description

# customer one adds lamp to purchase list
customer_one_total += luxurious_lamp_price

# add lamp description to itemization for customer one
customer_one_itemization += luxurious_lamp_description

# sales tax for customer one
customer_one_tax = customer_one_total * sales_tax

# total price = sales tax + cost of items
customer_one_total += customer_one_tax

# start printing the customer receipt
print("Customer One Items", customer_one_itemization, "Customer One Total", customer_one_total)
