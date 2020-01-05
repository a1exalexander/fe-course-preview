export default class Cache {
  updated = localStorage.getItem('galaxy-updated') || '';
  data = {
    currentMovies: []
  };
  constructor() {
    this.data = localStorage.getItem('galaxy-cache')
      ? { ...JSON.parse(localStorage.getItem('galaxy-cache')) }
      : {
          currentMovies: []
        };
  }
  updateData = newData => {
    this.data = { ...newData };
    localStorage.setItem('galaxy-cache', JSON.stringify(newData));
    this.updated = new Date();
  };
  needUpdate = () => {
    const dateNow = new Date();
    const count = (dateNow - this.updated) / 1000 / 60 / 60 / 24;
    return !this.updated || count > 0.5;
  };
}
