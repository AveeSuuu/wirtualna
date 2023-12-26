document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("top1").classList.add("appear");
  document.getElementById("bottom1").classList.add("appear");
});

document.addEventListener("DOMContentLoaded", function () {
  const returnHref = document.getElementById("return-to-login");

  returnHref.addEventListener("click", function () {
    document.querySelector(".login-window2").classList.add("disappear");

    setTimeout(function () {
      window.location.href = "../login-page/index.html";
    }, 550);
  });
});