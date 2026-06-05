document.addEventListener("DOMContentLoaded", function () {
  const JUMPSCARE = document.getElementById("JUMPSCARE");

  let i = 0;

  JUMPSCARE.addEventListener("click", function () {
    i++;

    if (i == 1) {
      const img = document.createElement("img");
      img.src = "Grenn_gummy_jumpscare.gif";
      img.alt = "Jumpscare";
      img.style.position = "fixed";
      img.style.top = "0";
      img.style.left = "0";
      img.style.width = "100%";
      img.style.height = "100%";
      img.style.objectFit = "cover";
      img.style.zIndex = "9999";

      document.body.appendChild(img);
      img.onload = function () {
        setTimeout(() => img.remove(), 375);
      };
    } else {
      window.location.href = "index.html";
    }
  });
});
