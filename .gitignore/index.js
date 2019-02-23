const Discord = require('discord.js');
const fs = require('fs')
const client = new Discord.Client();
var prefix = "^^";

bot.on("ready", function() {
    bot.user.setGame("MaxBot, !help");
    console.log("Le bot est connecté.")

});

bot.login('NTQ3MjMyODU3NjYwMDYzNzU0.D02-UQ.saRpYg5d5eSLqI3xf2Vy9rv3BkM');
