const photos = [
  { slug: 'golden-flock', category: 'wildlife', width: 4887, height: 3258, alt: 'A flock of shorebirds gathered in golden water at sunset.' },
  { slug: 'shorebirds-at-sunset', category: 'wildlife', width: 2079, height: 1386, alt: 'Four shorebirds silhouetted along a bright shoreline at sunset.' },
  { slug: 'three-shorebirds', category: 'wildlife', width: 2657, height: 1771, alt: 'Three shorebirds walking together through shallow golden water.' },
  { slug: 'hummingbird', category: 'wildlife', width: 2048, height: 1365, alt: 'A hummingbird hovering in flight against a soft blue background.' },
  { slug: 'twin-fawns', category: 'wildlife', width: 2048, height: 1365, alt: 'Two white-tailed deer fawns standing together in a sunlit meadow.' },
  { slug: 'beaver', category: 'wildlife', width: 4719, height: 3146, alt: 'A wet beaver walking over rocks at the edge of a wooded area.' },
  { slug: 'heron-landing', category: 'wildlife', width: 4187, height: 2791, alt: 'A great blue heron landing over a dark pond beside sunlit trees.' },
  { slug: 'misty-ducks', category: 'wildlife', width: 5686, height: 3791, alt: 'Ducks drifting across a misty lake in early light.' },
  { slug: 'little-blue-heron', category: 'wildlife', width: 2048, height: 1445, alt: 'A little blue heron standing beside green reeds in a wetland.' },
  { slug: 'heron-through-reeds', category: 'wildlife', width: 11023, height: 7349, alt: 'A little blue heron seen through soft foreground reeds.' },
  { slug: 'red-winged-blackbird', category: 'wildlife', width: 2048, height: 1365, alt: 'A red-winged blackbird calling from a bare branch.' },
  { slug: 'squirrel-on-lichen', category: 'wildlife', width: 2048, height: 1365, alt: 'A squirrel paused on a lichen-covered tree branch.' },
  { slug: 'robin-with-berry', category: 'wildlife', width: 4103, height: 2735, alt: 'An American robin holding a berry while perched among bare branches.' },
  { slug: 'bluebird', category: 'wildlife', width: 4522, height: 3015, alt: 'A bluebird perched on a branch beneath bright green leaves.' },
  { slug: 'heron-reflection', category: 'wildlife', width: 6000, height: 4000, alt: 'A distant heron perched above a still pond and its reflection.' },
  { slug: 'distant-heron', category: 'wildlife', width: 5370, height: 3580, alt: 'A heron flying low across a pond near a wooded shoreline.' },
  { slug: 'heron-in-foliage', category: 'wildlife', width: 2048, height: 1365, alt: 'A great blue heron framed by dense summer foliage.' },
  { slug: 'ducklings', category: 'wildlife', width: 2048, height: 1365, alt: 'Ducklings swimming under broad green leaves.' },
  { slug: 'alligator', category: 'wildlife', width: 6000, height: 4000, alt: 'An alligator resting beneath a fallen tree in warm light.' },
  { slug: 'heron-at-sunset', category: 'wildlife', width: 2998, height: 1999, alt: 'A great blue heron in profile against warm sunset light.' },
  { slug: 'horses-on-beach', category: 'places', width: 6000, height: 4000, alt: 'A rider leading horses along a turquoise shoreline.' },
  { slug: 'beach-house', category: 'places', width: 4165, height: 3332, alt: 'A small white beach house beneath a wide blue sky.' },
  { slug: 'pasture', category: 'places', width: 2728, height: 1830, alt: 'Cattle grazing in a quiet pasture bordered by wooded hills.' },
  { slug: 'quiet-lake', category: 'places', width: 2728, height: 1830, alt: 'A calm lake and small shoreline buildings under a pale sky.' },
  { slug: 'marina', category: 'places', width: 2256, height: 1513, alt: 'A small marina building reflected in still water.' },
  { slug: 'sunlit-tree', category: 'places', width: 2728, height: 1830, alt: 'A large tree backlit by late afternoon sun.' },
  { slug: 'grain-silos', category: 'places', width: 2048, height: 1365, alt: 'Grain silos rising beyond a bright green field.' },
  { slug: 'city-skyline', category: 'places', width: 4818, height: 3212, alt: 'A city skyline seen across a river in winter light.' },
  { slug: 'winter-berries', category: 'flora', width: 4896, height: 3264, alt: 'Red berries and green leaves lit from behind.' },
  { slug: 'purple-flowers', category: 'flora', width: 2728, height: 1830, alt: 'Soft purple flowers in cool evening color.' },
  { slug: 'pink-zinnia', category: 'flora', width: 2591, height: 1738, alt: 'A pink zinnia against circular highlights and shadow.' },
  { slug: 'passionflower', category: 'flora', width: 2728, height: 1830, alt: 'A pale purple passionflower against deep green leaves.' }
];

const gallery = document.querySelector('#gallery');
const filters = [...document.querySelectorAll('.filter')];
const lightbox = document.querySelector('#lightbox');
const lightboxImage = document.querySelector('#lightbox-image');
const lightboxCategory = document.querySelector('#lightbox-category');
const lightboxCount = document.querySelector('#lightbox-count');
const closeButton = document.querySelector('.lightbox-close');
const header = document.querySelector('.site-header');
const menuButton = document.querySelector('.menu-button');
const siteNav = document.querySelector('.site-nav');

