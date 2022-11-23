/*
- Aqui entram alguns conceitos que a gente aprende quando estuda orientação a objetos (por enquando podemos pensar que classe é um molde e objeto é o que sai desse molde)
  Na linha 5 estou requerendo as classes necessárias (de acordo com a documentação, ainda não sei o que elas fazem/moldam) da biblioteca discord.js para dentro do arquivo index.js
*/
const { Client, Events, GatewayIntentBits } = require('discord.js')

// Aqui sequi a documentação para deixar o meu TOKEN protegido
const { TOKEN } = require('./config.json')

/*
- Por enquanto o que precisamos saber é que client é o nosso bot
- O que a gente faz na linha 16 é transformar esse bot em algo real, no caso, num objeto
- Através do construtor 'new' a gente constrói um objeto real
- Fazendo isso, ou seja, instanciando esse objeto, podemos usar os métodos das classes que estão disponíveis dentro da lib discord.js
*/
const client = new Client({ intents: [GatewayIntentBits.Guilds] })

// Aqui é para a aparecer a mensagem "Olá..." uma vez (once), quando o Bot for logado, ele faz o login na linha 25!
client.once(Events.ClientReady, c => {
	console.log(`Olá! Sou o Bot ${c.user.tag} e fui logado ao servidor! 🐶`);
});

// Para ligar o bot, é necessário o token -> a API do Discord precisa desse token para liberar o acesso para os bots realizarem suas funções
client.login(TOKEN)
