const Discord = require('discord.js'),
    reactions = ['🇦', '🇧', '🇨', '🇩', '🇪', '🇫', '🇬', '🇭', '🇮', '🇯', '🇰', '🇱', '🇲', '🇳', '🇴', '🇵', '🇶', '🇷', '🇸', '🇹']
 
module.exports = {
    run: async (message, args) => {
        const [question, ...choices] = args.join(' ').split(' | ')
        if (!question) return message.channel.send('Veuillez indiquer la question à poser.')
        if (!choices.length) return message.channel.send('Veuillez indiquer au moins 1 choix.')
        if (choices.length > 20) return message.channel.send('Il ne peut pas y avoir plus de 20 choix.')
        message.delete()
        const sent = await message.channel.send(new Discord.MessageEmbed()
            .setTitle(question)
            .setColor('#FBF708')
            .setDescription(choices.map((choice, i) => `${reactions[i]} ${choice}`).join('\n\n')))
        for (i = 0; i < choices.length; i++) await sent.react(reactions[i])
    },
    name: 'poll',
    guildOnly: true,
    help: {
        description: 'Créer un sondage et ajoute automatiquement les 20 première lettres de l\'alphabet.',
        syntax: 'Question | réponse A | réponse B \n PS: les "|" sont obligatoire à chaque réponse.'
    }
}

