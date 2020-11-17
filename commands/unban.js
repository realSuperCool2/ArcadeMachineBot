module.exports = {
  name: "unban",
  description: "Unban",
  execute(message, args) {
    //Then check if user have permissions to do that
    if (!message.member.hasPermission("BAN_MEMBERS")) {
      return message.reply("you do not have the right permissions to do that!");
    }
    let userID = args[0];
    if(userID === NaN) return message.reply('you need to use the user\'s userID')
message.guild.members.unban(userID)
      .then(() => message.channel.send(`Unbanned <@${userID}>`))
      .catch(console.error);
  }
};
