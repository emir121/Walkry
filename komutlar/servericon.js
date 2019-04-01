const Discord = require('discord.js');

exports.run = function(client, message) {

const embed = new Discord.RichEmbed()

.setGuildName(message.guild.name)
.setImage(message.guild.iconURL)
.setColor(0x00910F7F)

message.channel.send(embed);

};

exports.conf = {

enabled: true, 
guildOnly: true, 
aliases: [],
permLevel: 0 

};

exports.help = {

name: 'servericon', 
description: 'Serverin iconunu gösterir',
usage: 'servericon'
  
};