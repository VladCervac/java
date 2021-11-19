const numberOfFilms = prompt('Cite filme ati privit', "");

const personalMovieDB = {

    count: numberOfFilms,
    movies: {},
    actors:{},
    genres: [],
    privat: false

};

const a = prompt('Ultimul film privit',''),
    b = prompt('Ce nota ii puneti', ''),
    c = prompt('Ultimul film privit', ''),
    d = prompt('Ce nota ii puneti', '');


personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);
