import { getTags } from './helpers';

const render = {
  currentMovies: movies => {
    const getItem = item => `
    <a href='https://www.google.com/search?q=${
      item.title
    }' target="_blank" class="column is-6-mobile is-4-desktop is-3-widescreen is-2-fullhd">
    <div class="card">
  <div class="card-image">
    <figure class="image is-3by4">
      <img src="${item.image}" alt="Placeholder image" />
    </figure>
  </div>
  <div class="card-content">
    <div class="media">
      <div class="media-content">
        <p class="title is-size-5-mobile is-6">${item.title}</p>
      </div>
    </div>
    <div class="content">${getTags(item.type)}</div>
  </div>
</div>
</a>`;
    const data = movies.map(el => getItem(el));
    document.getElementById('current-movies').innerHTML = data.join('');
  }
};

export default render;
