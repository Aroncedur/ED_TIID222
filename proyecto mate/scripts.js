const FILAS = 10;

const COLUMNAS = 10;

const NUMERO_RANGOS = 10;


const colores = [

    "#1739b7",

    "#2861c7",

    "#4385d1",

    "#61a8d3",

    "#82c7cc",

    "#b4d68f",

    "#e4d86c",

    "#f4b54f",

    "#ed6b3d",

    "#e52323"

];



// Inicialmente todos los valores son 0

let matriz = [];



function inicializarMatriz() {

    matriz = [];

    for (let y = 0; y < FILAS; y++) {

        let fila = [];

        for (let x = 0; x < COLUMNAS; x++) {

            fila.push(0);

        }

        matriz.push(fila);
    }
}


const matrizHTML =
    document.getElementById("matriz");

const ejeX =
    document.getElementById("ejeX");

const ejeY =
    document.getElementById("ejeY");

const zMinHTML =
    document.getElementById("zMin");

const zMaxHTML =
    document.getElementById("zMax");

const paletaHTML =
    document.getElementById("paleta");

const coordenadaX =
    document.getElementById("coordenadaX");

const coordenadaY =
    document.getElementById("coordenadaY");

const valorZ =
    document.getElementById("valorZ");

const ordenarXY =
    document.getElementById("ordenarXY");

const btnAplicar =
    document.getElementById("btnAplicar");

const btnRandom =
    document.getElementById("btnRandom");



function crearEjes() {

    ejeX.innerHTML = "";

    ejeY.innerHTML = "";


    // EJE X

    for (let x = 0; x < 10; x++) {

        const numero = document.createElement("div");

        numero.textContent = x;

        ejeX.appendChild(numero);
    }


    // EJE Y

    for (let y = 0; y < 10; y++) {

        const numero = document.createElement("div");

        numero.textContent = y;

        ejeY.appendChild(numero);
    }
}



function obtenerMinimo() {

    let minimo = matriz[0][0];


    for (let y = 0; y < FILAS; y++) {

        for (let x = 0; x < COLUMNAS; x++) {

            if (matriz[y][x] < minimo) {

                minimo = matriz[y][x];
            }
        }
    }


    return minimo;
}


function obtenerMaximo() {

    let maximo = matriz[0][0];


    for (let y = 0; y < FILAS; y++) {

        for (let x = 0; x < COLUMNAS; x++) {

            if (matriz[y][x] > maximo) {

                maximo = matriz[y][x];
            }
        }
    }


    return maximo;
}


function obtenerColor(valor, minimo, maximo) {

    // Si todos los valores son iguales

    if (minimo === maximo) {

        return colores[0];
    }


    // Diferencia entre máximo y mínimo

    const diferencia = maximo - minimo;


    // Convertimos el valor a una posición
    // entre 0 y 9

    let posicion = Math.floor(

        ((valor - minimo) / diferencia)
        * NUMERO_RANGOS

    );


    // Evitamos superar el índice 9

    if (posicion >= NUMERO_RANGOS) {

        posicion = NUMERO_RANGOS - 1;
    }


    if (posicion < 0) {

        posicion = 0;
    }


    return colores[posicion];
}



function mostrarPaleta() {

    paletaHTML.innerHTML = "";


    for (let i = 0; i < colores.length; i++) {

        const color = document.createElement("div");

        color.classList.add("color-paleta");

        color.style.backgroundColor = colores[i];

        paletaHTML.appendChild(color);
    }
}


function mostrarMatriz() {

    matrizHTML.innerHTML = "";


    const minimo = obtenerMinimo();

    const maximo = obtenerMaximo();


    // Mostrar mínimo y máximo

    zMinHTML.textContent =
        minimo.toFixed(2);

    zMaxHTML.textContent =
        maximo.toFixed(2);


    // Crear las 100 celdas

    for (let y = 0; y < FILAS; y++) {

        for (let x = 0; x < COLUMNAS; x++) {

            const valor = matriz[y][x];


            // Crear celda

            const celda =
                document.createElement("div");


            celda.classList.add("celda");


            // Mostrar el valor

            celda.textContent =
                valor.toFixed(1);


            // Obtener color

            const color =
                obtenerColor(
                    valor,
                    minimo,
                    maximo
                );


            celda.style.backgroundColor =
                color;


            // Información al pasar el mouse

            celda.title =
                `X: ${x} | Y: ${y} | Z: ${valor.toFixed(2)}`;


            // Agregar celda

            matrizHTML.appendChild(celda);
        }
    }
}


function aplicarPunto() {

    let x =
        parseInt(coordenadaX.value);

    let y =
        parseInt(coordenadaY.value);

    let z =
        parseFloat(valorZ.value);


    // Verificar coordenadas

    if (
        isNaN(x) ||
        x < 0 ||
        x > 9
    ) {

        alert(
            "La coordenada X debe estar entre 0 y 9."
        );

        return;
    }


    if (
        isNaN(y) ||
        y < 0 ||
        y > 9
    ) {

        alert(
            "La coordenada Y debe estar entre 0 y 9."
        );

        return;
    }


    // Verificar Z

    if (isNaN(z)) {

        alert(
            "Introduce un valor válido para Z."
        );

        return;
    }


    if (ordenarXY.checked) {

        // Colocamos primero el menor

        if (x > y) {

            const temporal = x;

            x = y;

            y = temporal;
        }
    }

    matriz[y][x] = z;



    mostrarMatriz();
}


function randomizarRaster() {

    for (let y = 0; y < FILAS; y++) {

        for (let x = 0; x < COLUMNAS; x++) {

            // Generar valores entre -50 y 50

            const valor =
                Math.random() * 100 - 50;


            // Redondear a dos decimales

            matriz[y][x] =
                Math.round(valor * 100) / 100;
        }
    }


    // Mostrar resultado

    mostrarMatriz();
}



btnAplicar.addEventListener(
    "click",
    aplicarPunto
);


btnRandom.addEventListener(
    "click",
    randomizarRaster
);


matrizHTML.addEventListener(
    "click",
    function(event) {

        if (
            !event.target.classList.contains("celda")
        ) {

            return;
        }


        // Obtener posición de la celda

        const celdas =
            Array.from(
                matrizHTML.children
            );


        const indice =
            celdas.indexOf(event.target);


        const x =
            indice % COLUMNAS;


        const y =
            Math.floor(
                indice / COLUMNAS
            );


        // Colocar coordenadas
        // automáticamente en los campos

        coordenadaX.value = x;

        coordenadaY.value = y;

    }
);



inicializarMatriz();

crearEjes();

mostrarPaleta();

mostrarMatriz();