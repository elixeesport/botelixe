const Discord = require('discord.js')
 
module.exports = {
    run: message => {
        message.channel.send(new Discord.MessageEmbed()
            .setTitle('Effectif de la ELIXE eSport')
            .setDescription('**Si un rôle te plaît n\'hésite pas à postuler !** \n▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ \n')
            .setColor('#ffbe00')
            .addField('*🛰️ Pôle Fondation* \n▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬', '\n\n***👑Président***\n\n<@689416893924376637>\n<@801959419214037092> \n▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬')
            .addField('*🎱 Pôle Administratif* \n▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬', '\n***🎩Vice-Président***\n\n<@780125628065513512> \n\n***⚙️Administrateur***\n\n<@659711844335878154> \n<@352734465912471552> \n▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬')
            .addField('*⛑️Pôle Direction* \n▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬', '\n\n***🎇Directeur Générale***\n\n**__En recherche__** \n\n***💉Directeur Staff*** \n\n**__En recherche__** \n\n**🎥Directeur Streamer** \n\n**__En recherche__** \n\n***🔮Directeur eSport*** \n\n**__En recherche__** \n\n***🎊Directeur Evénementiel*** \n\n**__En recherche__** \n▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬')
            .addField('*👒Pôle Responsable* \n▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬', '\n***🥢Responsable Discord*** \n\n<@689416893924376637> \n\n***🏆Responable FTN*** \n\n**__En recherche__** \n\n***🔫Responsable Valorant*** \n\n<@304961009519427584> \n\n***🎭Responsable Publicitaire*** \n\n<@727206142043750562>\n▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬')   
            .addField('*🎐Pôle Staff* \n▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬', '\n***📌Modérateurs*** \n\n<@773586712269160489> \n\n***🔦Helpeur***\n\n**__En recherche__** \n\n***🎭Chef Publicitaire*** \n\n<@727206142043750562>\n\n***🎭Publicitaires***\n\n<@627418162899714048> \n▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬')
            .addField('*🏆Pôle Fortnite* \n▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬', '\n\n***🔮 Manager Fortnite***\n\n**__En recherche__** \n\n***👮‍♂️Coach Fortnite*** \n\n<@780125628065513512> \n\n***💻Joueurs eSport*** \n\n **__En recherche__** \n\n***💻Joueurs Académique*** \n\n <@352734465912471552> \n<@716322191565783110> \n<@771670598790807552> \n<@640510606834925569> \n <@485068014786576410>\n\n▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\n ⛏**Pôle Clan**\n▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\n***🗺Joueurs BuildFight*** \n\n **__En recherche__** \n\n***🔳Joueurs BoxFight*** \n\n<@767735220854063114> \n▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬')
            .addField('*🧿Pôle Valorant* \n▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬', '\n\n***💾Manager Valorant***\n\n**__En recherche__** \n\n***⌨Coach Valorant***\n\n**__En recherche__** \n\n💣Joueur Valorant\n\n**__En recherche__**')        
            .addField('*🥊Pôle AudioVisuel*', '***🎥Streamer*** \n\n **__En recherche__** \n\n ***👒Content Creator*** \n\n**__En recherche__** \n\n***🎨Graphistes*** \n\n <@687170586480476171> \n<@622730047450644480> \n\n***🎥Monteurs*** \n\n <@805424646484787241> \n▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬'))   
        },
    name: "effectif"
}