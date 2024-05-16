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
  

  
// testimonials 
document.addEventListener('DOMContentLoaded', function() {
    const testimonials = document.querySelectorAll('.testimonial');
    let currentIndex = 0;

    function showTestimonial(index) {
        testimonials.forEach((testimonial, idx) => {
            testimonial.classList.toggle('active', idx === index);
        });
    }

    document.querySelector('.btn.next').addEventListener('click', function(event) {
        event.preventDefault();
        currentIndex = (currentIndex + 1) % testimonials.length;
        showTestimonial(currentIndex);
    });

    document.querySelector('.btn.prev').addEventListener('click', function(event) {
        event.preventDefault();
        currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
        showTestimonial(currentIndex);
    });

    showTestimonial(currentIndex);
});
{/* end */}