const Discord = require('discord.js')
    moment = require('moment')

module.exports =  {
    run: (message, args, client) => {
        const member = message.mentions.members.first() || message.member
        message.channel.send(new Discord.MessageEmbed()
            .setColor('#FBF708')
            .addField('Membre', member, true)
            .addField('Tag', member.user.tag, true)
            .addField('Création du compte fait', moment(member.user.createdAt).format('[Le] DD/MM/YYYY [à] HH:mm:ss'), true)
            .addField('Arriver sur le serveur', moment(member.joindedAt).format('[Le] DD/MM/YYYY [à] HH:mm:ss'), true)
            .addField('Début de boost', member.premiumSince ? moment(member.premiumSince).format('[Le] DD/MM/YYYY [à] HH:mm:ss'): 'N\'a pas booster le serveur 😢')
            .addField('Infractions', client.db.warns[member.id] ? client.db.warns[member.id].lenght: 'Aucune infraction', true)
            .setThumbnail(member.user.displayAvatarURL())
            .setFooter(`ID : ${member.id}`))

    },
    name: 'user-info',
    guildOnly: true,
    help: {
        descritpion: 'Permet d\'avoir des informations sur le compte discord d\'un membre.',
        syntax: '<@membre>'
    }
}