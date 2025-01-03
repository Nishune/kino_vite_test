import './style.scss';
import { initHeader } from './src/javascript/header.js';
import { loadkids } from './src/javascript/kids.js';
import { loadMovieContent } from './src/javascript/movies.js';

initHeader();

const checkKids = document.querySelector('.article-kids');

if (checkKids) {
  loadkids();
}

const checkMovies = document.querySelector('.movie-container');

if (checkMovies) {
  loadMovieContent();
}
