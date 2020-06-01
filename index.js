const fs = require('fs');
const http = require('http');
const moment = require('moment');
const imageHash = require('image-hash');


const imghash = require('imghash');
imghash
  .hash('./https://images-ext-2.discordapp.net/external/0g34O23JWXB76oPwSq9VxEDUptEd1nyimRhveT7qIC8/https/i.imgur.com/7bDUOhk.png')
  .then((hash) => {
    console.log(hash); // 'f884c4d8d1193c07'
  });
