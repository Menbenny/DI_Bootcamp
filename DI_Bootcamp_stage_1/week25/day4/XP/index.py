
# 🌟 Exercise 1 : Favorite Numbers
# Instructions
# Create a set called my_fav_numbers with all your favorites numbers.
# Add two new numbers to the set.
# Remove the last number.
# Create a set called friend_fav_numbers with your friend’s favorites numbers.
# Concatenate my_fav_numbers and friend_fav_numbers to a new variable called our_fav_numbers.

# my_fav_numbers = [1, 2, 3, 4, 5, 6, 7, 8]

# my_fav_numbers.append(22)
# my_fav_numbers.append(33)


# my_fav_numbers.remove(33)
# print(my_fav_numbers)

# friend_fav_numbers = [55, 66, 77, 87]

# all_numbers = my_fav_numbers + friend_fav_numbers
# print(all_numbers)



# 🌟 Exercise 2: Tuple
# Instructions
# Given a tuple which value is integers, is it possible to add more integers to the tuple?

#! Not possible


# 🌟 Exercise 3: List
# Instructions
# Using this list basket = ["Banana", "Apples", "Oranges", "Blueberries"];

# Remove “Banana” from the list.
# Remove “Blueberries” from the list.
# Add “Kiwi” to the end of the list.
# Add “Apples” to the beginning of the list.
# Count how many apples are in the basket.
# Empty the basket.
# Print(basket)

# basket = ["Banana", "Apples", "Oranges", "Blueberries"]
# basket.remove("Banana")
# basket.remove("Blueberries")

# basket.append("Apples")

# print(basket)

# 🌟 Exercise 4: Floats
# Instructions
# Recap – What is a float? What is the difference between an integer and a float?
#? - float has a decimal point 

# Create a list containing the following sequence 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5 (don’t hard-code the sequence).
# Can you think of another way to generate a sequence of floats?




# 🌟 Exercise 5: For Loop
# Instructions
# Use a for loop to print all numbers from 1 to 20, inclusive.
# Using a for loop, that loops from 1 to 20(inclusive), print out every element which has an even index.

# for x in range(1, 21):
#     print(x)
#     if (x - 1) % 2 == 0:  
#         print(x)

# 🌟 Exercise 6 : While Loop
# Instructions
# Write a while loop that will continuously ask the user for their name, unless the input is equal to your name.

# name = "Vic"

# user_input = ''

# while user_input != name:
#     user_input = input("What is your name? ")


# 🌟 Exercise 7: Favorite fruits
# Instructions
# Ask the user to input their favorite fruit(s) (one or several fruits).
# Hint : Use the built in input method. Ask the user to separate the fruits with a single space, eg. "apple mango cherry".
# Store the favorite fruit(s) in a list (convert the string of words into a list of words).
# Now that we have a list of fruits, ask the user to input a name of any fruit.
# If the user’s input is in the favorite fruits list, print “You chose one of your favorite fruits! Enjoy!”.
# If the user’s input is NOT in the list, print, “You chose a new fruit. I hope you enjoy”.

# favorite_fruits = input("Enter your favorite fruits and separate with space between each entry: ").split()

# print(favorite_fruits)

# fruit_choice = input("Choose a fruit: ")

# if fruit_choice in favorite_fruits:
#     print(f"{fruit_choice}: You chose one of your favrite fruits, Enjoy!")
# else:
#     print(f"{fruit_choice}: You chose a new fruit. I hope you enjoy")


# Exercise 8: Who ordered a pizza ?
# Instructions
# Write a loop that asks a user to enter a series of pizza toppings, when the user inputs ‘quit’ stop asking for toppings.
# As they enter each topping, print a message saying you’ll add that topping to their pizza.
# Upon exiting the loop print all the toppings on the pizza pie and what the total price is (10 + 2.5 for each topping).

# toppings = []
# base_price = 10
# topping_price = 2.5

# while True:
#     topping = input("Enter a topping: ").strip()

#     if topping.lower() == 'quit':
#         break

#     toppings.append(topping)
#     print(f"{topping} will be added to your pizza")

# total_price = base_price + (topping_price * len(toppings))

# print("\nYour pizza order")
# print("Base pizza = $10")
# if toppings:
#     print("toppings: ")
#     for topping in toppings:
#         print(f"Total price: ${total_price:.2f}")

# Exercise 9: Cinemax
# Instructions
# A movie theater charges different ticket prices depending on a person’s age.
# if a person is under the age of 3, the ticket is free.
# if they are between 3 and 12, the ticket is $10.
# if they are over the age of 12, the ticket is $15.

# Ask a family the age of each person who wants a ticket.

# Store the total cost of all the family’s tickets and print it out.

# A group of teenagers are coming to your movie theater and want to watch a movie that is restricted for people between the ages of 16 and 21.
# Given a list of names, write a program that asks teenager for their age, if they are not permitted to watch the movie, remove them from the list.
# At the end, print the final list.

# total_cost = 0
# family_ages = []

# user = input("Family or single ticket? ").strip().lower()
# if user.lower() == 'single':

#     age = int(input("Enter your age: "))

#     if age < 3:
#         print("ticket is free")
#     elif 3<= age <= 12:
#         ticket_price = 10
#         total_cost += ticket_price
#         print(f"Ticket price: {ticket_price}")
#     else:
#         ticket_price = 15
#         total_cost += ticket_price
#         print(f"Ticket price: {ticket_price}")

# elif user.lower() == 'family':
#     age = input("Enter the family members ages separated by spaces: ").strip()

#     family_ages.append(age)

#     for age in family_ages:
#         if age < 3:
#             print("ticket is free")
#         if age >= 3 & age <= 12:
#             ticket_price = 10
#             print(f"Ticket price: {ticket_price}")
#         if age > 12:
#             ticket_price = 15
#             print(f"Ticket price: {ticket_price}")
        


# Exercise 10 : Sandwich Orders
# Instructions
# Using the list below :

# sandwich_orders = ["Tuna sandwich", "Pastrami sandwich", "Avocado sandwich", "Pastrami sandwich", "Egg sandwich", "Chicken sandwich", "Pastrami sandwich"]

# The deli has run out of pastrami, use a while loop to remove all occurrences of “Pastrami sandwich” from sandwich_orders.
# We need to prepare the orders of the clients:
# Create an empty list called finished_sandwiches.
# One by one, remove each sandwich from the sandwich_orders while adding them to the finished_sandwiches list.
# After all the sandwiches have been made, print a message listing each sandwich that was made, such as:
# I made your tuna sandwich
# I made your avocado sandwich
# I made your egg sandwich
# I made your chicken sandwich