const Discord = require('discord.js'),
    moment = require('moment')

module.exports = {
    run: message => {
        const role = message.mentions.roles.first()
        if (!role) return message.channel.send('Veuillez mentionner le rôle pour avoir les infos de celui-ci .')
        message.channel.send(new Discord.MessageEmbed()
            .addField('Rôle', role, true)
            .addField('Membres possédant le rôle', role.members.size, true)
            .addField('Couleur', role.hexColor, true)
            .addField('Date de création', moment(role.createdAt).format('[Le] DD/MM/YYYY [à] HH:mm:ss'), true)
            .addField('Affiché séparément', role.hoist ? 'Oui': 'Non', true)
            .addField('Mentionnable', role.mentionable ? 'Oui': 'Non', true)
            .setFooter(`ID : ${role.id}`)
            .setColor(role.hexColor))

    },
    name: 'role-info',
    guildOnly: true,
    help: {
        description: 'Permet d\'avoir des informations sur les rôles du serveur discord.',
        syntax: '<@role>'
    }
}