const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');

var prefix = ayarlar.prefix;

client.on('ready', () => {
  console.log(`BOT: ${client.user.username} adı ile giriş yaptı!`);
});

client.on('message', msg => {
  console.log(`LOG: S: ${msg.guild.name} M: ${msg.content} Y: ${msg.author.tag}`);
  if (msg.author.id === ayarlar.id) return;
  if (msg.author.bot) return;

  if (!msg.content.startsWith(prefix)) {
	  return;
  }
  
  if (msg.content.toLowerCase() === prefix + 'sa') {
    msg.reply('Aleyküm selam mümin kardeşim :kaaba: ');
  }

  if (msg.channel.toLowerCase() === prefix + 'günaydın') {

    var embed = new Discord.RichEmbed()

    .setTimestamp()
    .addDiscreption(`${message.author} Sana da günaydın :sun:`)
    .setImage(`https://media.giphy.com/media/550gxxQJOnh5G4QNsx/giphy.gif`)
    
    message.channel.send(embed);
  }

  if (msg.channel.toLowerCase() === prefix + 'iyi geceler') {
  
    msg.channel.send(' @everyone :sleeping_accommodation: HERKESE İYİ GECELER. ALLAH RAHATLIK VERSİN ! :sleeping_accommodation: ')
  }


});

client.login(ayarlar.token);