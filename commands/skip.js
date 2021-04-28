const { canModifyQueue } = require("../util/UwUMBotUtil");

module.exports = {
  name: "skip",
  aliases: ["s"],
  description: "Skip the currently playing song",
  execute(message) {
    const queue = message.client.queue.get(message.guild.id);
    if (!queue)
      return message.reply("<:LUMeyes:810807117979582468>〡There is nothing playing that I could skip for you.").catch(console.error);
    if (!canModifyQueue(message.member)) return;

    queue.playing = true;
    queue.connection.dispatcher.end();
    queue.textChannel.send(`${message.author} <a:LUMmaidfly:810809763683762216>〡skipped the song`).catch(console.error);
  }
};
