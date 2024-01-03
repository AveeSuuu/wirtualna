document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("top").classList.add("appear");
  document.getElementById("student-container").classList.add("appear");

  const containers = document.querySelectorAll(".panel-option");
  containers.forEach(function (container, index) {
    setTimeout(function () {
      container.classList.add("appear");
    }, 100 * index + 1);
  });

  const studentBoxItems = document.querySelectorAll(".box-animation");
  setTimeout(function () {
    studentBoxItems.forEach(function (item, index) {
      setTimeout(function () {
        item.classList.add("appear");
      }, 0);
    })
  }, 1000);

  const moreOptions = document.querySelectorAll(".option");

  moreOptions.forEach(function (option, index) {
    setTimeout(function () {
      option.classList.add("appear");
    }, index * 200);
  });
});

document.addEventListener("DOMContentLoaded", function () {

  const logOutButton = document.getElementById("log-out-button");
  logOutButton.addEventListener("click", function () {
    document.getElementById("grid-container").classList.add("disappear");

    setTimeout(function () {
      document.getElementById("top").classList.add("disappear");
      document.getElementById("student-container").classList.add("disappear");
      document.getElementById("more-options-container").classList.add("disappear");
    }, 250);

    setTimeout(function () {
      const mainContainer = document.getElementById("main-container");
      mainContainer.classList.add("show-background");
      updateBackgroundOpacity(mainContainer, 1);
      document.getElementById("decorative-up").style.height = "60px";
    }, 750);

    setTimeout(function () {
      window.location.href = "../login-page/index.html";
    }, 1200);
  });
});

function updateBackgroundOpacity(element, opacity) {
  var style = getComputedStyle(element);
  var currentStyles = style.cssText;

  var newStyles = currentStyles + "\n" +
    element.tagName + "::before { opacity: " + opacity + "; }";

  element.setAttribute("style", newStyles);
}