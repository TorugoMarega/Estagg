let btn = document.querySelector('#verSenha');
let btnConfirm = document.querySelector('#verConfirmSenha');


let nome = document.querySelector('#nome')
let labelNome = document.querySelector('#labelNome')
let validNome = false;

let usuario = document.querySelector('#usuario')
let labelUsuario = document.querySelector('#labelUsuario')
let validUsuario = false;

let senha = document.querySelector('#senha')
let labelSenha = document.querySelector('#labelSenha')
let validSenha = false;

let confirmaSenha = document.querySelector('#confirmaSenha')
let labelConfirmaSenha = document.querySelector('#labelConfirmaSenha')
let validConfirmaSenha = false;

let msgError = document.querySelector('#msgError');
let msgSuccess = document.querySelector('#msgSuccess');


//SE A TECLA ENTER FOR PRESSIONADA, SE COMPORTA COMO UM CLIQUE DO MOUSE NO BOTÃO
    document.addEventListener("keypress", function (e) {
        if (e.key === 'Enter') {
            var btn = document.querySelector("#btnCadastro");
            btn.click();
        }
    });
//-----------------------------------VALIDAÇÃO DO FORMULARIO DE CADASTRO-------------------------------------
//CAMPO NOME
nome.addEventListener('keyup', () => {
    if (nome.value.length <= 2) {
        
        labelNome.setAttribute('style', 'color:red')
        nome.setAttribute('style', 'border-color:red')
        labelNome.innerHTML = '<strong>Nome   *Insira no mínimo 3 caracteres</strong>'
        validNome = false;
    } else {
        labelNome.setAttribute('style', 'color:green');
        nome.setAttribute('style', 'border-color:green')
        labelNome.innerHTML = 'Nome';
        validNome = true;
    }
})
//CAMPO USUARIO
usuario.addEventListener('keyup', () => {
    if (usuario.value.length <= 5) {
        labelUsuario.setAttribute('style', 'color:red')
        usuario.setAttribute('style', 'border-color:red')
        labelUsuario.innerHTML = '<strong>Usuário *Insira no mínimo 5 caracteres</strong>'
        validUsuario = false;
    } else {
        labelUsuario.setAttribute('style', 'color:green');
        usuario.setAttribute('style', 'border-color:green')
        labelUsuario.innerHTML = 'Usuário';
        validUsuario = true;
    }
})
//CAMPO SENHA
senha.addEventListener('keyup', () => {
    if (senha.value.length < 8) {
        labelSenha.setAttribute('style', 'color:red')
        senha.setAttribute('style', 'border-color:red')
        labelSenha.innerHTML = '<strong>Senha *Insira no mínimo 8 caracteres</strong>'
        validSenha = false;
    } else {
        labelSenha.setAttribute('style', 'color:green');
        senha.setAttribute('style', 'border-color:green')
        labelSenha.innerHTML = 'Senha';
        validSenha = true;
    }
})
//CAMPO CONFIRMA SENHA
confirmaSenha.addEventListener('keyup', () => {
    if (confirmaSenha.value.length != senha.value.length && confirmaSenha.value != senha.value) {
        labelConfirmaSenha.setAttribute('style', 'color:red')
        confirmaSenha.setAttribute('style', 'border-color:red')
        labelConfirmaSenha.innerHTML = '<strong>Confirmar Senha *As senhas não conferem</strong>'
        validConfirmaSenha = false;
    } else {
        labelConfirmaSenha.setAttribute('style', 'color:green')
        confirmaSenha.setAttribute('style', 'border-color:green')
        labelConfirmaSenha.innerHTML = 'Confirmar Senha';
        validConfirmaSenha = true;
    }
})

//----------------------------------------REALIZA CADASTRO-------------------------------------------------
function cadastrar() {

    if (validNome && validUsuario && validSenha && validConfirmaSenha) {
        let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]')

        listaUser.push(
            {
                nomeCad: nome.value,
                userCad: usuario.value,
                senhaCad: senha.value
            });

        localStorage.setItem('listaUser', JSON.stringify(listaUser));

        msgError.setAttribute('style', 'display:none');
        msgError.innerHTML = '';
        msgSuccess.setAttribute('style', 'display:block');
        msgSuccess.innerHTML = '<strong>Usuário Cadastrado</strong>';
        
        setTimeout(() => {
            window.location.href = 'index.html';
        }, 2000) 
        
    } else {
        msgSuccess.setAttribute('style', 'display:none');
        msgSuccess.innerHTML = '';
        msgError.setAttribute('style', 'display:block');
        msgError.innerHTML = '<strong>Preencha todos os campos corretamente para finalizar o cadastro</strong>';
    }
}
//---------------------------------------BOTAO-VER-SENHA----------------------------------------------------

btn.addEventListener('click', () => {
    let inputSenha = document.querySelector('#senha')
    if (inputSenha.getAttribute('type') == 'password') {
        inputSenha.setAttribute('type', 'text')
    } else {
        inputSenha.setAttribute('type', 'password')
    }
});

btnConfirm.addEventListener('click', () => {
    let inputConfirmSenha = document.querySelector('#confirmaSenha')
    if (inputConfirmSenha.getAttribute('type') == 'password') {
        inputConfirmSenha.setAttribute('type', 'text')
    } else {
        inputConfirmSenha.setAttribute('type', 'password')
    }
});

