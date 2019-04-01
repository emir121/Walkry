const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const embedyardim = new Discord.RichEmbed()

  .setTitle("Komutlar")
  .setDescription('')
  .setColor(0x00910F7F)
  .addField("**Eğlence Komutları:**", `gf!hesapla = Belirtilen işlemi cevaplar. \ gf!simit = Simit Yer. \ gf!uzaylı = Uzaylı gifleri gönderir. \ gf!sor = Sorduğunuz soruya cevap verir..\ gf!stresçarkı = Sizin için bir stres çarkı çevirir. \ gf!yazıtura = Sizin için Yazı-Tura oynar. \ gf!yaz = Bota istediğini yazdırır. \ gf!servericon = Serverin iconunu gösterir. `)
  .addField("**Yetkili Komutları**", `gf!unban = İstediğiniz kişinin banını kaldırır. \ gf!kick  = İstediğiniz Kişiyi Sunucudan Atar. \ gf!reboot = Botu yeniden başlatır. \ gf!seskanalıoluştur = Bir ses kanalı oluşturur. \ gf!yazıkanalıoluştur = Bir yazı kanalı oluşturur. \ gf!kategorioluştur = bir kategori oluşturur.`)
  .addField("**Ana Komutlar**", `gf!yardım = Bot komutlarını atar. \ gf!ping = Bot gecikme süresini söyler. \ gf!davet = Bot davet linkini atar.`)
  .setFooter('**--------------------------**')

  
    message.channel.send(embedyardim);
  
  }


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['h', 'yardım', 'help', 'y'],
  permLevel: 0
};

exports.help = {
  name: 'yardım',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım [komut]'
};