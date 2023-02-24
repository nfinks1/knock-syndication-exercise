## Install dependencies

`yarn install`

## Run server

`yarn start`

## Run tests

`yarn test`

## Run tests interactively

`yarn test:watch`

# Knock Syndication Exercise

## Overview

Your mission, should you accept it, is to implement a RESTful API in Node.js that allows you to read and update superheros stored in memory.

When you are done with the exercise, please invite [Nicole](https://github.com/nfinks1), [JJ](https://github.com/jmubang), and [Michael](https://github.com/mcacciatore-knock) as contributors to your private repo, so that they can review your work.

We encourage you to ask questions. If you have any questions, please reach out to JJ or Nicole

## Create a Private Repo

To start, please:
1. Create a new **private** repo on [github.com](https://github.com). We'll now assume this repo is located at https://github.com/yourname/private-repo
2. `git clone --bare https://github.com/nfinks1/knock-syndication-exercise`
3. `cd knock-syndication-exercise.git`
4. `git push --mirror https://github.com/yourname/private-repo`
5. `cd ..`
6. `rm -rf knock-syndication-exercise.git`

You should now have a new private repo at https://github.com/yourname/private-repo populated with the starter files.

## The Starting Superheros & Movies

The initial set of superheros can be found at [src/superheros.js](https://github.com/nfinks1/knock-syndication-exercise/blob/master/src/superheros.js) in your repo

Use `getMovies` in the [Movies service](https://github.com/nfinks1/knock-syndication-exercise/blob/master/src/movies.js) to retrieve the movies a superhero has been in. **The Movies service must not be modified.**

## The RESTful API Spec

Please use the included [express](https://expressjs.com/) framework to implement the RESTful API.

### GET /superhero/{id}

If the superhero exists, respond with a (HTTP 200) and the superhero object, e.g. 
```
{
  id: 'spiderman',
  firstName: 'Peter',
  lastName: 'Parker',
  alias: 'Spiderman',
  universe: 'MARVEL',
  movies: [
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
}
```

If the superhero does not exist, respond with an HTTP 400 error and:
```
{
  errorMessage: 'Superhero does not exist'
}
```

If there are no songs for a superhero, i.e. `getMovies` in the [Movies service](https://github.com/nfinks1/knock-syndication-exercise/blob/master/src/movies.js) throws an error, respond with an empy array for `movies`, e.g.
```
{
  id: 'loki',
  firstName: 'Loki',
  lastName: 'Son of Odin',
  alias: 'God of Mischief',
  universe: 'MARVEL'
  movies: []
}
```

### PUT /superhero/{id}

Create/update the record with the specified id. Use the included [yup](https://github.com/jquense/yup) library to validate the request.

Request (JSON body):

- firstName: required string, maxLength=50
- lastName: required string, maxLength=50
- universe: required string, MARVEL | DC | MIGNOLAVERSE

Response: 

If there is an error with the request, respond with an HTTP 400 and:
```
{
  errorMessage: <reason-for-the-error>
}
```

If there is no error, the superhero should be updated in memory and the server should respond (HTTP 200) with:
```
{
  id: <id-of-superhero-updated>
}
```

### GET /superhero

Return a list of all superheros and movies, e.g.
```
[ 
  {
    id: 'spiderman',
    firstName: 'Peter',
    lastName: 'Parker',
    alias: 'Spiderman',
    universe: 'MARVEL',
    movies: [
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
  },

  { 
    id: 'loki',
    firstName: 'Loki',
    lastName: 'Son of Odin',
    alias: 'God of Mischief',
    universe: 'MARVEL',
    movies: []
  },

  {
    id: 'batman',
    firstName: 'Bruce',
    lastName: 'Wane',
    alias: 'Batman',
    universe: 'DC',
    movies: []
  },
  {
    id: 'hellboy',
    firstName: 'Anung',
    lastName: 'Un Rama',
    alias: 'Hellboy',
    universe: 'MIGNOLAVERSE',
    movies: [
      {
        name: 'Hellboy',
      },
      {
        name: 'Hellboy II: The Golden Army',
      },
    ]
  }
]
```

Be sure to return an empty array for `movies` if there are no movies for the superhero.

## Testing

Automated testing is **very** important to us. Please make sure to write some unit and integration tests, using the included [Jest](https://jestjs.io/index.html) test framework.


