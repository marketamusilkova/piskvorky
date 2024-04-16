import { findWinner } from 'https://unpkg.com/piskvorky@0.1.4';

let currentPlayer = 'circle';
const gameBoxes = document.querySelectorAll('.square');

const addIcon = (e) => {
  const button = e.target;
  const playerSymbol = document.querySelector('#who');
  e.target.disabled = true;
  if (currentPlayer === 'circle') {
    button.classList.add('playground__square--circle');
    currentPlayer = 'cross';
    playerSymbol.setAttribute('src', 'pictures/cross.svg');
    playerSymbol.setAttribute('alt', 'křížek');
  } else if (currentPlayer === 'cross') {
    button.classList.add('playground__square--cross');
    currentPlayer = 'circle';
    playerSymbol.setAttribute('src', 'pictures/circle.svg');
    playerSymbol.setAttribute('alt', 'kolečko');
  }

  const gameField = [...gameBoxes].map((item) => {
    if (item.classList.contains('playground__square--circle')) {
      return 'o';
    } else if (item.classList.contains('playground__square--cross')) {
      return 'x';
    } else {
      return '_';
    }
  });

  const returnWinner = () => {
    const winner = findWinner(gameField);
    if (winner === 'o' || winner === 'x') {
      alert(`Vyhrál hráč se symbolem "${winner.toUpperCase()}"!`);
      location.reload();
    } else if (winner === 'tie') {
      alert('Hra skončila nerozhodně.');
    }
  };

  setTimeout(returnWinner, 400);
};

gameBoxes.forEach((box) => {
  box.addEventListener('click', addIcon);
});

document.querySelector('.button_restart').addEventListener('click', (e) => {
  if (!confirm('Opravdu chceš začít hrát znovu?')) {
    e.preventDefault();
  }
});



// DRUHÉ MALINKO JINÉ ŘEŠENÍ:

// let currentPlayer = 'circle';
// const buttonsElm = document.querySelectorAll('.square');

// const addIcon = (e) => {
//   e.target.disabled = true;
//   if (currentPlayer === 'circle') {
//     e.target.classList.add('playground__square--circle');
//     currentPlayer = 'cross';
//     document.getElementById('who').src = 'pictures/cross.svg';
//     document.getElementById('who').alt = 'křížek';
//   } else {
//     e.target.classList.add('playground__square--cross');
//     currentPlayer = 'circle';
//     document.getElementById('who').src = 'pictures/circle.svg';
//     document.getElementById('who').alt = 'kolečko';
//   }
// };

// buttonsElm.forEach((button) => {
//   button.addEventListener('click', addIcon);
// });

// buttonsElm.forEach((button) => {
//   button.addEventListener('click', () => {
//     const herniPole = Array.from(buttonsElm).map((policko) => {
//       if (policko.classList.contains('playground__square--circle')) {
//         return 'o';
//       } else if (policko.classList.contains('playground__square--cross')) {
//         return 'x';
//       } else {
//         return '_';
//       }
//     });

//     const vitez = findWinner(herniPole);
//     const vypisViteze = () => {
//       if (vitez === 'o' || vitez === 'x') {
//         alert(`Vyhrál hráč se symbolem ${vitez}.`);
//         location.reload();
//       }
//     };

//     setTimeout(vypisViteze, 400)
//   });
// });

