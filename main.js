import './style.scss';
import './src/javascript/footer.js';
import { initHeader } from './src/javascript/header.js';
import { loadkids } from './src/javascript/kids.js';
import { loadMovieContent } from './src/javascript/movies.js';
import { updateDomWithAboutJson } from './src/javascript/about.js';
import { buildDoc } from './src/javascript/infoModal.js';

initHeader();

const checkKids = document.querySelector('.article-kids');

if (checkKids) {
  loadkids();
}

const checkMovies = document.querySelector('.movie-container');

if (checkMovies) {
  loadMovieContent();
}

if (document.querySelector('.info') || document.querySelector('.info-modal')) {
  buildDoc();
}
