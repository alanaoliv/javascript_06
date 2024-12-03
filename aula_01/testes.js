const leia = require('readline-sync')

let n1, n2;

n1 = leia.questionInt("Digite o primeiro numero: ")
n2 = leia.questionInt("Digite o segundo numero: ")

console.log("A Variável N1 possui o valor: ", n1)
console.log("A Variável N2 possui o valor: ", n2)

//soma = n1 + n2

console.log("A Soma de n1 + n2 é igual à: ", n1 + n2)
console.log("A Subtração de n1 - n2 é igual à: ", n1 - n2)
console.log("A Multiplicação de n1 * n2 é igual à: ", n1 * n2)
console.log("A Multiplicação de n1 * n2 é igual à: ", n1 * n2)
console.log("A Potenciação de n1 ^ n2 é igual à: ", Math.pow(n1, n2))
console.log("A Raiz Quadrada de n1 é igual à: ", Math.sqrt(n1))

Math.pow