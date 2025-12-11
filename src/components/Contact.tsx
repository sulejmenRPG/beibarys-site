'use client';

import styles from './Contact.module.css';
import { Phone, MessageCircle, Instagram, MapPin, Clock, Users, Sparkles, Navigation } from 'lucide-react';

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

                <div className={styles.wrapper}>
                    <div className={styles.info}>
                        {/* WhatsApp кнопки */}
                        <div className={styles.whatsappButtons}>
                            <a
                                href="https://wa.me/77777755577?text=Здравствуйте!"
                                className={styles.whatsappBtn}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <MessageCircle size={24} />
                                <div>
                                    <span className={styles.btnTitle}>Ресепшн</span>
                                    <span className={styles.btnSubtitle}>Общие вопросы и бронирование</span>
                                </div>
                            </a>

                            <a
                                href="https://wa.me/77771994949?text=Здравствуйте!"
                                className={styles.whatsappBtn}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Users size={24} />
                                <div>
                                    <span className={styles.btnTitle}>Банкеты и корпоративы</span>
                                    <span className={styles.btnSubtitle}>Организация мероприятий</span>
                                </div>
                            </a>

                            <a
                                href="https://wa.me/77777755577?text=Здравствуйте! Интересует акция Всё Включено"
                                className={`${styles.whatsappBtn} ${styles.whatsappBtnAccent}`}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Sparkles size={24} />
                                <div>
                                    <span className={styles.btnTitle}>Акция «Всё включено»</span>
                                    <span className={styles.btnSubtitle}>Специальное предложение</span>
                                </div>
                            </a>
                        </div>

                        <div className={styles.contactList}>
                            <a href="tel:+77777755577" className={styles.contactItem}>
                                <div className={styles.contactIcon}>
                                    <Phone size={20} />
                                </div>
                                <div>
                                    <span className={styles.contactLabel}>Телефон</span>
                                    <span className={styles.contactValue}>+7 777 775 55 77</span>
                                </div>
                            </a>

                            <a
                                href="https://instagram.com/beibarys.comfort"
                                className={styles.contactItem}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <div className={styles.contactIcon}>
                                    <Instagram size={20} />
                                </div>
                                <div>
                                    <span className={styles.contactLabel}>Instagram</span>
                                    <span className={styles.contactValue}>@beibarys.comfort</span>
                                </div>
                            </a>

                            <a
                                href="https://2gis.kz/nur_sultan/firm/70000001032462175"
                                className={styles.contactItem}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <div className={styles.contactIcon}>
                                    <Navigation size={20} />
                                </div>
                                <div>
                                    <span className={styles.contactLabel}>2ГИС</span>
                                    <span className={styles.contactValue}>Мы есть в 2ГИС</span>
                                </div>
                            </a>

                            <div className={styles.contactItem}>
                                <div className={styles.contactIcon}>
                                    <MapPin size={20} />
                                </div>
                                <div>
                                    <span className={styles.contactLabel}>Адрес</span>
                                    <span className={styles.contactValue}>
                                        пос. Жибек Жолы, ул. Кенес, 7
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className={styles.workHours}>
                            <Clock size={20} className={styles.workIcon} />
                            <div>
                                <h4>Режим работы</h4>
                                <p>Ежедневно: 09:00 — 23:00</p>
                                <p>Заезд в номера: с 14:00</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Google Maps - Beibarys demalys bazasy */}
                <div className={styles.map}>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2508.5!2d71.766869!3d51.086376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x424589f1a1a1a1a1%3A0x1234567890abcdef!2sBeibarys!5e0!3m2!1sru!2skz!4v1702000000000"
                        width="100%"
                        height="400"
                        style={{ border: 0, borderRadius: 'var(--radius-lg)' }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="BEIBARYS - пос. Жибек Жолы, ул. Кенес, 7"
                    />
                </div>
            </div>
        </section>
    );
}
