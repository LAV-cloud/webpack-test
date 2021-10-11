function createAnalytics() {
  let counter = 0;
  let isDestoyed = false;

  const listener = () => counter++;

  document.addEventListener('click', listener);

  return {
    destroy() {
      document.removeEventListener('click', listener);
      isDestoyed = true;
    },
    getClicks() {
      if (isDestoyed) {
        return 'Analytics is destroyed';
      }
      return counter;
    },
  };
}

window.analytics = createAnalytics();
