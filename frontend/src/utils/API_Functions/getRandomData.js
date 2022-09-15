// Open the TV Series component and this file side by side.
// You will see that the data is being fetched from the API.
// I call the setter setMovies(randomizeData(trending));
// So, the parameter below "movies" is the same as data coming back from the API.
export const randomizeData = (movies) => {
  // Create an empty array
  const randomMovies = [];
  // Loop through the movies array
  while (randomMovies.length < movies.length) {
    // Get a random number between 0 and the length of the movies array
    const randomIndex = Math.floor(Math.random() * movies.length);
    // Check if the random number is not already in the randomMovies array
    const randomMovie = movies[randomIndex];
    if (!randomMovies.includes(randomMovie)) {
      randomMovies.push(randomMovie);
    }
  }
  // Return the randomMovies array
  return randomMovies;
};
// This function can be called on all pages.
