const url = 'https://movie-database-alternative.p.rapidapi.com/?s=Avengers%20Endgame&r=json&page=1';
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'cd7add1ebamsh26db17b9053c289p1034a4jsndc1668b89d98',
        'X-RapidAPI-Host': 'movie-database-alternative.p.rapidapi.com'
    }
};

fetch(url, options)
    .then(response => response.json())
    .then(response => {
        const movies = response.Search;
        const moviesContainer = document.querySelector('.movies'); // Use class selector

        movies.forEach(movie => {
            const name = movie.Title;

            // Create a new paragraph element for each movie name
            const movieParagraph = document.createElement('p');
            movieParagraph.textContent = name;

            // Append the paragraph to the movies container
            moviesContainer.appendChild(movieParagraph);
        });
    })
    .catch(err => console.error(err));
