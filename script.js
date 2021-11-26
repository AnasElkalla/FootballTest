const container = document.querySelector(".container");
const ball = document.querySelector(".ball");

ball.addEventListener("click", function (e) {
  if (ball.style.bottom < 10) {
    setInterval(ballJump, 10);
    ball.style.animationName = "";
  }
});

function ballJump() {
  ball.style.animationName = "ball";
}
