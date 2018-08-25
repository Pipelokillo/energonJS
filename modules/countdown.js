const app = require('discord.js');
exports.run = async (energon, message, args, member) => {
 if (message.member.voice.channel) {
      const connection = await message.member.voice.channel.join();
    } else {
      message.reply('You need to join a voice channel first!');
    }
const ytdl = require('ytdl-core');
connection.play(ytdl(
  'https://www.youtube.com/watch?v=ZlAU_w7-Xp8',
  { filter: 'audioonly' }));
}
