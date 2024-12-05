import ipm1 from '../img/important/1.webp';
import ipm2 from '../img/important/2.webp';
import ipm3 from '../img/important/3.webp';

import reas1 from '../img/reasons/1.webp';
import reas2 from '../img/reasons/2.webp';
import reas3 from '../img/reasons/3.webp';
import reas4 from '../img/reasons/4.webp';

export const heroItems = [
  {
    text: {
      first: 'Hero.blockText.first.first',
      second: 'Hero.blockText.first.second',
      third: 'Hero.blockText.first.third',
    },
    img: 'icon-shuttle-hero',
  },
];

export const menuItems = [
  { label: 'Ako nábor ovplyvňuje vývoj', href: '#advantages' },
  { label: 'Čo obsahuje táto sada', href: '#about' },
  { label: 'Čo je súčasťou súpravy', href: '#program' },
  { label: 'Recenzie', href: '#feedback' },
];

export const importantItems = [
  {
    head: 'Rozvoj prostredníctvom vášne:',
    img: ipm1,
    text: 'Spojte kreativitu a biologické vedomosti v zaujímavej forme vzdelávacej hry.',
  },
  {
    head: 'Vedomá starostlivosť o planétu:',
    img: ipm2,
    text: 'Staňte sa súčasťouenvironmentálnej výchovy svojho dieťaťa.',
  },
  {
    head: 'Kritické zručnosti:',
    img: ipm3,
    text: 'Rozvíjajú myslenie, pamäť, empatiu a umelecké schopnosti.',
  },
];

export const reasonsItems = [
  {
    head: 'Komplexný vývoj mozgu',
    img: reas1,
    text: {
      first: 'Aktivácia oboch hemisfér prostredníctvom kreativity a logiky.',
      second: 'Zlepšenie pamäte a koncentrácie o 40 %.',
      third: 'Rozvoj priestorového myslenia.',
      fourth: 'Formovanie kritického myslenia.',
    },
  },
  {
    head: 'Environmentálna výchova',
    img: reas2,
    text: {
      first: 'Pochopenie vzájomných vzťahov v prírode.',
      second: 'Formovanie zodpovedného prístupu k planéte.',
      third: 'Rozvíjanie empatie voči živému svetu.',
      fourth: 'Povedomie o globálnych environmentálnych problémoch.',
    },
  },
  {
    head: 'Emocionálny vývoj',
    img: reas3,
    text: {
      first: 'Zvyšovanie sebadôvery prostredníctvom tvorivosti.',
      second: 'Rozvíjanie empatie prostredníctvom príbehu.',
      third: 'Formovanie environmentálnej zodpovednosti.',
      fourth: 'Zlepšenie sociálnych zručností.',
    },
  },
  {
    head: 'Vzdelávacia hodnota',
    img: reas4,
    text: {
      first: 'Zvyšovanie sebadôvery prostredníctvom tvorivosti.',
      second: 'Rozvíjanie empatie prostredníctvom príbehu.',
      third: 'Formovanie environmentálnej zodpovednosti.',
      fourth: 'Zlepšenie sociálnych zručností.',
    },
  },
];
