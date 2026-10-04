var cvLink = document.getElementById("cvLink");
var modal = document.getElementById("cvModal");

cvLink.onclick = function(event) {
  event.preventDefault(); // without JS the link just opens the PDF
  modal.hidden = false;
  modal.querySelector("a").focus();
};

function closeModal() {
  modal.hidden = true;
  cvLink.focus();
}

document.getElementById("close").onclick = closeModal;

// close after picking a format, on Esc or on a click next to the box
modal.querySelectorAll("a").forEach(function(link) {
  link.addEventListener("click", closeModal);
});

modal.addEventListener("click", function(event) {
  if (event.target === modal) closeModal();
});

document.addEventListener("keydown", function(event) {
  if (event.key === "Escape" && !modal.hidden) closeModal();
});
