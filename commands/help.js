const { MessageEmbed } = require ('discord.js')
module.exports = {
  name: "help",
  description: 'Help',
  execute(message, args) {
    const helpEmbed = new MessageEmbed()
    .setTitle('Help')
    .setColor('#000000')
    .addFields(
    { name: 'Clean', value: '`-clean 1-99`*'},
    { name: 'Kick', value: '`-kick @mention`*'},
    { name: 'Ban', value: '`-ban @mention`*'},
    { name: 'Unban', value: '`-unban userID`*'},
    { name: 'Mute', value: '`-mute @mention`*'},
    { name: 'Unmute', value: '`-unmute @mention`*'},
    { name: 'Ping', value: '`-ping`'},
    { name: 'Coming Soon...', value: 'Several different commands are in development'},
    )
    .setFooter('*Staff only')
    message.channel.send(helpEmbed)
  }
}