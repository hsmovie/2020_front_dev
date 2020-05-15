const throttler = throttling();

function scrollFetch(fetchData) {
  window.addEventListener('scroll', () => {
    throttler.throttle(() => {
      console.log('Activate Scroll Event');
      if (getScrollTop() < getDocumentHeight() - window.innerHeight) return;
      fetchData();
    }, 700);
  });
}

function getScrollTop() {
  return window.pageYOffset !== undefined
    ? window.pageYOffset
    : (document.documentElement || document.body.parentNode || document.body)
        .scrollTop;
}

function getDocumentHeight() {
  const body = document.body;
  const html = document.documentElement;

  return Math.max(
    body.scrollHeight,
    body.offsetHeight,
    html.clientHeight,
    html.scrollHeight,
    html.offsetHeight
  );
}

function throttling() {
  let throttleCheck;

  return {
    throttle(callback, milliseconds) {
      if (!throttleCheck) {
        throttleCheck = setTimeout(() => {
          callback(...arguments);
          throttleCheck = false;
        }, milliseconds);
      }
    },
  };
}

export default scrollFetch;
