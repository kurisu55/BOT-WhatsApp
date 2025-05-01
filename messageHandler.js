module.exports = (client) => {

    // Message chat
    client.on('message_create', message => {
        console.log('MESSAGE RECEIVE', message)

        if (message.body === '!ping') {
            message.reply('pong');
        }
    })
}