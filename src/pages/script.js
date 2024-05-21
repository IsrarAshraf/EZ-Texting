// Scroll header
window.addEventListener('scroll', () => {
    const header = document.getElementById('fixed-header');
    const scrollPosition = window.scrollY;
  
    // Calculate the opacity based on scroll position
    const opacity = Math.min(1, scrollPosition / 100);
  
    // Set the background color with opacity
    header.style.backgroundColor = `rgba(52, 34, 46, ${opacity})`;
  
    // Set the box shadow
    header.style.boxShadow = scrollPosition > 0 
        ? '0 0 4px 0 rgba(0, 0, 0, 0.08), 0 2px 4px 2px rgba(0, 0, 0, 0.12)' 
        : 'none';
});
// end
  

// video_model1
const videoContainer = document.querySelector('.video-container');
const modal = document.getElementById("videoModal");
const modalVideo = document.getElementById("modalVideo");
const closeBtn = document.querySelector(".close");
const videoUrl = document.querySelector('.play-icon').href;

videoContainer.addEventListener('click', function(event) {
    event.preventDefault();
    modal.style.display = "block";
    modalVideo.src = videoUrl;
});

closeBtn.addEventListener('click', function() {
    modal.style.display = "none";
    modalVideo.src = "";
});

window.addEventListener('click', function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        modalVideo.src = "";
    }
});
// video_model_end

// video_model2
document.addEventListener('DOMContentLoaded', function() {
    var playIcon = document.getElementById('play-icon2');
    var modal = document.getElementById('videoModal2');
    var closeBtn = document.getElementsByClassName('close2')[0];
    var iframe = document.getElementById('modalVideo2');
    var videoSrc = "https://www.youtube.com/embed/keVw22_7uiQ?autoplay=1&controls=0&disablekb=1&playsinline=1&cc_load_policy=0&cc_lang_pref=auto&widget_referrer=https%3A%2F%2Fwww.eztexting.com%2F&rel=0&showinfo=0&iv_load_policy=3&modestbranding=1&customControls=true&noCookie=false&enablejsapi=1&origin=https%3A%2F%2Fwww.eztexting.com&widgetid=1";

    playIcon.addEventListener('click', function(event) {
        event.preventDefault();
        iframe.src = videoSrc;
        modal.style.display = "block";
    });

    closeBtn.addEventListener('click', function() {
        modal.style.display = "none";
        iframe.src = "";
    });

    window.addEventListener('click', function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
            iframe.src = "";
        }
    });
});
// video_model2_end
  

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
/* end */

// slider
var swiper = new Swiper('.swiper-container', 
{
    slidesPerView: 'auto',
    spaceBetween: 30,
    loop: true,
    freeMode: true,
    autoplay: {
    delay: 0,
    disableOnInteraction: false,
    },
    speed: 5000,
});
// slider_end