const fs = require('fs');
const Discord = require('discord.js');
const prefix = process.env.prefix
const client = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION"]})
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

client.once('ready', () => {
	console.log(`Logged in as ${client.user.tag}!`);
});



client.on('message', message => {
	if (message.content.startsWith(prefix) && !message.author.bot) {
    if(!message.guild.id === '755592555252416626') return message.reply('you must be in Poke Arcadium to execute this command.  https://discord.gg/tXzK35YfRH')
      const args = message.content.slice(prefix.length).trim().split(/ +/);
      const command = args.shift().toLowerCase();

	if (!client.commands.has(command)) return;

try {
	client.commands.get(command).execute(message, args);
} catch (error) {
	console.error(error);
	message.reply('there was an error trying to execute that command!');
}
    
  }

});

  client.login(process.env.Token);