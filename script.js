const today = "2025-05-22";

fetch('assets/quotes.json')
  .then(response => response.json())
  .then(data => {
    document.getElementById('quote').innerText = data[today] || "Stay inspired.";
  });

fetch('assets/songs.json')
  .then(response => response.json())
  .then(data => {
    const song = data[today];
    if (song) {
      document.getElementById('song-title').innerText = `${song.title} by ${song.artist}`;
      document.getElementById('audio-player').src = song.url;
    }
  });

document.getElementById('artwork').src = `assets/artwork/${today}.jpg`;
