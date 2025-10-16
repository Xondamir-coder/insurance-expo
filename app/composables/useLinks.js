export default () => {
  const { t } = useI18n();
  const links = computed(() => [
    {
      to: '/',
      label: t('nav.home')
    },
    {
      to: '/participants',
      label: t('nav.participants')
    },
    {
      to: '/speakers',
      label: t('nav.speakers')
    },
    {
      to: '/partners',
      label: t('nav.partners')
    },
    {
      to: '/sponsors',
      label: t('nav.sponsors')
    }
  ]);
  const aboutLinks = computed(() => [
    {
      to: '/mission',
      label: t('nav.mission')
    },
    {
      to: '/venue',
      label: t('nav.venue')
    },
    {
      to: '/organizer',
      label: t('nav.organizer')
    }
  ]);
  const mediaLinks = computed(() => [
    {
      to: '/media',
      label: t('nav.media-library')
    },
    {
      to: '/media-accreditation',
      label: t('nav.media-accreditation')
    }
  ]);
  const allLinks = computed(() => [
    {
      label: t('link'),
      links: links.value
    },
    {
      label: t('nav.about'),
      links: aboutLinks.value
    },
    {
      label: t('nav.media'),
      links: mediaLinks.value
    }
  ]);

  return {
    allLinks,
    links,
    aboutLinks,
    mediaLinks
  };
};
