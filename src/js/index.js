import '@fortawesome/fontawesome-free/js/all';
import '../scss/style.scss';
import Cache from './source/cache';
import parseCurrentMovies from './source/parser';
import render from './source/render';

document.addEventListener('DOMContentLoaded', event => {
  const cache = new Cache();

  const getCurrentMovies = async () => {
    document.body.classList.add('loading');
    console.log(cache);
    if (cache.needUpdate()) {
      const movies = await parseCurrentMovies();
      cache.updateData(movies);
      render.currentMovies(movies);
    } else {
      render.currentMovies(cache.data);
    }
    document.body.classList.remove('loading');
  };

  getCurrentMovies();
});
