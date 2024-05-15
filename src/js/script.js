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
  
// video popup
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
// end
  