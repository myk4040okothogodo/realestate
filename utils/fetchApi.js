import axios from 'axios';

export const baseUrl = 'https://bayut.p.rapidapi.com';


export const fetchApi = async (url) => {
  const { data } = await axios.get((url), {
    headers: {
    'x-rapidapi-host': 'bayut.p.rapidapi.com',
    'x-rapidapi-key': 'f49186a8edmsh9d5b1f23bf521c8p13a5c3jsn29e710d99c72'
  },
   });
   
   return data;

}
