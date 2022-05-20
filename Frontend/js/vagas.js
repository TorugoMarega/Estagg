
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
const empresas = [
    {
        nome: "Selecione..."
    },
    {
        nome: "Luna e Isabella Entregas Expressas Ltda",
        cnpj: "19.368.763/0001-18",
        inscricaoEstadual: "479.688.932/6179",
        cep: "36047-500",
        fone: "(34) 3518-3803",
        logradouro: "Rua Alexandre Marquez",
        bairro: "Martins",
        numero:"123"
    },
    {
        nome: "Nathan e Isaac Restaurante ME",
        cnpj: "25.024.215/0001-73",
        inscricaoEstadual: "732.559.111/9978",
        cep: "33140-470",
        fone: "(34) 2500-7872",
        logradouro: "Rua Anísio Alves",
        bairro: "Morada da Colina",
        numero:"5885"
    },
    {
        nome: "Giovanna e Teresinha Telecomunicações Ltda",
        cnpj: "47.812.660/0001-30",
        inscricaoEstadual: "631.809.084.480",
        cep: "13451-157",
        fone: "(34) 3849-4712",
        logradouro: "Rua Brasília",
        bairro: "Loteamento Colina Santa Bárbara",
        numero:"325"
    },
    {
        nome: "Jaqueline e Débora Informática ME",
        cnpj: "19.293.337/0001-62",
        inscricaoEstadual: "566.279.114.903",
        cep: "18214-520",
        fone: "(34) 3779-4803",
        logradouro: "Rua Durval Bento de Lara",
        bairro: "Jardim Brasil",
        numero:"5885"
    },
    {
        nome: "Fernanda e Laura Telecomunicações Ltda",
        cnpj: "31.325.769/0001-03",
        inscricaoEstadual: "238.882.243.220",
        cep: "12231-320",
        fone: "(34) 3779-9040",
        logradouro: "Rua Romênia",
        bairro: "Vila Nair",
        numero:"3455"
    }
    ,    {
        nome: "Marcos Vinicius e Liz Informática Ltda",
        cnpj: "01.511.642/0001-18",
        inscricaoEstadual: "453.796.197.681",
        cep: "04648-010",
        fone: "(34) 2525-7980",
        logradouro: "Praça Nossa Senhora do Perpétuo Socorro",
        bairro: "Jardim Prudência",
        numero:"785"
    },
    {
        nome: "Osvaldo e Jaqueline Consultoria ME",
        cnpj: "02.462.672/0001-44",
        inscricaoEstadual: "984.051.597.889",
        cep: "01550-060",
        fone: "(34) 3893-9402",
        logradouro: "Rua Antônio Augusto Covello",
        bairro: "Vila Monumento",
        numero:"685"
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



function getEmpresas(){
    var empresaForm = document.getElementById("inputEmpresa");
    var option0 = `
        <option selected>Escolha...</option>
    `
    var allEmp =``
    empresas.forEach(empresas => {
        //console.log(empresas.nome)
        var option = `<option>${empresas.nome}</option>`
        allEmp+=option
    });

    empresaForm.innerHTML=allEmp
}
getEmpresas()


function salvaVagas() {
    var cargoForm = document.getElementById("inputCargo").value;
    var empresaForm = document.getElementById("inputEmpresa").value;
    var requisitoForm = document.getElementById("inputRequisito").value;
    var beneficiosForm = document.getElementById("inputBeneficios").value;
    var salarioForm = document.getElementById("inputSalario").value;
    var cargaHorariaForm = document.getElementById("inputCargaHoraria").value;
    var vagasForm = document.getElementById("inputVagas").value;
    var novaVaga = {
        cargo: cargoForm,
        empresa:empresaForm,
        pre_requisitos:requisitoForm,
        salario:salarioForm,
        beneficios:beneficiosForm,
        carga_horaria:cargaHorariaForm
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