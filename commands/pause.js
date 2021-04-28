const { canModifyQueue } = require("../util/UwUMBotUtil");

module.exports = {
  name: "pause",
  description: "Pause the currently playing music",
  execute(message) {
    const queue = message.client.queue.get(message.guild.id);
    if (!queue) return message.reply(" <:LUMeyes:810807117979582468>〡There is nothing playing.").catch(console.error);
    if (!canModifyQueue(message.member)) return;

    if (queue.playing) {
      queue.playing = false;
      queue.connection.dispatcher.pause(true);
      return queue.textChannel.send(`${message.author} <:LUMhide:810806622363582485>〡paused the music.`).catch(console.error);
    }
  }
};
