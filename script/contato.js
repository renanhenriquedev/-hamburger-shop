import "./../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../style/contato.css"



const catchBtn = document.querySelector('button')

catchBtn.addEventListener('click', () => {
    const objUsuario = {
        nome : document.getElementById('name').value,
        email : document.getElementById('email').value,
        telefone : document.getElementById('telefone').value,
        mensagem : document.getElementById('mensagem').value
    }
    localStorage.setItem('Mensagem', JSON.stringify(objUsuario) )
})