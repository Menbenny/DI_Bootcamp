import random

def favorite_book(title):

    print(f"One of my fafvorite books is {title}")

favorite_book("Think and Grow Rich")

def describe_city(city, country="Iceland"):
    print(f"{city} is in {country}")

describe_city("Reyjavik")
describe_city("Paris", "France")

def compare_numbers(user_number):
    random_number = random.randint(1, 100)
    if user_number == random_number:
        print("Success! Both nubers are the same")
    else:
        print(f"Fail! Your number is {user_number}, and the random number is {random_number}")

compare_numbers(44)

def make_shirt(size="large", text="I love Python"):
    print(f"The size of the shirt is {size}, and it read {text}.")

make_shirt()
make_shirt(size="medium")
make_shirt(size="small", text="Code is life")
make_shirt(size="Extra large", text="Keep calm and Code")

magician_names = ['Harry Houddini', 'David Blaine', 'Criss Angel']

def show_magicians(magicians):
    for magician in magicians:
        print(magician)

def make_great(magicians):
    for i in range(len(magicians)):
        magicians[i] = f"{magicians[i]} the great"

make_great(magician_names)
show_magicians(magician_names)