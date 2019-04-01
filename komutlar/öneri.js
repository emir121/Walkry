const Discord = require('discord.js');


exports.run = function(client, message, args) {

	var öneri = args.slice(0).join(' ');
	var guildID = "556939619623632907";
	var channelID = "558509288843378719";
	
	if (!öneri){
		return message.reply("Bir mesaj belirtin! Doğru kullanım: **?öneri <mesaj>**");
	} else {
		
		var embed = new Discord.RichEmbed()
			.setTimestamp()
			.setColor(0x00910F7F)
			.addField("Eylem:", "Öneri")
			.addField("Kullanıcı:", message.author.tag)
			.addField("ID", message.author.id)
			.addField("Öneri", öneri)
			.addField("Guild", message.guild.name)
			
		
		client.guilds.get(guildID).channels.get(channelID).send(embed);
		message.channel.send("Önerini aldım! Teşekkür ederim.");
	};


};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["öner"], 
  permLevel: 0 
};

exports.help = {
  name: 'öneri', 
  description: "Bot hakkındaki önerilerinizi bot sahiplerine ulaştırır", 
  usage: 'öneri <mesaj>' 
};
