module.exports = member => {
let username = member.user.username;
member.sendMessage('Hoş geldin' + username + 'Hey Niga!Aramıza hoşgeldin');
member.guild.defaultChannel.send('hg'+username+'Hey Niga!Aramıza hoşgeldin');
};