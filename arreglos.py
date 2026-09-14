#DECLARANDO UN ARREGLO
numeros = [10, 20, 30, 40, 50]

#Imprimimos un elemento especial
print(numeros[2])

#Reasignacion 
numeros[3]= 35
print(numeros)

#agregamos nuevo valor
numeros.append(60)
print(numeros)

#eliminamos un valor en el arreglo
numeros.remove(35)
print(numeros)

#eliminos un valor usando el arreglo usando la posicion
numeros.pop(4)
print(numeros)

fruta = ["Manzana", "Fresa", "Sandia", "Mango", "Melon", "Platano"]
fruta.pop(4)
print(fruta)