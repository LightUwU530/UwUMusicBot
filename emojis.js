client.on('ready', () => {

    let static = [], animated = [];
        client.guilds.get('770070435584671755').emojis.forEach(emoji => emoji.animated ? animated.push([emoji.id, emoji.name]) : static.push([emoji.id, emoji.name]));
    
        console.log('Static Emojis\n');
        static.forEach(emoji => console.log('<:' + emoji[1] + ':' + emoji[0] + '>'));
        console.log('\nAnimated Emojis\n');
        animated.forEach(emoji => console.log('<a:' + emoji[1] + ':' + emoji[0] + '>'));
    
        });


        client.on('ready', () => {

            let channel = client.guilds.get('770070435584671755').channels.get('channel_id');
            channel.send('<a:LUMpoof:810786097298538516>');

        })

client.on('ready', () => {

            let channel = client.guilds.get('770070435584671755').channels.get('channel_id');
            channel.send('<:LUMtriste:810786069054357534>');

        })


client.on('ready', () => {

            let channel = client.guilds.get('770070435584671755').channels.get('channel_id');
            channel.send('<a:LUMwaaveey:810785629695770734> ');

        })

client.on('ready', () => {

            let channel = client.guilds.get('770070435584671755').channels.get('channel_id');
            channel.send('<a:LUMweebmusic:810785689254887424> ');

        
        });
