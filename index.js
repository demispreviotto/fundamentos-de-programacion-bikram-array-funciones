// 1
const arrayVacio = [];

// 2
const arrayNumeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// 3
const arrayNumerosPares = [0, 2, 4, 6, 8];

// 4
const arrayBidimensional = [[0, 1, 2], ['a', 'b', 'c']];

// 5
function suma(a, b) {
    return a + b;
}

// 6
function potenciacion(a, b) {
    return Math.pow(a, b);
}

// 7
function separarPalabras(str) {
    return str.split(' ');
}

// 8
function repetirString(str, n) {
    return str.repeat(n);
}

// 9
function esPrimo(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;

    if (num % 2 === 0 || num % 3 === 0) return false;

    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
    }

    return true;
}

// 10
function ordenarArray(arr) {
    return arr.slice().sort((a, b) => a - b);
}

// 11
function obtenerPares(arr) {
    return arr.filter(num => num % 2 === 0);
}

// 12
function pintarArray(arr) {
    return arr.toString(arr)
}

// 13
function arrayMapi(arr, fn) {
    return arr.map(fn);
}

// 14
function eliminarDuplicados(arr) {
    const resultado = [];
    for (let i = 0; i < arr.length; i++) {
        if (!resultado.includes(arr[i])) {
            resultado.push(arr[i]);
        }
    }
    return resultado;
}

// 15
const arrayNumerosNeg = [0, -1, -2, -3, -4, -5, -6, -7, -8, -9];


// 16
const holaMundo = ['Hola', 'Mundo'];

// 17
const loGuardoTodo = ['hola', 'que', 23, 42.33, 'tal'];

// 18
const arrayDeArrays = [[756, 'nombre'], [225, 'apellido'], [298, 'direccion']];

// 19
function multiplicacion(a, b) {
    return a * b;
}

// 20
function division(a, b) {
    if (b === 0) {
        return 'No es posible dividir por cero.';
    }
    return a / b;
}

// 21
function esPar(num) {
    return num % 2 === 0;
}

// 22
function resta(a, b) {
    return a - b;
}

const arrayFunciones = [suma,
    resta,
    multiplicacion];

// 23
function ordenarArray2(arr) {
    return arr.slice().sort((a, b) => b - a);
}

// 24
function obtenerImpares(arr) {
    return arr.filter(num => num % 2 !== 0);
}

// 25
function sumarArray(arr) {
    let suma = 0;
    for (let i = 0; i < arr.length; i++) {
        suma += arr[i];
    }
    return suma;
}

// 26
function multiplicarArray(arr) {
    let multiplicacion = 1;
    for (let i = 0; i < arr.length; i++) {
        multiplicacion *= arr[i];
    }
    return multiplicacion;
}

console.log(suma(5, 3)); // 8
console.log(potenciacion(2, 3)); // 8
console.log(separarPalabras('Hola Mundo')); // ['Hola', 'Mundo']
console.log(repetirString('Hola ', 3)); // 'Hola Hola Hola '
console.log(esPrimo(17)); // true

console.log(ordenarArray([3, 1, 2, 5, 4])); // [1, 2, 3, 4, 5]
console.log(obtenerPares([1, 2, 3, 4, 5])); // [2, 4]
console.log(pintarArray([0, 1, 2])); // '[0, 1, 2]'
console.log(arrayMapi([1, 2, 3], num => num * 2)); // [2, 4, 6]
console.log(eliminarDuplicados([1, 2, 2, 3, 4, 4, 5])); // [1, 2, 3, 4, 5]

console.log(arrayNumerosNeg); // [0, -1, -2, -3, -4, -5, -6, -7, -8, -9]
console.log(holaMundo); // ['Hola', 'Mundo']
console.log(loGuardoTodo); // ['hola', 'que', 23, 42.33, 'tal']
console.log(arrayDeArrays); // [[756, 'nombre'], [225, 'apellido'], [298, 'direccion']]

console.log(division(6, 2)); // 3
console.log(esPar(4)); // true
console.log(arrayFunciones[2](4, 2)); // 8

console.log(ordenarArray2([3, 1, 2, 5, 4])); // [5, 4, 3, 2, 1]
console.log(obtenerImpares([1, 2, 3, 4, 5])); // [1, 3, 5]
console.log(sumarArray([1, 2, 3])); // 6
console.log(multiplicarArray([2, 3, 4])); // 24
