const { canModifyQueue } = require("../util/UwUMBotUtil");

module.exports = {
  name: "resume",
  aliases: ["r"],
  description: "Resume currently playing music",
  execute(message) {
    const queue = message.client.queue.get(message.guild.id);
    if (!queue) return message.reply("<:LUMtriste:810785558829334589>〡There is nothing playing.").catch(console.error);
    if (!canModifyQueue(message.member)) return;

    if (!queue.playing) {
      queue.playing = true;
      queue.connection.dispatcher.resume();
      return queue.textChannel.send(`${message.author} <a:LUMweebmusic:810785689254887424>〡resumed the music!`).catch(console.error);
    }

    return message.reply("<:LUMeyes:810807117979582468>〡The queue is not paused.").catch(console.error);
  }
};
