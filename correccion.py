
matriz = [
    [73, 12, 89, 14],
    [5, 61, 27, 94],
    [46, 18, 80, 3]
]

matriz.append([26, 93, 14, 33])
print(matriz)



print(matriz[1])
print(matriz[1][1])

for i in matriz:
    if 27 in i:
        print(f"27 econtrado en la fila  {i}")
        break

for filas in matriz:
    for numeros in filas:
        if numeros == 3:
            print(f"3 encontrado en {filas}")
            break
        