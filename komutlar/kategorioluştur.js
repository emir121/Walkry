const Discord = require('discord.js');

exports.run = (client, message, args) => {
    let kanal = args.slice(0).join(' ');
    let guild = message.guild;
    if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.reply('Bunun için gerekli izne sahip değilsin'); // Bunu Başkasıda Kullana Bilmesi İçin Kanalları Yönet Yetkisi Verin
    if (kanal.length < 1) return message.reply('Lütfen oluşturacağım kategorinin adını yazın.');
  message.delete();
  guild.createChannel(kanal, 'category');
  message.reply("Kategori oluşturuldu");
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['k-o'],
  permLevel: 3
};

exports.help = {
  name: 'kategorioluştur',
  description: 'Bir kategori oluturur.',
  usage: 'kategorioluştur [oluşturmak istediğiniz kategorinin adı]'
};