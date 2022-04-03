const fs = require('fs');

module.exports = (client, Discord)=>{
    const commandFile = fs.readdirSync(`./Commands/`).filter(file => file.endsWith('.js'));
        // Looping through the commands, better than writing a single if statements for each commandc
    for(const file of commandFile){
        const command = require(`../Commands/${file}`);
        if(command.name){
            client.commands.set(command.name, command);
        }else{
            continue;
        }
    }
}