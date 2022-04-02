// Imports/ require
// For discord.js documents refer here https://discord.js.org/#/
const Discord = require("discord.js");
const client = new Discord.Client({
  partials: ["MESSAGE", "CHANNEL", "REACTION"],
});
require("dotenv").config();

client.commands = new Discord.Collection();
client.events = new Discord.Collection();
// we want this file to acces these other files 
["commandHandle", "eventHandle"].forEach((handler) => {
  require(`./Handlers/${handler}`)(client, Discord);
});
// In order to access the discord bot we need a secret token that links this code to the bot.
client.login(process.env.TOKEN);
