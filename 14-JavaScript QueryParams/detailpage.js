let header = document.getElementById("header");
let description = document.getElementById("description");
let urlParams = new URLSearchParams(window.location.search);
let id = urlParams.get("id");

let developers = [
  {
    id: 1,
    title: "Frontend Developer",
    description: "Lorem Ipsum.",
  },
  {
    id: 2,
    title: "Backend Developer",
    description: "Lorem Ipsum.",
  },
  {
    id: 3,
    title: "Project Manager",
    description: "Lorem Ipsum.",
  }
];

function getData() {
  developers.map((data) => {
    if (data.id == id) {
      header.innerHTML = data.title;
      description.innerHTML = data.description;
    }
  });
}

getData();
