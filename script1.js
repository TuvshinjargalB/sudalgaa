function playMusic() {
    const audio = document.getElementById('bgMusic');
    audio.play().catch(err => {
      console.log("Play blocked: ", err);
    });
  }
  