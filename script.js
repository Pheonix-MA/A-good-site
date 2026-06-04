document.addEventListener("DOMContentLoaded", function () {
  // Do Not Click Me Button Logic
  let do_not_click_me = [
    "Why did you click me?",
    "I told you not to click me!",
    "Actually, stop clicking me!",
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

  // Secret Page Logic

  let secretPageElements = [
    "secret-page1",
    "secret-page2",
    "secret-page3",
    "secret-page4",
    "secret-page5",
  ];

  const secretPageButton = document.getElementById(
    secretPageElements[Math.floor(Math.random() * secretPageElements.length)],
  );

  let i = 0;

  secretPageButton.addEventListener("click", function () {
    i++;
    if (i >= 3) {
      window.location.href = "Secret.html";
    }
  });

  // Good Morning/Afternoon/Evening/Night Logic

  const goodElement = document.getElementById("Good");
  const currentHour = new Date().getHours();

  if (currentHour >= 7 && currentHour < 12) {
    goodElement.textContent = "Good Morning!";
  } else if (currentHour >= 12 && currentHour < 18) {
    goodElement.textContent = "Good Afternoon!";
  } else if (currentHour >= 18 && currentHour < 22) {
    goodElement.textContent = "Good Evening!";
  } else {
    goodElement.textContent = "Good Night!";
  }

  // Navigation Bar Logic

  const navLinks = document.querySelectorAll(".NavBarHome");
  const burger = document.getElementById("burger");

  burger.addEventListener("click", function () {});
});
