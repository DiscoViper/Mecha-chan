const Discord = require("discord.js");
const TOKEN = "MzEyNjM0NTM2OTA1NDA4NTIy.C_k5ug.KHFOP8gY193wy-kwo94guDTpICI";
const PREFIX = ".>";

const bot = new Discord.Client();

bot.on("ready", function() {
    console.log("Mecha online");
    bot.user.setGame("being programmed");
});

bot.on('guildMemberAdd', function(member) {
    member.guild.channels.find("name", "general").send(member.toString() + "welcome to the test server!");
});

bot.on("message", function(message) {
    if(message.author.equals(bot.user))
        return;

    if(!message.content.startsWith(PREFIX))
        return;

    var args = message.content.substring(PREFIX.length).split(" ");

    switch(args[0].toLowerCase()) {
        case "ping":
          message.reply("pong");
          break;
        case "avatar":
          message.reply(message.author.avatarURL);
          break;
    }
});

bot.login(TOKEN);
