<h1 align="center">
  <img alt="Estagg logo" title="#Estagg-logo" src="Frontend/img/estagg-horizontal-branca.svg" />
</h1>
<h1 align="center">
  <img alt="Estagg" title="#Estagg" src="assets/banner.png" />
</h1>
<h1 align="center">
    <a href="http://estagg.mypressonline.com">🔗 Estagg</a>
</h1>



# Indice

<!--ts-->
   * [Estudo de caso](#estudo-de-caso)
   * [Sobre](#sobre)
   * [Tecnologias](#-tecnologias)
   * [Como utilizar](#como-utilizar)
<!--te-->

# Estudo de caso
## A Estagg Inc. é uma empresa fictícia criada na disciplina de Engenharia de Software do Curso de Licenciatura em Computação. A Estagg tem como missão conectar alunos e recrutadores de empresas, assim facilitando a contratação de estagiários e a divulgação de vagas. A empresa possui uma aplicação web que permite que o recrutador de uma empresa possa cadastrar sua empresa e as vagas disponíveis e também que o aluno matriculado regularmente em uma instituição de ensino superior ou técnico possa realizar seu cadastro. O coordenador do curso da instituição de ensino deverá cadastrar a mesma para que seja possível realizar a formalização da contratação do estagiário.

##	Status: 🚀 Prototipação...

# Sobre
A aplicação ainda está em fase de prototipação das telas, não há Backend, apenas Front, que ainda está sendo construído utilizando html, css, javascript puro e bootstrap. Possivelmente no futuro utilizaremos algum framework SPA.

# 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

- [Html](https://developer.mozilla.org/pt-BR/docs/Web/HTML)
- [Css](https://developer.mozilla.org/pt-BR/docs/Web/CSS)
- [JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
- [Bootstrap](https://getbootstrap.com)
- [Font Awesome](https://fontawesome.com)
- [Axios](https://axios-http.com/ptbr/docs/intro)

# Como utilizar
No cabeçalho da [página inicial](http://estagg.mypressonline.com/index.html) podemos ver links que levam respectivamente às páginas de cadastro de [vagas](http://estagg.mypressonline.com/index.html), [alunos](http://estagg.mypressonline.com/Frontend/alunos.html) e [empresas](http://estagg.mypressonline.com/Frontend/empresas.html). As três páginas possuem uma tabela com os dados de cada ator, os dados estão armazenados em arrays e a tabela é montada dinamicamente por um método. Ao clicar no botão de adicionar, aparece um modal com um formulário de cadastro, ao cadastrar algum ator o mesmo será adicionado na página por um método no javascript que monta o objeto pegando o valor dos campos e o "empurra" para o array. No cadastro de [empresas](http://estagg.mypressonline.com/Frontend/empresas.html) há um campo para digitar o CEP, ao clicar fora da caixa do input o logradouro e o bairro são completados automaticamente se o cep for digitado corretamente, essa funcionalidade foi feita consumindo a API [Via Cep](https://viacep.com.br), que retorna os dados via JSON e a partir deles é possível alterar o conteúdo de texto do input via JavaScript.
