const toggleBtn = document.querySelector(".toggle-button");

const bodyEl = document.querySelector("body");

toggleBtn.checked = JSON.parse(localStorage.getItem("mode"));

updateBody();

function updateBody() {
  if (toggleBtn.checked) {
    bodyEl.style.background = "#292222";
  } else {
    bodyEl.style.background = "#FFFFFF";
  }
}

toggleBtn.addEventListener("input", () => {
  updateBody();
  updateLocalStorage();
});

function updateLocalStorage() {
  localStorage.setItem("mode", JSON.stringify(toggleBtn.checked));
}