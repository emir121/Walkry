const Discord = require('discord.js');

exports.run = function(client, message, args) {

const sayı = args.slice(0).join(' ')

if (sayı.length < 1) {

return message.reply("Ne kadar mesaj sileceğimi söyler misin :upside_down: ")

} else {

message.channel.bulkDelete(sayı);
message.channel.send("**" + sayı + "** adet mesaj sildim!").then(msg => {
msg.delete("5000")

});

}

};

exports.conf = {

enabled: true, 
guildOnly: false, 
aliases: [],
permLevel: 0 

};

exports.help = {

name: 'temizle', 
description: 'Belirtilen miktarda mesaj siler',
usage: 'temizle <miktar>'
  
};