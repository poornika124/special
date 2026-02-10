let current = 0;
const pages = document.querySelectorAll(".page");
const progress = document.getElementById("progress");

function nextPage() {
  pages[current].classList.remove("active");
  current++;
  if (current < pages.length) {
    pages[current].classList.add("active");
    progress.style.width = (current / (pages.length - 1)) * 100 + "%";
  }
}
