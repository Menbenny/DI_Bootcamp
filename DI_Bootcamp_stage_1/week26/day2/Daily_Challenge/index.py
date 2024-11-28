matrix = [
    ['7', 'i', 'i'],
    ['T', 's', 'x'],
    ['h', '%', '?'],
    ['i', ' ', '#'],
    ['s', 'M', ' '],
    ['$', 'a', ' '],
    ['#', 't', '%'],
    ['^', 'r', '!']
]

def decoded_matrix(matrix):
    rows = len(matrix)
    cols = len(matrix[0])
    decoded_message = ""

    for col in range(cols):
        col_message = ""

        for row in range(rows):
            char = matrix[rows][col]

            if char.isalpha():
                col_message += char

            else:
                if col_message and col_message[-1] != " ":
                    col_message += " "

        decoded_message += col_message

    return decoded_message.strip()

secret_message = decoded_matrix(matrix)
print("Decoded Secret Message:", secret_message)
