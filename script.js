const photos = [
  { slug: 'golden-flock', category: 'wildlife', width: 4887, height: 3258, alt: 'A flock of shorebirds gathered in golden water at sunset.', title: 'Least Sandpipers at Sunset', species: 'Least Sandpiper', location: 'Fort Walton Beach, Florida', date: 'March 2025' },
  { slug: 'hummingbird', category: 'wildlife', width: 2048, height: 1365, alt: 'A Ruby-throated Hummingbird hovering in flight against a soft blue background.', title: 'Ruby-throated Hummingbird', species: 'Ruby-throated Hummingbird', location: 'Hobbs State Park Conservation Area', date: 'August 2025' },
  { slug: 'misty-ducks', category: 'wildlife', width: 5686, height: 3791, alt: 'Canada Geese drifting across a misty lake in early light.', title: 'Canada Geese in Mist', species: 'Canada Goose', location: 'Lake Wilson, Fayetteville, Arkansas', date: 'March 2026' },
  { slug: 'twin-fawns', category: 'wildlife', width: 2048, height: 1365, alt: 'Two white-tailed deer fawns standing together in a sunlit meadow.', title: 'White-tailed Deer Fawns', species: 'White-tailed Deer', location: 'Lake Fayetteville, Arkansas', date: 'July 2025' },
  { slug: 'red-winged-blackbird', category: 'wildlife', width: 2048, height: 1365, alt: 'A Red-winged Blackbird calling from a bare branch.', title: 'Red-winged Blackbird Calling', species: 'Red-winged Blackbird', location: 'Forest Park, St. Louis, Missouri', date: 'June 2025' },
  { slug: 'little-blue-heron', category: 'wildlife', width: 2048, height: 1445, alt: 'A Little Blue Heron standing beside green reeds in a wetland.', title: 'Little Blue Heron', species: 'Little Blue Heron', location: 'Forest Park, St. Louis, Missouri', date: 'June 2025' },
  { slug: 'juvenile-little-blue-heron', category: 'wildlife', width: 2048, height: 1365, alt: 'A juvenile Little Blue Heron in transitional plumage standing on a fallen cypress branch above green water.', title: 'Juvenile Little Blue Heron', species: 'Little Blue Heron', location: 'Forest Park, St. Louis, Missouri', date: 'June 2025' },
  { slug: 'robin-with-berry', category: 'wildlife', width: 4103, height: 2735, alt: 'An American Robin holding a berry while perched among bare branches.', title: 'American Robin with Berry', species: 'American Robin', location: 'Lake Fayetteville, Arkansas', date: 'January 2026' },
  { slug: 'bluebird', category: 'wildlife', width: 4522, height: 3015, alt: 'An Eastern Bluebird perched on a branch beneath bright green leaves.', title: 'Eastern Bluebird', species: 'Eastern Bluebird', location: 'Murray Park, Little Rock, Arkansas', date: 'June 2026' },
  { slug: 'beaver', category: 'wildlife', width: 4719, height: 3146, alt: 'A wet American Beaver walking over rocks at the edge of a wooded area.', title: 'American Beaver', species: 'American Beaver', location: 'Lake Fayetteville, Arkansas', date: 'May 2025' },
  { slug: 'ducklings', category: 'wildlife', width: 2048, height: 1365, alt: 'A female Wood Duck and ducklings swimming under broad green leaves.', title: 'Wood Duck and Ducklings', species: 'Wood Duck', location: 'Forest Park, St. Louis, Missouri', date: 'June 2026' },
  { slug: 'squirrel-on-lichen', category: 'wildlife', width: 2048, height: 1365, alt: 'An Eastern Gray Squirrel paused on a lichen-covered tree branch.', title: 'Squirrel on Lichen', species: 'Eastern Gray Squirrel', location: 'Conway, Arkansas', date: 'June 2026' },
  { slug: 'heron-landing', category: 'wildlife', width: 4187, height: 2791, alt: 'A Great Blue Heron landing over a dark pond beside sunlit trees.', title: 'Great Blue Heron Landing', species: 'Great Blue Heron', location: 'Lake Fayetteville, Arkansas', date: 'June 2025' },
  { slug: 'shorebirds-at-sunset', category: 'wildlife', width: 2079, height: 1386, alt: 'Four Least Sandpipers along a bright shoreline at sunrise.', title: 'Least Sandpipers at Sunrise', species: 'Least Sandpiper', location: 'Fort Walton Beach, Florida', date: 'March 2025' },
  { slug: 'heron-in-foliage', category: 'wildlife', width: 2048, height: 1365, alt: 'A Great Blue Heron framed by dense summer foliage.', title: 'Great Blue Heron in Foliage', species: 'Great Blue Heron', location: 'Forest Park, St. Louis, Missouri', date: 'June 2026' },
  { slug: 'heron-through-reeds', category: 'wildlife', width: 11023, height: 7349, alt: 'A Little Blue Heron seen through soft foreground reeds.', title: 'Little Blue Heron in Reeds', species: 'Little Blue Heron', location: 'Forest Park, St. Louis, Missouri', date: 'June 2025' },
  { slug: 'three-shorebirds', category: 'wildlife', width: 2657, height: 1771, alt: 'Three Least Sandpipers walking together through shallow water at sunrise.', title: 'Three Least Sandpipers', species: 'Least Sandpiper', location: 'Fort Walton Beach, Florida', date: 'March 2025' },
  { slug: 'distant-heron', category: 'wildlife', width: 5370, height: 3580, alt: 'A Great Blue Heron flying low across a pond near a wooded shoreline.', title: 'Great Blue Heron in Flight', species: 'Great Blue Heron', location: 'Lake Fayetteville, Arkansas', date: 'June 2025' },
  { slug: 'heron-reflection', category: 'wildlife', width: 6000, height: 4000, alt: 'A distant Great Blue Heron perched above a still pond and its reflection.', title: 'Great Blue Heron and His Reflection', species: 'Great Blue Heron', location: 'Lake Fayetteville, Arkansas', date: 'June 2025' },
  { slug: 'alligator', category: 'wildlife', width: 6000, height: 4000, alt: 'A close view of a Muscovy Duck resting beneath a fallen tree.', title: 'Muscovy Duck', species: 'Muscovy Duck', location: 'Fayetteville, Arkansas', date: 'June 2025' },
  { slug: 'heron-at-sunset', category: 'wildlife', width: 2998, height: 1999, alt: 'A Great Blue Heron in profile against warm sunset light.', title: 'Great Blue Heron at Sunset', species: 'Great Blue Heron', location: 'Fort Walton Beach, Florida', date: 'March 2025' },
  { slug: 'horses-on-beach', category: 'places', width: 6000, height: 4000, alt: 'A rider leading horses along a turquoise shoreline.', title: 'Horses on the Beach', location: 'Spanish Wells, Bahamas', date: 'January 2025' },
  { slug: 'pasture', category: 'places', width: 2728, height: 1830, alt: 'Cattle grazing in a quiet pasture bordered by wooded hills.', title: 'Cattle in Pasture', location: 'Mountainburg, Arkansas', date: 'September 2025' },
  { slug: 'marina', category: 'places', width: 2256, height: 1513, alt: 'Russellville Marina and boats reflected in still water.', title: 'Russellville Marina', location: 'Lake Dardanelle, Arkansas', date: 'October 2025' },
  { slug: 'beach-house', category: 'places', width: 4165, height: 3332, alt: 'A small white beach house beneath a wide blue sky.', title: 'Beach House', location: 'Spanish Wells, Bahamas', date: 'January 2025' },
  { slug: 'sunlit-tree', category: 'places', width: 2728, height: 1830, alt: 'A large tree backlit by late afternoon sun.', title: 'Backlit Tree', location: 'Lake Dardanelle, Arkansas', date: 'October 2025' },
  { slug: 'grain-silos', category: 'places', width: 2048, height: 1365, alt: 'Grain silos rising beyond a bright green field.', title: 'Grain Silos', location: 'Bald Knob National Wildlife Refuge, Arkansas', date: 'July 2025' },
  { slug: 'quiet-lake', category: 'places', width: 2728, height: 1830, alt: 'Lake Dardanelle and small shoreline buildings under a pale sky.', title: 'Lake Dardanelle', location: 'Lake Dardanelle, Arkansas', date: 'October 2025' },
  { slug: 'city-skyline', category: 'places', width: 4818, height: 3212, alt: 'The Little Rock skyline seen across the Arkansas River in winter light.', title: 'Little Rock Skyline', location: 'Little Rock, Arkansas' },
  { slug: 'winter-berries', category: 'flora', width: 4896, height: 3264, alt: 'Red berries and green leaves lit from behind.', title: 'Red Berries', location: 'Lake Fayetteville, Arkansas', date: 'April 2026' },
  { slug: 'purple-flowers', category: 'flora', width: 2728, height: 1830, alt: 'Blue Mistflower blooming in cool evening color.', title: 'Blue Mistflower', species: 'Blue Mistflower', location: 'Little Rock, Arkansas', date: 'July 2026' },
  { slug: 'pink-zinnia', category: 'flora', width: 2591, height: 1738, alt: 'A Pink Zinnia against circular highlights and shadow.', title: 'Pink Zinnia', species: 'Zinnia', location: 'Little Rock, Arkansas', date: 'July 2026' },
  { slug: 'passionflower', category: 'flora', width: 2728, height: 1830, alt: 'A Purple Passionflower with a small beetle against deep green leaves.', title: 'Purple Passionflower', species: 'Purple Passionflower', location: 'Little Rock, Arkansas', date: 'July 2026' }
];

