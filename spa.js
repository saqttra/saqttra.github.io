// Copyright (c) 2025 saqttra. All rights reserved.

import About from './views/About.js';

const routes = {
  '/': About
};

function updateActiveLinks() {
  const links = document.querySelectorAll('[data-link]');
  links.forEach((link) => {
    const route = link.getAttribute('data-route');
    if (route === location.pathname) {
      link.classList.remove('opacity-50');
    } else {
      link.classList.add('opacity-50');
    }
  });
}

function router() {
  const view = routes[location.pathname];
  document.getElementById('spa').innerHTML = view 
    ? view()
    : "<h1 class='m-4 mt-0 text-4xl font-extrabold'>404 Not Found</h1>";
  updateActiveLinks();
}

document.addEventListener('DOMContentLoaded', router);

window.addEventListener('popstate', router);

document.addEventListener('click', (e) => {
  if (e.target.matches('[data-link]')) {
    e.preventDefault();
    history.pushState(null, '', e.target.href);
    router();
  }
});
