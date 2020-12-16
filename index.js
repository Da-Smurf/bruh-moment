const Discord = require('discord.js')

const client = new Discord.Client();
// the prefix
const prefix = '_';

const fs = require('fs');

client.command = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.command.set(command.name, command);
}
// when the client is ready, run this code
// this event will only trigger one time after logging in
client.once('ready', () => {

    var testchannel = client.channels.find(channel => channel.id === '653341083090157570');

    console.log('omg chese');

    setInterval(() => {
        testchannel.send("hi <@375595023724707840> ok bye");
    }, 21600000);

    client.user.setPresence({ activity: { name: '_help' }, status: 'idle' }).catch(console.error);
});
// the commands sections
client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split("/ +/");
    const command = args.shift().toLowerCase();

    if(command === 'ping'){
     client.command.get('ping').execute(message, args);
    } else if (command == 'noob'){
     client.command.get('noob').execute(message, args);
    } else if (command == 'help'){
        const testEmbed = new Discord.MessageEmbed()
    .setColor('#d3ae10')
    .setTitle('Help commands')
    .setAuthor('by Da Smurf#7329', 'https://cdn.discordapp.com/attachments/653341083090157570/749191676584525854/bkue_man.png')
    .setDescription('this is the sections for the commands')
    .addFields(
		{ name: 'Respond commands', value: '\n Help, This embed \n Ping, just respond with "pong" \n Noob, :sob: you bully :sob: \n Hi, Woah we meet \n invite, do you want me in your server??? \n Prefix, wow u forgot smh \n avatar, wow ur pfp is good ngl' },
		{ name: '\u200B', value: '\u200B' },
		{ name: 'Emojis Commands ', value: 'face, <:face:773415576504762398>', inline: true },
	)
    .setTimestamp()
    .setFooter('- Cheese Bot', 'https://i.imgur.com/H2ZRuBP.pngS');
        try {
            message.reply(testEmbed);
        } catch {
            message.reply('this is for when it not work')
        }
    } else if (command == 'hi'){
        client.command.get('hi').execute(message, args);
    } else if (command == 'invite'){
        client.command.get('invite').execute(message, args);
    } else if (command == 'prefix'){
        message.reply(`use \`${prefix}\` smh`);
    } else if (command == 'face'){
        client.command.get('face').execute(message, args);
    } else if (command == 'avatar'){
        message.reply(message.author.displayAvatarURL());
    } else if (command == 'kimi'){
        const channel = client.channels.cache.get('653341083090157570');
        channel.send('hi <@375595023724707840> ok bye');
    }
});
// token 
client.login(process.env.token);