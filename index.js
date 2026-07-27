const { Telegraf } = require("telegraf");

const BOT_TOKEN = process.env.BOT_TOKEN;

const bot = new Telegraf(BOT_TOKEN);

bot.start((ctx) => {
  ctx.reply(
    "👋 Welcome to Seyo Smart Order Bot!\n\nBot is running successfully."
  );
});

bot.launch();

console.log("Bot Started...");