let activeFilter = 'wildlife';
let activePhoto = 0;
let visibleIndexes = [];
let lastFocused = null;
let pointerStartX = 0;

function categoryLabel(category) {
  return category.charAt(0).toUpperCase() + category.slice(1);
}

function renderGallery() {
  const fragment = document.createDocumentFragment();

  photos.forEach((photo, index) => {
    const button = document.createElement('button');
    button.className = 'photo';
    button.type = 'button';
    button.dataset.index = index;
    button.dataset.category = photo.category;
    button.setAttribute('aria-label', `Open ${photo.category} photograph`);

    const image = document.createElement('img');
    image.src = `images/thumb/${photo.slug}.jpg`;
    image.srcset = `images/thumb/${photo.slug}.jpg 1440w, images/large/${photo.slug}.jpg 3200w`;
    image.sizes = '(max-width: 700px) calc(100vw - 28px), (max-width: 1000px) calc((100vw - 46px) / 2), calc((100vw - 66px) / 2)';
    image.alt = photo.alt;
    image.width = photo.width;
    image.height = photo.height;
    image.loading = 'lazy';
    image.decoding = 'async';

    button.append(image);
    button.addEventListener('click', () => openPhoto(index, button));
    fragment.append(button);
  });

  gallery.append(fragment);
  applyFilter(activeFilter);
}

function applyFilter(filter) {
  activeFilter = filter;
  visibleIndexes = [];

  document.querySelectorAll('.photo').forEach((card, index) => {
    const visible = filter === 'all' || card.dataset.category === filter;
    card.hidden = !visible;
    if (visible) visibleIndexes.push(index);
  });

  filters.forEach((button) => {
    const selected = button.dataset.filter === filter;
    button.classList.toggle('is-active', selected);
    button.setAttribute('aria-pressed', String(selected));
  });

  const label = filter === 'all' ? 'All photographs' : `${categoryLabel(filter)} photographs`;
  gallery.setAttribute('aria-label', `${label}, ${visibleIndexes.length} images`);
}

function setLightboxPhoto(index) {
  activePhoto = index;
  const photo = photos[index];
  const position = visibleIndexes.indexOf(index);

  lightboxImage.src = `images/large/${photo.slug}.jpg`;
  lightboxImage.alt = photo.alt;
  lightboxCategory.textContent = categoryLabel(photo.category);
  lightboxCount.textContent = `${String(position + 1).padStart(2, '0')} / ${String(visibleIndexes.length).padStart(2, '0')}`;

  const nextIndex = visibleIndexes[(position + 1) % visibleIndexes.length];
  const preload = new Image();
  preload.src = `images/large/${photos[nextIndex].slug}.jpg`;
}

function openPhoto(index, trigger) {
  lastFocused = trigger;
  setLightboxPhoto(index);
  if (!lightbox.open) {
    lightbox.showModal();
    document.body.classList.add('lightbox-open');
  }
}

function stepPhoto(direction) {
  const currentPosition = visibleIndexes.indexOf(activePhoto);
  const nextPosition = (currentPosition + direction + visibleIndexes.length) % visibleIndexes.length;
  setLightboxPhoto(visibleIndexes[nextPosition]);
}

filters.forEach((button) => {
  button.addEventListener('click', () => applyFilter(button.dataset.filter));
});

closeButton.addEventListener('click', () => lightbox.close());
document.querySelector('.lightbox-prev').addEventListener('click', () => stepPhoto(-1));
document.querySelector('.lightbox-next').addEventListener('click', () => stepPhoto(1));

lightbox.addEventListener('click', (event) => {
  if (event.target === lightbox) lightbox.close();
});

lightbox.addEventListener('close', () => {
  document.body.classList.remove('lightbox-open');
  lightboxImage.src = '';
  if (lastFocused) lastFocused.focus();
});

lightbox.addEventListener('pointerdown', (event) => {
  pointerStartX = event.clientX;
});

lightbox.addEventListener('pointerup', (event) => {
  const distance = event.clientX - pointerStartX;
  if (Math.abs(distance) > 60) stepPhoto(distance > 0 ? -1 : 1);
});

window.addEventListener('keydown', (event) => {
  if (!lightbox.open) return;
  if (event.key === 'ArrowLeft') stepPhoto(-1);
  if (event.key === 'ArrowRight') stepPhoto(1);
});

window.addEventListener('scroll', () => {
  header.classList.toggle('is-scrolled', window.scrollY > 24);
}, { passive: true });

menuButton.addEventListener('click', () => {
  const open = siteNav.classList.toggle('is-open');
  menuButton.setAttribute('aria-expanded', String(open));
});

siteNav.addEventListener('click', (event) => {
  if (!event.target.matches('a')) return;
  siteNav.classList.remove('is-open');
  menuButton.setAttribute('aria-expanded', 'false');
});

document.querySelector('#year').textContent = new Date().getFullYear();
renderGallery();

