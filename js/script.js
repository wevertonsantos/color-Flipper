let btn = document.querySelector('.btn')
let mostrarColor = document.getElementById('printColor')
let randomColor = color = [
    gerar_cor_hexa(),
]


btn.addEventListener('click', function(){
    document.body.style.backgroundColor = randomColor
    mostrarColor.innerHTML = gerar_cor_hexa()
})

function gerar_cor_hexa(){
    return ' : #' + parseInt((Math.random() * 0xFFFFFF))
    .toString(16)
    .padStart(6,'0')
}

// Utilizado no projeto

// arrays
// document.getElementById()
// document.querySelector()
// addEventListener()
// document.body.style.backgroundColor
// Math.floor()
// Math.random()
// array.length