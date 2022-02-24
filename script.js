let colorResp;
let scoreCount = 0;

function generateRgbColor() {
  const red = Math.round(Math.random() * 256);
  const green = Math.round(Math.random() * 256);
  const blue = Math.round(Math.random() * 256);
  const textRgb = document.getElementById('rgb-color');
  textRgb.innerText = `(${red},${green},${blue})`;
  colorResp = `${red}, ${green}, ${blue}`;
}

function renderCircles() {
  let red;
  let green;
  let blue;
  const circleContainer = document.getElementById('circle-container');
  let circle;
  circle = document.createElement('div');
  circle.classList.add('ball');
  circle.style.backgroundColor = `rgb(${colorResp})`;
  circleContainer.appendChild(circle);
  for (let i = 0; i < 5; i += 1) {
    red = Math.round(Math.random() * 256);
    green = Math.round(Math.random() * 256);
    blue = Math.round(Math.random() * 256);
    circle = document.createElement('div');
    circle.classList.add('ball');
    circle.style.backgroundColor = `rgb(${red},${green},${blue})`;
    circleContainer.appendChild(circle);
  }
}

const circleClick = document.getElementById('circle-container');
circleClick.addEventListener('click', (e) => {
  const answer = document.getElementById('answer');
  const score = document.getElementById('score');
  if (e.target.style.backgroundColor === `rgb(${colorResp})`) {
    answer.innerText = 'Acertou!';
    scoreCount += 3;
    score.innerText = scoreCount;
  } else {
    answer.innerText = 'Errou! Tente novamente!';
  }
});

function resetGame() {
  const circleContainer = document.getElementById('circle-container');
  const answer = document.getElementById('answer');
  answer.innerText = 'Escolha uma cor';
  circleContainer.innerHTML = '';
  generateRgbColor();
  renderCircles();
}

const resetClick = document.getElementById('reset-game');
resetClick.addEventListener('click', () => {
  resetGame();
});

window.onload = () => {
  generateRgbColor();
  renderCircles();
};
