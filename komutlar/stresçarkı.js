const Discord = require('discord.js');

exports.run = async (client, message) => {

let dönme = await message.channel.send({

embed: {

color: 0x00910F7F,
description: `${message.author} bir stres çarkı çevirdi!`,
image: {url: "https://i.imgur.com/KJJxVi4.gif"}

}

});

let bitiş = (Math.random() * (60 - 5 + 1)) + 5;

setTimeout(() => {

dönme.edit({

 embed: {

color: 0x00910F7F,
description: `${message.authot.tag} stres çarkın ${bitiş.toFixed(2)} saniye döndü.` 

} 

});

});

};

exports.conf = {

enabled: true, 
guildOnly: true, 
aliases: ['ball','8ball'], 
permLevel: 0 

};

exports.help = {

name: 'stresçarkı', 
description: 'Sizin için bir stres çarkı çevirir.', 
usage: 'stresçarkı' 

};
