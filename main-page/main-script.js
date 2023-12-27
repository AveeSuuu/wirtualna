document.addEventListener("DOMContentLoaded", function () {
  document.querySelector(".top").classList.add("appear");
  document.querySelector(".student-container").classList.add("appear");
  
  const containers = document.querySelectorAll(".panel-option");
  containers.forEach(function (container, index) {
    setTimeout(function () {
      container.classList.add("appear");
    }, 100 * index+1);
  });
  /*
  document.querySelector(".grid-container").classList.add("appear");
  */

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
    document.querySelector(".grid-container").classList.add("disappear");

    setTimeout(function () {
      document.querySelector(".top").classList.add("disappear");
      document.querySelector(".student-container").classList.add("disappear");
      document.querySelector(".more-options-container").classList.add("disappear");
    }, 250);

    setTimeout(function () {
      const mainContainer = document.querySelector(".main-container");
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

  // Dodaj styl dynamicznie
  var newStyles = currentStyles + "\n" +
    element.tagName + "::before { opacity: " + opacity + "; }";

  element.setAttribute("style", newStyles);
}