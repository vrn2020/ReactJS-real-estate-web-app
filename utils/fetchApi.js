import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
  const { data } = await axios.get((url), {
    headers: {
        'x-rapidapi-host': 'bayut.p.rapidapi.com',
        'x-rapidapi-key': '7d79109c0amsh38474884214a4ebp185fbbjsn29f8651e8c8b',
    },
  });
    
  return data;
}