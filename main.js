"use strict"

let numberOfFilms;
function start() {
    numberOfFilms = +prompt("Скільки фільмів ви вже подивились?", "")

    while (numberOfFilms == " " || isNaN(numberOfFilms) || numberOfFilms == null) {
        numberOfFilms = +prompt("Скільки фільмів ви вже подивились?", "")
    }
}
start();




let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    geners: [],
    privat: false
};
function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB)
    }

}
showMyDB(personalMovieDB.privat);



function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        let a = prompt("Останній переглянутий фільм?", ""),
            b = prompt("Яку оцінку йому дасте?", "");
        if (a != null && b != null && a != "" && b != "" && a.length < 50 && b.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log("done")
        } else {
            console.log("erorr")
            i--;
        };
    }
}
rememberMyFilms();



function detectPersonalLevel() {
    if (personalMovieDB.count > 0 && personalMovieDB <= 10) {
        alert("Переглянуто досить мало фільмів");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        alert("Ви класичний глядач");
    } else if (personalMovieDB.count >= 30) {
        alert("Ви кіноман");
    } else {
        alert("Сталась помилка");
    };

}
detectPersonalLevel();




function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        personalMovieDB.geners[i - 1] = prompt(`Ваш улюблений жанр під номером ${i}`);
    }
}
writeYourGenres();


console.log(personalMovieDB);


