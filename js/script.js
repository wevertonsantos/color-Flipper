let arrayColors = [
    0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'
]
let btn = document.querySelector('.btn')
let mostrarColor = document.getElementById('printColor')

btn.addEventListener('click', function(){
    let colors = '#';

    for(let i = 0;i < 6; i++)
    colors += arrayColors[gerarCorHexa()]

    mostrarColor.textContent = colors 
    document.body.style.backgroundColor = colors
})

function gerarCorHexa(){
    return Math.floor(Math.random() * arrayColors.length)
}

// Utilizado no projeto

// document.getElementById()
// document.querySelector()
// addEventListener()
// document.body.style.backgroundColor
// Math.floor()
// Math.random()