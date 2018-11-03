const commando = require('discord.js-commando');
const discord = require('discord.js');
const bot = new commando.Client({
    commandPrefix: '?'
});

// This is the token for MagicalMan dont forget to change it after you regenerate it!
const TOKEN = 'NDk2NzkyMzQ3MDkxMTQwNjI4.DrIgQA.5BmKiiiTOC6GhSjNK4lFZotWoXM'

global.servers = {};

// Tells you in your terminal when the bot goes Online.
bot.on('ready',function(){
    console.log("MagicalMan is now Online.");
    // Sets the activity of the bot. Like what game its playing at the time.
    bot.user.setActivity("&help, Contact jamiekearns2004#2485 on discord for additional help!", {type: 'PLAYING'})
});

bot.on('message', function(message){
        
    if(message.content == 'Hello')
    {
        message.channel.send('Hello ' + message.author + ', how are you?');
    }
});

// Welcomes a user to the server as an embed
bot.on('guildMemberAdd', member => {
    let channel = member.guild.channels.find('name', 'state-border');
    let memberavatar = member.user.avatarURL
        if(!channel) return;
        let WelcomeEmbed = new discord.RichEmbed()
        .setColor('0xF95CF9')
        .setThumbnail(memberavatar)
        .addField(':bust_in_silhouette: | Name : ', `${member}`)
        .addField(':microphone2: | Welcome!', `Welcome to ${member.guild.name} ${member}! Please make sure you read all the rules and have also submitted a valid application, which can be found in website . If you have done both of these, please wait until a member of Staff can interview you. We currently have ${member.guild.memberCount} certified members!`)
        .addField(':id: | User : ', "**[" + `${member.id}` + "]**")
        .addField(':family_mwgb: | You are the member', `${member.guild.memberCount}`)
        .addField("Name", '<@' + `${member.id}` + '>', true)
        .addField('Server', `${member.guild.name}`, true )
        .setTimestamp()

        channel.sendEmbed(WelcomeEmbed)
});

bot.on('guildMemberAdd', member => {

    console.log(`${member}`, "has joined" + `${member.guild.name}`)
});

// This is the Token for MagicalMan's bot make sure to change it when u regenerate it!
bot.login(process.env.BOT_TOKEN);
