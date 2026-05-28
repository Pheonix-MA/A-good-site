let do_not_click_me = [
  "Why did you click me?",
  "I told you not to click me!",
  "Seriously, stop clicking me!",
  "Are you sure you want to keep clicking me?",
  "Okay, that's it! I'm done!",
];

let click_count = 0;
const doNotClickButton = document.getElementById("do-not-click-me");

if (doNotClickButton) {
  doNotClickButton.addEventListener("click", function () {
    doNotClickButton.textContent =
      do_not_click_me[Math.min(click_count, do_not_click_me.length - 1)];

    click_count++;

    if (click_count >= do_not_click_me.length) {
      click_count = do_not_click_me.length - 1;
    }
  });
}

const secretPageButton = document.getElementById("secret-page");

let i = 0;

secretPageButton.addEventListener("click", function () {
  i++;
  if (i >= 5) {
    window.location.href = "Secret.html";
  }
});
