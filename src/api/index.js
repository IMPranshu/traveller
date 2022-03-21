import axios from 'axios';

const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary';


export const getPlacesData = async (sw,ne) => {
  try {
    const {data : {data} } = await axios.get(URL, {
      params: {
        bl_latitude: sw.lat, //bottom left - sw -
        tr_latitude: ne.lat, // top right - ne - 
        bl_longitude: sw.lng,
        tr_longitude: ne.lng,
      },
      headers: {
        'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
        'x-rapidapi-key': '08dfb976bfmshc88b6b73a50174dp1d413fjsnd0ea99abfac9'
      }
    });

    return data;
  } catch (error) {
    console.log(error);
  }
}