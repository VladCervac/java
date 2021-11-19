"use strict";

const numberOfFilms = prompt('Cite filme ai pivit');


   const personalMovieDB = {
        count: numberOfFilms,
        movies: {},
        actors: {},
        genres: [],
        privat: false,
    };


for (let i = 0; i < 2; i++) {
    const a = prompt('Unul din ultimele filme privite'),
          b = prompt('Ce nota ii puneti>?');
       


    if (a != null && b != null && a != '' && b != '' && a.length < 50 ) {
        personalMovieDB.movies[a] = b;
        
        console.log('done');
    }    else { 
        console.log('eror');
        i--;
    }
}

if (personalMovieDB.count < 10) {
    console.log('Ati privit putine filme');
} else if ( personalMovieDB.count >= 10 && personalMovieDB.count < 30){
    console.log('Sunteti clasic spectator');
} else if (personalMovieDB.count > 30){
    console.log(Kinoman);
} else {
    console.log('A avut loc o eroare');
}

console.log(personalMovieDB);



