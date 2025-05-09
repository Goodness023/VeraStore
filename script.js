const barEl = document.getElementById("bar");
const closeEl = document.getElementById("close");
const navEl = document.getElementById("navbar");

if (barEl) {
  barEl.addEventListener("click", () => {
    navEl.classList.add("active");
  });
}

if (closeEl) {
  closeEl.addEventListener("click", () => {
    navEl.classList.remove("active");
  });
}
