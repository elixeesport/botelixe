const Discord = require('discord.js'),
    replies = ['Oui', 'Non', 'Peut-être', 'Évidemment']
 
module.exports = {
    run: (message, args) => {
        const question = args.join(' ')
        if (!question) return message.channel.send('Veuillez indiquer une question.')
        message.channel.send(new Discord.MessageEmbed()
            .setTitle(question)
            .setColor('#FBF708')
            .setDescription(replies[Math.floor(Math.random() * replies.length)]))
    },
    name: '8ball',
    help: {
        description: 'Créer une question et répond par : Oui, Non, Peut-être, Évidemment',
        syntax: 'Question'
    }
}