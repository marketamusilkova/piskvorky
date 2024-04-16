import { findWinner } from 'https://unpkg.com/piskvorky@0.1.4';

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

const buttonsElm = document.querySelectorAll('.square');
buttonsElm.forEach((button) => {
  button.addEventListener('click', addIcon);
});

document.querySelector('.button_restart').addEventListener('click', (e) => {
  if (!confirm('Opravdu chceš začít hrát znovu?')) {
    e.preventDefault();
  }
});

buttonsElm.forEach((button) => {
  button.addEventListener('click', () => {
    const herniPole = Array.from(buttonsElm).map((policko) => {
      if (policko.classList.contains('playground__square--circle')) {
        return 'o';
      } else if (policko.classList.contains('playground__square--cross')) {
        return 'x';
      } else {
        return '_';
      }
    });

    const vitez = findWinner(herniPole);
    if (vitez === 'o' || vitez === 'x') {
      alert(`Vyhrál hráč se symbolem ${vitez}.`);
      location.reload()
    }
  });
});

