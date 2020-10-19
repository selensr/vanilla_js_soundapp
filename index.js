window.addEventListener("load", () => {
  const sounds = document.querySelectorAll(".sound");
  const pads = document.querySelectorAll(".pads div");
  const visual = document.querySelector(".visual");
  const colors = [
    "#60d394",
    "#d36060",
    "#c060d3",
    "#d3d160",
    "#606bd3",
    "#60c2d3",
  ];

  pads.forEach((pad, index) => {
    pad.addEventListener("click", function () {
      sounds[index].currentTime = 0;
      sounds[index].play();

      createBubbles(index);
    });
  });

  document.addEventListener("keydown", control);

  function control(event) {
    if (event.keyCode == 65) {
      sounds[0].currentTime = 0;
      sounds[0].play();
      createBubbles(0);
    } else if (event.keyCode == 83) {
      sounds[1].currentTime = 0;
      sounds[1].play();
      createBubbles(1);
    } else if (event.keyCode == 68) {
      sounds[2].currentTime = 0;
      sounds[2].play();
      createBubbles(2);
    } else if (event.keyCode == 37) {
      sounds[3].currentTime = 0;
      sounds[3].play();
      createBubbles(3);
    } else if (event.keyCode == 40) {
      sounds[4].currentTime = 0;
      sounds[4].play();
      createBubbles(4);
    } else if (event.keyCode == 39) {
      sounds[5].currentTime = 0;
      sounds[5].play();
      createBubbles(5);
    }
  }

  const createBubbles = (index) => {
    const bubble = document.createElement("div");
    visual.appendChild(bubble);
    bubble.style.backgroundColor = colors[index];
    bubble.style.animation = "jump 1s ease";
    bubble.addEventListener("animationend", function () {
      visual.removeChild(this);
    });
  };
});
