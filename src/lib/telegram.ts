export async function sendLeadToTelegram(data: {
  name: string;
  phone: string;
  interest?: string;
  comment?: string;
  source?: string;
}) {
  const BOT_TOKEN = process.env.NEXT_PUBLIC_TELEGRAM_BOT_TOKEN;
  const CHAT_ID = process.env.NEXT_PUBLIC_TELEGRAM_CHAT_ID;

  if (!BOT_TOKEN || !CHAT_ID) {
    console.error("Telegram bot token or chat ID is missing");
    return false;
  }

  const text = `
🔥 <b>Новая заявка с сайта!</b>

👤 <b>Имя:</b> ${data.name}
📱 <b>Телефон:</b> ${data.phone}
${data.interest ? `🎯 <b>Интересует:</b> ${data.interest}` : ""}
${data.comment ? `💬 <b>Комментарий:</b> ${data.comment}` : ""}
📍 <b>Источник:</b> ${data.source || "Основная форма"}
  `;

  try {
    const response = await fetch(
      `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: CHAT_ID,
          text: text,
          parse_mode: "HTML",
        }),
      }
    );

    return response.ok;
  } catch (error) {
    console.error("Error sending message to Telegram:", error);
    return false;
  }
}
