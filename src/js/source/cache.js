export default class Cache {
  updated = localStorage.getItem('galaxy-updated') || '';
  data = [];
  constructor() {
    this.data = localStorage.getItem('galaxy-cache')
      ? [...JSON.parse(localStorage.getItem('galaxy-cache'))]
      : [];
  }
  _getDate() {
    return new Date().getHours()
  }
  updateData = newData => {
    this.data = { ...newData };
    this.updated = this._getDate();
    localStorage.setItem('galaxy-cache', JSON.stringify(newData));
    localStorage.setItem('galaxy-updated', this.updated);
    console.log('⚡️Movies updated successfully⚡️')
  };
  needUpdate = () => {
    return String(this._getDate()) !== String(this.updated);
  };
}
