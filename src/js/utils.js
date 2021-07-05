const audio = document.querySelector('.audio');
export default function playAudio(item) {
  audio.src = item;
  audio.play();
}
