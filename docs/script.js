
/*
const mammoth = require("mammoth");

mammoth.convertToHtml({path: "../Mother's Room.docx"})
  .then(result => {
    console.log(result.value);
  })
*/


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
