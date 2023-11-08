const apiUrl = "https://dog.ceo/api/breeds/image/random";
let imageContainer = document.getElementById("image");

function fetchRandomImage() {
  fetch(apiUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error("HTTP HATASI! DURUM:", `${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      imageContainer.innerHTML = `<img class="dog-image" src="${data.message}" alt="Uykusuz Kodlama">`;
    })
    .catch((error) => {
      console.error("Bir hata oluştu", error);
    });
}

fetchRandomImage();
