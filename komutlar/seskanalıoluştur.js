const Discord = require('discord.js');

exports.run = (client, message, args) => {
    let kanal = args.slice(0).join(' ');
    let guild = message.guild;
    if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.reply('Bunun için gerekli izne sahip değilsin'); // Bunu Başkasıda Kullana Bilmesi İçin Kanalları Yönet Yetkisi Verin
    if (kanal.length < 1) return message.reply('Lütfen oluşturacağım kanalın adını yazın.');
  message.delete();
  guild.createChannel(kanal, 'voice');
  message.reply("Ses Kanalı Oluşturuldu");
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['s-k-o'],
  permLevel: 3
};

exports.help = {
  name: 'seskanalıoluştur',
  description: 'Bir ses kanalı oluşturur.',
  usage: 'seskanalıoluştur [oluşturmak istediğiniz kanalın adı]'
};