export const generateTag = (className, tag) => {
  return `<span class="tag ${className} is-light">${tag}</span>`;
};

export const someValue = (value, ...values) => {
  return values.find(el => el === value);
};
export const getTags = str => {
  const labels = str.split(', ');
  const tags = labels.map(tag => {
    let className = '';
    switch (tag) {
      case 'комедія':
        className = 'is-success';
        break;
      case 'мелодрама':
        className = 'is-info';
        break;
      case someValue(tag, 'мультфільм', 'анімація'):
        className = 'is-warning';
        break;
      case someValue(tag, 'екшн', 'бойовик'):
        className = 'is-danger';
        break;
      case someValue(tag, 'пригоди', 'фентезі'):
        className = 'is-primary';
        break;
      case someValue(tag, 'жахи', 'фантастика'):
        className = 'is-link';
        break;
      default:
        className = 'is-primary';
        break;
    }
    return generateTag(className, tag);
  });
  return tags.join('');
};
