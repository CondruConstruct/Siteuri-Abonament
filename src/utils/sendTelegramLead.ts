type LeadPayload = {
  name: string
  email: string
  message: string
  locale: 'ro' | 'ru'
}

const botToken = import.meta.env.VITE_TELEGRAM_BOT_TOKEN?.trim()
const chatId = import.meta.env.VITE_TELEGRAM_CHAT_ID?.trim()

export async function sendTelegramLead(payload: LeadPayload) {
  if (!botToken || !chatId) {
    return { ok: false, reason: 'missing-config' as const }
  }

  const languageLabel = payload.locale === 'ro' ? 'RO' : 'RU'
  const text = [
    '🆕 Cerere nouă de pe site',
    '',
    `👤 Nume: ${payload.name}`,
    `📧 Email: ${payload.email}`,
    `🌐 Limbă: ${languageLabel}`,
    '',
    '💬 Mesaj:',
    payload.message,
  ].join('\n')

  try {
    const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: chatId,
        text,
      }),
    })

    if (!response.ok) {
      return { ok: false, reason: 'api-error' as const }
    }

    const result = (await response.json()) as { ok?: boolean }
    return { ok: Boolean(result.ok), reason: result.ok ? null : ('api-error' as const) }
  } catch {
    return { ok: false, reason: 'network-error' as const }
  }
}
