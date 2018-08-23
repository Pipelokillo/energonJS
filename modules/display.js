const app = require('discord.js');
const data = require('../data.json');

exports.run = (energon, message, args) => {
const embed = new app.RichEmbed()
.setDescription("Scrim list bot for Fortnite")
.setThumbnail(energon.user.avatarURL)
.setTimestamp()
.setFooter("Requested by: ", message.author.tag)
const m = message.channel.send(embed);
energon.on('message', (message) => { 
    if (message.channel.id === 'ID') {
        //third step code
    const stuff = message.content;
    m.edit(stuff);
    return;
     }
   })
 }       
