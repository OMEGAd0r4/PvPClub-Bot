const Discord = require("discord.js");
const commando = require('discord.js-commando')
const prefix = ">";
const bot = new commando.Client({
  commandPrefix: prefix
});

class infoCommand extends commando.Command {
  constructor(client) 
  {
    super(client, {
      name: 'info', 
      group: 'pvpclub',
      memberName: 'info',
      description: "Information about the PvPClub Network"
    });
  }

  async run(message)
  {
      message.channel.send({embed: new Discord.RichEmbed()
        .setColor("#4286f4")
        .setTitle("**PvPClub | Information**")
        .addField("**__Server IP__**", "pvpclub.club")
        .addField("**__Webstore__**", "soon")
        .addField("**__Discord__**", "https://discord.gg/UVxBSGt")
        .addField("**__Twitter__**", "soon")})
  }
}

module.exports = infoCommand;
