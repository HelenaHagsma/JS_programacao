var n1, n2, n3, n4, media

n1=parseFloat(prompt("Digite a primeira nota: "))
n1=parseFloat(prompt("Digite a segunda nota: "))
n1=parseFloat(prompt("Digite a terceira nota: "))
n1=parseFloat(prompt("Digite a quarta nota: "))

media=(n1+n2+n3+n4)/4

if(media>=7){
    alert("Você foi aprovado com média igual a "+media)
}
else{
    alert("Você foi reprovado com média "+media)
}