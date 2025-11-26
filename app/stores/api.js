// Constants
const API_URL = 'https://api.insurexpo.uz/api';
const ITEMS_PER_PARTICIPANTS_PAGE = 6;

export const useApiStore = defineStore('api', () => {
  // Composables
  const route = useRoute();

  // Data
  const partners = ref();
  const participants = ref();
  const speakers = ref();
  const media = ref();
  const events = ref();

  // Fetchers
  const fetchParticipants = async page => {
    try {
      const res = await $fetch(`${API_URL}/insurance`, {
        query: {
          page,
          take: ITEMS_PER_PARTICIPANTS_PAGE
        }
      });

      if (!res) {
        throw new Error('Error fetching participants');
      }

      participants.value = res;
    } catch (error) {
      console.error(error);
    }
  };
  const fetchData = async () => {
    const items = [
      {
        endpoint: 'sponsors',
        ref: partners
      },
      {
        endpoint: 'insurance',
        ref: participants,
        query: { take: ITEMS_PER_PARTICIPANTS_PAGE, page: +route.query.page }
      },
      {
        endpoint: 'speakers',
        ref: speakers
      },
      {
        endpoint: 'media-center',
        ref: media
      },
      {
        endpoint: 'events',
        ref: events
      }
    ];
    try {
      const promises = items.map(i => useFetch(`${API_URL}/${i.endpoint}`, { query: i.query }));
      const responses = await Promise.all(promises);
      responses.forEach((res, i) => {
        if (res.error.value) {
          throw new Error(res.error.value.message);
        }
        if (res.data.value) {
          items[i].ref.value = res.data.value;
        }
      });
    } catch (error) {
      console.error(error);
    }
  };

  return { partners, participants, speakers, media, events, fetchParticipants, fetchData };
});
