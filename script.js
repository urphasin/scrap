function videoStuff() {
  const video = document.querySelector("video");
  window.addEventListener("scroll", () => {
    const scrollPercent = window.scrollY / (document.body.scrollHeight - window.innerHeight);
    video.currentTime = scrollPercent * video.duration;
  });
}
// videoStuff()

function setVideoSrc() {
  const video = document.getElementById("bg-video");

  const width = window.innerWidth;

  if (width < 768) { video.src = "assets/shorts/video-720.mp4"; }
  else video.src = "assets/shorts/video-1080.mp4";
}
// setVideoSrc()


function main() {
  let nr1 = 2;
  let nr2 = "3";



  let arr = [1, 2, 3, 4];



  console.dir(window)

  console.log("\n\n")

  console.log(document.querySelectorAll(".hello"));
  


}
main()
