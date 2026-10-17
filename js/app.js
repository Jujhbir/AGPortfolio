(() => {
  const navigation = document.querySelector('.page-navigation');
  const links = [...document.querySelectorAll('.page-link[data-page]')];
  const views = [...document.querySelectorAll('.page-view[data-view]')];
  const search = document.querySelector('#page-search');
  const surface = document.querySelector('#page-surface');
  function showPage(page, updateAddress = true) {
    if (!links.some((link) => link.dataset.page === page)) page = 'welcome';

    links.forEach((link) => {
      const active = link.dataset.page === page;
      link.classList.toggle('is-current', active);
      if (active) link.setAttribute('aria-current', 'page');
      else link.removeAttribute('aria-current');
    });
    views.forEach((view) => { view.hidden = view.dataset.view !== page; });
    surface.classList.toggle('is-terms', page === 'terms');

    if (updateAddress && location.hash !== `#${page}`) {
      history.pushState(null, '', `#${page}`);
    }
  }

  navigation.addEventListener('click', (event) => {
    const link = event.target.closest('a[data-page]');
    if (!link || link.hidden) return;
    event.preventDefault();
    showPage(link.dataset.page);
  });

  search.addEventListener('input', () => {
    const query = search.value.trim().toLocaleLowerCase();
    links.forEach((link) => {
      link.hidden = query.length > 0 && !link.textContent.toLocaleLowerCase().includes(query);
    });
  });

  window.addEventListener('hashchange', () => showPage(location.hash.slice(1), false));
  window.addEventListener('popstate', () => showPage(location.hash.slice(1), false));
  showPage(location.hash.slice(1) || 'welcome', false);
})();
