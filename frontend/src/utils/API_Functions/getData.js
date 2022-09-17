import axios from "axios";
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
  const { data } = await axios.get(
    `${BASE_URL}/trending/${media_type}/${time_window}?api_key=${API_KEY}&language=en-US`
  );
  // So, I ran into a slight issue. On the Figma there are 2 different icons and I needed a way to know which card has been bookmarked. So, I map what comes back fRom the API and add  a property called isBookmarked to every object.
  return data.results.map((item) => ({ ...item, isBookmarked: false }));
};

// How to import the function
// import { getTrending } from "./utils/API_Functions/getData";
// /-----------------------------/
// How to call the function:
// const data = async () => {
//   const trending = await getTrending("all", "day");
//   console.log(trending);
// };
// useEffect(() => {
//   data();
// }, []);
