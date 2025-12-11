'use client';

import styles from './Contact.module.css';
import { MessageCircle, Instagram, MapPin, Clock, Users, Sparkles, Navigation } from 'lucide-react';

export default function Contact() {
    return (
        <section id="booking" className={`section ${styles.contact}`}>
            <div className="container">
                <div className="section-header">
                    <span className="section-label">Контакты</span>
                    <h2 className="section-title">Свяжитесь с нами</h2>
                    <p className="section-subtitle">
                        Мы находимся в 30 минутах от Астаны. Напишите нам в WhatsApp для бронирования.
                    </p>
                </div>

                {/* WhatsApp кнопки - главные CTA */}
                <div className={styles.ctaButtons}>
                    <a
                        href="https://wa.me/77777755577?text=Здравствуйте!"
                        className={styles.ctaBtn}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <MessageCircle size={28} />
                        <div>
                            <span className={styles.ctaTitle}>Ресепшн</span>
                            <span className={styles.ctaSubtitle}>Бронирование и вопросы</span>
                        </div>
                    </a>

                    <a
                        href="https://wa.me/77771994949?text=Здравствуйте!"
                        className={styles.ctaBtn}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Users size={28} />
                        <div>
                            <span className={styles.ctaTitle}>Банкеты</span>
                            <span className={styles.ctaSubtitle}>Корпоративы и праздники</span>
                        </div>
                    </a>

                    <a
                        href="https://wa.me/77777755577?text=Здравствуйте! Интересует акция Всё Включено"
                        className={`${styles.ctaBtn} ${styles.ctaBtnAccent}`}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Sparkles size={28} />
                        <div>
                            <span className={styles.ctaTitle}>Всё включено</span>
                            <span className={styles.ctaSubtitle}>Специальное предложение</span>
                        </div>
                    </a>
                </div>

                {/* Информация и карта */}
                <div className={styles.infoGrid}>
                    <div className={styles.infoCards}>
                        <a
                            href="https://instagram.com/beibarys.comfort"
                            className={styles.infoCard}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Instagram size={24} className={styles.infoIcon} />
                            <div>
                                <span className={styles.infoLabel}>Instagram</span>
                                <span className={styles.infoValue}>@beibarys.comfort</span>
                            </div>
                        </a>

                        <a
                            href="https://2gis.kz/nur_sultan/firm/70000001032462175?m=71.766869%2C51.086376%2F16"
                            className={styles.infoCard}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Navigation size={24} className={styles.infoIcon} />
                            <div>
                                <span className={styles.infoLabel}>2ГИС</span>
                                <span className={styles.infoValue}>Открыть карту</span>
                            </div>
                        </a>

                        <div className={styles.infoCard}>
                            <MapPin size={24} className={styles.infoIcon} />
                            <div>
                                <span className={styles.infoLabel}>Адрес</span>
                                <span className={styles.infoValue}>пос. Жибек Жолы, ул. Кенес, 7</span>
                            </div>
                        </div>

                        <div className={styles.infoCard}>
                            <Clock size={24} className={styles.infoIcon} />
                            <div>
                                <span className={styles.infoLabel}>Режим работы</span>
                                <span className={styles.infoValue}>Ежедневно 09:00 — 23:00</span>
                            </div>
                        </div>
                    </div>

                    {/* Карта */}
                    <div className={styles.mapWrapper}>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2508.5!2d71.766869!3d51.086376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x424589f1a1a1a1a1%3A0x1234567890abcdef!2sBeibarys!5e0!3m2!1sru!2skz!4v1702000000000"
                            width="100%"
                            height="100%"
                            style={{ border: 0, borderRadius: 'var(--radius-lg)', minHeight: '300px' }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="BEIBARYS - пос. Жибек Жолы, ул. Кенес, 7"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
