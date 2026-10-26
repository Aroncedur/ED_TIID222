# Clase que representa un nodo
class Nodo:

    def __init__(self, numero):
        # Estructura de un nodo [numero][referencia]
        self.numero = numero
        self.siguiente = None


# Clase que va a administrar todos los nodos de las listas enlazadas
class ListEnlazada:

    def __init__(self):
        self.cabeza = None

    # Método para insertar un nodo al inicio de la lista
    def Insertar_Nodo_al_Inicio(self, numero):
        # Crear un nuevo nodo con el numero recibido
        nuevo_nodo = Nodo(numero)

        # Comprobar si la lista está vacía
        if self.cabeza is None:
            # Vamos a pasar el nuevo nodo en nuestra cabeza
            self.cabeza = Nodo(numero)
            return

        # Si la lista ya tenía nodos, el nuevo nodo apunta al que era la cabeza
        nuevo_nodo.siguiente = self.cabeza

        # Actualizar nuestra cabeza para que apunte al nuevo nodo
        self.cabeza = nuevo_nodo

    # Método para insertar un nodo al final de la lista
    def Insertar_Nodo_al_Final(self, numero):
        # Crear el nodo con el número que se recibe
        nuevo_nodo = Nodo(numero)

        # Comprobar si la lista está vacía
        if self.cabeza == None:
            # Si la lista está vacía, el nuevo nodo será el primero (cabeza)
            self.cabeza = nuevo_nodo
            return

        # Referencia temporal al primer nodo
        actual = self.cabeza

        # Avanzar mientras exista un nodo siguiente (Actual.siguiente)
        while actual.siguiente:
            # Mi actual ahora pasa a ser mi actual.siguiente
            actual = actual.siguiente

        # Cuando ya no hay un actual.siguiente es ahí cuando conecta al nuevo
        actual.siguiente = nuevo_nodo

    # Método para imprimir nuestra lista enlazada
    def Imprimir_ListaEnlazada(self):

        actual = self.cabeza

        while(actual):

            # Con esta línea imprimimos nuestra lista sin saltos de línea
            print(actual.numero, " -> ", end=" ")

            # Avanzamos al siguiente nodo y ahora ese será el actual
            actual = actual.siguiente

        # Sino apunta a None
        print("None")


# Instancia y ejecución
Mi_lista = ListEnlazada()
Mi_lista.Insertar_Nodo_al_Inicio(2)
Mi_lista.Insertar_Nodo_al_Inicio(1)
Mi_lista.Insertar_Nodo_al_Final(56)
Mi_lista.Imprimir_ListaEnlazada()

