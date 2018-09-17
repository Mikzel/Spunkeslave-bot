const Discord = require('discord.js');
const client = new Discord.client();

client.on('ready', () => {
    console.log('I am ready!');
});


    if (message.content.startsWith ("ping")) {
        message.channel.send ("pong");
    }

      
});

client.login(process.env.BOT_TOKEN);
