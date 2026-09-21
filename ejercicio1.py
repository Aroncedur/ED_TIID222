
original = []
print("Introduce 15 números enteros (entre 0 y 500):")
for i in range(15):
    num = int(input(f"Número {i + 1}: "))
    original.append(num)

cincuerizado = [num if num % 5 == 0 else num + (5 - (num % 5)) for num in original]

print("\nArray original:    ", *original)
print("Array cincuerizado:", *cincuerizado)