// NOTE: DO NOT MODIFY THIS FILE

// Note: movies is only being exported for testing reasons. Do not use this variable for any other
// reasons except for testing.
export const movies = {
  spiderman: [
    {
      name: "Spiderman: Homecoming",
    },
    {
      name: 'Spiderman: Far From Home',
    },
    {
      name: 'Spiderman: No Way Home',
    },
  ],

  hellboy: [
    {
      name: 'Hellboy',
    },
    {
      name: 'Hellboy II: The Golden Army',
    },
  ],
};

// Note: this function is async as it simulates the async nature of many real-world back ends
export const getMovies = async heroId => {
  if (movies[heroId] === undefined) {
    throw new Error('no movies for superhero');
  } else {
    return songs[musicianId];
  }
};
