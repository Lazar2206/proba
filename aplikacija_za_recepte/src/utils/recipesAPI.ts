import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://the-mexican-food-db.p.rapidapi.com/',
  headers: {
    'x-rapidapi-key': 'ccf4ac6acbmsh044b11f090f3e3cp1806ffjsn3568ba1a0ee6',
    'x-rapidapi-host': 'the-mexican-food-db.p.rapidapi.com',
  },
};

export const getRecipes = async () => {
  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};