"use client";

import { FormEvent, useState } from "react";

type FormState = "idle" | "submitting" | "success" | "error";

export function CalculationForm() {
  const [state, setState] = useState<FormState>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: String(formData.get("name") ?? ""),
      contact: String(formData.get("contact") ?? ""),
      city: String(formData.get("city") ?? ""),
      type: String(formData.get("type") ?? "")
    };

    if (!payload.name || !payload.contact || !payload.city || !payload.type) {
      setState("error");
      setMessage("Заполните имя, контакт, город и тип объекта.");
      return;
    }

    setState("submitting");
    setMessage("");

    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
      const result = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(result.message ?? "Не удалось отправить заявку.");
      }

      setState("success");
      setMessage(result.message ?? "Заявка принята в демо-режиме.");
      form.reset();
    } catch (error) {
      setState("error");
      setMessage(
        error instanceof Error
          ? error.message
          : "Не удалось отправить заявку. Проверьте поля и повторите."
      );
    }
  }

  return (
    <form className="calc-form" onSubmit={handleSubmit}>
      <div className="calc-form-head">
        <span>// исходные данные</span>
        <strong>Расскажите об объекте</strong>
      </div>
      <label>
        <span>Имя</span>
        <input name="name" type="text" autoComplete="name" placeholder="Как к вам обращаться" required />
      </label>
      <label>
        <span>Телефон / Telegram</span>
        <input name="contact" type="text" autoComplete="tel" placeholder="Удобный способ связи" required />
      </label>
      <label>
        <span>Город объекта</span>
        <input name="city" type="text" placeholder="Регион строительства" required />
      </label>
      <label>
        <span>Тип объекта</span>
        <select name="type" defaultValue="" required>
          <option value="" disabled>
            Выберите тип
          </option>
          <option value="sklad">Склад</option>
          <option value="ceh">Цех</option>
          <option value="angar">Ангар</option>
          <option value="proektirovanie">Проектирование</option>
          <option value="postavka">Поставка</option>
          <option value="montazh">Монтаж</option>
          <option value="drugoe">Другое</option>
        </select>
      </label>
      <button className="button button-primary form-button" type="submit" disabled={state === "submitting"}>
        {state === "submitting" ? "Отправляем" : "Отправить заявку"}
      </button>
      <p className="form-note">Инженер свяжется для уточнения исходных данных.</p>
      {message ? (
        <p className={state === "success" ? "form-status success" : "form-status error"}>
          {message}
        </p>
      ) : null}
    </form>
  );
}
