class UI {
  static addMovieToUI(newMovie) {
    const movieList = document.querySelector("#films");
    movieList.innerHTML += `
    
      <tr>
        <td><img src="${newMovie.url}"width="121" height="100" class="img-fluid img-thumbnail"></td>
        <td>${newMovie.title}</td>
        <td>${newMovie.director}</td>
        <td><a href="#" id = "delete-film" class = "btn btn-outline-danger">Filmi Sil</a></td>
      </tr> 
    
    `;
  }

  static clearInputs(element1, element2, element3) {
    element1.value = "";
    element2.value = "";
    element3.value = "";
  }
  static displayMessages(message, type) {
    const cardBody = document.querySelectorAll(".card-body")[0];
    const div = document.createElement("div");
    div.className = `alert alert-${type}`;
    div.textContent = message;

    cardBody.appendChild(div);

    setTimeout(function () {
      div.remove();
    }, 1000);
  }
  static loadAllMovies(movies) {
    const movieList = document.getElementById("films");
    movies.forEach(function (movie) {
      movieList.innerHTML += `
      <tr>
        <td><img src="${movie.url}"width="121" height="100" class="img-fluid img-thumbnail"></td>
        <td>${movie.title}</td>
        <td>${movie.director}</td>
        <td><a href="#" id = "delete-film" class = "btn btn-outline-danger"><strong>Filmi Sil</strong></a></td>
      </tr> 
        `;
    });
  }
  static deleteMovieFromUI(element) {
    element.parentElement.parentElement.remove();
  }
  static clearAllMoviesFromUI() {
    const movieList = document.getElementById("films");
    while (movieList.firstElementChild !== null) {
      //* Child olduğu sürece
      movieList.firstElementChild.remove();
    }
  }
}
