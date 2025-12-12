import styles from './Hero.module.css';
import Image from 'next/image';
import { Waves, Home, Target, Utensils, ChevronDown } from 'lucide-react';

interface HeroProps {
    heroImage?: string;
}

export default function Hero({ heroImage }: HeroProps) {
    const backgroundUrl = heroImage || 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1920&h=1080&fit=crop&q=80';

    return (
        <section id="hero" className={styles.hero}>
            {/* Optimized background image */}
            <Image
                src={backgroundUrl}
                alt="BEIBARYS - территория комфорта"
                fill
                priority
                quality={85}
                sizes="100vw"
                className={styles.backgroundImage}
                style={{ objectFit: 'cover' }}
            />
            <div className={styles.overlay}></div>

            <div className={styles.content}>
                <span className={styles.label}>Добро пожаловать в</span>
                <h1 className={styles.title}>
                    BEIBARYS
                </h1>
                <p className={styles.subtitle}>Территория комфорта</p>
                <p className={styles.description}>
                    Идеальное место для семейного отдыха, корпоративов и праздников
                    всего в 30 минутах от центра Астаны
                </p>
                <div className={styles.buttons}>
                    <a href="/#contacts" className="btn btn-primary">
                        Забронировать
                    </a>
                    <a href="/#services" className="btn btn-secondary">
                        Узнать больше
                    </a>
                </div>

                <div className={styles.features}>
                    <div className={styles.feature}>
                        <Waves className={styles.featureIcon} size={32} />
                        <span className={styles.featureText}>Бассейн</span>
                    </div>
                    <div className={styles.feature}>
                        <Home className={styles.featureIcon} size={32} />
                        <span className={styles.featureText}>Домики</span>
                    </div>
                    <div className={styles.feature}>
                        <Target className={styles.featureIcon} size={32} />
                        <span className={styles.featureText}>Активности</span>
                    </div>
                    <div className={styles.feature}>
                        <Utensils className={styles.featureIcon} size={32} />
                        <span className={styles.featureText}>Ресторан</span>
                    </div>
                </div>
            </div>

            <div className={styles.scrollIndicator}>
                <span>Листайте</span>
                <div className={styles.scrollArrow}>
                    <ChevronDown size={20} />
                </div>
            </div>
        </section>
    );
}
