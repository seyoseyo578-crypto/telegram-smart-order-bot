import { Telegraf } from "telegraf";

export default {
  async fetch(request, env, ctx) {
    const bot = new Telegraf(env.BOT_TOKEN);

    // /start ትዕዛዝ
    bot.start((ctx) => {
      ctx.reply(
        "👋 Welcome to Seyo Smart Order Bot!\n\nBot is running successfully on Cloudflare Workers."
      );
    });

    // የቴሌግራም ዌብሁክ ጥያቄዎችን መቀበል
    if (request.method === "POST") {
      try {
        const update = await request.json();
        await bot.handleUpdate(update);
        return new Response("OK", { status: 200 });
      } catch (err) {
        return new Response(err.message, { status: 500 });
      }
    }

    return new Response("Seyo Smart Order Bot is active!", { status: 200 });
  },
};
