const { canModifyQueue } = require("../util/UwUMBotUtil");

module.exports = {
  name: "stop",
  description: "Stops the music",
  execute(message) {
    const queue = message.client.queue.get(message.guild.id);

    if (!queue) return message.reply("<a:LUMredcross:810808174365900810>〡There is nothing playing.").catch(console.error);
    if (!canModifyQueue(message.member)) return;

    queue.songs = [];
    queue.connection.dispatcher.end();
    queue.textChannel.send(`${message.author} <a:LUwaaveey:810782194649268236> 〡stopped the music!`).catch(console.error);
  }
};
