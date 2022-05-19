
/* function getCep(){
    apiCep.get("ws/38408028/json")
    .then((response) => doSomething(response.data))
    .catch((err) => {
      console.error("ops! ocorreu um erro" + err);
    })
} */


const vagas = [
    {
        cargo: "Estagiário de Suporte",
        empresa:"Sankhya",
        pre_requisitos: "Estar cursando a partir do terceiro período de Sistemas de Informção ou Ciência da Computação",
        salario: "600,00 R$",
        beneficios: "Vale transporte",
        carga_horaria: "6 horas"
    },
    {
        cargo: "Estágio em desenvolvimento Front End",
        empresa:"Algar Telecom",
        pre_requisitos: "Estar cursando a partir do terceiro período de Sistemas de Informção ou Ciência da Computação",
        salario: "600,00 R$",
        beneficios: "Vale transporte",
        carga_horaria: "6 horas"
    },
    {
        cargo: "Estágio em desenvolvimento Back End",
        empresa:"Asa Consultoria",
        pre_requisitos: "Estar cursando a partir do terceiro período de Sistemas de Informção ou Ciência da Computação",
        salario: "600,00 R$",
        beneficios: "Vale transporte",
        carga_horaria: "6 horas"
    },
    {
        cargo: "Analista de Sistemas",
        empresa:"Martins",
        pre_requisitos: "Estar cursando a partir do terceiro período de Sistemas de Informção ou Ciência da Computação",
        salario: "600,00 R$",
        beneficios: "Vale transporte",
        carga_horaria: "6 horas"
    }
]

const submitBtnVaga = document.getElementById('btnSalvarVaga');

/* if (!/^[0-9]{5}\-[0-9]{3}$/.test(cep)){
    alert('digite seu cep corretamente');
    document.form.cep.style.background='red';
    return false;
 } */



function getVagas() {
    //console.log(empresas)
    const table = document.getElementById('tableEmpresas')

    var tableMount = ``
    for (var i = 0; i < vagas.length; i++) {
        var linha = `
            <tr>
                <th class="fw-bold px-3 align-middle" scope="row">${i + 1}</th>
                    <td class="text-wrap align-middle">${vagas[i].cargo}</td>
                    <td class="text-wrap align-middle">${vagas[i].empresa}</td>
                    <td class="text-wrap align-middle">${vagas[i].pre_requisitos}</td>
                    <td class="text-nowrap align-middle">${vagas[i].salario}</td>
                    <td class="text-wrap align-middle">${vagas[i].beneficios}</td>
                    <td class="text-nowrap align-middle">${vagas[i].carga_horaria}</td>
                    <td class="align-middle"><button type="button" class="btn btn-primary btn-sm text-nowrap"><i class="fas fa-pen me-2"></i>Editar</button></td>
                    <td class="align-middle"><button type="button" class="btn btn-danger btn-sm text-nowrap excluiVaga"><i class="fas fa-trash me-2"></i>Excluir</button></td>
            </tr> 
    `
        tableMount = tableMount + linha
    }
    table.innerHTML = tableMount
}
getVagas()

function excluiVaga(id) {
    console.log("IDDDDDDDDDDDD :" + id)
    console.log(vagas[id])
    if (id === 0 || id === id.length) {
        vagas.splice(id, id + 1);
    }
    else {
        vagas.splice(id, id);
    }
    getVagas()
}


// 000.000.000-00



function salvaVagas() {
    var nomeForm = document.getElementById("inputNome").value;
    var cnpjForm = document.getElementById("inputCnpj").value;
    var inscricaoForm = document.getElementById("inputInscricao").value;
    var cepForm = document.getElementById("inputCep").value;
    var logradouroForm = document.getElementById("inputLogradouro").value;
    var bairroForm = document.getElementById("inputBairro").value;
    var numForm = document.getElementById("inputNumero").value;
    var telefoneForm = document.getElementById("inputFone").value;

    var novaVaga = {
        nome: nomeForm,
        cnpj: cnpjForm,
        inscricaoEstadual: inscricaoForm,
        fone: telefoneForm,
        cep: cepForm,
        logradouro: logradouroForm,
        bairro: bairroForm,
        numero: numForm
    }
    console.log(novaVaga)
    vagas.push(novaVaga)
    getVagas()
}
submitBtnVaga.addEventListener("click", salvaVagas, false)

document.querySelectorAll('.excluiVaga').forEach(item => {
    item.addEventListener('click', event => {
        let id = item.parentElement.parentElement.firstElementChild.textContent - 1
        console.log(id)
        excluiVaga(id)
    })
})