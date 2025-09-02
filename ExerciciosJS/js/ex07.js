var n1, n2, soma

n1=parseInt(prompt("Digite o primeiro número: "))
n2=parseInt(prompt("Digite o segundo número: "))

soma=n1+n2

if(soma>20){
    alert(soma+8+"-> A soma é maior que 20! Somei 8.")
}
else{
    alert(soma-5+"-> A soma é igual ou menor que 20! Subtraí 5.")
}
