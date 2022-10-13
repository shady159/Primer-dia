const getmoviecontainer =document.querySelector(".moviecontainer");
const urlMovie = "https://www.omdbapi.com/?s=avengers&apikey=4b229795&";

const container =async function () { 

const respuesta = await fetch(urlMovie);
const data =await respuesta.json() ;
readMovie(data.Search);

};
container();

function readMovie (movies) { 
getmoviecontainer.innerHTML =""; 
movies.forEach((movie) => {
    getmoviecontainer.innerHTML +=`<div class="movies">
    <h4>${movie.Title}</h4>
    <p>(${movie.Year})</p>
    <img src=${movie.Poster} alt="" />

  </div>
`;
});



}