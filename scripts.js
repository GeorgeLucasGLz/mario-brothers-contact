const form = document.getElementById('fale-conosco')
const botao = document.getElementById('btn')
const mascara = document.querySelector('#mascara-formulario')

function clickButton(){
    form.style.left = "50%"
    form.style.transform = "translateX(-50%)"
    mascara.style.visibility = "visible"
    form.style.transition = "0.4s ease-in"
}

function desligarMascara(){
    form.style.left = '-300px'
    mascara.style.visibility = "hidden"
    form.style.transform = 'translateX(0%)'
    mascara.style.transition = '0.4s ease-in'
}