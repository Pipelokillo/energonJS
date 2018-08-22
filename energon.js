//Developed by Alphi#9839 (Discord username) | Jose Barranco

const app = require('discord.js');
//Require Discord API

const energon = new app.Client();
//Declare 'energon' as Discord(app) client variable

const data = require('./data.json');
//require json file containing necessary data

energon.on('ready', () => {
//initialize bot

console.log(`Succesfully logged in as: ` + energon.user.tag);
//Log bot username in console

energon.user.setActivity("Fortnite!", {type: "STREAMING", url: "https://twitch.tv/fortnite"}) 
//Display the bot with `Fortnite Streaming` status

console.log(`Users: ${energon.users.size}`);
//Log amount of users serving in console
});

energon.on('message', async message => {
 //Initialize message event 

  if(message.author.bot) return;
  //If the command is invoked by a bot user, ignore.

if (message.content.indexOf(prefix) !== 0) return;
  //If prefix only is detected with no command, ignore.

const args = message.content.slice(prefix.length).trim().split(/ +/g);
  //Eliminate the prefix from the command and take the command name only.

const command = args.shift().toLowerCase();
  //Convert uppercase commands into lowercase

let commandFile = require(`./commands/${command}.js`);
   commandFile.run(AI, message, args);
   //Read commands from commands folder
 
 });

energon.login(process.env.KEY);
 //Log in
