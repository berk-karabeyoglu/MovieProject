const form = document.querySelector("#film-form");
const titleElement = document.querySelector("#title");
const directorElement = document.querySelector("#director");
const urlElement = document.querySelector("#url");
const cardBody = document.querySelectorAll(".card-body")[1];
const clear = document.getElementById("clear-films");

//* UI Objesini Başlatma

const ui = new UI();

//* Storage objesi üret
const storage = new Storage();

//* Tüm Eventleri Yükleme

eventListeners();

function eventListeners() {
  form.addEventListener("submit", addMovie);
  document.addEventListener("DOMContentLoaded", function () {
    let movies = storage.getMoviesFromStorage();
    ui.loadAllMovies(movies);
  });
  cardBody.addEventListener("click", deleteMovie);
  clear.addEventListener("click", clearAllMovies);
}

function addMovie(e) {
  const title = titleElement.value;
  const director = directorElement.value;
  const url = urlElement.value;

  if (title === "" || director === "" || url === "") {
    ui.displayMessages("Tüm alanları doldurun...", "danger");
  } else {
    //* Yeni Film
    const newMovie = new Movie(title, director, url);
    ui.addMovieToUI(newMovie); //* Arayüze film ekleme
    storage.addMovieToStorage(newMovie); //* Storage'ye film'i ekleme
    ui.displayMessages("Film başarıyla eklendi", "success");
  }
  ui.clearInputs(titleElement, urlElement, directorElement);
  e.preventDefault();
}

function deleteMovie(e) {
  if (e.target.id === "delete-film") {
    ui.deleteMovieFromUI(e.target);
    storage.deleteMovieFromStorage(
      e.target.parentElement.previousElementSibling.previousElementSibling
        .textContent
    );

    ui.displayMessages("Silme işlemi başarılı", "success");
  }
}

function clearAllMovies() {
  if (confirm("Tüm filmleri silmek istediğinize emin misiniz?")) {
    ui.clearAllMoviesFromUI();
    storage.clearAllMoviesFromStorage();
    ui.displayMessages("Tüm filmler silinmiştir...", "success");
  }
}
