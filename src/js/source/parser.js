import $ from 'cheerio';
import axios from 'axios';

const rootUrl = 'http://www.galaktika-kino.com.ua';
const currentMoviesUrl = `${rootUrl}/razdel/uje-na-ekranah.php`;

const parseCurrentMovies = async () => {
  try {
    const { data: html } = await axios.get(
      `https://cors-anywhere.herokuapp.com/${currentMoviesUrl}`
    );
    const articles = $('article div.kino', html)
      .map((i, el) => {
        return {
          link: `${rootUrl}${$('a', el)
            .attr('href')
            .slice(2)}`,
          image:
            `${rootUrl}${$('img', el)
              .attr('src')
              .slice(2)}` || '',
          title: $('a', el).text(),
          type: $('p', el).text()
        };
      })
      .get();
    return articles;
  } catch (err) {
    console.error(err);
    return [];
  }
};

export default parseCurrentMovies;
