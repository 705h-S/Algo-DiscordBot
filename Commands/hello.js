module.exports = {
    name: 'birth',
    description: 'Test command',
    execute(client, message, args){
        message.channel.send('Hello World!');
    }
}