# print(dir(3+15))

my_string = "string`s"

# Data type 

hello = "hello there"
print(hello.capitalize()) # Makes first letter of string capital 

Hello = "hello there"
print(Hello.title()) # each word upper case 

Greetings = 'Privet, kak dila?'

print(Greetings.replace('Privet, kak dila', 'Shalom, Ma nishma'))

# strip() -- By default delets leading and ending spaces 
price2 = '$115'
price2 = price2.strip()
price2 = price2.strip('$')
print(price2)

userName = input("Enter your name: ")

# f strings -- To concatinate variables

print(f"Ola, {userName}")