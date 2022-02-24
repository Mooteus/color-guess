let colorResp;

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
  circle.classList.add('circle');
  circle.style.backgroundColor = `rgb(${colorResp})`;
  circleContainer.appendChild(circle);
  for (let i = 0; i < 5; i += 1) {
    red = Math.round(Math.random() * 256);
    green = Math.round(Math.random() * 256);
    blue = Math.round(Math.random() * 256);
    circle = document.createElement('div');
    circle.classList.add('circle');
    circle.style.backgroundColor = `rgb(${red},${green},${blue})`;
    circleContainer.appendChild(circle);
  }
}

const circleClick = document.getElementById('circle-container');
circleClick.addEventListener('click', (e) => {
  const answer = document.getElementById('answer');
  if (e.target.style.backgroundColor === `rgb(${colorResp})`) {
    answer.innerText = 'Acertou!';
  } else {
    answer.innerText = 'Errou! Tente novamente!';
  }
});

window.onload = () => {
  generateRgbColor();
  renderCircles();
};
