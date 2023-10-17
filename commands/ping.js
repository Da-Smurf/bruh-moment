module.exports = {
    name: 'ping',
    description: "pinged",
    execute(message, args){
        message.channel.send('(insert random number with ms here)')
    }
}