/*// Exercício 3 pt1

const op1 = 5 > 20 &&  5 < 2
console.log("op1",op1)

const op2 = 5 === 5 || 5 === '5'
console.log("op2",op2)

const op3 !(20 > 50)
console.log("op3",op3)

const op4 = !(20 > 50 || 50 > 60)
console.log("op4",op4)
*/
// Exercício 3 pt2

//1
const salarioFixo = 2000
const auxilioCreche = 45.50 * 2
const salarioFixoEBeneficios = salarioFixo + (auxilioCreche)
console.log(`Valor do salário fixo +auxilio creche é de : ${salarioFixoEBeneficios}`)
//2
const comissaoJan = 5784.50 * 0.1
console.log(`A comissão de janeiro foi de : ${comissaoJan}`)
//3
const salarioBrutoJan = salarioFixoEBeneficios + comissaoJan
const descontoINSSJan = salarioBrutoJan * 0.5
console.log(`O desconto no mês de Janeiro será de: ${descontoINSSJan}`)
//4
// salário janeiro
const salarioJan = salarioBrutoJan - descontoINSSJan
console.log(`O salário de janeiro é: ${salarioJan}`)
// salário fevereiro
const comissaoFev = 3418.41 * 0.1
const salarioBrutoFev = salarioFixoEBeneficios + comissaoFev
const descontoINSSFev = salarioBrutoFev * 0.5
const salarioFev = salarioBrutoFev - descontoINSSFev
console.log (`O salário de fevereiro é ${salarioFev}`)
// salário março
const comissaoMarco = 4124.10 * 0.1
const salarioBrutoMar = salarioFixoEBeneficios + comissaoMarco
const descontoINSSMar = salarioBrutoMar * 0.5
const salarioMar = salarioBrutoMar - descontoINSSMar
console.log (`O salário de março é: ${salarioMar}`)
// salário abril
const comissaoAbr = 1874.00 * 0.1
const salarioBrutoAbr = salarioFixoEBeneficios + comissaoAbr
const descontoINSSAbr = salarioBrutoAbr * 0.5
const salarioAbr = salarioBrutoAbr - descontoINSSAbr
console.log (`O sálario de abril é: ${salarioAbr}`)
// salário maio
const comissaoMai = 7000.00 * 0.1
const salarioBrutoMai = salarioFixoEBeneficios + comissaoMai
const descontoINSSMai = salarioBrutoMai * 0.5
const salarioMai = salarioBrutoMai - descontoINSSMai
console.log (`O salário de maio é: ${salarioMai}`)
// salário junho
const comissaoJun = 9450.00 * 0.1
const salarioBrutoJun = salarioFixoEBeneficios + comissaoJun
const descontoINSSJun = salarioBrutoJun * 0.5
const salarioJun = salarioBrutoJun - descontoINSSJun
console.log (`O salário de junho é: ${salarioJun}`)
//5
const mediaSalarial = (salarioJan + salarioFev + salarioMar + salarioAbr + salarioMai + salarioJun) /6
const mediaSalarialFixed = mediaSalarial.toFixed(2)
console.log(`A média salarial de Fulano da Silva de Janeiro a Junho é de: ${mediaSalarialFixed}`)


