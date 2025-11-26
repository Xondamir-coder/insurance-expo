// composables/useDynamicSeo.js
import en from '~/assets/data/seo/en.json';
import ru from '~/assets/data/seo/ru.json';
import uz from '~/assets/data/seo/uz.json';

export default (pageName, replaceParams = {}) => {
  const { locale } = useI18n();
  const seoData = { en, ru, uz };

  // Get the SEO data for the current locale and page
  const pageData = seoData[locale.value]?.[pageName];

  if (!pageData) {
    console.warn(`SEO data not found for page: ${pageName}`);
    return;
  }

  // Replace placeholders in title
  let title = pageData.title || '';
  Object.entries(replaceParams).forEach(([key, value]) => {
    title = title.replace(`{${key}}`, String(value));
  });

  // Replace placeholders in description
  let description = pageData.description || '';
  Object.entries(replaceParams).forEach(([key, value]) => {
    description = description.replace(`{${key}}`, String(value));
  });

  // Set the SEO meta tags
  useSeoMeta({
    ogSiteName: 'Insurance Expo',
    title,
    description
  });
};
