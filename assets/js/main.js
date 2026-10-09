/**
 * LA CAPRA CIGARS — Main JavaScript
 * Interactivity, Lounges Selector, Mobile Navigation & Forms
 */

document.addEventListener('DOMContentLoaded', () => {
  initMobileMenu();
  initLoungeSelector();
  initForms();
  initHeaderScroll();
});

/* -------------------------------------------------------------
   1. MOBILE MENU NAVIGATION
   ------------------------------------------------------------- */
function initMobileMenu() {
  const menuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const closeBtn = document.getElementById('close-mobile-menu');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');

  if (!menuBtn || !mobileMenu) return;

  function openMenu() {
    mobileMenu.classList.remove('hidden');
    mobileMenu.classList.add('flex');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    mobileMenu.classList.add('hidden');
    mobileMenu.classList.remove('flex');
    document.body.style.overflow = '';
  }

  menuBtn.addEventListener('click', openMenu);
  if (closeBtn) closeBtn.addEventListener('click', closeMenu);

  mobileLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
  });
}

/* -------------------------------------------------------------
   2. LOUNGE & CITY SELECTOR
   ------------------------------------------------------------- */
const LOUNGES_DATA = {
  'santo-domingo': {
    name: 'Cava & Lounge Privado "Humo Real Santo Domingo"',
    tag: 'Sede Central & Flagship',
    address: 'Av. República de Colombia 23, Santo Domingo, R.D.',
    hours: 'Martes a Domingo: 16:00 - 01:00 AM (Acceso previa confirmación de mesa)',
    phone: '+1 (809) 582-CAPRA',
    mapQuery: '18.506416,-69.984891',
    pinLabel: 'La Capra Cigars • Av. Rep. de Colombia 23'
  },
  'santiago': {
    name: 'Cava Madre & Atelier de Torcido "Valle del Cibao"',
    tag: 'Cava Madre & Fábrica',
    address: 'Calle Los Jazmines 14, Gurabo, Santiago de los Caballeros, R.D.',
    hours: 'Lunes a Sábado: 10:00 - 22:00 (Tours de mesa con maestro torcedor previa cita)',
    phone: '+1 (809) 583-CAPRA',
    mapQuery: '19.4517,-70.6970',
    pinLabel: 'La Capra Atelier • Gurabo, Santiago'
  },
  'punta-cana': {
    name: 'Private Cigar Vault & Beachfront Lounge "Punta Cana"',
    tag: 'Resort & Cava Privada',
    address: 'Boulevard Turístico del Este km 28, Cap Cana Marina, R.D.',
    hours: 'Miércoles a Domingo: 17:00 - 02:00 AM',
    phone: '+1 (809) 584-CAPRA',
    mapQuery: '18.4975,-68.3978',
    pinLabel: 'La Capra Vault • Cap Cana Marina'
  },
  'miami': {
    name: 'Brickell Private Members Vault "La Capra Miami"',
    tag: 'Private Club USA',
    address: '1100 Brickell Bay Dr, Suite 400, Miami, FL 33131',
    hours: 'Thursday to Sunday: 18:00 - 02:00 (Members & Verified Guests Only)',
    phone: '+1 (305) 555-CAPRA',
    mapQuery: '25.7628,-80.1906',
    pinLabel: 'La Capra Vault • Brickell Miami'
  },
  'madrid': {
    name: 'Salón de Selección "Distrito Salamanca Madrid"',
    tag: 'Cava Exclusiva Europa',
    address: 'Calle de Claudio Coello 45, Salamanca, 28001 Madrid, España',
    hours: 'Lunes a Sábado: 12:00 - 23:00',
    phone: '+34 91 555 CAPRA',
    mapQuery: '40.4284,-3.6872',
    pinLabel: 'La Capra Salón • Salamanca Madrid'
  }
};

