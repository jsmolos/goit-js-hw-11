export const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '43169813-760a3e42f626a040405273690';

 export const options = {
   params: {
     key: API_KEY,
     q: '',
     image_type: 'photo',
     orientation: 'horizontal',
     safesearch: true,
     page: 1,
     per_page: 40,
   },
 };
