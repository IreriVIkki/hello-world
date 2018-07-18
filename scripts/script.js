/* 
1. create an awesome webpage, obviuosly
2. calculate movie price based on 
    a. name of movie
    b. age
    c. time

3. lower prices based on these factors
    a. non-first release movies
    b. matinee **
    c. senior movies ***

4. build a constructor for setting each movie
5. build a prototype for getting the price of the movie

*/

var movies = {
    "DEADPOOL": { "price": 700, "releaseDate": 18 },
    "ANTMAN": { "price": 800, "releaseDate": 12 },
    "INCREDIBLES2": { "price": 600, "releaseDate": 21 }
}

var agePrice = function(age){
    if (age < 10 || age > 69){
        return -100;
    }else if(age < 18 && age > 9){
        return 50;
    }else if(age > 17 && age < 70){
        return 0;
    }
}

var timePrice = function(time){
    if (time === 'matinee'){
        return -100;
    }else if(time === 'noon'){
        return 0;
    }else if(time === 'afternoon'){
        return 50;
    }else if(time === 'night'){
        return 100;
    }
}

function movieTicket (userMovie, age, time){
    this.userMovie = (userMovie.trim().toUpperCase()).split(' ').join('');
    this.age = age;
    this.time = time;
}

var release = function (movie, movieList) {
    if (today > (movieList[movie.userMovie].releaseDate + 30)) {
        return 200;
    }
}

var selectedMovie = new movieTicket('dead pool')

movieTicket.prototype.Ticket = function (movie , movieList) {
    return  movieList[movie.userMovie].price
}

movieTicket.prototype.reducedTicket = function(movie, movieList){
    price = movieList[movie.userMovie].price;
    newPrice = price + agePrice(movie.age) + timePrice(movie.time) + release(movie, movieList);
    return newPrice
}

var newMovie = new movieTicket('dead pool', 12, 'afternoon')

