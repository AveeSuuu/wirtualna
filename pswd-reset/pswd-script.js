document.addEventListener("DOMContentLoaded", function () {
  setTimeout(function () {
    document.getElementById("top").classList.add("appear");
    document.getElementById("bottom").classList.add("appear");
  }, 500);
});

document.addEventListener("DOMContentLoaded", function () {
  const returnButton = document.getElementById("return-option");

  returnButton.addEventListener("click", function () {

    document.getElementById("pswd-reset-window").classList.add("disappear");

    setTimeout(function () {
      window.location.href = "../login-page/index.html";
    }, 550);
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const sendButton = document.getElementById("send-button");

  sendButton.addEventListener("click", function () {
    document.getElementById("top").classList.add("disappear");
    document.getElementById("bottom").classList.add("disappear");

    const mainWindow = document.getElementById("pswd-reset-window");

    setTimeout(function () {
      mainWindow.classList.toggle("size-change");
    }, 500);

    setTimeout(function () {
      window.location.href = "../pswd-reset/pswd-sent.html";
    }, 1050);
  });
})


