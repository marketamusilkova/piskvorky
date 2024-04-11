let currentPlayer = 'circle';

const addIcon = (e) => {
  e.target.disabled = true;
  if (currentPlayer === 'circle') {
    e.target.classList.add('playground__square--circle');
    currentPlayer = 'cross';
    document.getElementById('who').src = 'pictures/cross.svg';
  } else {
    e.target.classList.add('playground__square--cross');
    currentPlayer = 'circle';
    document.getElementById('who').src = 'pictures/circle.svg';
  }
};

document
  .querySelector('button:nth-child(1)')
  .addEventListener('click', addIcon);
document
  .querySelector('button:nth-child(2)')
  .addEventListener('click', addIcon);
document
  .querySelector('button:nth-child(3)')
  .addEventListener('click', addIcon);
document
  .querySelector('button:nth-child(4)')
  .addEventListener('click', addIcon);
document
  .querySelector('button:nth-child(5)')
  .addEventListener('click', addIcon);
document
  .querySelector('button:nth-child(6)')
  .addEventListener('click', addIcon);
document
  .querySelector('button:nth-child(7)')
  .addEventListener('click', addIcon);
document
  .querySelector('button:nth-child(8)')
  .addEventListener('click', addIcon);
document
  .querySelector('button:nth-child(9)')
  .addEventListener('click', addIcon);
document
  .querySelector('button:nth-child(10)')
  .addEventListener('click', addIcon);

document.querySelector('.button_restart').addEventListener('click', (e) => {
  if (!confirm('Opravdu chceš začít hrát znovu?')) {
    e.preventDefault();
  }
});
