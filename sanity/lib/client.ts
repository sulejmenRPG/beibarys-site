import { createClient } from 'next-sanity';

// Hardcoded fallback for Vercel deployment
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'bmh1cmkr';
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-01-01';

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true, // Use CDN for faster reads
});

// Cache options for static generation with revalidation
const cacheOptions = {
  next: { revalidate: 3600 } // Revalidate every 1 hour
};

// Fetch functions for each content type with caching
export async function getServices() {
  return client.fetch(`
    *[_type == "service"] | order(order asc) {
      _id,
      title,
      description,
      icon,
      "image": image.asset->url
    }
  `, {}, cacheOptions);
}

export async function getRooms() {
  return client.fetch(`
    *[_type == "room"] | order(order asc) {
      _id,
      name,
      description,
      capacity,
      price,
      features,
      badge,
      "image": image.asset->url,
      "gallery": gallery[].asset->url
    }
  `, {}, cacheOptions);
}

export async function getPricing() {
  return client.fetch(`
    *[_type == "pricing"] | order(order asc) {
      _id,
      category,
      items[] {
        name,
        price,
        period
      }
    }
  `, {}, cacheOptions);
}

export async function getMenu() {
  return client.fetch(`
    *[_type == "menuCategory"] | order(order asc) {
      _id,
      name,
      items[] {
        name,
        description,
        price
      }
    }
  `, {}, cacheOptions);
}

export async function getReviews() {
  return client.fetch(`
    *[_type == "review"] {
      _id,
      name,
      date,
      rating,
      text,
      "avatar": avatar.asset->url
    }
  `, {}, cacheOptions);
}

export async function getSiteSettings() {
  return client.fetch(`
    *[_type == "siteSettings"][0] {
      siteName,
      tagline,
      description,
      phone,
      whatsapp,
      instagram,
      address,
      workHours,
      checkInTime,
      "heroVideo": heroVideo.asset->url,
      "heroImage": heroImage.asset->url,
      "logo": logo.asset->url
    }
  `, {}, cacheOptions);
}

export async function getGalleries() {
  return client.fetch(`
    *[_type == "gallery"] | order(order asc) {
      _id,
      title,
      "slug": slug.current,
      subtitle,
      label,
      items[] {
        title,
        "image": image.asset->url,
        "video": video.asset->url
      }
    }
  `, {}, cacheOptions);
}

export async function getGalleryBySlug(slug: string) {
  return client.fetch(`
    *[_type == "gallery" && slug.current == $slug][0] {
      _id,
      title,
      "slug": slug.current,
      subtitle,
      label,
      items[] {
        title,
        "image": image.asset->url,
        "video": video.asset->url
      }
    }
  `, { slug }, cacheOptions);
}
