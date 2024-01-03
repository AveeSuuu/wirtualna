document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("pswd-sent-top").classList.add("appear");
  document.getElementById("pswd-sent-bottom").classList.add("appear");
});

document.addEventListener("DOMContentLoaded", function () {
  const returnHref = document.getElementById("return-to-login");

  returnHref.addEventListener("click", function () {
    document.getElementById("pswd-sent-window").classList.add("disappear");

    setTimeout(function () {
      window.location.href = "../login-page/index.html";
    }, 550);
  });
});