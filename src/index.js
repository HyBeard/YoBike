import { blogNews, products } from './js/cutTextInCards';
import addButtonsHandlers from './js/addButtonsHandlers';
import startSliders from './js/startSliders';

import './styles/index.scss';

document.addEventListener('DOMContentLoaded', () => {
  products.cutText();
  blogNews.cutText();
  addButtonsHandlers();
  startSliders();
});
