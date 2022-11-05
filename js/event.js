const button = document.getElementById("prenota");
button.addEventListener("submit", (e) => {
  e.preventDefault();
  const bool = confirm("sei sicuro");
  if (bool) {
    alert("ben fatto!");
  } else {
    alert("attenderemo fino a quando sarai pronto!");
  }
});
