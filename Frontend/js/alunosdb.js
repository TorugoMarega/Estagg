let instituicoes = [
    {
        "nome":"Selecione...",
        "sigla":""
    },
    {
        "nome": "Instituto Federal do Triângulo Mineiro",
        "sigla": "IFTM"
    },
    {
        "nome": "Universidade Federal do Triângulo Mineiro",
        "sigla": "UFTM"
    },
    {
        "nome": "Universidade Federal de Uberlândia",
        "sigla": "UFU"
    }
]

let cursos = [
    {
        "nome":"...Selecione"
    },
    {
        "nome": "Licenciatura em computação"
    },
    {
        "nome": "Sistemas de Informação"
    },
    {
        "nome": "Ciência da computação"
    }
]

let alunosvet = [
    {
        "nome": "Bill Gates",
        "curso": cursos[1].nome,
        "instituicao": instituicoes[1].nome + " - " + instituicoes[1].sigla,
        "cpf": "123.456.789-11",
        "nasc": "29/01/2000"
    },

    {
        "nome": "Steve Jobs",
        "curso": cursos[1].nome,
        "instituicao": instituicoes[1].nome + " - " + instituicoes[1].sigla,
        "cpf": "123.565.678-11",
        "nasc": "12/05/1978"
    },
    {
        "nome": "Marina Jaqueline Gabriela Castro",
        "curso": cursos[3].nome,
        "instituicao": instituicoes[3].nome + " - " + instituicoes[3].sigla,
        "cpf": "047.368.912-03",
        "nasc": "17/01/2001"
    },
    {
        "nome": "Martin Benedito Oliveira",
        "curso": cursos[3].nome,
        "instituicao": instituicoes[3].nome + " - " + instituicoes[3].sigla,
        "cpf": "991.423.661-86",
        "nasc": "12/05/1978"
    },
    {
        "nome": "Luís Samuel Sales",
        "curso": cursos[2].nome,
        "instituicao": instituicoes[1].nome + " - " + instituicoes[1].sigla,
        "cpf": "720.936.780-20",
        "nasc": "01/05/1979"
    },
    {
        "nome": "Maitê Andreia Fernandes",
        "curso": cursos[2].nome,
        "instituicao": instituicoes[1].nome + " - " + instituicoes[1].sigla,
        "cpf": "551.353.595-59",
        "nasc": "12/05/1978"
    },
    {
        "nome": "Eduarda Cristiane Bernardes",
        "curso": cursos[3].nome,
        "instituicao": instituicoes[3].nome + " - " + instituicoes[3].sigla,
        "cpf": "123.565.678-11",
        "nasc": "12/05/1978"
    }
]

const submitBtnAluno = document.getElementById('btnSalvarAluno');


submitBtnAluno.addEventListener("click",salvaAluno,false)





function getAlunos() {
    console.log(alunosvet)
    const table = document.getElementById('tableAluno')

    var tableMount = ``
    for (var i = 0; i < alunosvet.length; i++) {
        var linha = `
            <tr>
                <th class="fw-bold px-3 align-middle" scope="row">${i + 1}</th>
                    <td class="text-wrap align-middle">${alunosvet[i].nome}</td>
                    <td class="text-nowrap align-middle">${alunosvet[i].cpf}</td>
                    <td class="text-wrap align-middle">${alunosvet[i].instituicao}</td>
                    <td class="text-wrap align-middle">${alunosvet[i].curso}</td>
                    <td class="align-middle">${alunosvet[i].nasc}</td>
                    <td class="align-middle"><button type="button" class="btn btn-primary btn-sm text-nowrap"><i class="fas fa-pen me-2"></i>Editar</button></td>
                    <td class="align-middle"><button type="button" class="btn btn-danger btn-sm text-nowrap excluiAluno"><i class="fas fa-trash me-2"></i>Excluir</button></td>
            </tr> 
            
    `
        tableMount = tableMount + linha
    }
    table.innerHTML = tableMount
}
getAlunos()

function excluiAluno(id){
    console.log("IDDDDDDDDDDDD :"+id)
    console.log(alunosvet[id])
    if(id===0 || id===id.length){
        alunosvet.splice(id,id+1);
    }
    else{
        alunosvet.splice(id,id);       
    }
    getAlunos()
}


function salvaAluno() {

    var nomeForm = document.getElementById("inputNome").value;
    var cpfForm = document.getElementById("inputCpf").value;
    var intituicaoForm = document.getElementById("inputInstituicao").value;
    var cursoForm = document.getElementById("inputCurso").value;
    var nascForm = document.getElementById("inputNasc").value;
    var novoAluno = {
        nome: nomeForm,
        curso:cursoForm,
        instituicao:intituicaoForm,
        cpf:cpfForm,
        nasc:nascForm
    }
    //console.log(novoAluno)
    alunosvet.push(novoAluno)
    getAlunos()
}


document.querySelectorAll('.excluiAluno').forEach(item => {
    item.addEventListener('click', event => {
        let id = item.parentElement.parentElement.firstElementChild.textContent-1
        console.log(id)
        excluiAluno(id)
    })
})

function getInstituicao(){
    var instituicaoForm = document.getElementById("inputInstituicao");
    var option0 = `
        <option selected>Escolha...</option>
    `
    var allInst =``
    instituicoes.forEach(instituicoes => {
        //console.log(instituicoes.nome)
        var option = `<option>${instituicoes.nome} - ${instituicoes.sigla}</option>`
        allInst+=option
    });

    instituicaoForm.innerHTML=allInst
}
getInstituicao()

function getCursos(){
    var cursosForm = document.getElementById("inputCurso");
    var option0 = `
        <option selected>Escolha...</option>
    `
    var allCursos =``
    cursos.forEach(cursos=> {
        //console.log(cursos.nome)
        var option = `<option>${cursos.nome}</option>`
        allCursos+=option
    });
    cursosForm.innerHTML=allCursos
}
getCursos()