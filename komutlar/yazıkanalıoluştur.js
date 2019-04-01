const Discord = require('discord.js');

exports.run = (client, message, args) => {
    let kanal = args.slice(0).join(' ');
    let guild = message.guild;
    if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.reply('Bunun için gerekli izne sahip değilsin'); 
    if (kanal.length < 1) return message.reply('Lütfen oluşturacağım kanalın adını yazın.');
  message.delete();
  guild.createChannel(kanal, 'text');
  message.reply("Yazı Kanalı Oluşturuldu");
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['y-k-o'],
  permLevel: 3
};

exports.help = {
  name: 'yazıkanalıoluştur',
  description: 'Bir yazı kanalı oluşturur.',
  usage: 'yazıkanalıoluştur <oluşturmak istediğin kanalın adı>'
};
