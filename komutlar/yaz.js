const Discord = require('discord.js');

exports.run = function(client, message, args) {

const mesaj = args.slice(0).join(' ')

if (mesaj < 1) {

message.reply("Yazmam için bir şey belirt")

} else {

message.delete();

message.reply(mesaj)
        
}

};

exports.conf = {

enabled: true, 
guildOnly: false, 
aliases: [], 
permLevel: 0

};

exports.help = {

name: 'yaz', 
description: 'Bota istediğini yazdırır', 
usage: 'yaz <mesaj>'

};

