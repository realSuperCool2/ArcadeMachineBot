const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "clean",
  description: "Clean!",
  execute: async (message, args) => {
    const amount = parseInt(args[0]);
    if (!message.member.hasPermission("MANAGE_MESSAGES"))
      return message.reply("you do not have permission to use this command.");
    if (!amount) return message.reply("please specify an amount.");
    const embed = new MessageEmbed()
      .setTitle("Cleaning...")
      .setThumbnail(
        "https://cdn.glitch.com/ba22d9dd-e885-489a-bdd5-349f75b52ec4%2F6768085e-8ebf-443a-a9ed-f2c523409d59.image.png?v=1603853736462"
      )
      .setDescription("Vroom... Vroom")
      .setColor("#cc882f")
      .setFooter(`Deleting ${amount} messages.`);
    const send = await message.channel.send({ embed: embed }).then(msg => {
      msg.delete({ timeout: 5000 });
      message.channel.bulkDelete(amount + 1, { timeout: 5000 });
    });
  }
};
