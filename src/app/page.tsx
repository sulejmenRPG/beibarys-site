import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Gallery from '@/components/Gallery';
import Rooms from '@/components/Rooms';
import Pricing from '@/components/Pricing';
import Menu from '@/components/Menu';
import Reviews from '@/components/Reviews';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ScrollReveal from '@/components/ScrollReveal';

// Gallery data for different sections
const activitiesGallery = [
  { title: 'Стрельба из лука', image: '/images/activity-archery.jpg' },
  { title: 'Бампербол', image: '/images/activity-bumperball.jpg' },
  { title: 'Скалолазание', image: '/images/activity-climbing.jpg' },
  { title: 'Стендовая стрельба', image: '/images/activity-shooting.jpg' },
  { title: 'Страйкбол', image: '/images/activity-airsoft.jpg' },
  { title: 'Караоке', image: '/images/activity-karaoke.jpg' },
];

const gazebosGallery = [
  { title: 'Беседка "Оазис"', image: '/images/gazebo-1.jpg' },
  { title: 'Беседка "Султан"', image: '/images/gazebo-2.jpg' },
  { title: 'Беседка "Шахристан"', image: '/images/gazebo-3.jpg' },
  { title: 'VIP-беседка', image: '/images/gazebo-vip.jpg' },
  { title: 'Банкетная беседка', image: '/images/gazebo-banquet.jpg' },
];

const poolGallery = [
  { title: 'Открытый бассейн', image: '/images/pool-1.jpg' },
  { title: 'Зона отдыха', image: '/images/pool-2.jpg' },
  { title: 'VIP-зона', image: '/images/pool-vip.jpg' },
  { title: 'Детская зона', image: '/images/pool-kids.jpg' },
];

const banquetGallery = [
  { title: 'Основной зал', image: '/images/banquet-1.jpg' },
  { title: 'VIP-зал "Султан"', image: '/images/banquet-2.jpg' },
  { title: 'Свадебное оформление', image: '/images/banquet-wedding.jpg' },
  { title: 'Корпоратив', image: '/images/banquet-corporate.jpg' },
];

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />

        <ScrollReveal>
          <Services />
        </ScrollReveal>

        <ScrollReveal>
          <Gallery
            id="activities-gallery"
            label="Галерея"
            title="Активности"
            subtitle="Видео и фото наших развлечений"
            items={activitiesGallery}
          />
        </ScrollReveal>

        <ScrollReveal>
          <Rooms />
        </ScrollReveal>

        <ScrollReveal>
          <Gallery
            id="gazebos"
            label="Беседки"
            title="Зоны отдыха"
            subtitle="Уютные беседки для любой компании"
            items={gazebosGallery}
          />
        </ScrollReveal>

        <ScrollReveal>
          <Pricing />
        </ScrollReveal>

        <ScrollReveal>
          <Gallery
            id="pool"
            label="Бассейн"
            title="Водные развлечения"
            subtitle="Открытый бассейн с подогревом"
            items={poolGallery}
          />
        </ScrollReveal>

        <ScrollReveal>
          <Menu />
        </ScrollReveal>

        <ScrollReveal>
          <Gallery
            id="banquet"
            label="Банкетный зал"
            title="Праздники и мероприятия"
            subtitle="Проведите незабываемое торжество"
            items={banquetGallery}
          />
        </ScrollReveal>

        <ScrollReveal>
          <Reviews />
        </ScrollReveal>

        <ScrollReveal>
          <Contact />
        </ScrollReveal>
      </main>
      <Footer />
    </>
  );
}
