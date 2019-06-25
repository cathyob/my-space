let today = new Date();
let day = String(today.getDate()).padStart(2, '0');
let month = String(today.getMonth() + 1).padStart(2, '0');
let year = today.getFullYear();

today = month + '/' + day + '/' + year;
document.getElementById('lastLogin').innerHTML = today;

let audioElement = document.createElement('audio');

function playPause() {
    if (document.getElementById('music').classList.contains('Playing')) {
        // console.log("I want to pause on this click")
        document.getElementById('music').classList.remove('Playing');
        document.getElementById('music').classList.add('Paused');
        audioElement.pause();
    } else {
        // console.log("I want to play on this click")
        document.getElementById('music').classList.remove('Paused');
        document.getElementById('music').classList.add('Playing');
        playMusic();
    }
}

function playMusic() {
    let playlist = Array(
        "music/bensound-dreams.mp3",
        "music/bensound-energy.mp3",
        "music/bensound-erf.mp3",
        "music/bensound-hey.mp3",
        "music/bensound-smile.mp3",
        "music/bensound-ukulele.mp3",
        "music/NeverGonnaGiveYouUpOriginal.mp3",
        "music/NeverGonnaGiveYouUpOriginal.mp3",
        "music/smoo_hampton-the-hamster-the-hamster-dance.mp3",
        "music/smoo_hampton-the-hamster-the-hamster-dance.mp3");
    let randomSong = playlist[Math.floor(Math.random() * playlist.length)];
    audioElement.setAttribute('src', randomSong);
    audioElement.play();
}