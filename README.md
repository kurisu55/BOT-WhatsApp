# **Bot WhatsApp**
## Introduction
Project ini merupakan project mandiri yang tidak memiliki tujuan apapun selain menambah repository. <mark>Project ini akan terus berlanjut sesuai dengan mood programmer</mark> :relaxed:

## Requirement
**Library whatsapp-web.js** <br>
`npm install whatsapp-web.js` <br>
**Library qrcode terminal** <br>
`npm install qrcode-terminal` <br>

Dapat dilihat lebih lanjut pada [dokumentasi instalasi](https://wwebjs.dev/guide/installation.html)

## Documentation
Untuk menginisiasi sebuah program whatapp-web  <br>
**index.js** <br>
```js
const { Client } = require('whatsapp-web.js'); //import library whatapp-web
const qrcode = require('qrcode-terminal'); //import library QR Code terminal

const client = new Client();

client.on('ready', () => {
    console.log('Client is ready!');
}); // blok kode jika berhasil terhubung pada saat scan QR WA, maka akan menampilkan 'Client is ready!' pada console.

client.on('qr', qr => {
    qrcode.generate(qr, {small: true});
});

client.initialize();

```

Menambahkan blok kode lagi untuk membuat chatbot sederhana setelah `client.initialize()`. Misalnya ketika mengetik **!ping** maka akan membalas pesan otomatis dengan **pong** <br>

```js
client.on('message_create', message => {
        console.log('MESSAGE RECEIVE', message) // baris kode ini berfungsi menampilkan segala penerimaan informasi chat pada console
        if (message.body === '!ping') {
            message.reply('pong');
        }
    })
```
Untuk dokumentasi lengkapnya langsung saja ke [Creating Your Bot](https://wwebjs.dev/guide/creating-your-bot/#qr-code-generation)

### Ekspetasi Output
**Coming Soon**

## Credits
[whatsapp-web JS](https://wwebjs.dev/)