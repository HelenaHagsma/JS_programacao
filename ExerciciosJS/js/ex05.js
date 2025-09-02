var n1, n2, n3, n4, media, freq

n1=parseFloat(prompt("Digite a primeira nota: "))
n2=parseFloat(prompt("Digite a segunda nota: "))
n3=parseFloat(prompt("Digite a terceira nota: "))
n4=parseFloat(prompt("Digite a quarta nota: "))

freq=parseInt(prompt("Forneça a frequência do aluno: "))

media=(n1+n2+n3+n4)/4

if(media>=7 && freq>75) {
    alert("Você foi aprovado com média igual a "+ media+ " e frequência igual a "+freq+"%")
}
if(media>=7 && freq<75){
    alert("Você irá para o exame.")

}
else{
    alert("Você foi reprovado com média "+ media+ " e frequência igual a "+freq+"%")
}