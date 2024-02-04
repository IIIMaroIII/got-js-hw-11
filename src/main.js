import { SearchApi } from './scripts/SearchApi';

const searchApi = new SearchApi();

const refs = {
  form: document.querySelector('.form'),
  btn: document.querySelector('.form--btn'),
};

refs.form.addEventListener('submit', onGetImages);

function onGetImages(e) {
  e.preventDefault();
  const inputValue = e.target.elements.formInput.value;
}

searchApi.getImages('YEllow');
