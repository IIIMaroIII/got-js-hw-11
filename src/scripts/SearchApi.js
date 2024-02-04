export class SearchApi {
  #KEY = '42204653-dde2ea6d5277704e408fb2018';
  constructor() {
    this.BASE_URL = 'https://pixabay.com/';
    this.END_POINT = 'photo';
  }

  getImages(q) {
    const searchParams = new URLSearchParams({
      key: this.#KEY,
      q: q.toLowerCase(),
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
    });
    const url = `${this.BASE_URL}${this.END_POINT}?${searchParams}`;
    return fetch(url).then(res => res.json());
  }
}
