const Discord = require('discord.js'),
    config = require('../config.json')
 
module.exports = {
    run: (message, args, client) => {
        if (args[0]) {
            const command = client.commands.get(args[0].toLowerCase())
            if (!command || !command.help) return message.channel.send('Commande invalide')
            message.channel.send(new Discord.MessageEmbed()
                .setColor('#ff0000')
                .setDescription(`**Commande : ${command.name}**\n\n${command.help.description}\n\nSyntaxe : \`${config.prefix}${command.name}${command.help.syntax ? ` ${command.help.syntax}` : ''}\``)
                )
        }
        else {
            message.channel.send(new Discord.MessageEmbed()
            .setColor('#ffbe00')
            .setTitle('Liste des commandes du Elixe BOT')
            .setDescription(`\n Pour plus d\'informations, tapez \`${config.prefix}help [nom de la commande]\``)
            .addField('COMMANDES MODO',' `=ban`, `=clear`, `=kick`, `=lock`,`=mute`, `=tempban`, `=tempmute`, `=unlock`, `=unmute`, `=unwarn`, `=warn`')
            .addField('COMMANDES POUR TOUS',' `=8ball`, `=help`, `=infractions`, `=poll`, `=role-info`, `=say`, `=server-info`, `=user-info`')
            .setFooter('Cordialement, L\'équipe Elixe')
         .setTimestamp()) 
        }
    },
    name: 'help',
    help: {
        description: 'Permet d\'avoir de l\'aide.',
        syntax: '[nom de la commande]'
    }
}