const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

module.exports = client => {
console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] Aktifim, Yeni komutlarla birlikte geldim!`);
console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] ${client.user.username} ismi ile giriş yaptım!`);
client.user.setStatus("online");
client.user.setGame(`${prefix}yardım + ${client.guilds.size} sunucu + ${client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString()} kullanıcıya hizmet edilmektedir`);
console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: Şu an ` + client.channels.size + ` adet kanala, ` + client.guilds.size + ` adet sunucuya ve ` + client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString() + ` kullanıcıya hizmet veriliyor!`);
};