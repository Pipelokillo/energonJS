const app = require('discord.js');
const data = require('../data.json');

exports.run = (energon, message, args) => {

const display = new app.RichEmbed()
.setDescription("REV ScrimBot is a <:Fortnite:481831102802034689> bot for match info. Developed by Alphi#9839 <:staff:474743393658863626>")
.setColor(data.embedColor)
.setThumbnail("https://cdn.discordapp.com/emojis/481831653581258753.png?v=1")
.setTimestamp()
.addField("Bot owner", "REV Pipelokillo#2081" 
.setFooter("Requested by: " + message.author.username)
message.channel.send(display);
}
