"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const headerNavItems = [
  { label: "Продукция", href: "/produkciya/" },
  { label: "Отрасли", href: "/otrasli/" },
  { label: "Проекты", href: "/proekty/" },
  { label: "Контакты", href: "/kontakty/" }
];

const companyNavItems = [
  { label: "О компании", href: "/o-kompanii/" },
  { label: "Производство", href: "/proizvodstvo/" },
  { label: "Блог", href: "/blog/" }
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link href="/" className="brand" aria-label="Стальконструкция, главная">
          <Image src="/brand/logo.png" alt="" width={84} height={48} priority />
          <span>Стальконструкция</span>
        </Link>

        <nav className="desktop-nav" aria-label="Основная навигация">
          <div className="nav-dropdown">
            <button type="button">О компании</button>
            <div className="nav-dropdown-menu company-menu">
              {companyNavItems.map((item) => (
                <Link key={item.href} href={item.href}>
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          {headerNavItems.slice(0, 1).map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
          <div className="nav-dropdown">
            <button type="button">Услуги</button>
            <div className="nav-dropdown-menu">
              <Link href="/proektirovanie/">Проектирование</Link>
              <Link href="/postavka/">Комплексная поставка</Link>
              <Link href="/montazh/">Монтажные работы</Link>
            </div>
          </div>
          {headerNavItems.slice(1).map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="header-actions">
          <div className="messenger-links" aria-label="Мессенджеры">
            <span className="messenger-icon" aria-label="MAX">
              <Image src="/icons/max.svg" alt="" width={40} height={40} />
            </span>
            <span className="messenger-icon telegram-messenger" aria-label="Telegram">
              <Image src="/icons/telegram.svg" alt="" width={40} height={40} />
            </span>
          </div>
          <a className="phone-link" href="tel:88001234567">
            8-800-123-45-67
          </a>
          <Link href="#raschet" className="button button-primary">
            Получить расчёт
          </Link>
          <button
            className="menu-button"
            type="button"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((value) => !value)}
          >
            <span className="burger-icon" aria-hidden="true">
              <span />
              <span />
              <span />
            </span>
            <span className="sr-only">{open ? "Закрыть меню" : "Открыть меню"}</span>
          </button>
        </div>
      </div>

      {open ? (
        <nav id="mobile-nav" className="mobile-nav" aria-label="Мобильная навигация">
          <Link href="/o-kompanii/" onClick={() => setOpen(false)}>
            О компании
          </Link>
          <div className="mobile-subnav" aria-label="Разделы О компании">
            <Link href="/proizvodstvo/" onClick={() => setOpen(false)}>
              Производство
            </Link>
            <Link href="/blog/" onClick={() => setOpen(false)}>
              Блог
            </Link>
          </div>
          <Link href="/produkciya/" onClick={() => setOpen(false)}>
            Продукция
          </Link>
          <Link href="/proektirovanie/" onClick={() => setOpen(false)}>
            Проектирование
          </Link>
          <Link href="/postavka/" onClick={() => setOpen(false)}>
            Комплексная поставка
          </Link>
          <Link href="/montazh/" onClick={() => setOpen(false)}>
            Монтажные работы
          </Link>
          <Link href="/otrasli/" onClick={() => setOpen(false)}>
            Отрасли
          </Link>
          <Link href="/proekty/" onClick={() => setOpen(false)}>
            Проекты
          </Link>
          <Link href="/kontakty/" onClick={() => setOpen(false)}>
            Контакты
          </Link>
        </nav>
      ) : null}
    </header>
  );
}
