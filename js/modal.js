var cv = document.getElementById("cvModal");

var modal = document.createElement("div");
modal.innerHTML = `
__________________________________
|                           <button id="close">[X]</button> |
|   Choose file format:          |
|                                |
|  <button id="pdfButton">[PDF]</button>     <button id="docxButton">[DOCX]</button>            |
|________________________________|`;

modal.classList.add("modal");

document.body.appendChild(modal);

modal.style.display = "none";

cv.onclick = function() {
  modal.style.display = "block";
};

var closeButton = modal.querySelector("#close");
closeButton.onclick = function() {
  modal.style.display = "none";
};


var pdfButton = modal.querySelector("#pdfButton");
pdfButton.onclick = function() {
  downloadFileFromServer("Resume_Holaj.pdf")
};

var docxButton = modal.querySelector("#docxButton");
docxButton.onclick = function() {
  downloadFileFromServer("Resume_Holaj.docx")
};

function downloadFileFromServer(filename) {
  fetch("static/" + filename)
    .then(response => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.blob();
    })
    .then(blob => {
      var url = window.URL.createObjectURL(blob);
      var a = document.createElement("a");
      a.href = url;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    })
    .catch(error => {
      console.error('There has been a problem with your fetch operation:', error);
    });
}


// blue background after hover
var buttons = modal.querySelectorAll("button");
buttons.forEach(function(button) {
  button.addEventListener("mouseenter", function() {
    this.style.backgroundColor = "blue";
    this.style.color = "white";
  });
  button.addEventListener("mouseleave", function() {
    this.style.backgroundColor = "";
    this.style.color = "";
  });
});