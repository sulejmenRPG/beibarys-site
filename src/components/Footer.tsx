import styles from './Footer.module.css';
import { Instagram, Music2, MessageCircle } from 'lucide-react';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.top}>
                    <div className={styles.brand}>
                        <div className={styles.logo}>
                            <span className={styles.logoIcon}>B</span>
                            <div>
                                <span className={styles.logoName}>BEIBARYS</span>
                                <span className={styles.logoTagline}>территория комфорта</span>
                            </div>
                        </div>
                        <p className={styles.description}>
                            Зона отдыха для тех, кто ценит комфорт, качество и незабываемые впечатления.
                        </p>
                        <div className={styles.social}>
                            <a href="https://instagram.com/beibarys.resort" className={styles.socialLink} aria-label="Instagram">
                                <Instagram size={20} />
                            </a>
                            <a href="https://tiktok.com/@beibarys.resort" className={styles.socialLink} aria-label="TikTok">
                                <Music2 size={20} />
                            </a>
                            <a href="https://wa.me/77001234567" className={styles.socialLink} aria-label="WhatsApp">
                                <MessageCircle size={20} />
                            </a>
                        </div>
                    </div>

                    <div className={styles.links}>
                        <div className={styles.column}>
                            <h4>Услуги</h4>
                            <a href="#services">Активности</a>
                            <a href="#rooms">Номера</a>
                            <a href="#pricing">VIP-залы</a>
                            <a href="#menu">Ресторан</a>
                        </div>
                        <div className={styles.column}>
                            <h4>Информация</h4>
                            <a href="#pricing">Прайс-лист</a>
                            <a href="#reviews">Отзывы</a>
                            <a href="#rules">Правила</a>
                            <a href="#offer">Договор оферты</a>
                        </div>
                        <div className={styles.column}>
                            <h4>Контакты</h4>
                            <a href="tel:+77001234567">+7 700 123 45 67</a>
                            <a href="mailto:info@beibarys.kz">info@beibarys.kz</a>
                            <span>с. Жибек Жолы</span>
                            <span>Акмолинская область</span>
                        </div>
                    </div>
                </div>

                <div className={styles.bottom}>
                    <p>© 2024 BEIBARYS. Все права защищены.</p>
                    <div className={styles.legal}>
                        <a href="#offer">Договор оферты</a>
                        <a href="#privacy">Политика конфиденциальности</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
