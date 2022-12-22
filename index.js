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

client.login("MTA1NTQ2NzIwMjU5NTI3ODg3OA.GzOrVV.S3Qa6UBCATMzjkruLYvcorVuhSvI07RZ9Xscdw")
