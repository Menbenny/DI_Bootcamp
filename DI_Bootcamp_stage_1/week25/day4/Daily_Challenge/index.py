# Daily Challenge : Lists & Strings
# Last Updated: September 22nd, 2023

# What You will learn :
# Python Basics
# Loops


# Instructions
# Challenge 1
# Ask the user for a number and a length.
# Create a program that prints a list of multiples of the number until the list length reaches length.
# Examples

# number: 7 - length 5 ➞ [7, 14, 21, 28, 35]

# number: 12 - length 10 ➞ [12, 24, 36, 48, 60, 72, 84, 96, 108, 120]

# number: 17 - length 6 ➞ [17, 34, 51, 68, 85, 102]

the_number = int(input("Enter a the_number: "))
length = int(input("Rnter the length: "))

def get_multiples(the_number, lnegth):
    multiples = []
    for i in range(1, length + 1):
        multiples.append(the_number * i)
    return multiples
    

result = get_multiples(the_number, length)


# Challenge 2
# Write a program that asks a string to the user, and display a new string with any duplicate consecutive letters removed.
# Examples

# user's word : "ppoeemm" ➞ "poem"

# user's word : "wiiiinnnnd" ➞ "wind"

# user's word : "ttiiitllleeee" ➞ "title"

# user's word : "cccccaaarrrbbonnnnn" ➞ "carbon"
# Notes
# Final strings won’t include words with double letters (e.g. “passing”, “lottery”).

def remove_consecutive_duplicates(word):
    result = []
    prev_char = ""
    for char in word:
        if char != prev_char:
            result.append(char)
        prev_char = char
    return ''.join(result)

word = input("Enter a word: ")
result = remove_consecutive_duplicates(word)
print(f"The word wothoug consecutive duplicaes is: {result}")

# Duration & Difficulty