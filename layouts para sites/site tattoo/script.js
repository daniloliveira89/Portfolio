/**
 * Interactive Mask Reveal Engine (Awwwards-style Lerp Physics + Touch Support)
 * Funciona tanto no "site face" quanto no "site tattoo"
 */
document.addEventListener('DOMContentLoaded', () => {
  const hero = document.getElementById('hero');
  const revealLayer = document.getElementById('reveal-layer');
  const imgClean = document.getElementById('img-clean');
  const imgStatic = document.getElementById('img-gold-static');

  if (!hero || !revealLayer) return;

  // Dimensões da máscara (sincronizadas com o CSS)
  const MASK_WIDTH = 280;
  const MASK_HEIGHT = 350;

  // Estado da física de interpolação (Lerp) para movimento amanteigado
  let targetX = window.innerWidth / 2;
  let targetY = window.innerHeight / 2;
  let currentX = targetX;
  let currentY = targetY;
  let isHovering = false;
  let rafId = null;

  // Anel indicador sutil do cursor
  const cursorRing = document.createElement('div');
  cursorRing.style.cssText = `
    position: fixed;
    top: 0; left: 0;
    width: 36px; height: 36px;
    border: 1px solid rgba(240, 240, 238, 0.45);
    border-radius: 50%;
    pointer-events: none;
    z-index: 10;
    transform: translate(-50%, -50%) scale(0.8);
    opacity: 0;
    transition: opacity 0.3s ease, transform 0.3s ease;
    mix-blend-mode: difference;
  `;
  document.body.appendChild(cursorRing);

  function lerp(start, end, factor) {
    return start + (end - start) * factor;
  }

  function renderLoop() {
    currentX = lerp(currentX, targetX, 0.14);
    currentY = lerp(currentY, targetY, 0.14);

    const maskX = Math.round(currentX - MASK_WIDTH / 2);
    const maskY = Math.round(currentY - MASK_HEIGHT / 2);

    const posString = `${maskX}px ${maskY}px`;
    revealLayer.style.webkitMaskPosition = posString;
    revealLayer.style.maskPosition = posString;

    cursorRing.style.left = `${currentX}px`;
    cursorRing.style.top = `${currentY}px`;

    if (isHovering || Math.abs(targetX - currentX) > 0.5 || Math.abs(targetY - currentY) > 0.5) {
      rafId = requestAnimationFrame(renderLoop);
    } else {
      rafId = null;
    }
  }

  function handleMove(clientX, clientY) {
    const rect = hero.getBoundingClientRect();
    targetX = clientX - rect.left;
    targetY = clientY - rect.top;

    if (!isHovering) {
      isHovering = true;
      revealLayer.style.opacity = '1';
      cursorRing.style.opacity = '1';
      cursorRing.style.transform = 'translate(-50%, -50%) scale(1)';
    }

    if (!rafId) {
      rafId = requestAnimationFrame(renderLoop);
    }
  }

  // Eventos de Mouse
  hero.addEventListener('mousemove', (e) => handleMove(e.clientX, e.clientY));

  hero.addEventListener('mouseleave', () => {
    isHovering = false;
    revealLayer.style.opacity = '0';
    cursorRing.style.opacity = '0';
    cursorRing.style.transform = 'translate(-50%, -50%) scale(0.5)';
  });

  // Eventos de Toque (Mobile / Tablet)
  hero.addEventListener('touchstart', (e) => {
    if (e.touches.length > 0) {
      handleMove(e.touches[0].clientX, e.touches[0].clientY);
    }
  }, { passive: true });

  hero.addEventListener('touchmove', (e) => {
    if (e.touches.length > 0) {
      handleMove(e.touches[0].clientX, e.touches[0].clientY);
    }
  }, { passive: true });

  hero.addEventListener('touchend', () => {
    isHovering = false;
    revealLayer.style.opacity = '0';
    cursorRing.style.opacity = '0';
  });
});
