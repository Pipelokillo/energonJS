const queue = new Map();
const ytdl = require('ytdl-core');
const YouTube = require('simple-youtube-api');
const config = require("../config.json");
const KEY = config.KEY;
const youtube = new YouTube(KEY);
const {
    MessageCollector,
    RichEmbed
} = require('discord.js');
exports.run = async (energon, message, args) => {

    message.react("🎵")
    message.react("✅")
    let url = args.slice(0).join(" ");
    if (!url) return message.channel.send(":x: | Add a link or tell me what to search in order to play.");

    let voiceChannel;
    let GuildQueue = queue.get(message.guild.id);
    if (!GuildQueue) {
        voiceChannel = message.member.voiceChannel;
        //If user is not inside of any voice channel
        if (!voiceChannel) return message.channel.send(":x: | You must join a voice channel");
        let permissions = voiceChannel.permissionsFor(message.guild.me);
        //Validation
        if (!permissions.has("CONNECT")) return message.channel.send(":x: | I can't connect to that voice channel.");
        if (!permissions.has("SPEAK")) return message.channel.send(":x: | I don't have SPEAK permission in this channel.");
    };




async function handleMusic(message, video, vc, mm) {

    let GuildQueue = queue.get(message.guild.id);

    const song = {
        id: video.id,
        name: video.title,
        url: `https://www.youtube.com/watch?v=${video.id}`,
        requester: message.author,
        duration: video.durationSeconds
    };

    if (!GuildQueue) {
        GuildQueue = {
            songs: [],
            channel: message.channel,
            voiceChannel: null,
            connection: null,
            playing: false,
            dispatcher: null,
            volume: 0.5,
            maxLength: 3600
        }
 

function startPlaying(guild, song) {
    const GuildQueue = queue.get(guild.id);

    if (!song) {

    };

    const stream = ytdl("https://www.youtube.com/watch?v=kdZlr-q8bLY", {
        audioonly: true
    });

    const dispatcher = GuildQueue.connection.playStream(stream);

    dispatcher.on("start", () => {
        GuildQueue.playing = true;
        GuildQueue.channel.send(`Started playing **${song.name}** !`);
    });

    dispatcher.on("end", (reason) => {
        if (typeof reason !== "undefined") {
            console.log(reason);
        };

        setTimeout(() => {
            GuildQueue.songs.shift();
            if (!GuildQueue.songs.length) return;
            startPlaying(guild, GuildQueue.songs[0]);
        }, 1000);
    });

    dispatcher.on("error", (err) => {
        console.log(err);
    });

    dispatcher.setVolume(GuildQueue.volume);
}

module.exports.info = {
    name: "play",
    description: "play music from youtube",
    usage: "?play <name/link>"
}
