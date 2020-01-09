export default class Cache {
  updated = localStorage.getItem('galaxy-updated') || '';
  data = [];
  constructor() {
    this.data = localStorage.getItem('galaxy-cache')
      ? [...JSON.parse(localStorage.getItem('galaxy-cache'))]
      : [];
  }
  updateData = newData => {
    this.data = { ...newData };
    this.updated = new Date();
    localStorage.setItem('galaxy-cache', JSON.stringify(newData));
    localStorage.setItem('galaxy-updated', this.updated);
  };
  needUpdate = () => {
    const dateNow = new Date();
    const count = (dateNow - this.updated) / 1000 / 60 / 60 / 24;
    return !this.updated || count > 0.2;
  };
}
