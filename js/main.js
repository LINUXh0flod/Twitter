
const textarea = document.querySelector('textarea')
const tweetar = document.querySelector('button')

const feed = document.getElementById('fed')

console.log(textarea.value)


 function pegarTweet(event) {
  event.preventDefault()
  const tweetTextarea = textarea.value
  criarTweet(tweetTextarea)
 }

 tweetar.addEventListener('click', pegarTweet)


 
 function criarTweet (tweetTexto) {

   //CRIAR O TWEET
   //TEXT DO TWEET***
   //NOME
   //FOTO
   //NUMERO USUARIO
   //HORARIO

let data = new Date()
let hora = data.getHours()
let minutos = data.getMinutes()
   const tweet = {
    nome:'User',
    foto: './imagens/linux-logo2.png',
    usuario: "@User-novo",
   texto:tweetTexto,
    tempo:`${hora}: ${minutos}`
  }

  listarTemplateTweet(tweet)
 }

 function listarTemplateTweet(tweet) {

const {nome, foto, usuario, texto, tempo} = tweet


let li = document.createElement('li')
li.classList.add('conteudoUl_postagem')


let img = document.createComment('img')
img.src = foto
//img.classList.add('opa')

let div = document.createElement('div')
div.classList.add('post')


let h2 = document.createElement('h2')
h2.innerText = nome

let span = document.createElement('span')
span.innerText = `   ${usuario} - ${tempo}`

let p = document.createElement('p')
p.innerText = texto

div.appendChild(h2)
div.appendChild(span)
div.appendChild(p)
li.appendChild(img)
li.appendChild(div)
console.log(li)
feed.appendChild(li)
}

var b = document.getElementById('nav')

function clicar() {
b.style.display = 'block'
}