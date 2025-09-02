var n1, n2, op

n1=parseInt(prompt("Digite o primeiro número: "))
n2=parseInt(prompt("Digite o segundo número: "))
op=prompt("Digite a operação que deseja realizar: 1 - soma| 2 - subtração| 3 - multiplicação| 4 - divisão")

switch(op){
    case "1":{
        alert("Resultado: "+(n1+n2))
        break
    }
    case "2":{
        alert("Resultado: "+(n1-n2))
        break
    }
    case "3":{
        alert("Resultado: "+(n1*n2))
        break
    }
    case "4":{
        if (n2 !== 0) {
            alert("Resultado: " + (n1 / n2))
        } else {
            alert("Erro: Divisão por zero!")
        }
        break
    }
    default: {
        alert("Operação inválida!")
        break
    }
}