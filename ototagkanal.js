const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async (client, message, params, args) => {

      if (!message.guild) {
    const ozelmesajuyari = new Discord.RichEmbed()
    .setColor()
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('Sadece herhangi bir sunucudan mesaj gönderebilirim.:relaxed: ')
    return message.author.sendEmbed(ozelmesajuyari); }

     if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(':no_entry: Otomatik tag komudunun log kanalını ayarlamak için `Yönetici` yetkisine sahip olman gerek.')
     let otoTagkanal = message.mentions.channels.first();
     if (!otoTagkanal) return message.channel.send(':no_entry: Otomatik tag komudunun log kanalını ayarlamak için bir kanal etiketlemeniz gerekli. `g!ototagkanal #kanal`')
     db.set(`ototagKanal_${message.guild.id}`, message.mentions.channels.first().id)
     let i = await db.fetch(`ototagKanal_${message.guild.id}`)
    message.channel.send(`Ototag kanalı, <#${i}> olarak ayarlandı.`)    
  
};

exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: [],
 permLevel: 0
};

exports.help = {
 name: 'ototagkanal',
 description: 'neblm',
 usage: 'ototagkanal'
};
\\\Jughead
