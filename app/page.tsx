import Link from "next/link";
import Image from "next/image";
import { CalculationForm } from "@/components/CalculationForm";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { HeroSpotlight } from "@/components/HeroSpotlight";
import {
  articleTeasers,
  companyFacts,
  cycleItems,
  faqItems,
  guaranteeItems,
  heroProductItems,
  industryItems,
  projectTeasers,
  productionQualityItems,
  reportItems,
  serviceItems
} from "@/lib/site-data";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSpotlight>
          <div className="container hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">// промышленное строительство</p>
              <div className="hero-title-block">
                <h1>Завод металлоконструкций «Стальконструкция»</h1>
              </div>
              <div className="hero-advantage">
                <strong>Проектируем, производим и монтируем сами — один контракт, один ответственный</strong>
              </div>
              <p className="hero-lead">
                На рынке с 1995 года. Работаем с промышленными объектами по всей России.
              </p>
              <div className="hero-actions">
                <Link href="#raschet" className="button button-primary">
                  Получить расчёт объекта
                </Link>
                <Link href="/proektirovanie/" className="button button-secondary">
                  Нужен только проект
                </Link>
              </div>
              <dl className="hero-specs" aria-label="Ключевые параметры">
                <div>
                  <dt>Расчёт</dt>
                  <dd>2–3 рабочих дня</dd>
                </div>
                <div>
                  <dt>Цикл</dt>
                  <dd>проект · цех · монтаж</dd>
                </div>
                <div>
                  <dt>Оплата</dt>
                  <dd>по факту этапов</dd>
                </div>
              </dl>
            </div>

          </div>

          <div className="container hero-product-strip" aria-label="Основные направления">
            {heroProductItems.map((item) => (
              <Link href={item.href} className="hero-product-card" key={item.href}>
                <span>{item.code}</span>
                <strong>{item.title}</strong>
                <p>{item.text}</p>
              </Link>
            ))}
          </div>
        </HeroSpotlight>

        <section id="o-kompanii" className="section section-intro company-intro">
          <div className="container company-intro-grid">
            <div className="company-intro-heading">
              <p className="eyebrow">// о компании</p>
              <h2>С 1995 года на рынке металлоконструкций</h2>
            </div>
            <div className="company-intro-body">
              <p className="company-lead">
                «Стальконструкция» — производитель и поставщик строительных металлоконструкций.
                С 1995 года работаем с предприятиями, где к металлоконструкциям предъявляют
                повышенные требования: точность расчёта, надёжность узлов, соблюдение сроков
                при сжатом графике проекта.
              </p>
              <p>
                Проектируем, изготавливаем на собственном производстве и монтируем — от типовых
                ферм и колонн до нестандартных конструкций по чертежам заказчика.
              </p>
              <div className="company-facts" aria-label="Факты о компании">
                {companyFacts.map((item) => (
                  <div key={item.label}>
                    <span>{item.label}</span>
                    <strong>{item.value}</strong>
                  </div>
                ))}
              </div>
              <Link href="/o-kompanii/" className="text-link company-link">
                Подробнее о компании →
              </Link>
            </div>
          </div>
        </section>

        <section id="cikl" className="section section-muted cycle-section">
          <div className="container cycle-layout">
            <div className="section-heading cycle-heading">
              <p className="eyebrow">// полный цикл</p>
              <h2>Один контракт, одна ответственность</h2>
              <p>
                Ведём объект через проектирование, производство, монтаж и сдачу.
                Каждый этап фиксируется документами и принимается по факту работ.
              </p>
            </div>
            <div className="cycle-grid" aria-label="Этапы полного цикла">
              {cycleItems.map((item, index) => (
                <article className="cycle-item" key={item.title}>
                  <span className="step-index">{String(index + 1).padStart(2, "0")}</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="uslugi" className="section services-section">
          <div className="container services-layout">
            <div className="section-heading services-heading">
              <p className="eyebrow">// услуги</p>
              <h2>Проектирование, поставка и монтаж — отдельными услугами или в одном цикле</h2>
              <p>
                Можно зайти с малого объёма работ или собрать полный подряд:
                расчёт, поставка конструкций и монтаж остаются отдельными
                управляемыми направлениями.
              </p>
              <Link href="#raschet" className="text-link">
                Обсудить формат работ →
              </Link>
            </div>
            <div className="service-list" aria-label="Услуги">
              {serviceItems.map((item) => (
                <Link href={item.href} className="service-row" key={item.href}>
                  <span className="service-code">{item.code}</span>
                  <span className="service-copy">
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </span>
                  <span className="service-arrow" aria-hidden="true">
                    →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section id="garantii" className="section guarantee-section">
          <div className="container guarantee-layout">
            <div className="section-heading guarantee-heading">
              <p className="eyebrow accent">// гарантии</p>
              <h2>Механизмы вместо обещаний</h2>
              <p>
                Фиксируем порядок оплаты, проверку расчёта, финансовое
                обеспечение и ответственность за сроки в рабочих документах.
              </p>
            </div>
            <div className="guarantee-ledger" aria-label="Гарантийные механизмы">
              {guaranteeItems.map((item, index) => (
                <article className="guarantee-row" key={item.title}>
                  <span className="guarantee-number">{String(index + 1).padStart(2, "0")}</span>
                  <span className="guarantee-code">{item.code}</span>
                  <span className="guarantee-copy">
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="proizvodstvo" className="section production-section">
          <div className="container production-layout">
            <div className="production-copy">
              <p className="eyebrow">// производство</p>
              <h2>Собственный цех — приезжайте до подписания договора</h2>
              <p>
                Производство можно посмотреть до заказа. Показываем цех,
                производство и пакет качества без публикации неподтверждённой
                мощности.
              </p>
              <Link href="/proizvodstvo/" className="button button-primary">
                Перейти к производству
              </Link>
            </div>
            <div className="production-passport" aria-label="Пакет качества производства">
              <div className="passport-head">
                <span>Пакет качества</span>
                <strong>цех в собственности</strong>
              </div>
              <div className="passport-list">
                {productionQualityItems.map((item) => (
                  <div className="passport-row" key={item.label}>
                    <span>{item.label}</span>
                    <p>{item.text}</p>
                  </div>
                ))}
              </div>
              <p className="passport-note">
                Мощность производства уточняется индивидуально под объём заказа.
              </p>
            </div>
          </div>
        </section>

        <section id="otrasli" className="section industries-section">
          <div className="container">
            <div className="section-heading industries-heading">
              <p className="eyebrow">// отрасли</p>
              <h2>Работаем с объектами разных отраслей</h2>
              <p>
                Подбираем конструктив, поставку и монтаж под требования площадки:
                от промышленных производств до сельскохозяйственных объектов.
              </p>
            </div>
            <div className="industry-grid">
              {industryItems.map((item, index) => (
                <Link className="industry-card" href={item.href} key={item.href}>
                  <span className="industry-media">
                    <Image
                      src={item.image}
                      alt=""
                      fill
                      sizes="(max-width: 680px) 100vw, (max-width: 1040px) 50vw, 25vw"
                      style={{ objectPosition: item.position }}
                    />
                  </span>
                  <span className="industry-content">
                    <span className="industry-index">{String(index + 1).padStart(2, "0")}</span>
                    <strong>{item.label}</strong>
                    <span>{item.text}</span>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section id="proekty" className="section projects-section">
          <div className="container">
            <div className="projects-heading">
              <div>
              <p className="eyebrow">// проекты</p>
                <h2>Проектные решения для типовых объектов</h2>
              </div>
              <p>
                Показываем форматы задач, с которыми работаем. Реальные адреса,
                параметры и фотографии кейсов добавим после согласования публикации.
              </p>
            </div>

            <div className="project-grid">
              {projectTeasers.map((project, index) => (
                <Link
                  className="project-card"
                  href={project.href}
                  key={project.title}
                  aria-label={`${project.title}. Открыть раздел проектов`}
                >
                  <span className="project-media">
                    <Image
                      src={project.image}
                      alt=""
                      fill
                      sizes="(max-width: 680px) 100vw, (max-width: 1040px) 50vw, 60vw"
                      style={{ objectPosition: project.position }}
                    />
                  </span>
                  <span className="project-content">
                    <span className="project-kicker">
                      <span>{String(index + 1).padStart(2, "0")}</span>
                      {project.type}
                    </span>
                    <strong>{project.title}</strong>
                    <span className="project-description">{project.text}</span>
                    <span className="project-link">Смотреть проект <span aria-hidden="true">→</span></span>
                  </span>
                </Link>
              ))}
            </div>

            <div className="projects-footer">
              <Link href="/proekty/" className="text-link">
                Все проекты →
              </Link>
            </div>
          </div>
        </section>

        <section id="blog" className="section articles-section">
          <div className="container">
            <div className="articles-heading">
              <div>
                <p className="eyebrow">// статьи</p>
                <h2>Практические материалы для технического заказчика</h2>
              </div>
              <p>
                От проектной документации до приёмки готового каркаса — без
                универсальных цен и решений в отрыве от условий объекта.
              </p>
            </div>

            <div className="article-grid">
              {articleTeasers.map((article, index) => (
                <Link
                  className="article-card"
                  href={article.href}
                  key={article.title}
                  aria-label={`${article.title}. Читать статью`}
                >
                  <span className="article-media">
                    <Image
                      src={article.image}
                      alt=""
                      fill
                      sizes="(max-width: 680px) 100vw, (max-width: 1040px) 50vw, 25vw"
                      style={{ objectPosition: article.position }}
                    />
                    <span className="article-index">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </span>
                  <span className="article-content">
                    <span className="article-category">{article.category}</span>
                    <strong>{article.title}</strong>
                    <span className="article-description">{article.text}</span>
                    <span className="article-link">
                      Читать статью <span aria-hidden="true">→</span>
                    </span>
                  </span>
                </Link>
              ))}
            </div>

            <div className="articles-footer">
              <span>Материалы основаны на проектной практике и действующих нормативах</span>
              <Link href="/blog/" className="text-link">
                Все статьи →
              </Link>
            </div>
          </div>
        </section>

        <section id="process" className="section process-section">
          <div className="container process-layout">
            <div className="process-intro">
              <p className="eyebrow accent">// прозрачность</p>
              <h2>Еженедельный фото- и видеоотчёт в Telegram</h2>
              <p>
                Отчёт по этапам и папка проекта с документами отправляются без
                дополнительного запроса.
              </p>
              <Link href="#raschet" className="button button-secondary">
                Обсудить формат отчётности
              </Link>
            </div>
            <div className="report-ledger" aria-label="Состав отчётности по проекту">
              <div className="report-ledger-head">
                <span>Рабочий канал проекта</span>
                <strong>Telegram</strong>
              </div>
              {reportItems.map((item) => (
                <article className="report-row" key={item.code}>
                  <span className="report-code">{item.code}</span>
                  <span className="report-copy">
                    <strong>{item.title}</strong>
                    <span>{item.text}</span>
                  </span>
                </article>
              ))}
              <p className="report-note">
                Без заявлений о личном кабинете и круглосуточных камерах.
              </p>
            </div>
          </div>
        </section>

        <section id="faq" className="section section-muted faq-section">
          <div className="container faq-layout">
            <div className="section-heading faq-heading">
              <p className="eyebrow">// faq</p>
              <h2>Вопросы перед заявкой</h2>
              <p>
                Коротко отвечаем на вопросы о производстве, оплате, расчёте и
                порядке работы до заключения договора.
              </p>
              <Link href="#raschet" className="text-link">
                Задать свой вопрос →
              </Link>
            </div>
            <div className="faq-list">
              <div className="faq-list-head" aria-hidden="true">
                <span>Вопросы заказчика</span>
                <span>Ответ</span>
              </div>
              {faqItems.map((item, index) => (
                <details key={item.question} className="faq-item">
                  <summary>
                    <span className="faq-number">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="faq-question">{item.question}</span>
                    <span className="faq-toggle" aria-hidden="true">+</span>
                  </summary>
                  <div className="faq-answer">
                    <p>{item.answer}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section id="raschet" className="section cta-section">
          <div className="container cta-grid">
            <div className="cta-intro">
              <p className="eyebrow accent">// расчёт</p>
              <h2>Получите предварительный расчёт под ваш объект</h2>
              <p>
                Подготовим его за 2–3 рабочих дня после получения исходных
                данных. Если информации недостаточно, инженер уточнит детали.
              </p>
              <div className="cta-steps" aria-label="Этапы получения расчёта">
                <div>
                  <span>01</span>
                  <p>Оставьте контакт и тип объекта</p>
                </div>
                <div>
                  <span>02</span>
                  <p>Уточним параметры и состав работ</p>
                </div>
                <div>
                  <span>03</span>
                  <p>Передадим предварительный расчёт</p>
                </div>
              </div>
              <p className="mono-line">с 1995 года · собственное производство · оплата поэтапно</p>
            </div>
            <CalculationForm />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
