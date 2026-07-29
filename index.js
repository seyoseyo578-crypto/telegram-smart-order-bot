import { Telegraf } from "telegraf";

export default {
  async fetch(request, env) {
    const bot = new Telegraf(env.BOT_TOKEN);

    bot.start((ctx) => {
      ctx.reply(
        "👋 Welcome to Seyo Smart Order Bot!\n\nBot is running successfully on Cloudflare Workers."
      );
    });

    if (request.method === "POST") {
      const update = await request.json();
      await bot.handleUpdate(update);
      return new Response("OK");
    }

    return new Response("Bot is running!");
  },
};
