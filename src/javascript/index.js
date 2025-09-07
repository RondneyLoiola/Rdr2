const icon = document.querySelectorAll('.icon')
const persoName = document.querySelector('h1')
const persoDesc = document.querySelector('p')
const persoWpp = document.querySelector('.container')


function changeCharacter(index) {
    persoName.classList.remove('deslizar-esquerda')
    persoDesc.classList.remove('deslizar-direita')

    persoName.innerText = data[index].nome
    persoDesc.innerText = data[index].desc
    persoWpp.style.backgroundImage = `url(${data[index].wpp})`

    setTimeout(() => {
        persoName.classList.add('deslizar-esquerda')
        persoDesc.classList.add('deslizar-direita')
    }, 10)
}

icon.forEach((item, index) => {
    item.addEventListener('click', () => {
        icon.forEach(item1 => item1.classList.remove('active'))
        item.classList.add('active')

        changeCharacter(index)
    })
})
changeCharacter(2)


