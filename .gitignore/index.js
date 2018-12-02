const Discord = require("discord.js");

var bot = new Discord.Client();

bot.on("ready", function() {
    bot.user.setGame("Fortnite");
    console.log("Bot has been connected, perfectly");
});

bot.login("NTE4NTI1MjQyNzg4ODA2NjU5.DuVhOA.SYo1Gb0XbWj3f5ROb4jkK2hObFI");
