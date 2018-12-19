//PLUGINS
const commando = require('discord.js-commando')
const Discord = require('discord.js');
const prefix = ">";
const bot = new commando.Client({
    commandPrefix: prefix
});
//PLUGINS

//BOT LOGIN
bot.login(process.env.token);
//BOT LOGIN

//GETS THE BOT ONLINE
bot.on('ready',function(){
    console.log(`Bot is now online!, with ${bot.users.size} users, in ${bot.channels.size} channels of ${bot.guilds.size} guilds.`);
    bot.user.setActivity(`/help | PvPClub`, { type: 'PLAYING' });
})
//GETS THE BOT ONLINE

//REGISTRIES
bot.registry.registerGroup("pvpclub", 'PvPClub')
bot.registry.registerCommandsIn(__dirname + "/commands");
bot.registry.registerDefaults();
//REGISTIES
