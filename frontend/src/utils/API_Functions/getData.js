const BASE_URL = process.env.REACT_APP_BASE_URL;
const API_KEY = process.env.REACT_APP_API_KEY;

// These functions will return different data based on the arguments passed to them.
// media_type:
// all: Include all movies, TV shows and people in the results as a global trending list.
// movie: Show the trending movies in the results.
// tv: Show the trending TV shows in the results.
// person: Show the trending people in the results.

// time_window:
// day: View the trending list for the day..
// week: View the trending list for the week..

export const getTrending = async (media_type, time_window) => {
  const res = await axios.get(
    `${BASE_URL}/trending/${media_type}/${time_window}?api_key=${API_KEY}&language=en-US`
  );
  return res.data.results;
};
