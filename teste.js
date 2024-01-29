const url = "http://localhost:3500/api/add"

const form = document.getElementById("formUser");

form.addEventListener("submit", function(event) {
  event.preventDefault();

  const formData = new FormData(form);

  fetch(url, {
    method: "POST",
    body: formData
  })
    .then(response => response.json())
    .then(data => {
      console.log(data);
    })
    .catch(error => {
      console.error(error);
    });
});
