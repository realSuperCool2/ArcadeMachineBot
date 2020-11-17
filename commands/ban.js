module.exports = {
  name: 'ban',
  description: 'Ban',
  execute(message, args) {
        

        //Then check if user have permissions to do that
        if(!message.member.hasPermission('BAN_MEMBERS')) {return message.reply("you have no permissions to do that");
            
        };

        //const a member, wich you need yo kick (its fist mention message member)
        let mentionMember = message.mentions.members.first();
        //If user dont mention a member, that show him this error msg
        if(!mentionMember) {
            message.reply('mention the member which you want to ban');
            return;
        }
        
        //If all steps are completed successfully try ban this user
        mentionMember.ban()
            .then(() => message.channel.send(`Banned ${mentionMember}`))
            .catch(console.error);
    }
}
  

