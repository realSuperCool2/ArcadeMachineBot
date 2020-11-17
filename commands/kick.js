module.exports = {
  name: 'kick',
  description: 'Kick',
  execute(message, args) {
        

        //Then check if user have permissions to do that
        if(!message.member.hasPermission('KICK_MEMBERS')) {return message.reply("you have no permissions to do that");
            
        };

        //const a member, wich you need yo kick (its fist mention message member)
        let mentionMember = message.mentions.members.first();
        //If user dont mention a member, that show him this error msg
        if(!mentionMember) {
            message.reply('mention the member which you want to kick');
            return;
        }
        
        //If all steps are completed successfully try kick this user
        mentionMember.kick()
            .then(() => message.channel.send(`Kicked ${mentionMember}`))
            .catch(console.error);
    }
}
  

