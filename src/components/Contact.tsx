'use client';

import { useState } from 'react';
import styles from './Contact.module.css';
import { Phone, MessageCircle, Instagram, MapPin, Clock, Send } from 'lucide-react';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        guests: '',
        date: '',
        message: '',
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        await new Promise(resolve => setTimeout(resolve, 1500));

        setIsSubmitting(false);
        setIsSubmitted(true);

        // Reset form after 3 seconds
        setTimeout(() => {
            setIsSubmitted(false);
            setFormData({ name: '', phone: '', email: '', guests: '', date: '', message: '' });
        }, 3000);
    };

    return (
        <section id="booking" className={`section ${styles.contact}`}>
            <div className="container">
                <div className={styles.wrapper}>
                    <div className={styles.info}>
                        <span className="section-label">Контакты</span>
                        <h2 className="section-title">Забронируйте отдых</h2>
                        <p className={styles.description}>
                            Оставьте заявку и наш менеджер свяжется с вами в течение 15 минут
                        </p>

                        <div className={styles.contactList}>
                            <a href="tel:+77001234567" className={styles.contactItem}>
                                <div className={styles.contactIcon}>
                                    <Phone size={20} />
                                </div>
                                <div>
                                    <span className={styles.contactLabel}>Телефон</span>
                                    <span className={styles.contactValue}>+7 700 123 45 67</span>
                                </div>
                            </a>

                            <a href="https://wa.me/77001234567" className={styles.contactItem}>
                                <div className={styles.contactIcon}>
                                    <MessageCircle size={20} />
                                </div>
                                <div>
                                    <span className={styles.contactLabel}>WhatsApp</span>
                                    <span className={styles.contactValue}>+7 700 123 45 67</span>
                                </div>
                            </a>

                            <a href="https://instagram.com/beibarys.resort" className={styles.contactItem}>
                                <div className={styles.contactIcon}>
                                    <Instagram size={20} />
                                </div>
                                <div>
                                    <span className={styles.contactLabel}>Instagram</span>
                                    <span className={styles.contactValue}>@beibarys.resort</span>
                                </div>
                            </a>

                            <div className={styles.contactItem}>
                                <div className={styles.contactIcon}>
                                    <MapPin size={20} />
                                </div>
                                <div>
                                    <span className={styles.contactLabel}>Адрес</span>
                                    <span className={styles.contactValue}>
                                        с. Жибек Жолы, Акмолинская область
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

                    <form className={styles.form} onSubmit={handleSubmit}>
                        {isSubmitted ? (
                            <div className={styles.success}>
                                <div className={styles.successIcon}>✓</div>
                                <h3>Заявка отправлена!</h3>
                                <p>Мы свяжемся с вами в ближайшее время</p>
                            </div>
                        ) : (
                            <>
                                <div className={styles.formRow}>
                                    <div className={styles.formGroup}>
                                        <label className={styles.label}>Ваше имя *</label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            className={styles.input}
                                            placeholder="Введите имя"
                                            required
                                        />
                                    </div>
                                    <div className={styles.formGroup}>
                                        <label className={styles.label}>Телефон *</label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className={styles.input}
                                            placeholder="+7 ___  ___ __ __"
                                            required
                                        />
                                    </div>
                                </div>

                                <div className={styles.formRow}>
                                    <div className={styles.formGroup}>
                                        <label className={styles.label}>Количество гостей</label>
                                        <select
                                            name="guests"
                                            value={formData.guests}
                                            onChange={handleChange}
                                            className={styles.input}
                                        >
                                            <option value="">Выберите</option>
                                            <option value="1-5">1-5 человек</option>
                                            <option value="6-15">6-15 человек</option>
                                            <option value="16-30">16-30 человек</option>
                                            <option value="30+">Более 30 человек</option>
                                        </select>
                                    </div>
                                    <div className={styles.formGroup}>
                                        <label className={styles.label}>Дата</label>
                                        <input
                                            type="date"
                                            name="date"
                                            value={formData.date}
                                            onChange={handleChange}
                                            className={styles.input}
                                        />
                                    </div>
                                </div>

                                <div className={styles.formGroup}>
                                    <label className={styles.label}>Сообщение</label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        className={styles.textarea}
                                        placeholder="Опишите, какой отдых планируете..."
                                        rows={4}
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className={styles.submitBtn}
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? (
                                        'Отправка...'
                                    ) : (
                                        <>
                                            Отправить заявку
                                            <Send size={18} />
                                        </>
                                    )}
                                </button>

                                <p className={styles.privacy}>
                                    Нажимая кнопку, вы соглашаетесь с{' '}
                                    <a href="#offer">договором оферты</a>
                                </p>
                            </>
                        )}
                    </form>
                </div>

                <div className={styles.map}>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2496.123456789!2d71.431!3d51.131!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTHCsDA3JzUxLjYiTiA3McKwMjUnNTEuNiJF!5e0!3m2!1sru!2skz!4v1234567890"
                        width="100%"
                        height="400"
                        style={{ border: 0, borderRadius: 'var(--radius-lg)' }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Местоположение Beibarys"
                    />
                </div>
            </div>
        </section>
    );
}
