document.addEventListener("DOMContentLoaded", function () {
  
    // Select all video items
    const videoItems = document.querySelectorAll('.video-item');
  
    // Video player and source element
    const videoPlayer = document.getElementById('player');
    const videoSource = document.getElementById('video-source');
  
    // Function to load and play the video
    function loadVideo(videoUrl) {
      videoSource.src = videoUrl;  // Set video source
      videoPlayer.load();  // Reload video player with new video
      videoPlayer.play();  // Auto-play the new video
    }
  
    // Add event listener to each video item
    videoItems.forEach(item => {
      item.addEventListener('click', function() {
        const videoUrl = item.getAttribute('data-video');  // Get video URL
        loadVideo(videoUrl);  // Load and play the clicked video
      });
    });
  
  });