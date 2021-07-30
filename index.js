const Discord = require('discord.js'),
    client = new Discord.Client({
        fetchAllMembers: true,
        partials: ['MESSAGE', 'REACTION']
    
    }),
    config = require('./config.json'),
    fs = require('fs'),
    humanizeDuration = require('humanize-duration'),
    cooldown = new Set()
 
client.login(process.env.TOKEN)
client.commands = new Discord.Collection()
client.db = require('./db.json')
 
fs.readdir('./commands', (err, files) => {
    if (err) throw err
    files.forEach(file => {
        if (!file.endsWith('.js')) return
        const command = require(`./commands/${file}`)
        client.commands.set(command.name, command)
    })
})
client.on('message', message => {
    if (message.type !== 'DEFAULT' || message.author.bot) return
 
    if (!message.member.hasPermission('MANAGE_CHANNELS') && client.db.lockedChannels.includes(message.channel.id)) return message.delete()
 
    const args = message.content.trim().split(/ +/g)
    const commandName = args.shift().toLowerCase()
    if (!commandName.startsWith(config.prefix)) return
    const command = client.commands.get(commandName.slice(config.prefix.length))
    if (!command) return
    if (command.guildOnly && !message.guild) return message.channel.send('Cette commande ne peut être utilisée que dans un serveur.')
    command.run(message, args, client)
})
 
client.on('ready', () => {
    const statuses = [
        () => `${client.guilds.cache.size} serveur`,
        () => `${client.guilds.cache.reduce((acc, guild) => acc + guild.memberCount, 0)} utilisateurs`
    ]
    let i = 0
    setInterval(() => {
        client.user.setActivity(statuses[i](), {type: 'WATCHING', })
        i = ++i % statuses.length
    }, 1e4)
})
 
client.on('channelCreate', channel => {
    if (!channel.guild) return
    const muteRole = channel.guild.roles.cache.find(role => role.name === 'Muted')
    if (!muteRole) return
    channel.createOverwrite(muteRole, {
        SEND_MESSAGES: false,
        CONNECT: false,
        ADD_REACTIONS: false
    })

})

    client.on("raw", event => {
        if(event.t === "MESSAGE_REACTION_ADD"){
            if(event.d.message_id === "869340763429949490"){
                let member = client.guilds.cache.get(event.d.guild_id).members.cache.get(event.d.user_id)

                if(event.d.emoji.name === "🎫"){
                    member.guild.channels.create(`「📞」${member.user.username}`, {type: "text"}).then(chan => {
                        let category = member.guild.channels.cache.get("869011521517285416", c => c.type == "category")
                        chan.setParent(category)

                        let role1 = member.guild.roles.cache.get("816731319278764073")
                        let everyone = member.guild.roles.cache.get("816731319244554240")

                        chan.updateOverwrite(role1, {
                            SEND_MESSAGES: true,
                            VIEW_CHANNEL: true
                            })
                        chan.updateOverwrite(member,{
                            SEND_MESSAGES: true,
                            VIEW_CHANNEL: true
                        })

                        chan.updateOverwrite(everyone, {
                                SEND_MESSAGES: false,
                                VIEW_CHANNEL: false
                        })
                    }).catch(console.error)
                }
            }
        }
    })

    client.on("message", async message => {
        if(message.content === "=close"){
            if(message.channel.parentID == "869011521517285416"){
                message.channel.send("Le staff décider de fermer votre ticket.")
                message.guild.channels.cache.get(message.channel.id).setName("「✅」Problème résolue.")
                setTimeout(() => {
                    message.channel.delete()
                }, 30 *600)
            }
        }
    })