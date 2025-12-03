const searchForm = document.getElementById('searchForm');
const movieInput = document.getElementById('movieInput');
const welcomeSection = document.getElementById('welcomeSection');
const movieDetailsSection = document.getElementById('movieDetailsSection');
async function getMovie(movieName) {

    welcomeSection.style.display = 'none';
    movieDetailsSection.style.display = 'block';

    const apiKey = "82c643e8";
    const url = `https://www.omdbapi.com/?apikey=${apiKey}&t=${movieName}`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data)
        document.getElementById('movieYear').textContent =`${data.Released
        }`;
        document.getElementById('movieGenre').textContent =`${data.Genre}`;
        document.getElementById('moviePlot').textContent =`${data.Plot}`;
        document.getElementById('movieRating').textContent =`${
           data.imdbRating
            }`;
        document.getElementById('movieDirector').textContent =`${data.Director}`;
        document.getElementById('moviePoster').src =`${data.Poster}`;
        document.getElementById('movieActors').textContent =`${data.Actors}`;
       
    } catch (err) {
        console.error("Error fetching movie:", err);
    }
    //acctors name finding
   
  
   
    document.getElementById('movieTitle').textContent = movieName;
   
   
    
    
    
  
}

// Form submit handler
searchForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const movieName = movieInput.value.trim();

    if (movieName !== '') {
        getMovie(movieName);
    }
});

//this is the submission part
