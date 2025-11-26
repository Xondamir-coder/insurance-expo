export const TEL_NUMBER = '+777 123 88 71';
export const GMAIL = 'Example@gmail.com';
export const DOMAIN_URL = 'https://api.insurexpo.uz';

export const formatDate = (dateString, locale, options, monthStyle = 'full') => {
  const UZ_MONTHS = {
    full: [
      'Yanvar',
      'Fevral',
      'Mart',
      'Aprel',
      'May',
      'Iyun',
      'Iyul',
      'Avgust',
      'Sentabr',
      'Oktabr',
      'Noyabr',
      'Dekabr'
    ],
    short: ['Yan', 'Fev', 'Mar', 'Apr', 'May', 'Iyun', 'Iyul', 'Avg', 'Sen', 'Okt', 'Noy', 'Dek']
  };

  const date = new Date(dateString);

  if (locale === 'uz') {
    const day = date.getDate();
    const month = UZ_MONTHS[monthStyle][date.getMonth()];
    const year = date.getFullYear();
    return `${day} ${month}, ${year}`;
  }

  return Intl.DateTimeFormat(locale, options).format(date);
};

export const defaultAnimProps = { opacity: 0, stagger: 0.2, duration: 0.7 };
export const getDefaultScrollTrigger = trigger => ({
  scrollTrigger: {
    trigger,
    start: '25% bottom'
  }
});
export const initAnimations = (desktopAnim, mobileAnim) => {
  nextTick(() => {
    setTimeout(() => {
      if (window.innerWidth > 700) {
        desktopAnim();
      } else {
        mobileAnim();
      }
    }, 50);
  });
};
