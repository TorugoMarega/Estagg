let btn = document.querySelector('#verSenha');
let btnEntrar = document.getElementById('btnEntrar');


setTimeout(() => {
    if (localStorage.getItem('listaUser') === null) {
        alert("NÃO HÁ USUÁRIOS CADASTRADOS, REALIZE SEU CADASTRO")
        window.location.href = 'cadastro.html'
    }
}, 3000)

//SE A TECLA ENTER FOR PRESSIONADA, SE COMPORTA COMO UM CLIQUE DO MOUSE NO BOTÃO
document.addEventListener("keypress", function (e) {
    if (e.key === 'Enter') {
        var btn = document.querySelector("#btnEntrar");
        btn.click();
    }
});
//-------------------------------------------REALIZA LOGIN-------------------------------------------------
function entrar() {
    let usuario = document.querySelector('#usuario')
    let userLabel = document.querySelector('#userLabel')

    let senha = document.querySelector('#senha')
    let senhaLabel = document.querySelector('#labelSenha')

    let msgError = document.querySelector('#msgError')
    let listaUser = []

    let userValid = {
        nome: '',
        user: '',
        senha: ''
    }

    listaUser = JSON.parse(localStorage.getItem('listaUser'))
    console.log(listaUser);

    //PERCORRE O ARRAY E VERIFICA SE OS DADOS CORRESPONDEM AOS ARMAZENADOS NO LOCALSTORAGE
    listaUser.forEach((item) => {
        if (usuario.value == item.userCad && senha.value == item.senhaCad) {
            userValid = {
                nome: item.nomeCad,
                user: item.userCad,
                senha: item.senhaCad
            }
        }
    })

    //VERIFICA SE OS DADOS SÃO VALIDOS
    if (usuario.value == '' && senha.value == '') {
        alert("DIGITE O NOME DE USUÁRIO E SUA SENHA")
    }

    else if (usuario.value == userValid.user && senha.value == userValid.senha) {
        btnEntrar.setAttribute('style', 'background-color: green; color: white');
        //GERA UM TOKEN GERA UM NUMERO AUTOMATICO E RANDÔMICO A PARTIR DA FUNÇÃO RANDOM DA LIB MATH, EM UMA STRING DE 16 CARACTERES
        // A CADA SESSÃO DE LOGIN O TOKEN É GERADO
        let token = Math.random().toString(16).substr(2) + Math.random().toString(16).substr(2);
        localStorage.setItem('token', token);
        
        
        setTimeout(() => {
            window.location.href = 'alunos.html';
        }, 1500) 
    }

    else {
        btnEntrar.setAttribute('style', 'background-color: red; color: white');
        userLabel.setAttribute('style', 'color: red; border-color: red');
        usuario.setAttribute('style', 'border-color: red; color: red');
        senhaLabel.setAttribute('style', 'border-color: red; color: red');
        senha.setAttribute('style', 'color: red; border-color: red');
        msgError.innerHTML = 'Usuário e/ou senha incorretos';
        msgError.setAttribute('style', 'display: block');
        usuario.focus();
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

