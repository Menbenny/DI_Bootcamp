
# What You will learn :
# Python Basics
# Conditionals
# Loops


# Instructions
# Using the input function, ask the user for a string. The string must be 10 characters long.
# If it’s less than 10 characters, print a message which states “string not long enough”.
# If it’s more than 10 characters, print a message which states “string too long”.
# If it’s 10 characters, print a message which states “perfect string” and continue the exercise.

# Then, print the first and last characters of the given text.
# The user enters "HelloWorld"
# Then you have to print 
# H
# d

user_string = input("Enter a 10 character string: ")
length = len(user_string)
print(len(user_string))

if (10 < length):
    print("string too long!")
elif (10 > length):
    print("string too short")
elif (length == 10) :
    print("string is perfect, continue the exercise")
    print(user_string[0], user_string[length - 1])


# 3. Using a for loop, construct the string character by character: Print the first character, then the second, then the third, until the full string is printed. For example:

# The user enters "HelloWorld"
# Then, you have to construct the string character by character
# H
# He
# Hel
# ... etc
# HelloWorld


# 4. Bonus: Swap some characters around then print the newly jumbled string (hint: look into the shuffle method). For example:

# Hlrolelwod


