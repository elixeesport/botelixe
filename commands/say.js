const config = require('../config.json')

module.exports = {
    run: (message, args) => {
        if (!message.member.hasPermission('MANAGE GUILD')) return message.channel.send('Tu ne possède pas le pouvoir pour exécuter cette commande 😢')
        if (!args[0]) return message.channel.send('Veuillez indiquer du texte à envoyer.')
        message.delete()
        message.channel.send(message.content.trim().slice(`${config.prefix}say`.length))


    },
    name:'say',
    guildOnly: true,
    help: {
        description: 'Change vos message avec celle du bot.',
        syntax: 'Votre message.'
    }
}