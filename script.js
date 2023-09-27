const hit = document.querySelector(".hit");
const bottom = document.querySelector("#bottom");
const timerEl = document.querySelector(".timer");
const scoreEl = document.querySelector(".score");

let totalScore = 0;
let hitRandom = 0

const createBubbles = (qty) => {
  let html = "";

  for (let i = 0; i < qty; i++) {
    let random = Math.floor(Math.random() * 10) + 1;
    html += `<div class="bubble">${random}</div>`;
  }

  bottom.innerHTML = html;
};

const createHit = () => {
  hitRandom = Math.floor(Math.random() * 10) + 1;
  hit.innerText = hitRandom;
};

const createTimer = (secs) => {
  const timer = setInterval(() => {
    if (secs > 0) {
      secs--;
      timerEl.innerText = secs;
    } else {
      clearInterval(timer);
      bottom.innerHTML = "<h1 id='game-over'>Game Over</h1>";
    }
  }, 1000);
};

const increaseScore = () => {
  totalScore += 10
  scoreEl.innerText = totalScore
}

createBubbles(80);
createHit();
createTimer(6);

bottom.addEventListener("click", (e) => {
  const bubbleClicked = e.target.classList.contains("bubble");
  if (bubbleClicked) {
    if (hitRandom == e.target.innerText) {
      increaseScore()
      createHit();
      createBubbles(80)
    }
  }
});
