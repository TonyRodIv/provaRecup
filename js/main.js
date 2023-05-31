const modal = document.getElementById('modal')
const foto1 = document.getElementById('foto1')
const foto2 = document.getElementById('foto2')
const foto3 = document.getElementById('foto3')
const foto4 = document.getElementById('foto4')
function abrirModal() {
    modal.style.display = 'flex'
    foto1.style.position = 'initial'
    foto2.style.position = 'initial'
    foto3.style.position = 'initial'
    foto4.style.position = 'initial'
}
function fecharModal() {
    modal.style.display = 'none'
    foto1.style.position = 'relative'
    foto2.style.position = 'relative'
    foto3.style.position = 'relative'
    foto4.style.position = 'relative'
}