function initLoungeSelector() {
  const cityButtons = document.querySelectorAll('.city-tab-btn');
  const loungeTitle = document.getElementById('lounge-title');
  const loungeTag = document.getElementById('lounge-tag');
  const loungeAddress = document.getElementById('lounge-address');
  const loungeHours = document.getElementById('lounge-hours');
  const loungePhone = document.getElementById('lounge-phone');
  const mapIframe = document.getElementById('lounge-map-iframe');
  const mapLink = document.getElementById('lounge-map-link');
  const pinText = document.getElementById('lounge-pin-text');

  if (!cityButtons.length) return;

  cityButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const cityKey = btn.getAttribute('data-city');
      const data = LOUNGES_DATA[cityKey];
      if (!data) return;

      // Update button active styles
      cityButtons.forEach(b => {
        b.className = 'city-tab-btn px-4 py-2 bg-surface-container text-on-surface-variant hover:text-primary border border-outline-variant/40 font-label-sm text-xs uppercase tracking-wider transition-colors';
      });
      btn.className = 'city-tab-btn px-4 py-2 bg-primary text-on-primary font-label-sm text-xs uppercase tracking-wider font-bold shadow-md';

      // Update DOM texts
      if (loungeTitle) loungeTitle.textContent = data.name;
      if (loungeTag) loungeTag.textContent = data.tag;
      if (loungeAddress) loungeAddress.textContent = data.address;
      if (loungeHours) loungeHours.textContent = data.hours;
      if (loungePhone) loungePhone.textContent = data.phone;
      if (pinText) pinText.textContent = data.pinLabel;

      // Update Map Iframe & Link
      if (mapIframe) {
        mapIframe.src = `https://maps.google.com/maps?q=${data.mapQuery}&hl=es&z=17&output=embed`;
      }
      if (mapLink) {
        mapLink.href = `https://maps.google.com/?q=${data.mapQuery}`;
      }
    });
  });
}

/* -------------------------------------------------------------
   3. FORMS HANDLING & ELEGANT TOAST
   ------------------------------------------------------------- */
function initForms() {
  const reservationForm = document.getElementById('reservation-form');
  const membershipForm = document.getElementById('membership-form');
  const newsletterForm = document.getElementById('newsletter-form');

  if (reservationForm) {
    reservationForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = reservationForm.querySelector('input[type="text"]').value;
      showToast(`¡Reserva confirmada, ${name}! El Sommelier de guardia se pondrá en contacto por WhatsApp.`);
      reservationForm.reset();
    });
  }

  if (membershipForm) {
    membershipForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = membershipForm.querySelector('input[type="text"]').value;
      showToast(`¡Solicitud enviada, ${name}! Su registro ha entrado en la lista de asignación de la Cava.`);
      membershipForm.reset();
    });
  }

  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      showToast('¡Gracias por unirse a la Gazette del Sommelier!');
      newsletterForm.reset();
    });
  }
}

function showToast(message) {
  // Remove existing toast if any
  const existing = document.getElementById('capra-toast');
  if (existing) existing.remove();

  const toast = document.createElement('div');
  toast.id = 'capra-toast';
  toast.className = 'fixed bottom-6 right-6 z-50 max-w-md bg-surface-container-lowest border border-primary/60 shadow-[0_10px_35px_rgba(0,0,0,0.85)] p-4 flex items-start gap-3 toast-animate';
  toast.innerHTML = `
    <span class="material-symbols-outlined text-primary text-xl mt-0.5">verified</span>
    <div class="flex-1">
      <h5 class="font-headline-sm text-sm text-primary tracking-wider uppercase font-semibold">La Capra Cigars</h5>
      <p class="font-body-sm text-xs text-on-surface-variant mt-1 leading-relaxed">${message}</p>
    </div>
    <button onclick="this.parentElement.remove()" class="text-on-surface-variant hover:text-primary transition-colors text-xs ml-2">✕</button>
  `;
  document.body.appendChild(toast);

  setTimeout(() => {
    if (toast.parentElement) toast.remove();
  }, 5500);
}

/* -------------------------------------------------------------
   4. HEADER SCROLL EFFECT
   ------------------------------------------------------------- */
function initHeaderScroll() {
  const header = document.querySelector('header');
  if (!header) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('shadow-[0_8px_30px_rgba(0,0,0,0.85)]', 'border-outline-variant/60');
    } else {
      header.classList.remove('shadow-[0_8px_30px_rgba(0,0,0,0.85)]', 'border-outline-variant/60');
    }
  });
}
