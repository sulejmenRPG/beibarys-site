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

// Gallery data with Unsplash images
const activitiesGallery = [
  { title: 'Стрельба из лука', image: 'https://images.unsplash.com/photo-1510925758641-869d353cecc7?w=600&h=900&fit=crop' },
  { title: 'Активный отдых', image: 'https://images.unsplash.com/photo-1530549387789-4c1017266635?w=600&h=900&fit=crop' },
  { title: 'Скалолазание', image: 'https://images.unsplash.com/photo-1522163182402-834f871fd851?w=600&h=900&fit=crop' },
  { title: 'Природа', image: 'https://images.unsplash.com/photo-1501555088652-021faa106b9b?w=600&h=900&fit=crop' },
  { title: 'Командные игры', image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&h=900&fit=crop' },
  { title: 'Вечерний отдых', image: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=600&h=900&fit=crop' },
];

const gazebosGallery = [
  { title: 'Беседка "Оазис"', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=900&fit=crop' },
  { title: 'Беседка "Султан"', image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&h=900&fit=crop' },
  { title: 'Зона барбекю', image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&h=900&fit=crop' },
  { title: 'VIP-беседка', image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&h=900&fit=crop' },
  { title: 'Уютный уголок', image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=600&h=900&fit=crop' },
];

const poolGallery = [
  { title: 'Открытый бассейн', image: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?w=600&h=900&fit=crop' },
  { title: 'Зона отдыха', image: 'https://images.unsplash.com/photo-1572331165267-854da2b021aa?w=600&h=900&fit=crop' },
  { title: 'Релакс у воды', image: 'https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?w=600&h=900&fit=crop' },
  { title: 'Вечерний бассейн', image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=600&h=900&fit=crop' },
];

const banquetGallery = [
  { title: 'Банкетный зал', image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=600&h=900&fit=crop' },
  { title: 'Свадебный декор', image: 'https://images.unsplash.com/photo-1478146896981-b80fe463b330?w=600&h=900&fit=crop' },
  { title: 'Праздничный стол', image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&h=900&fit=crop' },
  { title: 'Корпоратив', image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=900&fit=crop' },
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
