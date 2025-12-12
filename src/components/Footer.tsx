import styles from './Footer.module.css';
import { Instagram, MessageCircle } from 'lucide-react';

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
                            <a href="https://instagram.com/beibarys.comfort" className={styles.socialLink} aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                                <Instagram size={20} />
                            </a>
                            <a href="https://wa.me/77777755577" className={styles.socialLink} aria-label="WhatsApp" target="_blank" rel="noopener noreferrer">
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
                            <a href="/offer">Договор-оферта</a>
                            <a href="/damages">Прейскурант ущерба</a>
                            <a href="https://2gis.kz/nur_sultan/firm/70000001032462175" target="_blank" rel="noopener noreferrer">2ГИС</a>
                        </div>
                        <div className={styles.column}>
                            <h4>Адрес</h4>
                            <span>пос. Жибек Жолы</span>
                            <span>ул. Кенес, 7</span>
                            <span>Акмолинская область</span>
                        </div>
                    </div>
                </div>

                <div className={styles.bottom}>
                    <p>© 2025 BEIBARYS. Все права защищены.</p>
                </div>
            </div>
        </footer>
    );
}
