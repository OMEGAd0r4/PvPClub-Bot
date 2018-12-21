const commando = require('discord.js-commando')
const Discord = require('discord.js');
const prefix = ">";
const bot = new commando.Client({
    commandPrefix: prefix
});

class statusCommand extends commando.Command {
    constructor(client)
    {
      super(client, {
        name: 'status',
        group: 'pvpclub',
        memberName: 'status',
        description: 'Shows the status of the PvPClub Network'
      });
    }

    async run(message)
    {
        //npm install request --save
        var request = require("request");
        var mcIP = "pvpclub.club";
        var mcPort = "";

        var url = "http://mcapi.us/server/status?ip=" + mcIP + "&port" + mcPort;
        request(url, function(err, response, body) {
            if (err) message.channel.send(err);

            body = JSON.parse(body);
            
            var status = `The PvPClub Network is currently offline`;
            if(body.players.now){
                message.channel.send({embed: new Discord.RichEmbed()
                    .setTitle("**PvPClub | Status**")
                    .setColor("#FFDF00")
                    .addField("The PvPClub network is currently online with,", `${body.players.now} people playing`)
                    .setThumbnail("")})
            }
            if(!body.players.now){
                message.channel.send({embed: new Discord.RichEmbed()
                    .setTitle("**PvPClub | Status**")
                    .setColor("#4286f4")
                    .addField("The PvPClub network is currently online with,", "-> 0 players")
                    .setThumbnail("")})
            }
        })
    }
}

module.exports = statusCommand;
