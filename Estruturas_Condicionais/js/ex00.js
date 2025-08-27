var nome, idade

nome=prompt("Digite seu nome: ")
idade=parseInt(prompt("Digite sua idade: "))

if(idade>=18){
    alert(nome+", você pode tentar tirar a CNH!")
}
else{
    alert(nome+", você ainda não possui idade suficiente para tirar a CNH...")
}

