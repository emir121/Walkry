const Discord = require('discord.js');
const math = require('math-expression-evaluator')
const stripIndents = require('common-tags').stripIndents



exports.run = function(client, message, args) {

var soru = args.join(' ');

if (!soru) return message.reply('Bir işlem belirtin. **Doğru Kullanım**: gf!hesapla <işlem>')

else { let cevap;

try {

cevap = math.eval(soru)

} catch(err) {

message.channel.send('Hatalı işlem: **' + err)

}
    
const embed = new Discord.RichEmbed()

.setColor(0x00910F7F)

.addField('Soru', soru)
.addField('Cevap', cevap)

message.channel.send(embed)

}

};

exports.conf = {

enabled: true, 
guildOnly: false, 
aliases: [''], 
permLevel: 0 

};

exports.help = {

name: 'hesapla', 
description: 'Belirtilen işlemi cevaplar.', 
usage: 'hesapla' 

};