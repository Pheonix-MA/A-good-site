document.addEventListener("DOMContentLoaded", function () {
  const JUMPSCARE = document.getElementById("JUMPSCARE");

  let i = 0;
  let img;

  JUMPSCARE.addEventListener("click", function () {
    i++;

    if (i == 1) {
      const img = document.createElement("img");
      img.src =
        "https://upload.wikimedia.org/wikipedia/commons/5/5c/Grenn_gummy_jumpscare.gif";
      img.alt = "Jumpscare";
      img.style.position = "fixed";
      img.style.top = "0";
      img.style.left = "0";
      img.style.width = "100%";
      img.style.height = "100%";
      img.style.objectFit = "cover";

      document.body.appendChild(img);
      setTimeout(function () {
        document.body.removeChild(img);
      }, 1500);
    } else {
      window.location.href = "index.html";
    }
  });
});
