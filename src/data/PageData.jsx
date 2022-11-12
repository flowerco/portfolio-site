import okaneView from '../assets/images/okane.png';
import ukmpView from '../assets/images/ukmpdonors.png';
import curatoView from '../assets/images/curato.png';
import listyView from '../assets/images/listy.png';
import blackjackView from '../assets/images/blackjack.png';
import pathfinderView from '../assets/images/pathfinder.png';
import sortingView from '../assets/images/sorting.png';

export const appData = [
  {
    title: 'UKMPDonors.com',
    description: 'A website to find donations received by your local MP, coded in Python with routing via Flask and templating in Jinja. Data is sourced from government APIs and stored via Postgres on Heroku.',
    image: ukmpView,
    url: 'https://www.ukmpdonors.com'
  },
  {
    title: 'Okané',
    description: `A full-stack budgeting app built in React with Typescript and Tailwind CSS, the backend is hosted on Fly.io with a Koa server connected to a Postgres database.<br /><b>Login:</b> simonroope@email.com<br /><b>Pass:</b> 1234`,
    image: okaneView,
    url: 'https://okane-money.netlify.app'
  }
];

export const projectData = [
  {
    title: 'Curato',
    description: 'A React app to curate and share photo albums with your friends, written in Typescript with a Koa/MongoDB backend and testing in Jest and Cypress.',
    image: curatoView,
    url: 'https://github.com/flowerco/curato'
  },
  {
    title: 'Listy',
    description: `An app to find and rate your favourite movies, and create a list for later viewing. Uses The Movie Database API to search and store selected movies in an Express/MongoDB backend.`,
    image: listyView,
    url: 'https://github.com/flowerco/listy'
  },
  {
    title: 'Blackjack',
    description: 'The classic blackjack game, written in Javascript prior to starting the Codeworks bootcamp, including a running total scoreboard, card formatting, and asynchronous card dealing functions.',
    image: blackjackView,
    url: 'https://flowerco.tech/blackjack'
  }
];

export const algoData = [
  {
    title: 'Sorting',
    description: 'A webpage to show the relative speed of all your favourite sorting algorithms. Choose the algorithms to test, and how many bars on each chart to sort, as well as the number of iterations per second.',
    image: sortingView,
    url: 'https://www.flowerco.tech/sorting'
  },
  {
    title: 'Pathfinding',
    description: `A website to explain the popular Djikstra and A* pathfinding algorithms. Within a grid of squares, select a start and end point, and either create a maze yourself or generate one with a recursive division algorithm.`,
    image: pathfinderView,
    url: 'https://flowerco.tech/pathfinder'
  }
];