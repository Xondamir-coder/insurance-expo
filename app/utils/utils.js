export const TEL_NUMBER = '+777 123 88 71';
export const GMAIL = 'Example@gmail.com';
export const getLinks = () => {
  const links = [
    {
      to: '/about',
      label: 'About us'
    },
    {
      to: '/insurance-providers',
      label: 'Insurance Providers'
    },
    {
      to: '/news',
      label: 'News'
    },
    {
      to: '/events',
      label: 'Events'
    },
    {
      to: '/partners-sponsors',
      label: 'Partners & Sponsors'
    }
  ];
  return links;
};
export const getLangs = () => [
  { code: 'uz', label: 'Uzbek' },
  { code: 'en', label: 'English' },
  { code: 'ru', label: 'Russian' }
];

export const defaultScrollTrigger = (trigger, options) => ({
  scrollTrigger: {
    trigger,

    // Default values
    start: '10% bottom',
    end: 'center bottom',
    scrub: 1,

    // You can override any ScrollTrigger options here
    ...options
  }
});

export const GSAPanimation = (trigger, { method = 'from', animProps, scrollTriggerOptions }) => {
  const { $gsap } = useNuxtApp();
  if (!$gsap) {
    console.error('GSAP instance not found in Nuxt app');
    return;
  }

  const validMethods = ['from', 'to'];
  if (!validMethods.includes(method)) {
    throw new Error(`Invalid GSAP method: ${method}`);
  }

  if (!trigger) {
    throw new Error('Trigger is required for GSAP animation');
  }

  $gsap[method](trigger, {
    // Default values
    opacity: 0,

    // You can override any GSAP options here
    ...animProps,
    ...defaultScrollTrigger(trigger, scrollTriggerOptions)
  });
};
