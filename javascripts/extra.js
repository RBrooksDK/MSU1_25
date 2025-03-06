document.addEventListener('DOMContentLoaded', function() {
    // Select all videos with the hover-controls-video class
    const videos = document.querySelectorAll('.hover-controls-video');
    videos.forEach(video => {
      // Remove the controls initially
      video.removeAttribute('controls');
  
      // When mouse enters the video, add the controls
      video.addEventListener('mouseenter', () => {
        video.setAttribute('controls', true);
      });
  
      // When mouse leaves the video, remove the controls again
      video.addEventListener('mouseleave', () => {
        video.removeAttribute('controls');
      });
    });
  });
  