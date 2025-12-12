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
import { getGalleries, getSiteSettings, getRooms } from '../../sanity/lib/client';

// Site settings type
interface SiteSettings {
  heroImage?: string;
}

// Room type from Sanity
interface SanityRoom {
  _id: string;
  name: string;
  description: string;
  capacity: string;
  price: string;
  features: string;
  badge: string;
  image?: string;
}
const defaultGalleries = {
  activities: {
    label: 'Галерея',
    title: 'Активности',
    subtitle: 'Видео и фото наших развлечений',
    items: [
      { title: 'Стрельба из лука', image: 'https://images.unsplash.com/photo-1510925758641-869d353cecc7?w=600&h=900&fit=crop' },
      { title: 'Активный отдых', image: 'https://images.unsplash.com/photo-1530549387789-4c1017266635?w=600&h=900&fit=crop' },
      { title: 'Скалолазание', image: 'https://images.unsplash.com/photo-1522163182402-834f871fd851?w=600&h=900&fit=crop' },
      { title: 'Природа', image: 'https://images.unsplash.com/photo-1501555088652-021faa106b9b?w=600&h=900&fit=crop' },
      { title: 'Командные игры', image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&h=900&fit=crop' },
    ],
  },
  gazebos: {
    label: 'Беседки',
    title: 'Зоны отдыха',
    subtitle: 'Уютные беседки для любой компании',
    items: [
      { title: 'Беседка "Оазис"', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=900&fit=crop' },
      { title: 'Беседка "Султан"', image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&h=900&fit=crop' },
      { title: 'Зона барбекю', image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&h=900&fit=crop' },
      { title: 'VIP-беседка', image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&h=900&fit=crop' },
    ],
  },
  pool: {
    label: 'Бассейн',
    title: 'Водные развлечения',
    subtitle: 'Открытый бассейн с подогревом',
    items: [
      { title: 'Открытый бассейн', image: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?w=600&h=900&fit=crop' },
      { title: 'Зона отдыха', image: 'https://images.unsplash.com/photo-1572331165267-854da2b021aa?w=600&h=900&fit=crop' },
      { title: 'Релакс у воды', image: 'https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?w=600&h=900&fit=crop' },
    ],
  },
  banquet: {
    label: 'Банкетный зал',
    title: 'Праздники и мероприятия',
    subtitle: 'Проведите незабываемое торжество',
    items: [
      { title: 'Банкетный зал', image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=600&h=900&fit=crop' },
      { title: 'Свадебный декор', image: 'https://images.unsplash.com/photo-1478146896981-b80fe463b330?w=600&h=900&fit=crop' },
      { title: 'Праздничный стол', image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&h=900&fit=crop' },
    ],
  },
};

// Type for Sanity gallery
interface SanityGallery {
  _id: string;
  title: string;
  slug: string;
  subtitle?: string;
  label?: string;
  items?: { title?: string; image?: string; video?: string }[];
}

export default async function Home() {
  // Fetch data from Sanity
  let sanityGalleries: SanityGallery[] = [];
  let siteSettings: SiteSettings | null = null;
  let sanityRooms: SanityRoom[] = [];

  try {
    [sanityGalleries, siteSettings, sanityRooms] = await Promise.all([
      getGalleries(),
      getSiteSettings(),
      getRooms(),
    ]);
  } catch (error) {
    console.log('Sanity fetch failed, using defaults');
  }

  // Helper to get gallery by slug or use default
  const getGallery = (slug: string) => {
    const sanityGallery = sanityGalleries.find((g) => g.slug === slug);
    if (sanityGallery && sanityGallery.items && sanityGallery.items.length > 0) {
      return {
        label: sanityGallery.label || defaultGalleries[slug as keyof typeof defaultGalleries]?.label || '',
        title: sanityGallery.title || defaultGalleries[slug as keyof typeof defaultGalleries]?.title || '',
        subtitle: sanityGallery.subtitle || defaultGalleries[slug as keyof typeof defaultGalleries]?.subtitle || '',
        items: sanityGallery.items.map((item) => ({
          title: item.title || '',
          image: item.image,
          video: item.video,
        })),
      };
    }
    return defaultGalleries[slug as keyof typeof defaultGalleries] || defaultGalleries.activities;
  };

  const activitiesGallery = getGallery('activities');
  const gazebosGallery = getGallery('gazebos');
  const poolGallery = getGallery('pool');
  const banquetGallery = getGallery('banquet');

  return (
    <>
      <Header />
      <main>
        <Hero heroImage={siteSettings?.heroImage} />

        <ScrollReveal>
          <Services />
        </ScrollReveal>

        <ScrollReveal>
          <Gallery
            id="activities-gallery"
            label={activitiesGallery.label}
            title={activitiesGallery.title}
            subtitle={activitiesGallery.subtitle}
            items={activitiesGallery.items}
          />
        </ScrollReveal>

        <ScrollReveal>
          <Rooms rooms={sanityRooms.length > 0 ? sanityRooms : undefined} />
        </ScrollReveal>

        <ScrollReveal>
          <Gallery
            id="gazebos"
            label={gazebosGallery.label}
            title={gazebosGallery.title}
            subtitle={gazebosGallery.subtitle}
            items={gazebosGallery.items}
          />
        </ScrollReveal>

        <ScrollReveal>
          <Pricing />
        </ScrollReveal>

        <ScrollReveal>
          <Gallery
            id="pool"
            label={poolGallery.label}
            title={poolGallery.title}
            subtitle={poolGallery.subtitle}
            items={poolGallery.items}
          />
        </ScrollReveal>

        <ScrollReveal>
          <Menu />
        </ScrollReveal>

        <ScrollReveal>
          <Gallery
            id="banquet"
            label={banquetGallery.label}
            title={banquetGallery.title}
            subtitle={banquetGallery.subtitle}
            items={banquetGallery.items}
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
