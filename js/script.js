let btn = document.querySelector('.btn')

btn.addEventListener('click', function(){
    document.body.style.backgroundColor = 'blue'
})

color = [
    '#F1f5f8'
]

function random(min,max){
    return Math.random() * (max - min) + min
}


console.log(random())

// Utilizado no projeto

// arrays
// document.getElementById()
// document.querySelector()
// addEventListener()
// document.body.style.backgroundColor
// Math.floor()
// Math.random()
// array.length