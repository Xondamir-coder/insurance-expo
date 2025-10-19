import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function useGSAPAnimate({
  selector,
  base = {},
  initialDelay = 0,
  scrollStart = '25% bottom',
  scrollTriggerOpts = {},
  mode = 'single',
  custom = null
}) {
  const { $gsap } = useNuxtApp();
  const showPreloader = useState('showPreloader');
  let ctx;

  onMounted(() => {
    const els = document.querySelectorAll(selector);
    if (!els?.length) return;

    ctx = $gsap.context(() => {
      nextTick(() => {
        setTimeout(() => {
          document.querySelector('main').style.opacity = 1;

          const delay = showPreloader.value ? 3.25 : initialDelay;

          // custom mode: collective/specific scroll trigger, multiple animations
          if (typeof custom === 'function') {
            els.forEach((el, i) => custom({ el, i }));
            return;
          }

          const getOpts = trigger =>
            ScrollTrigger.isInViewport(trigger, '0')
              ? { delay: delay + initialDelay }
              : {
                  scrollTrigger: {
                    trigger,
                    start: scrollStart,
                    ...scrollTriggerOpts
                  }
                };

          // group mode: collective scroll trigger
          if (mode === 'group') {
            $gsap.from(els, {
              opacity: 0,
              duration: 0.7,
              stagger: 0.1,
              ...base,
              ...getOpts(selector)
            });
            return;
          }

          // single mode: specific scroll trigger
          els.forEach(el => {
            $gsap.from(el, {
              opacity: 0,
              duration: 0.7,
              ...base,
              ...getOpts(el)
            });
          });
        }, 50);
      });
    });
  });

  onBeforeUnmount(() => ctx?.revert());
}
