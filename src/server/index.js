process.env['NTBA_FIX_319'] = 1;
const TelegramBot = require('node-telegram-bot-api');
require('dotenv').config();

const manziAccounts = require('../../manziList.json');

const { scrapeImgByUsername } = require('../scraper');

const randEl = list => list[Math.floor(Math.random() * list.length)];

const token = process.env.TELEGRAM_BOT_TOKEN;

const bot = new TelegramBot(token, { polling: true });

bot.onText(/manzo/, async (msg, match) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, 'Caricamento del manzo...');
  const listImg = await scrapeImgByUsername(randEl(manziAccounts));
  bot.sendPhoto(chatId, randEl(listImg));
});
