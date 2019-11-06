const Discord = require('discord.js')
const db = require('quick.db');

module.exports = async member => {
  
  let ototag = await db.fetch(`ototag_${member.guild.id}`);
  let kanal = await db.fetch(`ototagKanal_${member.guild.id}`)
  let kayıt = await db.fetch(`kayıt_${member.guild.id}`)
  
  if (!ototag) return
  try {
  member.setNickname(`${ototag} ${member.user.username}`)
  if (!kanal) return
                        var embed = new Discord.RichEmbed()
                        .setDescription(`**Sunucuya Yeni Katılan** **${member.user.username}** Kullanıcısına [**${ototag}**] **tagı verildi.**`)
                        .setColor('')
                        .setFooter(`Jughead`)
     member.guild.channels.get(kanal).send(embed)      
  } catch(e) {
  }
}


//Unutmayın util/eventLoader.js ye ise   client.on('guildMemberAdd', reqEvent('5-otoTag')); yazın
