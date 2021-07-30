const Discord = require('discord.js')
 
module.exports = {
    run: message => {
        message.channel.send(new Discord.MessageEmbed()
            .setTitle('L\'équipe ELIXE')
            .setTitle('**Résaux de la ELIXE eSport**')
            .setDescription('**__Venez nous suivre !__**')
            .setColor('##ffbe00')
            .addField('*🐦Twitter*', '\nhttps://twitter.com/Elixeesport')
            .addField('*🎥 YouTube*', '\nhttps://www.youtube.com/channel/UCsaOQR789DainRxylO01OQg')
            .addField('*📷 Twitch*', '\nhttps://www.twitch.tv/elixe_esport')
            .setAuthor('L\'équipe ELIXE', 'https://cdn.discordapp.com/attachments/801984862591647774/817431105027571792/logo_elixe_jaune_png.png')
            .setImage('https://cdn.discordapp.com/attachments/801984862591647774/817431105027571792/logo_elixe_jaune_png.png')
            .setFooter('Cordialement, \nL\'équipe ELIXE', 'https://cdn.discordapp.com/emojis/803009342642061372.png?v=1')
            .setTimestamp())
    },
    name: 'embedr'
}