import AudioMotionAnalyzer from 'https://cdn.skypack.dev/audiomotion-analyzer?min';


document.querySelectorAll(".audio").forEach((u)=>{
  const audioEl = u;  
  const audioMotion = new AudioMotionAnalyzer(
  audioEl.parentElement.querySelector(".container"),
  {
    source: audioEl,
    height: 210,
    mode: 3,
    barSpace: .6,
    ledBars: true,
  }
);
})
