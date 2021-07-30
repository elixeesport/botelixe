const Discord = require('discord.js')
 
module.exports = {
    run: message => {
        message.channel.send(new Discord.MessageEmbed()
            .setTitle('L\'équipe ELIXE')
            .setTitle('**Règlement**')
            .setDescription('**__Veuillez le lire attentivement !__**')
            .setColor('#FBF708')
            .addField('*<a:Elixe_flche:816065850133184632> 1. Le respect et la courtoisie*', '\nUn comportement respectueux est demandé à chaque membre. \nIl n’est pas permis de manquer de respect, insulter ou dire n’importe quelle chose qui puisse porter à l’intégrité d’un autre membre. Les propos racistes, xénophobes,homophobes, ou tout autre propos à caractère haineux ou qui porte atteinte à quiconque est formellement interdit. Les trolls ne sont pas autorisés.')
            .addField('*<a:Elixe_flche:816065850133184632> 2. Les images*', '\nLes images affichées ou envoyées, à caractère haineux, religieux, politiques, sexuels, homophobes ou à n’importe quel caractère pouvant porter atteinte à quiconque ou être source de conflits, sont interdites.')
            .addField('<a:Elixe_flche:816065850133184632> *3. Le langage*', '\nVeillez à vous exprimez correctement en utilisant un langage correct, une écriture claire et compréhensible.')
            .addField('*<a:Elixe_flche:816065850133184632> 4. Les mentions*', '\nLes mentions (@pseudo) sont à utiliser avec modération. L’utilisation répétée et/ou inutile de cette commande est interdite. Si vous avez un quelconque soucis, merci vous adressez à un Modérateur.')
            .addField('*<a:Elixe_flche:816065850133184632> 5. Les liens*', 'Il est interdit de donner des liens emmenant vers des sites frauduleux ou de téléchargements illégaux. Il est aussi interdit de donner des liens menant directement à des applications illégales ou qui mènent vers des sites de torrents, cracks, virus...')
            .addField('*<a:Elixe_flche:816065850133184632> 6. Le droit d’écoute*', 'L’équipe d’administration et de modération de la Elixe se réservent le droit de pénétrer à tout moment dans n’importe quel salon public ou privé afin d’écouter ce qu’il peut se dire dans le seul but de faire respecter le règlement.')
            .addField('*<a:Elixe_flche:816065850133184632> 7. La publicité*', 'La publicité pour un quelconque serveur, vidéo ou autres est interdite , sous quelle que forme que ce soit. Cependant, seuls les échanges publicitaires avec les autres structures sont autorisés.')
            .setThumbnail('https://cdn.discordapp.com/attachments/801984862591647774/817431105027571792/logo_elixe_jaune_png.png')
            .setTimestamp())
    },
    name: 'règlement'
}