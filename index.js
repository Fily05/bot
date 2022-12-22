const { GatewayIntentBits } = require("discord.js");
const Discord = require("discord.js");
const client = new Discord.Client({
    intents: [
        GatewayIntentBits.Guilds, 
        GatewayIntentBits.GuildVoiceStates, 
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildMembers,
    ]
})

client.login(process.env.token)
