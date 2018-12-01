const Discord = require("discord.js");

var bot = new Discord.Client();

bot.on("ready", function() {
    bot.user.setGame("Fortnite");
    console.log("Bot has been connected, perfectly");
});

bot.login("NTE4NTI1MjQyNzg4ODA2NjU5.DuSKag.w2aHM9eHssYa4BESaJ6F_Y-bF_o");
