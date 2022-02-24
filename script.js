function generateRgbColor() {
  const red = Math.round(Math.random() * 256);
  const green = Math.round(Math.random() * 256);
  const blue = Math.round(Math.random() * 256);
  const textRgb = document.getElementById('rgb-color');
  textRgb.innerText = `(${red},${green},${blue})`;
}

window.onload = () => {
  generateRgbColor();
};
