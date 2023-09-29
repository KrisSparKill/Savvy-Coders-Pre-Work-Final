function getBtnAndShow() {
  function displayDateAndTime() {
    document.getElementByID('time').innerHTML = Date();
  }
  document
  .getElementById('timeCheckBtn')
  .addEventListener('click', displayDateAndTime);
}

function clearTimeAndDate() {
  document.getElementById('time').innerHTML = '';
}

getBtnAndShow();
setInterval(clearTimeAndDate, 5000);

