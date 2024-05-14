// scroll header
window.addEventListener('scroll', () => {
    const header = document.getElementById('fixed-header');
    const scrollPosition = window.scrollY;
  
    // Calculate the opacity based on scroll position
    const opacity = Math.min(1, scrollPosition / 100);
  
    // Set the background color with opacity
    header.style.backgroundColor = `rgba(52, 34, 46, ${opacity})`;
  });
// end
  
  