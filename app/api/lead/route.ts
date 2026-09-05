import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const contentType = request.headers.get("content-type") ?? "";

  if (!contentType.includes("application/json")) {
    return NextResponse.json(
      { ok: false, message: "Ожидается JSON-запрос." },
      { status: 415 }
    );
  }

  const body = (await request.json()) as {
    name?: string;
    contact?: string;
    city?: string;
    type?: string;
  };

  if (!body.name || !body.contact || !body.city || !body.type) {
    return NextResponse.json(
      { ok: false, message: "Заполните обязательные поля." },
      { status: 400 }
    );
  }

  // TODO: выбрать канал обработки заявок после решения клиента:
  // email, Telegram-бот или CRM. До этого endpoint только подтверждает фронт.
  return NextResponse.json(
    {
      ok: true,
      message:
        "Заявка принята в демо-режиме. Канал передачи будет подключён после решения по форме."
    },
    { status: 202 }
  );
}
