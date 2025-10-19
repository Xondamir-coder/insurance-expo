export const TEL_NUMBER = '+777 123 88 71';
export const GMAIL = 'Example@gmail.com';

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
