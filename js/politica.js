const menuDiv = document.getElementById('menu-mobile')
const btnAnimar = document.getElementById('btn-menu')

menuDiv.addEventListener('click', animar) 

function animar(){
  menuDiv.classList.toggle('ativar')
  btnAnimar.classList.toggle('ativar')
}