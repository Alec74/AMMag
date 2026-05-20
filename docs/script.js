function toggleText(id) {
  const element = document.getElementById(id);

  if (element.style.display === "block") {
    element.style.display = "none";
  } else {
    element.style.display = "block";
  }
}

function subscribe(event) {
  event.preventDefault();

  document.getElementById("subscribe-message").style.display = "block";
}
