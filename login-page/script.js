document.addEventListener("DOMContentLoaded", function () {
  setTimeout(function () {
    document.querySelector(".login-window").classList.add("appear");
  }, 1000);
});

document.addEventListener("DOMContentLoaded", function () {
  const loginButton = document.getElementById("login-button");
  const decorativeUp = document.getElementById("decorative-up");

  loginButton.addEventListener("click", function () {

    setTimeout(function(){
      decorativeUp.style.height = "175px";
    }, 500);

    document.querySelector(".login-window").classList.add("disappear");

    setTimeout(function(){
      window.location.href = "../main-page/main-page.html";
    }, 1500);
  });
});


