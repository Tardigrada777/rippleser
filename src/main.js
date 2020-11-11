const applyRipple = (event) => {
  const element = event.currentTarget;
  const circle = document.createElement('span');
  const diameter = Math.max(element.clientWidth, element.clientHeight);
  const radius = diameter / 2;

  circle.style.width = circle.style.height = `${diameter}px`;
  circle.style.left = `${event.clientX - (element.offsetLeft + radius)}px`;
  circle.style.top = `${event.clientY - (element.offsetTop + radius)}px`;
  circle.classList.add('ripple');

  // Check if ripple already exists and remove it
  const ripple = element.querySelector('span.ripple');
  if (ripple) {
    ripple.remove();
  }

  // Apply base styles
  element.classList.add('rippled');

  element.appendChild(circle);
}

const initRippleser = () => {
  const elements = document.querySelectorAll('[data-ripple]');
  for (const el of elements) {
    el.addEventListener('click', applyRipple);
  }
}

initRippleser();
