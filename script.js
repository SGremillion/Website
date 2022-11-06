var temp; // temporary variable for page scrolling buttons

// scroll function for top nav bar buttons
function scrollTo(element) {
  window.scroll({
    behavior: 'smooth',
    left: 0,
    top: element.offsetTop
  });
}

// logo event listener
document.getElementById("navLogo").addEventListener('click', () => {
  scrollTo(document.getElementById("landing"));
});

// about me event listener
document.getElementById("aboutMeBtn").addEventListener('click', () => {
  scrollTo(document.getElementById("about"));
});

// portfolio event listener
document.getElementById("portfolioBtn").addEventListener('click', () => {
  scrollTo(document.getElementById("portfolio"));
});

// websiteBtn event listener
document.getElementById("websiteBtn").addEventListener('click', () => {
  scrollTo(document.getElementById("website"));
});

// javaBtn event listener
document.getElementById("javaBtn").addEventListener('click', () => {
  scrollTo(document.getElementById("java"));
});

// contact event listener
document.getElementById("contactBtn").addEventListener('click', () => {
  scrollTo(document.getElementById("contact"));
});