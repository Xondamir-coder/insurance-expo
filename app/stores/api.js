// Constants
const API_URL = 'https://api.insurexpo.uz';

export const useApiStore = defineStore('api', () => {
  // Data
  const partners = ref();

  // Fetchers
  const fetchPartners = async () => {
    try {
      const { data, error } = await useFetch(`${API_URL}/partners`);

      if (error.value) {
        throw new Error(error.value.message);
      }

      if (data.value) {
        partners.value = data.value;
      }

      partners.value = data.value;
    } catch (error) {
      console.error(error);
    }
  };

  return { partners, fetchPartners };
});
