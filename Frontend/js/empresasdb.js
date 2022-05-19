
/* function getCep(){
    apiCep.get("ws/38408028/json")
    .then((response) => doSomething(response.data))
    .catch((err) => {
      console.error("ops! ocorreu um erro" + err);
    })
} */


const vagas = [
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

const submitBtnEmpresa = document.getElementById('btnSalvarEmpresa');

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
                    <td class="text-wrap align-middle">${vagas[i].nome}</td>
                    <td class="text-wrap align-middle">${vagas[i].cnpj}</td>
                    <td class="text-wrap align-middle">${vagas[i].inscricaoEstadual}</td>
                    <td class="text-wrap align-middle">${vagas[i].cep}</td>
                    <td class="text-wrap align-middle">${vagas[i].logradouro}, ${vagas[i].bairro}, ${vagas[i].numero}</td>
                    <td class="text-nowrap align-middle">${vagas[i].fone}</td>
                    <td class="align-middle"><button type="button" class="btn btn-primary btn-sm text-nowrap"><i class="fas fa-pen me-2"></i>Editar</button></td>
                    <td class="align-middle"><button type="button" class="btn btn-danger btn-sm text-nowrap excluiEmpresa"><i class="fas fa-trash me-2"></i>Excluir</button></td>
            </tr> 
    `
        tableMount = tableMount + linha
    }
    table.innerHTML = tableMount
}
getVagas()

function excluiVaga(id) {
    console.log("IDDDDDDDDDDDD :" + id)
    console.log(alunosvet[id])
    if (id === 0 || id === id.length) {
        vagas.splice(id, id + 1);
    }
    else {
        vagas.splice(id, id);
    }
    getVagas()
}


// 000.000.000-00

function getCep(value) { 
    if(value.length==8 ||value.length==9){
        const url = "https://viacep.com.br/ws/"
        axios.get(url + value + "/json")
            .then(response => {
                console.log(response.data)
                var cepForm = document.getElementById("inputCep");
                var logradouroForm = document.getElementById("inputLogradouro");
                var bairroForm = document.getElementById("inputBairro");
                cepForm.value = response.data.cep
                logradouroForm.value =response.data.logradouro
                bairroForm.value = response.data.bairro
            })
            .catch(error => console.log(error))
    }else{
        alert("Digite um cep válido")
    }    
}


function salvaVagas() {
    var nomeForm = document.getElementById("inputNome").value;
    var cnpjForm = document.getElementById("inputCnpj").value;
    var inscricaoForm = document.getElementById("inputInscricao").value;
    var cepForm = document.getElementById("inputCep").value;
    var logradouroForm = document.getElementById("inputLogradouro").value;
    var bairroForm = document.getElementById("inputBairro").value;
    var numForm = document.getElementById("inputNumero").value;
    var telefoneForm = document.getElementById("inputFone").value;

    var novaEmpresa = {
        nome: nomeForm,
        cnpj: cnpjForm,
        inscricaoEstadual: inscricaoForm,
        fone: telefoneForm,
        cep: cepForm,
        logradouro: logradouroForm,
        bairro: bairroForm,
        numero: numForm
    }
    console.log(novaEmpresa)
    vagas.push(novaEmpresa)
    getVagas()
}
submitBtnEmpresa.addEventListener("click", salvaVagas, false)

document.querySelectorAll('.excluiEmpresa').forEach(item => {
    item.addEventListener('click', event => {
        let id = item.parentElement.parentElement.firstElementChild.textContent - 1
        console.log(id)
        excluiVaga(id)
    })
})