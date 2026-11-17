document.documentElement.classList.add('js');
document.getElementById('year').textContent = new Date().getFullYear();
const reveals = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) { const observer = new IntersectionObserver(entries => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target) } }), { threshold: .08 }); reveals.forEach(el => observer.observe(el)); } else { reveals.forEach(el => el.classList.add('visible')); }
const menu = document.querySelector('.menu'), nav = document.getElementById('navigation');
function closeMenu() { menu.setAttribute('aria-expanded', 'false'); menu.setAttribute('aria-label', 'فتح القائمة'); nav.classList.remove('open'); }
menu.addEventListener('click', () => { const open = menu.getAttribute('aria-expanded') !== 'true'; menu.setAttribute('aria-expanded', String(open)); menu.setAttribute('aria-label', open ? 'إغلاق القائمة' : 'فتح القائمة'); nav.classList.toggle('open', open); });
nav.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));
document.addEventListener('click', e => { if (!e.target.closest('header')) closeMenu() });
window.addEventListener('resize', () => { if (window.innerWidth > 980) closeMenu() });
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeMenu() });

window.open('https://wa.me/966550908603?text='+encodeURIComponent(message),'_blank','noopener,noreferrer');
const topButton = document.getElementById('toTop'); window.addEventListener('scroll', () => { topButton.hidden = window.scrollY < 650 }, { passive: true }); topButton.addEventListener('click', () => window.scrollTo({ top: 0, behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' }));
