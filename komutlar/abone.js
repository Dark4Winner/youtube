const Discord = require('discord.js');
const db = require('quick.db')
exports.run = async (client, message, args) => { 

let aboneyetkili = '799516093730258958'   //yetkili rolü id bilal ab

  if(!message.member.roles.cache.has(aboneyetkili)) 
  return message.channel.send('Bu Komudu Sadece Yetkililer Kullanabilir.')
  let uye = message.mentions.members.first()
  let etiket = args[1]
  if (!uye) return message.channel.send('Lütfen bir kişi etiketleyiniz.')
  
      setTimeout(function(){
  uye.roles.add(abonerolü)
  },500)
  
  let abonerolü = '801817841262919696'  // abone rolü id bilal ab
  
  let ceixsa = new Discord.MessageEmbed() 
  .setDescription(`<@&801817841262919696> Rolü başarıyla etiketlediğin kişiye verildi.`) 
message.channel.send(ceixsa)

};

exports.conf = {               
  enabled: true,
  guildOnly: true,
    aliases: ['a','Abone'],
  permLevel: 0
}
exports.help = {
  name: 'abone',
  description: "abone rolü verir",
  usage: '!a' 
}
