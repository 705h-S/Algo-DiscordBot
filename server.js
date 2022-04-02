// Imports/ require
// For discord.js documents refer here https://discord.js.org/#/
const { Discord, Client, Collection, Intents } = require('discord.js');

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
require("dotenv").config();

client.commands = new Collection();
client.events = new Collection();
// we want this file to acces these other files 
["commandHandle", "eventHandle"].forEach((handler) => {
  require(`./Handlers/${handler}`)(client, Discord);
});
// In order to access the discord bot we need a secret token that links this code to the bot.
client.login(process.env.TOKEN);
