// Declare variable

class Movie {
    constructor(title, yogi, rating, availableCopies) {
        this.title = title;
        this.genre = yogi;
        this.rating = rating;
        this.availableCopies = availableCopies;
    }

    rentMovie() {
        if (this.availableCopies > 0) {
            this.availableCopies--;
            console.log(`\nYou have rented the new current movies with us"${this.title}". Except to see more!`);
        } else {
            console.log(`\nSorry, "${this.title}" is currently out of stock.`);
        }
    }

    returnMovie() {
        this.availableCopies++;
        console.log(`\n"${this.title}" has been returned. Thank you!`);
    }

    displayMovieInformation() {
        console.log(`
        Movie Information:
        Title: ${this.title}
        Genre: ${this.yogi}
        Rating: ${this.rating}
        Available Copies: ${this.availableCopies}
      `);
    }
}

class MovieStore {
    constructor() {
        this.movies = [];
        console.log("\n");
    }

    addMovie(movie) {
        this.movies.push(movie);
        console.log(`\n"${movie.title}" has been added to the movie store.`);
    }

    rentMovie(title) {
        const movie = this.findMovie(title);
        if (movie) {
            movie.rentMovie();
        } else {
            console.log(`\nMovie "${title}" not found in the movie store.`);
        }
    }

    returnMovie(title) {
        const movie = this.findMovie(title);
        if (movie) {
            movie.returnMovie();
        } else {
            console.log(`\nMovie "${title}" not found in the movie store.`);
        }
    }

    findMovie(title) {
        return this.movies.find((movie) => movie.title === title);
    }

    displayMovies() {
        console.log("\nAvailable Movies:");
        this.movies.forEach((movie) => console.log(`- ${movie.title}`));
    }
}

const movie1 = new Movie("Certified Olodo", "Nollywood Movie");
const movie2 = new Movie("Spider man", "Cartoon", "NR", 6);
const movie3 = new Movie("Get Data", "Hollywood Movie" );

const movieStore = new MovieStore();

movieStore.addMovie(movie1);
movieStore.addMovie(movie2);
movieStore.addMovie(movie3);

movieStore.displayMovies();

movieStore.rentMovie("Certified Olodo");
movieStore.returnMovie("Certified Olodo");

movie1.displayMovieInformation();
movie2.displayMovieInformation();
movie3.displayMovieInformation();

console.log('Get Date');



