export default () => {
  const { t } = useI18n();
  const links = computed(() => [
    {
      to: '/partners',
      label: t('nav.partners')
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
      to: '/organizer',
      label: t('nav.organizer')
    },
    {
      to: '/venue',
      label: t('nav.venue')
    },
    {
      to: '/mission',
      label: t('nav.mission')
    }
  ]);
  const mediaLinks = computed(() => [
    {
      to: '/media-library',
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
