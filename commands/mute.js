module.exports = {
  name: 'mute',
  description: 'Mute',
  execute(message, args) {
        

        //Then check if user have permissions to do that
        if(!message.member.hasPermission('MANAGE_ROLES')) {return message.reply("you have no permissions to do that");
            
        };

        //const a member, wich you need yo kick (its fist mention message member)
        let mentionMember = message.mentions.members.first();
    let Muted = message.guild.roles.cache.find(r => r.name === "Muted");
        //If user dont mention a member, that show him this error msg
        if(!mentionMember) {
            message.reply('mention the member which you want to mute');
            return;
        }
        
        //If all steps are completed successfully try kick this user
        mentionMember.roles.add(Muted)
            .then(() => message.channel.send(`Muted ${mentionMember}`))
    message.delete(1)
            .catch(console.error);
    }
}