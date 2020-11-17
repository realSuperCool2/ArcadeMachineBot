let Discord = require("discord.js")
const client = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION"]})
module.exports = {
  name: 'reaction',
  description: 'Reaction',
  execute: async (message, args) => {
    const filter = (reaction, user) => reaction.emoji.name === '👍'
message.awaitReactions(filter, { time: 15000 }).then(collected => {
  const reaction = collected.first();
  if(message.reaction) return
  if (reaction.emoji.name === '👍') {
    message.reply("You give me thumbs up!");
  }
}).catch(console.error);
    
    
}}