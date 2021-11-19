"use strict";

const numberOfFilms = prompt('Cite filme ai pivit');
// console.log(numberOfFilms);

   const personalMovieDB = {
        count: numberOfFilms,
        movies: {},
        actors: {},
        genres: [],
        privat: false,
    };

const a = prompt('Unul din ultimele filme privite'),
      b = prompt('Ce nota ii puneti>?'),
      c = prompt('Unul din ultimele filme privite'),
      d = prompt('Ce nota ii puneti>?');   

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;     
console.log(personalMovieDB);