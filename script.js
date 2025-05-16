// Function to check if element is in viewport
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top <=
      (window.innerHeight || document.documentElement.clientHeight) * 0.8 &&
    rect.bottom >= 0
  );
}

// Function to handle scroll animations
function handleScrollAnimation() {
  const elements = document.querySelectorAll(
    "h1:not(footer h1), h2:not(footer h2), p:not(footer p), li:not(footer li), .about-text, .skills li, .experience h2, .experience p, .project-text"
  );

  elements.forEach((element) => {
    if (isInViewport(element)) {
      element.classList.add("active");
    }
  });
}

// Add scroll event listener
window.addEventListener("scroll", handleScrollAnimation);

// Initial check for elements in viewport
document.addEventListener("DOMContentLoaded", handleScrollAnimation);
