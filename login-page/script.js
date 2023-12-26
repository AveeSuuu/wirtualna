document.addEventListener("DOMContentLoaded", function () {
  setTimeout(function () {
    document.querySelector(".login-window").classList.add("appear");
  }, 500);
});

document.addEventListener("DOMContentLoaded", function () {
  const loginButton = document.getElementById("login-button");
  const decorativeUp = document.getElementById("decorative-up");

  loginButton.addEventListener("click", function () {

    setTimeout(function () {
      decorativeUp.style.height = "175px";
    }, 500);

    document.querySelector(".login-window").classList.add("disappear");
    document.querySelector(".middle-container").classList.add("disappear");

    setTimeout(function () {
      window.location.href = "../main-page/main-page.html";
    }, 1250);
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const resetPasswordHref = document.getElementById("href-password-reset");

  resetPasswordHref.addEventListener("click", function () {

    document.getElementById("top").classList.add("disappear");
    document.getElementById("bottom").classList.add("disappear");

    setTimeout(function () {
      window.location.href = "../pswd-reset/pswd-reset.html";
    }, 550);
  });
});


