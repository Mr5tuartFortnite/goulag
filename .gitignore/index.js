const Discord = require("discord.js");

var client = new Discord.Client();


client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.login("NTE4NTI1MjQyNzg4ODA2NjU5.DuVhOA.SYo1Gb0XbWj3f5ROb4jkK2hObFI");
