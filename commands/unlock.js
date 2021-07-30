const fs = require('fs'),
Discord = require('discord.js'),
config = require('../config.json')
 
module.exports = {
    run: (message, args, client) => {
        if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.channel.send('Vous n\'avez pas la permission d\'utiliser cette commande.')
        const channel = message.mentions.channels.first() || message.channel
        if (!client.db.lockedChannels.includes(channel.id)) return message.channel.send('Ce salon n\'est pas vérrouillé.')
        client.db.lockedChannels.splice(client.db.lockedChannels.indexOf(channel.id), 1)
        fs.writeFileSync('./db.json', JSON.stringify(client.db))
        message.channel.send('Ce salon a été déverrouillé !')

        message.guild.channels.cache.get(config.logs).send(new Discord.MessageEmbed()
        .setAuthor(`[🔓UNLOCK] ${channel.name}`)
        .addField('Salon', channel, true)
        .setColor('#ff0000')
        .addField('Super-héro', message.author, true))
    },
    name: 'unlock',
    guildOnly: true,
    help: {
        description: 'Déverouille le salon vérouiller.',
        syntax: ''
    }
}