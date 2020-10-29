require('dotenv').config();

const { Client } = require('discord.js')
const client = new Client();
const PREFIX = "*";

client.on('ready', () => {
    console.log(`${client.user.tag} has logged in`);
});

client.on('message', (message) =>{
    console.log(`[${message.author.tag}] sent: ${message.content}`);
    if (message.content.startsWith(PREFIX)) {
        const [CMD_NAME, ...args] = message.content
        .trim()
        .substring(PREFIX.length)
        .split(" ");
    }
});

client.login(process.env.DISCORDJS_BOT_TOKEN)

