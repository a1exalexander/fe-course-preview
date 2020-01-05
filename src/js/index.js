import '@fortawesome/fontawesome-free/js/all';
import '../scss/style.scss';
import Cache from './source/cache';
import parseCurrentMovies from './source/parser';
import render from './source/render';

document.addEventListener('DOMContentLoaded', event => {
  const cache = new Cache();

  const getCurrentMovies = async () => {
    const movies = await parseCurrentMovies();
    cache.updateData(movies);
    render.currentMovies(movies);
  };

  if (cache.needUpdate()) {
    getCurrentMovies();
  } else {
    render.currentMovies(cache.data.currentMovies);
  }
});
