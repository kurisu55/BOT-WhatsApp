const { Client } = require('whatsapp-web.js'); // import library whatsapp-web.js
const qrcode = require('qrcode-terminal') // import library qrcode
const messageHandler = require('./messageHandler') //import messageHandler

// Create a new client instance
const client = new Client();

// When the client is ready, run this code (only once)
client.once('ready', () => {
    console.log('Client is ready!');
});

// When the client received QR-Code
client.on('qr', (qr) => {
    console.log('QR RECEIVED', qr);

    qrcode.generate(qr, { small: true }) //Generate output QR Code
});

// Start your client
client.initialize();

// Start Message Handler
messageHandler(client)