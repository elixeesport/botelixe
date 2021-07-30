const Discord = require('discord.js')
 
module.exports = {
    run: message => {
        message.channel.send(new Discord.MessageEmbed()
            .setTitle('L\'équipe ELIXE')
            .setTitle('**Recrutement de la ELIXE eSport**')
            .setDescription('**__Postulez ci-dessous__**')
            .setColor('#ffbe00')
            .addField('*Fortnite*', '\nhttps://docs.google.com/forms/d/e/1FAIpQLSfr-t8qNe2ejiEa_7DYP84WvsHTE09M8oDH5OlDcazVAgRxXA/viewform?usp=sf_link')
            .addField('Fortnite CLAN', '\nhttps://docs.google.com/forms/d/e/1FAIpQLSeMbNpr2WcLN4i9TyxDhAaWQ064oe_wZGJxdybQBa3fIN9jhg/viewform?usp=sf_link')
            .addField('*Staff*', '\nhttps://docs.google.com/forms/d/e/1FAIpQLSfA3PnAc88kPi86mbVc82rKyizdiJZKm0HJBD2O93VA9cLZOg/viewform')
            .setAuthor('L\'équipe ELIXE', 'https://cdn.discordapp.com/attachments/801984862591647774/817431105027571792/logo_elixe_jaune_png.png')
            .setImage('https://cdn.discordapp.com/attachments/801984862591647774/817431105027571792/logo_elixe_jaune_png.png')
            .setFooter('Cordialement, \nL\'équipe ELIXE', 'https://cdn.discordapp.com/emojis/803009342642061372.png?v=1')
            .setTimestamp())
    },
    name: 'rc'
}