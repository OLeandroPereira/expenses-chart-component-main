<div id="top">

# Frontend Mentor - Solução de componente de gráfico de despesas

Esta é uma solução para o [desafio do componente do gráfico de despesas no Frontend Mentor](https://www.frontendmentor.io/challenges/expenses-chart-component-e7yJBUdjwt). Os desafios do Frontend Mentor ajudam você a melhorar suas habilidades de codificação criando projetos realistas.

## Índice

- [Visão geral](#visão-geral)
  - [O desafio](#the-challenge)
  - [Captura de tela](#captura-de-tela)
  - [Links](#links)
- [Meu processo](#meu-processo)
  - [Tecnologias](#tecnologias-utilizadas)
  - [O que aprendi](#o-que-aprendi)
  - [Desenvolvimento contínuo](#desenvolvimento-contínuo)
  - [Recursos úteis](#useful-resources)
- [Autor](#autor)


<h1>

## Visão geral

<h1>

## O desafio

Os usuários devem ser capazes de:

- Visualizar o gráfico de barras e passe o mouse sobre as barras individuais para ver os valores corretos para cada dia
- Ver a barra do dia atual destacada em uma cor diferente das outras barras

- Visualize o layout ideal para o conteúdo, dependendo do tamanho da tela do dispositivo

- Veja os estados de foco para todos os elementos interativos na página

<h1>

## Captura de tela

<br>

<div align="center"> 
  <img src="design/active-states.jpg">
</div>

<h1></h1>

## Meu processo

<br>

## Tecnologias utilizadas:

<br>

- HTML
- Propriedades personalizadas de CSS
- Flexbox
- Grid CSS
- Fluxo de trabalho mobile-first
- Linguagem JS
- Para estilos


<br>
<br>

<h1>


### O que eu aprendi

Venho evoluindo gradativamente com as semânticas do HTML e as propriedades do CSS, realmente a constância está me trazendo técnica e segurança para cada vez mais, estar realizando novos projetos.

<h1>
<br>
<h3>

Orgulhoso com progresso que estou tendo com a nova linguagem JavaScript.

<h3>

<br>

```
 
const ctx = document.getElementById('grafico');
const grafico = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['seg', 'ter', 'qua', 'qui', 'sex', 'sab', 'dom'],
        datasets: [{
            label: 'R$',
            data: [17.45, 34.91, 52.36, 31.07, 23.39, 43.28, 25.48],
            backgroundColor: [
                'hsl(10, 79%, 65%)',
            ],
        }]
    },

    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

```


<h1>

## Desenvolvimento contínuo
<br>
Me sinto realizado por ter conseguido incluir a linguagem Javascript no meu projeto, sinto que estarei ainda melhor para o próximo desafio.

<h1>
<br>

## Links

<h3>
<a href="https://graficodedespesas.netlify.app/" target="_blank">Veja o Deploy</a>

<h1>


## Recursos úteis

 [Tutorial para criação de gráficos](https://www.fusioncharts.com/dev/getting-started/plain-javascript/your-first-chart-using-plain-javascript) - Esse site me ajudou a elaborar a estrutura do gráfico. Gostei muito deste modelo e vou usá-lo daqui para frente.

<h1>

## Autor Leandro Pereira


Me siga nas Redes:

<br>
<a href="https://linkedin.com/in/leandropereira-dev/" target="_blank">
    <img align="center" src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="linkedin"/>
</a>
<a href="https://www.instagram.com/le_codigo/" target="_blank">
    <img align="center" src="https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white/le_codigo" alt="linkedin"/>
</a> 
<br>
<br>
<h1>

<h3></h3>



Feito com muito estudo e dedicação por <a href="https://github.com/OLeandroPereira" target="_blank">Leandro Pereira.</a>

<h3>
<br>
<br>

<a href="#top">Voltar ao topo</a>