const gallery = document.querySelector('#gallery');
const filters = [...document.querySelectorAll('.filter')];
const filterBar = document.querySelector('.filters');
const lightbox = document.querySelector('#lightbox');
const lightboxImage = document.querySelector('#lightbox-image');
const lightboxTitle = document.querySelector('#lightbox-title');
const lightboxMeta = document.querySelector('#lightbox-meta');
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
    button.setAttribute('aria-label', `Open ${photo.title}`);

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
  lightboxTitle.textContent = photo.title;

  const metaParts = [
    photo.species && photo.species !== photo.title ? photo.species : null,
    photo.location,
    photo.date
  ].filter(Boolean);
  lightboxMeta.textContent = metaParts.join(', ');
  lightboxMeta.hidden = metaParts.length === 0;

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

function scrollToGalleryStart() {
  const galleryTop = gallery.getBoundingClientRect().top + window.scrollY;
  const top = galleryTop - header.offsetHeight - filterBar.offsetHeight - 12;
  const behavior = window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth';
  window.scrollTo({ top: Math.max(0, top), behavior });
}

filters.forEach((button) => {
  button.addEventListener('click', () => {
    applyFilter(button.dataset.filter);
    requestAnimationFrame(scrollToGalleryStart);
  });
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

document.addEventListener('contextmenu', (event) => {
  if (event.target.matches('img')) event.preventDefault();
});

document.addEventListener('dragstart', (event) => {
  if (event.target.matches('img')) event.preventDefault();
});

document.querySelector('#year').textContent = new Date().getFullYear();
renderGallery();
document.querySelectorAll('img').forEach((image) => {
  image.draggable = false;
});

