import strings_de from './strings_de.json';
import strings_en from './strings_en.json';

window.lang = 'de';

function getString(key) {
  if (window.lang === 'en') {
    return strings_en[key];
  } else if (window.lang === 'de') {
    return strings_de[key];
  }
  console.log('string not found: ', window.lang, ' ', key);
  return window.lang + ' ' + key;
}

export default getString;
