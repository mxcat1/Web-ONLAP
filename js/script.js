let titulo=document.getElementsByClassName('text-center')
let texto=document.getElementsByClassName('text-justify')
let textototal=titulo[0].innerText+'\n'

for (const textoitem of texto) {
    textototal+=textoitem.innerText+'\n'
}


// console.log(textototal,titulo[0].innerText)

function decir(texto){
    speechSynthesis.speak(new SpeechSynthesisUtterance(texto))
}