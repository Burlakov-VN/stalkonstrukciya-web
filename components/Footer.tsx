import Image from "next/image";
import Link from "next/link";
import { industryItems, navItems } from "@/lib/site-data";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Image src="/brand/logo.png" alt="" width={124} height={70} />
          <p>
            Производство, поставка и монтаж металлоконструкций для промышленных
            объектов.
          </p>
          <span className="mono-line">с 1995 года · работаем по всей России</span>
        </div>
        <div>
          <h3>Навигация</h3>
          <div className="footer-links">
            <Link href="/">Главная</Link>
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h3>Отрасли</h3>
          <div className="footer-links">
            {industryItems.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h3>Контакты</h3>
          <div className="footer-links">
            <span>Телефон: уточняется</span>
            <span>Telegram: уточняется</span>
            <span>Email: уточняется</span>
            <span>Адрес визита: уточняется</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
